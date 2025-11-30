#!/usr/bin/env node

/**
 * DEEP Visual Audit - Granular Check
 * Checks spacing, colors, typography in detail
 */

import { readdirSync, readFileSync } from 'fs';
import { join } from 'path';

const pagesDir = 'pages';
const files = readdirSync(pagesDir).filter(f => f.endsWith('.tsx'));

const issues = {
  spacing: [],
  colors: [],
  typography: [],
  buttons: [],
  inconsistent: [],
};

console.log('🔍 DEEP VISUAL AUDIT - Starting...\n');

files.forEach(file => {
  const filePath = join(pagesDir, file);
  const content = readFileSync(filePath, 'utf-8');
  const lines = content.split('\n');
  
  lines.forEach((line, idx) => {
    const lineNum = idx + 1;
    
    // 1. CHECK SPACING ISSUES
    
    // Missing gap in flex/grid
    if ((line.includes('flex ') || line.includes('flex-')) && !line.includes('gap-')) {
      issues.spacing.push(`${file}:${lineNum} - flex without gap`);
    }
    if (line.includes('grid grid-cols') && !line.includes('gap-')) {
      issues.spacing.push(`${file}:${lineNum} - grid without gap`);
    }
    
    // Inconsistent section padding
    if (line.includes('<section') || line.includes('<Section')) {
      if (!line.includes('py-') && !line.includes('padding')) {
        issues.spacing.push(`${file}:${lineNum} - section without py padding`);
      }
    }
    
    // 2. CHECK COLOR/CONTRAST ISSUES
    
    // Text without dark mode variant
    if (line.match(/text-(slate|gray|zinc|neutral|stone)-\d00/) && !line.includes('dark:text-')) {
      issues.colors.push(`${file}:${lineNum} - missing dark mode text color`);
    }
    
    // Hardcoded opacity values
    if (line.match(/opacity-\d+/) && !line.includes('group-hover')) {
      issues.colors.push(`${file}:${lineNum} - hardcoded opacity (consider using color/opacity tokens)`);
    }
    
    // 3. CHECK TYPOGRAPHY ISSUES
    
    // Inconsistent heading sizes
    if (line.includes('<h1') && !line.includes('text-')) {
      issues.typography.push(`${file}:${lineNum} - h1 without text size`);
    }
    if (line.includes('<h2') && !line.includes('text-')) {
      issues.typography.push(`${file}:${lineNum} - h2 without text size`);
    }
    
    // Line height not set
    if (line.includes('text-4xl') && !line.includes('leading-')) {
      issues.typography.push(`${file}:${lineNum} - large text without leading (line-height)`);
    }
    
    // 4. CHECK BUTTON CONSISTENCY
    
    // Button without proper size
    if (line.includes('<Button') && !line.includes('size=')) {
      issues.buttons.push(`${file}:${lineNum} - Button without size prop`);
    }
    
    // Inconsistent button heights
    if (line.includes('h-12') && line.includes('Button')) {
      // Should use size prop instead
      issues.buttons.push(`${file}:${lineNum} - Button using h-12 (use size="md" instead)`);
    }
    
    // 5. CHECK GENERAL INCONSISTENCIES
    
    // Mixed spacing units (mb-4 and mt-8 should be consistent)
    const spacingMatch = line.match(/(m[tblrxy]?|p[tblrxy]?)-(\d+)/g);
    if (spacingMatch && spacingMatch.length > 1) {
      const values = spacingMatch.map(m => parseInt(m.split('-')[1]));
      const unique = [...new Set(values)];
      if (unique.length > 2) {
        issues.inconsistent.push(`${file}:${lineNum} - inconsistent spacing values: ${spacingMatch.join(', ')}`);
      }
    }
  });
});

// PRINT RESULTS
console.log('📊 DEEP AUDIT RESULTS:\n');

let totalIssues = 0;

Object.entries(issues).forEach(([category, items]) => {
  if (items.length > 0) {
    console.log(`\n${category.toUpperCase()} (${items.length} issues):`);
    items.slice(0, 20).forEach(issue => console.log(`  ⚠️  ${issue}`));
    if (items.length > 20) {
      console.log(`  ... and ${items.length - 20} more`);
    }
    totalIssues += items.length;
  }
});

console.log(`\n\n🎯 Total Issues Found: ${totalIssues}\n`);

if (totalIssues > 0) {
  console.log('💡 Recommendations:');
  console.log('  1. Add gap to all flex/grid containers');
  console.log('  2. Add dark mode variants to all text colors');
  console.log('  3. Add line-height to large text');
  console.log('  4. Use Button size prop instead of h- classes');
  console.log('  5. Standardize spacing values');
}

process.exit(totalIssues > 0 ? 1 : 0);
