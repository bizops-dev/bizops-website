#!/usr/bin/env node

/**
 * Aggressive Color Fix
 * Fixes all remaining color conflicts
 */

import { readdirSync, readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

const pagesDir = 'pages';
const files = readdirSync(pagesDir).filter(f => f.endsWith('.tsx'));

let totalFixed = 0;
let totalChanges = 0;

console.log('🔧 Aggressive Color Fix - Starting...\n');

files.forEach(file => {
  const filePath = join(pagesDir, file);
  let content = readFileSync(filePath, 'utf-8');
  let changed = false;
  
  const lines = content.split('\n');
  const newLines = lines.map((line, idx) => {
    let newLine = line;
    
    // Pattern 1: text-white anywhere + bg-white anywhere = problematic
    if (line.includes('text-white') && line.includes('bg-white')) {
      // If it's in same className, fix it
      newLine = newLine.replace(
        /className="([^"]*)"/g,
        (match, className) => {
          if (className.includes('text-white') && className.includes('bg-white')) {
            totalChanges++;
            changed = true;
            // Replace text-white with text-slate-900 dark:text-white
            return match.replace('text-white', 'text-slate-900 dark:text-white');
          }
          return match;
        }
      );
    }
    
    // Pattern 2: text-slate-900 + bg-slate-900
    if (line.includes('text-slate-900') && line.includes('bg-slate-900')) {
      newLine = newLine.replace(
        /className="([^"]*)"/g,
        (match, className) => {
          if (className.includes('text-slate-900') && className.includes('bg-slate-900')) {
            totalChanges++;
            changed = true;
            // Replace text-slate-900 with text-white
            return match.replace(/text-slate-900/g, 'text-white');
          }
          return match;
        }
      );
    }
    
    // Pattern 3: dark:text-white + dark:bg-white
    if (line.includes('dark:text-white') && line.includes('dark:bg-white')) {
      newLine = newLine.replace(
        /className="([^"]*)"/g,
        (match, className) => {
          if (className.includes('dark:text-white') && className.includes('dark:bg-white')) {
            totalChanges++;
            changed = true;
            // Remove dark:text-white, let it inherit or be dark:text-slate-900
            return match.replace('dark:text-white', 'dark:text-slate-900');
          }
          return match;
        }
      );
    }
    
    return newLine;
  });
  
  if (changed) {
    content = newLines.join('\n');
    writeFileSync(filePath, content);
    totalFixed++;
    console.log(`✅ Fixed: ${file} (${totalChanges} changes in this file)`);
  }
});

console.log(`\n🎉 Total files fixed: ${totalFixed}`);
console.log(`📊 Total color conflicts resolved: ${totalChanges}`);

