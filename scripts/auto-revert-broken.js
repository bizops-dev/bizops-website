#!/usr/bin/env node

/**
 * Auto-Revert Broken Files
 * Finds all files with build errors and reverts them to last known good version
 */

import { execSync } from 'child_process';
import { writeFileSync } from 'fs';

const GOOD_COMMIT = '541c66a'; // Last known good version

function getBrokenFiles() {
  try {
    execSync('npm run build', { stdio: 'pipe' });
    return [];
  } catch (error) {
    const output = error.stdout.toString() + error.stderr.toString();
    const errorPattern = /\/([^/]+\.tsx):\d+:\d+: ERROR:/g;
    const files = new Set();
    let match;
    
    while ((match = errorPattern.exec(output)) !== null) {
      files.add(match[1]);
    }
    
    return Array.from(files);
  }
}

console.log('🔍 Finding broken files...\n');

let iteration = 0;
const maxIterations = 100;

while (iteration < maxIterations) {
  const brokenFiles = getBrokenFiles();
  
  if (brokenFiles.length === 0) {
    console.log('\n✅ All files fixed!');
    console.log(`Total iterations: ${iteration}`);
    process.exit(0);
  }
  
  console.log(`\n📋 Iteration ${iteration + 1}: Found ${brokenFiles.length} broken files:`);
  brokenFiles.forEach(file => console.log(`   - ${file}`));
  
  console.log('\n🔄 Reverting to last known good version...');
  
  brokenFiles.forEach(file => {
    try {
      const content = execSync(`git show ${GOOD_COMMIT}:pages/${file}`, { encoding: 'utf-8' });
      writeFileSync(`pages/${file}`, content);
      console.log(`   ✅ Reverted: ${file}`);
    } catch (err) {
      console.log(`   ⚠️  Could not revert: ${file}`);
    }
  });
  
  iteration++;
}

console.log('\n⚠️  Max iterations reached. Some files may still be broken.');
process.exit(1);

