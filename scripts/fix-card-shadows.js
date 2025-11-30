#!/usr/bin/env node

/**
 * Fix Card Shadows - More aggressive approach
 * Ensures all Card components have proper shadows
 */

import { readdirSync, readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

const pagesDir = 'pages';
const files = readdirSync(pagesDir).filter(f => f.endsWith('.tsx'));

let totalFixed = 0;

console.log('🎨 Adding Premium Shadows to Cards...\n');

files.forEach(file => {
  const filePath = join(pagesDir, file);
  let content = readFileSync(filePath, 'utf-8');
  let changed = false;
  
  // Pattern 1: <Card with className but no shadow
  const lines = content.split('\n');
  const newLines = lines.map((line, idx) => {
    if (line.includes('<Card') && line.includes('className=')) {
      // Extract className value
      const classMatch = line.match(/className="([^"]*)"/);
      if (classMatch) {
        const className = classMatch[1];
        // Check if shadow is missing
        if (!className.includes('shadow')) {
          changed = true;
          // Add shadow classes
          const newClassName = `${className} shadow-lg hover:shadow-xl transition-shadow duration-300`.trim();
          return line.replace(/className="[^"]*"/, `className="${newClassName}"`);
        }
      }
    }
    return line;
  });
  
  if (changed) {
    content = newLines.join('\n');
    writeFileSync(filePath, content);
    totalFixed++;
    console.log(`✅ Fixed: ${file}`);
  }
});

console.log(`\n🎉 Total files fixed: ${totalFixed}`);

