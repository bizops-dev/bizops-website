#!/usr/bin/env node

/**
 * Fix Closing Tags
 * Fixes mismatched closing tags after refactoring
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function fixClosingTags(content) {
  let newContent = content;
  let changes = 0;

  // Track opening tags and their expected closing tags
  const lines = content.split('\n');
  const stack = [];
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    // Find opening Container tags
    if (line.includes('<Container')) {
      stack.push({ tag: 'Container', line: i });
    }
    // Find opening Grid tags
    else if (line.includes('<Grid ')) {
      stack.push({ tag: 'Grid', line: i });
    }
    // Find closing </div> that should be </Container> or </Grid>
    else if (line.includes('</div>') && stack.length > 0) {
      const last = stack[stack.length - 1];
      // Check if this div is likely the closing tag for our component
      const indent = line.match(/^(\s*)/)[1].length;
      const openIndent = lines[last.line].match(/^(\s*)/)[1].length;
      
      if (indent === openIndent) {
        // Replace </div> with proper closing tag
        lines[i] = line.replace('</div>', `</${last.tag}>`);
        stack.pop();
        changes++;
      }
    }
  }

  return { content: lines.join('\n'), changes };
}

// Get files with errors from command line or process all
const args = process.argv.slice(2);
const filesToFix = args.length > 0 ? args : [
  'pages/HomePage.tsx',
  'pages/AboutPage.tsx',
  'pages/StartupProgramPage.tsx',
  'pages/ProductTourPage.tsx',
];

console.log('Fixing closing tags...\n');

filesToFix.forEach(file => {
  const filePath = path.join(__dirname, '..', file);
  if (!fs.existsSync(filePath)) {
    console.log(`Skip: ${file} (not found)`);
    return;
  }
  
  const content = fs.readFileSync(filePath, 'utf-8');
  const { content: fixed, changes } = fixClosingTags(content);
  
  if (changes > 0) {
    fs.writeFileSync(filePath, fixed, 'utf-8');
    console.log(`✓ ${file}: Fixed ${changes} closing tags`);
  } else {
    console.log(`○ ${file}: No fixes needed`);
  }
});

console.log('\nDone!');

