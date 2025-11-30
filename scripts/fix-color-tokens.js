#!/usr/bin/env node

/**
 * Fix Hardcoded Colors
 * Replace hex colors with Tailwind design tokens
 */

import { readdirSync, readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

const pagesDir = 'pages';
const files = readdirSync(pagesDir).filter(f => f.endsWith('.tsx'));

// Common color mappings
const colorMap = {
  // Blues
  '#3b82f6': 'blue-500',
  '#2563eb': 'blue-600',
  '#1d4ed8': 'blue-700',
  '#60a5fa': 'blue-400',
  '#93c5fd': 'blue-300',
  
  // Grays/Slate
  '#64748b': 'slate-500',
  '#475569': 'slate-600',
  '#334155': 'slate-700',
  '#1e293b': 'slate-800',
  '#0f172a': 'slate-900',
  '#f8fafc': 'slate-50',
  '#f1f5f9': 'slate-100',
  '#e2e8f0': 'slate-200',
  
  // Greens
  '#10b981': 'emerald-500',
  '#059669': 'emerald-600',
  '#34d399': 'emerald-400',
  
  // Purples
  '#8b5cf6': 'violet-500',
  '#7c3aed': 'violet-600',
  '#a78bfa': 'violet-400',
  
  // Reds
  '#ef4444': 'red-500',
  '#dc2626': 'red-600',
  
  // Oranges
  '#f97316': 'orange-500',
  '#ea580c': 'orange-600',
};

let totalFixed = 0;
let colorsReplaced = 0;

console.log('🎨 Replacing Hardcoded Colors with Design Tokens...\n');

files.forEach(file => {
  const filePath = join(pagesDir, file);
  let content = readFileSync(filePath, 'utf-8');
  let changed = false;
  
  // Replace hex colors in className strings
  Object.entries(colorMap).forEach(([hex, token]) => {
    const hexLower = hex.toLowerCase();
    
    // Pattern: bg-[#hex] or text-[#hex] or border-[#hex]
    const patterns = [
      new RegExp(`(bg|text|border|from|to|via)-\\[${hex}\\]`, 'gi'),
      new RegExp(`(bg|text|border|from|to|via)-\\[${hexLower}\\]`, 'g'),
    ];
    
    patterns.forEach(pattern => {
      if (content.match(pattern)) {
        content = content.replace(pattern, `$1-${token}`);
        colorsReplaced++;
        changed = true;
      }
    });
  });
  
  if (changed) {
    writeFileSync(filePath, content);
    totalFixed++;
    console.log(`✅ Fixed: ${file}`);
  }
});

console.log(`\n📊 Summary:`);
console.log(`   Colors replaced: ${colorsReplaced}`);
console.log(`   Files fixed: ${totalFixed}`);

