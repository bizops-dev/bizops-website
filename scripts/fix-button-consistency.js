#!/usr/bin/env node

/**
 * Fix Button Consistency
 * Ensures all buttons have proper size props
 */

import { readdirSync, readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

const pagesDir = 'pages';
const files = readdirSync(pagesDir).filter(f => f.endsWith('.tsx'));

let totalFixed = 0;
let buttonsFixed = 0;

console.log('🔧 Fixing Button Consistency...\n');

files.forEach(file => {
  const filePath = join(pagesDir, file);
  let content = readFileSync(filePath, 'utf-8');
  let changed = false;
  
  // Fix Button without size prop
  // Add size="md" as default
  const lines = content.split('\n');
  const newLines = lines.map(line => {
    if (line.includes('<Button ') && !line.includes('size=')) {
      buttonsFixed++;
      changed = true;
      return line.replace('<Button ', '<Button size="md" ');
    }
    
    // Fix Button with h-12/h-14/h-16 classes → use size prop instead
    if (line.includes('<Button') && line.match(/h-(12|14|16)/)) {
      const heightMatch = line.match(/h-(12|14|16)/);
      if (heightMatch) {
        const height = heightMatch[1];
        const sizeMap = { '12': 'md', '14': 'lg', '16': 'lg' };
        const size = sizeMap[height];
        
        buttonsFixed++;
        changed = true;
        
        // Remove h-XX class and add/update size prop
        let newLine = line.replace(/h-(12|14|16)\s*/g, '');
        
        if (newLine.includes('size=')) {
          // Update existing size
          newLine = newLine.replace(/size="[^"]*"/, `size="${size}"`);
        } else {
          // Add size prop
          newLine = newLine.replace('<Button ', `<Button size="${size}" `);
        }
        
        return newLine;
      }
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
console.log(`   Buttons fixed: ${buttonsFixed}`);
console.log(`\n🎉 Total files fixed: ${totalFixed}`);

