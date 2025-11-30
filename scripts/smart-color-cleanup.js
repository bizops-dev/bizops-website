#!/usr/bin/env node

/**
 * Smart Color Cleanup
 * Removes contradictory dark mode classes
 */

import { readdirSync, readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

const pagesDir = 'pages';
const files = readdirSync(pagesDir).filter(f => f.endsWith('.tsx'));

let totalFixed = 0;
let totalChanges = 0;

console.log('🧠 Smart Color Cleanup - Starting...\n');

files.forEach(file => {
  const filePath = join(pagesDir, file);
  let content = readFileSync(filePath, 'utf-8');
  let changed = false;
  
  // Fix className attributes with contradictory dark mode
  content = content.replace(/className="([^"]*)"/g, (match, className) => {
    const classes = className.split(/\s+/).filter(Boolean);
    let newClasses = [];
    let hasChange = false;
    
    // Remove dark:text-slate-900 if followed by dark:text-white
    for (let i = 0; i < classes.length; i++) {
      const curr = classes[i];
      const next = classes[i + 1];
      
      // Pattern: text-slate-900 dark:text-slate-900 dark:text-white
      // Keep only: text-slate-900 dark:text-white
      if (curr === 'dark:text-slate-900' && next && next.startsWith('dark:text-')) {
        hasChange = true;
        totalChanges++;
        continue; // Skip this class
      }
      
      // Pattern: dark:text-white dark:text-white (already in unique, but double check)
      if (newClasses.includes(curr)) {
        hasChange = true;
        totalChanges++;
        continue; // Skip duplicate
      }
      
      newClasses.push(curr);
    }
    
    if (hasChange) {
      changed = true;
      return `className="${newClasses.join(' ')}"`;
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
console.log(`   Contradictory classes removed: ${totalChanges}`);

