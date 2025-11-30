#!/usr/bin/env node

/**
 * Deep Visual Audit
 * Identifies specific color, structure, and layout issues
 */

import { readdirSync, readFileSync } from 'fs';
import { join } from 'path';

const pagesDir = 'pages';
const files = readdirSync(pagesDir).filter(f => f.endsWith('.tsx'));

const issues = {
  conflictingColors: [],
  poorContrast: [],
  inconsistentGradients: [],
  wrongDarkMode: [],
  structuralIssues: [],
  layoutProblems: [],
};

console.log('🔍 Deep Visual Audit - Analyzing...\n');

files.forEach(file => {
  const filePath = join(pagesDir, file);
  const content = readFileSync(filePath, 'utf-8');
  const lines = content.split('\n');
  
  lines.forEach((line, idx) => {
    const lineNum = idx + 1;
    
    // Check for conflicting color combinations
    if (line.includes('text-white') && line.includes('bg-white')) {
      issues.conflictingColors.push(`${file}:${lineNum} - White text on white background`);
    }
    if (line.includes('text-slate-900') && line.includes('bg-slate-900')) {
      issues.conflictingColors.push(`${file}:${lineNum} - Dark text on dark background`);
    }
    
    // Check for gradients without proper stops
    if (line.match(/bg-gradient-to-/) && !line.includes('from-') && !line.includes('to-')) {
      issues.inconsistentGradients.push(`${file}:${lineNum} - Gradient without from/to colors`);
    }
    
    // Check for dark mode issues
    if (line.includes('dark:text-white') && line.includes('dark:bg-white')) {
      issues.wrongDarkMode.push(`${file}:${lineNum} - Dark mode white text on white bg`);
    }
    if (line.includes('text-slate-900') && !line.includes('dark:text-')) {
      issues.wrongDarkMode.push(`${file}:${lineNum} - Missing dark mode text color`);
    }
    
    // Check for structural issues
    if (line.match(/<div[^>]*className="[^"]*flex[^"]*"[^>]*>\s*<div[^>]*className="[^"]*flex[^"]*"/)) {
      issues.structuralIssues.push(`${file}:${lineNum} - Nested flex containers (potential issue)`);
    }
    
    // Check for layout problems
    if (line.includes('w-full') && line.includes('max-w-') && line.includes('mx-auto') && !line.includes('Container')) {
      issues.layoutProblems.push(`${file}:${lineNum} - Manual container pattern (use Container component)`);
    }
  });
});

// Print detailed report
console.log('🎨 VISUAL ISSUES FOUND:\n');

Object.entries(issues).forEach(([category, items]) => {
  if (items.length > 0) {
    console.log(`\n${category.toUpperCase().replace(/([A-Z])/g, ' $1').trim()} (${items.length}):`);
    items.slice(0, 15).forEach(issue => console.log(`  🔴 ${issue}`));
    if (items.length > 15) {
      console.log(`  ... and ${items.length - 15} more`);
    }
  }
});

const totalIssues = Object.values(issues).reduce((sum, arr) => sum + arr.length, 0);
console.log(`\n\n🎯 Total Visual Issues: ${totalIssues}\n`);

if (totalIssues > 0) {
  console.log('💡 Critical Issues to Fix:');
  console.log('  1. Conflicting color combinations');
  console.log('  2. Missing dark mode variants');
  console.log('  3. Incomplete gradients');
  console.log('  4. Layout structure problems');
}

