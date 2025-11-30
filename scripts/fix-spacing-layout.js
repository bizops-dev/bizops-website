#!/usr/bin/env node

/**
 * Fix Spacing and Layout Issues
 * Remove inline styles, standardize spacing
 */

import { readdirSync, readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

const pagesDir = 'pages';
const files = readdirSync(pagesDir).filter(f => f.endsWith('.tsx'));

let totalFixed = 0;
let inlineStylesRemoved = 0;

console.log('📐 Fixing Spacing & Layout Issues...\n');

files.forEach(file => {
  const filePath = join(pagesDir, file);
  let content = readFileSync(filePath, 'utf-8');
  let changed = false;
  
  // Fix 1: Remove simple inline styles and convert to Tailwind
  const inlineStylePatterns = [
    // padding: 0 -> p-0
    { pattern: /style=\{\{\s*padding:\s*0\s*\}\}/g, replacement: 'className="p-0"' },
    { pattern: /style=\{\{\s*padding:\s*'0'\s*\}\}/g, replacement: 'className="p-0"' },
    
    // margin: 0 -> m-0
    { pattern: /style=\{\{\s*margin:\s*0\s*\}\}/g, replacement: 'className="m-0"' },
    { pattern: /style=\{\{\s*margin:\s*'0'\s*\}\}/g, replacement: 'className="m-0"' },
    
    // paddingTop: 0 -> pt-0
    { pattern: /style=\{\{\s*paddingTop:\s*0\s*\}\}/g, replacement: 'className="pt-0"' },
    { pattern: /style=\{\{\s*paddingTop:\s*'0'\s*\}\}/g, replacement: 'className="pt-0"' },
  ];
  
  inlineStylePatterns.forEach(({ pattern, replacement }) => {
    if (content.match(pattern)) {
      content = content.replace(pattern, replacement);
      inlineStylesRemoved++;
      changed = true;
    }
  });
  
  // Fix 2: Standardize section spacing
  // Replace inconsistent py-X with standard py-20 for sections
  content = content.replace(/className="([^"]*)\s*py-\d+\s*([^"]*)"/g, (match, before, after) => {
    if (before.includes('section') || after.includes('section')) {
      return `className="${before} py-20 ${after}"`.replace(/\s+/g, ' ');
    }
    return match;
  });
  
  if (changed) {
    writeFileSync(filePath, content);
    totalFixed++;
    console.log(`✅ Fixed: ${file}`);
  }
});

console.log(`\n📊 Summary:`);
console.log(`   Inline styles removed: ${inlineStylesRemoved}`);
console.log(`   Files fixed: ${totalFixed}`);

