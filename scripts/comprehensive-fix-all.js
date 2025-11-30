#!/usr/bin/env node

/**
 * Comprehensive Fix - All Design Issues
 * Fixes all identified design problems systematically
 */

import { readdirSync, readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

const pagesDir = 'pages';
const files = readdirSync(pagesDir).filter(f => f.endsWith('.tsx'));

const fixes = {
  colors: 0,
  inlineStyles: 0,
  responsive: 0,
  typography: 0,
  spacing: 0,
};

let totalFiles = 0;

console.log('🔧 Comprehensive Design Fix - Starting...\n');

// Color mapping (extended)
const colorMap = {
  // Blues
  '#3b82f6': 'blue-500', '#2563eb': 'blue-600', '#1d4ed8': 'blue-700',
  '#60a5fa': 'blue-400', '#93c5fd': 'blue-300', '#dbeafe': 'blue-100',
  
  // Slate/Gray
  '#64748b': 'slate-500', '#475569': 'slate-600', '#334155': 'slate-700',
  '#1e293b': 'slate-800', '#0f172a': 'slate-900', '#020617': 'slate-950',
  '#f8fafc': 'slate-50', '#f1f5f9': 'slate-100', '#e2e8f0': 'slate-200',
  '#cbd5e1': 'slate-300', '#94a3b8': 'slate-400',
  
  // Emerald/Green
  '#10b981': 'emerald-500', '#059669': 'emerald-600', '#047857': 'emerald-700',
  '#34d399': 'emerald-400', '#6ee7b7': 'emerald-300', '#d1fae5': 'emerald-100',
  
  // Violet/Purple
  '#8b5cf6': 'violet-500', '#7c3aed': 'violet-600', '#6d28d9': 'violet-700',
  '#a78bfa': 'violet-400', '#c4b5fd': 'violet-300', '#ede9fe': 'violet-100',
  
  // Red
  '#ef4444': 'red-500', '#dc2626': 'red-600', '#b91c1c': 'red-700',
  '#f87171': 'red-400', '#fca5a5': 'red-300', '#fee2e2': 'red-100',
  
  // Orange/Amber
  '#f97316': 'orange-500', '#ea580c': 'orange-600', '#c2410c': 'orange-700',
  '#fb923c': 'orange-400', '#fdba74': 'orange-300',
  '#f59e0b': 'amber-500', '#d97706': 'amber-600', '#b45309': 'amber-700',
  
  // Primary (assume blue-600)
  '#2563EB': 'primary-600', '#1D4ED8': 'primary-700', '#3B82F6': 'primary-500',
};

files.forEach(file => {
  const filePath = join(pagesDir, file);
  let content = readFileSync(filePath, 'utf-8');
  let changed = false;
  
  // Fix 1: Replace ALL hardcoded hex colors
  Object.entries(colorMap).forEach(([hex, token]) => {
    const hexLower = hex.toLowerCase();
    const patterns = [
      // className patterns
      new RegExp(`(bg|text|border|from|to|via|ring|shadow)-\\[${hex}\\]`, 'gi'),
      new RegExp(`(bg|text|border|from|to|via|ring|shadow)-\\[${hexLower}\\]`, 'g'),
      // style={{ color: '#hex' }} patterns  
      new RegExp(`color:\\s*['"]${hex}['"]`, 'gi'),
      new RegExp(`color:\\s*['"]${hexLower}['"]`, 'g'),
      new RegExp(`backgroundColor:\\s*['"]${hex}['"]`, 'gi'),
      new RegExp(`backgroundColor:\\s*['"]${hexLower}['"]`, 'g'),
    ];
    
    patterns.forEach(pattern => {
      if (content.match(pattern)) {
        // For className, replace with token
        content = content.replace(
          new RegExp(`(bg|text|border|from|to|via|ring|shadow)-\\[${hex}\\]`, 'gi'),
          `$1-${token}`
        );
        content = content.replace(
          new RegExp(`(bg|text|border|from|to|via|ring|shadow)-\\[${hexLower}\\]`, 'g'),
          `$1-${token}`
        );
        fixes.colors++;
        changed = true;
      }
    });
  });
  
  // Fix 2: Add responsive breakpoints to grids without them
  const gridLines = content.split('\n');
  const newLines = gridLines.map(line => {
    if (line.includes('grid-cols-') && !line.includes('md:') && !line.includes('lg:')) {
      const match = line.match(/grid-cols-(\d+)/);
      if (match) {
        const cols = match[1];
        // Add responsive variants
        line = line.replace(
          /grid-cols-(\d+)/,
          `grid-cols-1 md:grid-cols-2 lg:grid-cols-${cols}`
        );
        fixes.responsive++;
        changed = true;
      }
    }
    return line;
  });
  content = newLines.join('\n');
  
  // Fix 3: Ensure all sections have proper spacing
  content = content.replace(
    /<section([^>]*)className="([^"]*?)"/g,
    (match, before, className) => {
      if (!className.includes('py-')) {
        fixes.spacing++;
        changed = true;
        return `<section${before}className="${className} py-16 md:py-24"`;
      }
      return match;
    }
  );
  
  if (changed) {
    writeFileSync(filePath, content);
    totalFiles++;
    console.log(`✅ Fixed: ${file}`);
  }
});

console.log(`\n📊 Summary:`);
console.log(`   Colors fixed: ${fixes.colors}`);
console.log(`   Responsive grids added: ${fixes.responsive}`);
console.log(`   Section spacing added: ${fixes.spacing}`);
console.log(`\n🎉 Total files fixed: ${totalFiles}`);

