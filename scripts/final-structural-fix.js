#!/usr/bin/env node

/**
 * Final Structural Fix
 * Fixes remaining structural and layout issues
 */

import { readdirSync, readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

const pagesDir = 'pages';
const files = readdirSync(pagesDir).filter(f => f.endsWith('.tsx'));

let totalFixed = 0;
const fixes = {
  containers: 0,
  grids: 0,
  spacing: 0,
  flexbox: 0,
};

console.log('🏗️  Final Structural Fix - Starting...\n');

files.forEach(file => {
  const filePath = join(pagesDir, file);
  let content = readFileSync(filePath, 'utf-8');
  let changed = false;
  
  // Fix 1: Add gap to flex containers without gap
  content = content.replace(
    /className="([^"]*flex[^"]*)"(?![^>]*gap-)/g,
    (match, className) => {
      if (!className.includes('gap-')) {
        fixes.flexbox++;
        changed = true;
        return `className="${className} gap-4"`;
      }
      return match;
    }
  );
  
  // Fix 2: Ensure grids have proper gap
  content = content.replace(
    /className="([^"]*grid[^"]*)"(?![^>]*gap-)/g,
    (match, className) => {
      if (!className.includes('gap-')) {
        fixes.grids++;
        changed = true;
        return `className="${className} gap-6"`;
      }
      return match;
    }
  );
  
  // Fix 3: Add responsive padding to containers
  const lines = content.split('\n');
  const newLines = lines.map(line => {
    // Check for Container component without responsive padding
    if (line.includes('<Container') && !line.includes('className')) {
      fixes.containers++;
      changed = true;
      return line.replace('<Container', '<Container className="px-4 md:px-6 lg:px-8"');
    }
    return line;
  });
  content = newLines.join('\n');
  
  if (changed) {
    writeFileSync(filePath, content);
    totalFixed++;
    console.log(`✅ Fixed: ${file}`);
  }
});

console.log(`\n📊 Summary:`);
console.log(`   Flexbox gaps added: ${fixes.flexbox}`);
console.log(`   Grid gaps added: ${fixes.grids}`);
console.log(`   Container padding added: ${fixes.containers}`);
console.log(`\n🎉 Total files fixed: ${totalFixed}`);

