#!/usr/bin/env node

/**
 * Cleanup Duplicate Classes
 * Removes duplicate Tailwind classes in className attributes
 */

import { readdirSync, readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

const pagesDir = 'pages';
const files = readdirSync(pagesDir).filter(f => f.endsWith('.tsx'));

let totalFixed = 0;
let totalDuplicates = 0;

console.log('🧹 Cleaning Up Duplicate Classes...\n');

files.forEach(file => {
  const filePath = join(pagesDir, file);
  let content = readFileSync(filePath, 'utf-8');
  let changed = false;
  
  // Find and fix className="..." with duplicates
  content = content.replace(/className="([^"]*)"/g, (match, className) => {
    const classes = className.split(/\s+/).filter(Boolean);
    const unique = [...new Set(classes)];
    
    if (classes.length !== unique.length) {
      totalDuplicates += (classes.length - unique.length);
      changed = true;
      return `className="${unique.join(' ')}"`;
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
console.log(`   Files fixed: ${totalFixed}`);
console.log(`   Duplicates removed: ${totalDuplicates}`);

