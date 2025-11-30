#!/usr/bin/env node

/**
 * Fix Stack direction props
 * Change direction="col" to direction="vertical"
 * Change direction="row" to direction="horizontal"
 */

import { readdirSync, readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

const pagesDir = 'pages';
const files = readdirSync(pagesDir).filter(f => f.endsWith('.tsx'));

let totalFixed = 0;

files.forEach(file => {
  const filePath = join(pagesDir, file);
  let content = readFileSync(filePath, 'utf-8');
  let changed = false;
  
  // Fix direction="col"
  if (content.includes('direction="col"')) {
    content = content.replace(/direction="col"/g, 'direction="vertical"');
    changed = true;
  }
  
  // Fix direction="row"
  if (content.includes('direction="row"')) {
    content = content.replace(/direction="row"/g, 'direction="horizontal"');
    changed = true;
  }
  
  if (changed) {
    writeFileSync(filePath, content);
    totalFixed++;
    console.log(`✅ Fixed: ${file}`);
  }
});

console.log(`\n🎉 Total files fixed: ${totalFixed}`);

