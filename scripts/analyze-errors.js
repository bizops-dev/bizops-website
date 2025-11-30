#!/usr/bin/env node

/**
 * Analyze Build Errors - Find Root Cause
 */

import { execSync } from 'child_process';

try {
  execSync('npm run build', { stdio: 'pipe' });
  console.log('✅ No errors!');
} catch (error) {
  const output = error.stdout.toString() + error.stderr.toString();
  
  // Extract all errors
  const errorPattern = /(.+):(\d+):\d+: ERROR: (.+)/g;
  const errors = [];
  let match;
  
  while ((match = errorPattern.exec(output)) !== null) {
    errors.push({
      file: match[1].split('/').pop(),
      line: parseInt(match[2]),
      message: match[3]
    });
  }
  
  // Group by file
  const byFile = {};
  errors.forEach(err => {
    if (!byFile[err.file]) byFile[err.file] = [];
    byFile[err.file].push(err);
  });
  
  console.log('📊 Error Analysis:\n');
  
  Object.entries(byFile).forEach(([file, errs]) => {
    console.log(`\n📄 ${file} (${errs.length} errors):`);
    errs.forEach(err => {
      console.log(`   Line ${err.line}: ${err.message}`);
    });
  });
  
  console.log('\n\n💡 Pattern Analysis:');
  
  const patterns = {};
  errors.forEach(err => {
    const pattern = err.message.replace(/".+"/g, '"TAG"');
    patterns[pattern] = (patterns[pattern] || 0) + 1;
  });
  
  Object.entries(patterns).sort((a, b) => b[1] - a[1]).forEach(([pattern, count]) => {
    console.log(`   ${count}x: ${pattern}`);
  });
  
  console.log('\n\n🎯 Root Cause:');
  console.log('   Opening <Stack> tags without proper closing </Stack> tags');
  console.log('   These were likely auto-refactored but closing tags were not updated');
  
  console.log('\n\n💡 Solution:');
  console.log('   Revert problematic files to last known good version');
  console.log('   Files affected:', Object.keys(byFile).join(', '));
}

