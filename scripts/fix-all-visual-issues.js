#!/usr/bin/env node

/**
 * Fix ALL Visual Issues
 * Fixes conflicting colors, dark mode, gradients, etc.
 */

import { readdirSync, readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

const pagesDir = 'pages';
const files = readdirSync(pagesDir).filter(f => f.endsWith('.tsx'));

let totalFixed = 0;
const fixes = {
  conflictingColors: 0,
  darkMode: 0,
  gradients: 0,
};

console.log('🔧 Fixing ALL Visual Issues...\n');

files.forEach(file => {
  const filePath = join(pagesDir, file);
  let content = readFileSync(filePath, 'utf-8');
  let changed = false;
  
  // Fix 1: White text on white background
  // Replace bg-white text-white with bg-white text-slate-900
  content = content.replace(
    /className="([^"]*)\s*bg-white\s+([^"]*)\s*text-white\s*([^"]*)"/g,
    (match, before, middle, after) => {
      fixes.conflictingColors++;
      changed = true;
      return `className="${before} bg-white ${middle} text-slate-900 dark:text-white ${after}"`;
    }
  );
  
  // Fix 2: Dark text on dark background
  // Replace bg-slate-900 text-slate-900 with bg-slate-900 text-white
  content = content.replace(
    /className="([^"]*)\s*bg-slate-900\s+([^"]*)\s*text-slate-900\s*([^"]*)"/g,
    (match, before, middle, after) => {
      fixes.conflictingColors++;
      changed = true;
      return `className="${before} bg-slate-900 ${middle} text-white ${after}"`;
    }
  );
  
  // Fix 3: Add dark mode for text-slate-900 without dark: variant
  const lines = content.split('\n');
  const newLines = lines.map(line => {
    // Only fix if it has text-slate-900 but no dark:text-
    if (line.includes('text-slate-900') && !line.includes('dark:text-')) {
      fixes.darkMode++;
      changed = true;
      return line.replace(/text-slate-900/g, 'text-slate-900 dark:text-white');
    }
    return line;
  });
  content = newLines.join('\n');
  
  // Fix 4: Incomplete gradients
  content = content.replace(
    /className="([^"]*bg-gradient-to-[rlbt][^"]*)"(?![^>]*from-)/g,
    (match) => {
      if (!match.includes('from-') && !match.includes('to-')) {
        fixes.gradients++;
        changed = true;
        return match.replace(/"$/, ' from-primary-500 to-blue-600"');
      }
      return match;
    }
  );
  
  if (changed) {
    writeFileSync(filePath, content);
    totalFixed++;
    console.log(`✅ Fixed: ${file}`);
  }
});

console.log(`\n📊 Summary:`);
console.log(`   Conflicting colors fixed: ${fixes.conflictingColors}`);
console.log(`   Dark mode added: ${fixes.darkMode}`);
console.log(`   Gradients completed: ${fixes.gradients}`);
console.log(`\n🎉 Total files fixed: ${totalFixed}`);

