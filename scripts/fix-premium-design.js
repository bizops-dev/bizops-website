#!/usr/bin/env node

/**
 * Fix Premium Design Issues
 * Automatically fixes common design anti-patterns
 */

import { readdirSync, readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

const pagesDir = 'pages';
const files = readdirSync(pagesDir).filter(f => f.endsWith('.tsx'));

let totalFixed = 0;
const fixes = {
  shadows: 0,
  responsive: 0,
  borders: 0,
};

console.log('🔧 Fixing Premium Design Issues...\n');

files.forEach(file => {
  const filePath = join(pagesDir, file);
  let content = readFileSync(filePath, 'utf-8');
  let changed = false;
  
  // Fix 1: Add shadows to Cards that don't have them
  // Match <Card ... > without shadow in className
  const cardRegex = /<Card([^>]*?)className="([^"]*?)"([^>]*?)>/g;
  content = content.replace(cardRegex, (match, before, className, after) => {
    if (!className.includes('shadow')) {
      fixes.shadows++;
      changed = true;
      return `<Card${before}className="${className} shadow-lg hover:shadow-xl transition-shadow"${after}>`;
    }
    return match;
  });
  
  // Fix 2: Add responsive breakpoints to grids
  const gridRegex = /className="([^"]*grid[^"]*?)"/g;
  content = content.replace(gridRegex, (match, className) => {
    if (!className.includes('md:') && !className.includes('lg:')) {
      // Only add if it's a simple grid
      if (className.includes('grid-cols-')) {
        fixes.responsive++;
        changed = true;
        // Add responsive variants
        const newClass = className.replace(/grid-cols-(\d+)/, 'grid-cols-1 md:grid-cols-2 lg:grid-cols-$1');
        return `className="${newClass}"`;
      }
    }
    return match;
  });
  
  // Fix 3: Replace custom border radius with design tokens
  content = content.replace(/rounded-\[(\d+)px\]/g, (match, px) => {
    const num = parseInt(px);
    if (num <= 4) return 'rounded';
    if (num <= 8) return 'rounded-lg';
    if (num <= 12) return 'rounded-xl';
    if (num <= 16) return 'rounded-2xl';
    if (num <= 24) return 'rounded-3xl';
    return 'rounded-3xl';
  });
  
  if (content.includes('rounded-[')) {
    fixes.borders++;
    changed = true;
  }
  
  if (changed) {
    writeFileSync(filePath, content);
    totalFixed++;
    console.log(`✅ Fixed: ${file}`);
  }
});

console.log(`\n📊 Summary:`);
console.log(`   Shadows added: ${fixes.shadows}`);
console.log(`   Responsive grids fixed: ${fixes.responsive}`);
console.log(`   Border radius standardized: ${fixes.borders}`);
console.log(`\n🎉 Total files fixed: ${totalFixed}`);

