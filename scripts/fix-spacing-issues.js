#!/usr/bin/env node

/**
 * Fix ALL Spacing Issues
 */

import { readdirSync, readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

const pagesDir = 'pages';
const files = readdirSync(pagesDir).filter(f => f.endsWith('.tsx'));

let totalFixed = 0;
let gapsAdded = 0;
let paddingAdded = 0;

console.log('🔧 Fixing All Spacing Issues...\n');

files.forEach(file => {
  const filePath = join(pagesDir, file);
  let content = readFileSync(filePath, 'utf-8');
  let changed = false;
  
  // Fix flex without gap - more aggressive
  content = content.replace(
    /className="([^"]*)\bflex\b(?!-cols|-row|-col|-wrap|-nowrap|-grow|-shrink|-1|-auto)([^"]*)"/g,
    (match, before, after) => {
      const full = before + 'flex' + after;
      if (!full.includes('gap-')) {
        gapsAdded++;
        changed = true;
        // Insert gap-4 after flex
        return `className="${before}flex gap-4${after}"`;
      }
      return match;
    }
  );
  
  // Fix grid without gap
  content = content.replace(
    /className="([^"]*)\bgrid\b([^"]*)"/g,
    (match, before, after) => {
      const full = before + 'grid' + after;
      if (full.includes('grid-cols') && !full.includes('gap-')) {
        gapsAdded++;
        changed = true;
        return `className="${before}grid gap-6${after}"`;
      }
      return match;
    }
  );
  
  // Fix section without padding
  const lines = content.split('\n');
  const newLines = lines.map(line => {
    if ((line.includes('<section') || line.includes('<Section')) && 
        !line.includes('py-') && 
        !line.includes('padding-y') &&
        line.includes('className=')) {
      paddingAdded++;
      changed = true;
      return line.replace(/className="([^"]*)"/, 'className="$1 py-16 md:py-24"');
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
console.log(`   Gaps added: ${gapsAdded}`);
console.log(`   Section padding added: ${paddingAdded}`);
console.log(`\n🎉 Total files fixed: ${totalFixed}`);

