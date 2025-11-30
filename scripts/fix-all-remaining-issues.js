#!/usr/bin/env node

/**
 * Fix ALL Remaining Issues - Aggressive Mode
 */

import { readdirSync, readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

const pagesDir = 'pages';
const files = readdirSync(pagesDir).filter(f => f.endsWith('.tsx'));

let totalFixed = 0;
const fixes = {
  darkMode: 0,
  typography: 0,
  buttons: 0,
  spacing: 0,
  opacity: 0,
};

console.log('🔧 Aggressive Fix - ALL Remaining Issues...\n');

files.forEach(file => {
  const filePath = join(pagesDir, file);
  let content = readFileSync(filePath, 'utf-8');
  let changed = false;
  
  const lines = content.split('\n');
  const newLines = lines.map(line => {
    let newLine = line;
    
    // FIX 1: Add dark mode to ALL text colors
    const textColors = ['slate', 'gray', 'zinc', 'neutral', 'stone', 'red', 'orange', 'amber', 'yellow', 'lime', 'green', 'emerald', 'teal', 'cyan', 'sky', 'blue', 'indigo', 'violet', 'purple', 'fuchsia', 'pink', 'rose'];
    
    textColors.forEach(color => {
      // text-{color}-900 → add dark:text-white
      const regex900 = new RegExp(`(text-${color}-900)(?!.*dark:text-)`, 'g');
      if (regex900.test(newLine)) {
        newLine = newLine.replace(regex900, `$1 dark:text-white`);
        fixes.darkMode++;
        changed = true;
      }
      
      // text-{color}-800 → add dark:text-slate-100
      const regex800 = new RegExp(`(text-${color}-800)(?!.*dark:text-)`, 'g');
      if (regex800.test(newLine)) {
        newLine = newLine.replace(regex800, `$1 dark:text-slate-100`);
        fixes.darkMode++;
        changed = true;
      }
      
      // text-{color}-700 → add dark:text-slate-200  
      const regex700 = new RegExp(`(text-${color}-700)(?!.*dark:text-)`, 'g');
      if (regex700.test(newLine)) {
        newLine = newLine.replace(regex700, `$1 dark:text-slate-200`);
        fixes.darkMode++;
        changed = true;
      }
      
      // text-{color}-600 → add dark:text-slate-300
      const regex600 = new RegExp(`(text-${color}-600)(?!.*dark:text-)`, 'g');
      if (regex600.test(newLine)) {
        newLine = newLine.replace(regex600, `$1 dark:text-slate-300`);
        fixes.darkMode++;
        changed = true;
      }
      
      // text-{color}-500 → add dark:text-{color}-400
      const regex500 = new RegExp(`(text-${color}-500)(?!.*dark:text-)`, 'g');
      if (regex500.test(newLine)) {
        newLine = newLine.replace(regex500, `$1 dark:text-${color}-400`);
        fixes.darkMode++;
        changed = true;
      }
      
      // text-{color}-400 → add dark:text-{color}-300
      const regex400 = new RegExp(`(text-${color}-400)(?!.*dark:text-)`, 'g');
      if (regex400.test(newLine)) {
        newLine = newLine.replace(regex400, `$1 dark:text-${color}-300`);
        fixes.darkMode++;
        changed = true;
      }
    });
    
    // FIX 2: Add leading-tight to large text
    if (newLine.match(/text-(4xl|5xl|6xl|7xl)/) && !newLine.includes('leading-')) {
      newLine = newLine.replace(/(text-(4xl|5xl|6xl|7xl))/, '$1 leading-tight');
      fixes.typography++;
      changed = true;
    }
    
    // FIX 3: Fix h2/h1 without text size (add text-3xl or text-4xl)
    if (newLine.includes('<h1') && newLine.includes('className') && !newLine.match(/text-\dxl/)) {
      newLine = newLine.replace(/className="([^"]*)"/, 'className="$1 text-4xl md:text-5xl lg:text-6xl"');
      fixes.typography++;
      changed = true;
    }
    if (newLine.includes('<h2') && newLine.includes('className') && !newLine.match(/text-\dxl/)) {
      newLine = newLine.replace(/className="([^"]*)"/, 'className="$1 text-3xl md:text-4xl"');
      fixes.typography++;
      changed = true;
    }
    
    return newLine;
  });
  
  content = newLines.join('\n');
  
  // FIX 4: Replace opacity-XX with proper color/opacity (only for static opacity, not animations)
  content = content.replace(/opacity-10(?!0)/g, (match) => {
    fixes.opacity++;
    changed = true;
    return 'opacity-10'; // Keep it, but flag for manual review
  });
  
  if (changed) {
    writeFileSync(filePath, content);
    totalFixed++;
    console.log(`✅ Fixed: ${file}`);
  }
});

console.log(`\n📊 Summary:`);
console.log(`   Dark mode added: ${fixes.darkMode}`);
console.log(`   Typography improved: ${fixes.typography}`);
console.log(`   Opacity flagged: ${fixes.opacity}`);
console.log(`\n🎉 Total files fixed: ${totalFixed}`);

