#!/usr/bin/env node

/**
 * Fix Deep Visual Issues
 * Applies fixes for spacing, colors, typography
 */

import { readdirSync, readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

const pagesDir = 'pages';
const files = readdirSync(pagesDir).filter(f => f.endsWith('.tsx'));

let totalFixed = 0;
const fixes = {
  spacing: 0,
  darkMode: 0,
  typography: 0,
  buttons: 0,
};

console.log('🔧 Fixing Deep Visual Issues...\n');

files.forEach(file => {
  const filePath = join(pagesDir, file);
  let content = readFileSync(filePath, 'utf-8');
  let changed = false;
  
  // FIX 1: Add gap to flex containers without gap
  const flexWithoutGap = content.match(/className="([^"]*\bflex\b[^"]*)"(?![^>]*gap-)/g);
  if (flexWithoutGap) {
    content = content.replace(
      /className="([^"]*\bflex\b(?!-)[^"]*)"(?![^>]*gap-)/g,
      (match, className) => {
        if (!className.includes('gap-')) {
          fixes.spacing++;
          changed = true;
          return `className="${className} gap-4"`;
        }
        return match;
      }
    );
  }
  
  // FIX 2: Add gap to grid containers without gap
  content = content.replace(
    /className="([^"]*\bgrid\b[^"]*grid-cols[^"]*)"(?![^>]*gap-)/g,
    (match, className) => {
      if (!className.includes('gap-')) {
        fixes.spacing++;
        changed = true;
        return `className="${className} gap-6"`;
      }
      return match;
    }
  );
  
  // FIX 3: Add dark mode to text colors without it
  const lines = content.split('\n');
  const newLines = lines.map(line => {
    // Add dark:text-white to text-slate-900 without dark variant
    if (line.includes('text-slate-900') && !line.includes('dark:text-')) {
      fixes.darkMode++;
      changed = true;
      return line.replace(/text-slate-900/g, 'text-slate-900 dark:text-white');
    }
    
    // Add dark:text-slate-300 to text-slate-600 without dark variant
    if (line.includes('text-slate-600') && !line.includes('dark:text-')) {
      fixes.darkMode++;
      changed = true;
      return line.replace(/text-slate-600/g, 'text-slate-600 dark:text-slate-300');
    }
    
    return line;
  });
  content = newLines.join('\n');
  
  // FIX 4: Add leading to large text
  content = content.replace(
    /className="([^"]*text-(4xl|5xl|6xl|7xl)[^"]*)"(?![^>]*leading-)/g,
    (match, className) => {
      if (!className.includes('leading-')) {
        fixes.typography++;
        changed = true;
        return `className="${className} leading-tight"`;
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
console.log(`   Spacing (gaps added): ${fixes.spacing}`);
console.log(`   Dark mode added: ${fixes.darkMode}`);
console.log(`   Typography (leading added): ${fixes.typography}`);
console.log(`\n🎉 Total files fixed: ${totalFixed}`);

