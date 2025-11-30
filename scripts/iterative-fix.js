#!/usr/bin/env node

/**
 * Iterative Fix - Keep fixing until no errors
 */

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function fixClosingTag(filePath, lineNum, expected, found) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const lines = content.split('\n');
  
  // Fix the specific line
  if (lines[lineNum - 1]) {
    const line = lines[lineNum - 1];
    
    // Replace closing tag
    if (line.includes(`</${found}>`)) {
      lines[lineNum - 1] = line.replace(`</${found}>`, `</${expected}>`);
    } else if (line.includes(`</${expected}>`)) {
      lines[lineNum - 1] = line.replace(`</${expected}>`, `</${found}>`);
    }
    
    fs.writeFileSync(filePath, lines.join('\n'), 'utf-8');
    return true;
  }
  
  return false;
}

let iteration = 0;
const maxIterations = 50;

while (iteration < maxIterations) {
  iteration++;
  console.log(`\n🔄 Iteration ${iteration}...`);
  
  try {
    execSync('npm run build', { stdio: 'pipe' });
    console.log('✅ Build successful!');
    break;
  } catch (error) {
    const output = error.stdout.toString() + error.stderr.toString();
    
    // Parse error
    const errorMatch = output.match(/(.+):(\d+):\d+: ERROR: Expected closing "(\w+)" tag to match opening "(\w+)" tag/);
    
    if (errorMatch) {
      const [, filePath, lineNum, expected, found] = errorMatch;
      console.log(`❌ Error at ${filePath}:${lineNum} - Expected </${expected}>, found </${found}>`);
      
      // Fix it
      const fixed = fixClosingTag(filePath, parseInt(lineNum), expected, found);
      
      if (!fixed) {
        console.log('⚠️  Could not auto-fix. Manual intervention needed.');
        break;
      }
      
      console.log(`✓ Fixed`);
    } else {
      console.log('⚠️  Unknown error format');
      console.log(output.slice(0, 500));
      break;
    }
  }
}

if (iteration >= maxIterations) {
  console.log('\n⚠️  Reached max iterations. Some errors may remain.');
} else {
  console.log(`\n🎉 All errors fixed in ${iteration} iterations!`);
}

