#!/usr/bin/env node

/**
 * Comprehensive Design Audit
 * Identifies structural and style issues that break premium look
 */

import { readdirSync, readFileSync } from 'fs';
import { join } from 'path';

const pagesDir = 'pages';
const files = readdirSync(pagesDir).filter(f => f.endsWith('.tsx'));

const issues = {
  spacing: [],
  layout: [],
  typography: [],
  colors: [],
  shadows: [],
  borders: [],
  responsive: [],
};

console.log('🔍 Auditing Design Issues...\n');

files.forEach(file => {
  const filePath = join(pagesDir, file);
  const content = readFileSync(filePath, 'utf-8');
  const lines = content.split('\n');
  
  lines.forEach((line, idx) => {
    const lineNum = idx + 1;
    
    // Check for inline styles (anti-pattern)
    if (line.includes('style={{') || line.includes('style={')) {
      issues.layout.push(`${file}:${lineNum} - Inline styles detected`);
    }
    
    // Check for inconsistent spacing
    if (line.match(/className="[^"]*\s(p-\d+|m-\d+|gap-\d+)\s/)) {
      // Good - using Tailwind spacing
    } else if (line.includes('padding:') || line.includes('margin:')) {
      issues.spacing.push(`${file}:${lineNum} - Inconsistent spacing (inline CSS)`);
    }
    
    // Check for missing responsive classes
    if (line.includes('className=') && !line.includes('md:') && !line.includes('lg:') && line.includes('grid')) {
      issues.responsive.push(`${file}:${lineNum} - Grid without responsive breakpoints`);
    }
    
    // Check for hardcoded colors (should use design tokens)
    if (line.match(/#[0-9a-fA-F]{3,6}/) && !line.includes('//')) {
      issues.colors.push(`${file}:${lineNum} - Hardcoded hex color`);
    }
    
    // Check for missing shadows on cards
    if (line.includes('<Card') && !line.includes('shadow')) {
      issues.shadows.push(`${file}:${lineNum} - Card without shadow`);
    }
    
    // Check for inconsistent border radius
    if (line.match(/rounded-\[[\d.]+px\]/)) {
      issues.borders.push(`${file}:${lineNum} - Custom border radius (use design tokens)`);
    }
    
    // Check for typography inconsistencies
    if (line.match(/<(h[1-6]|p)\s/) && !line.includes('<Typography')) {
      issues.typography.push(`${file}:${lineNum} - Native HTML tag instead of Typography component`);
    }
  });
});

// Print summary
console.log('📊 Design Issues Summary:\n');

Object.entries(issues).forEach(([category, items]) => {
  if (items.length > 0) {
    console.log(`\n${category.toUpperCase()} (${items.length} issues):`);
    items.slice(0, 10).forEach(issue => console.log(`  ⚠️  ${issue}`));
    if (items.length > 10) {
      console.log(`  ... and ${items.length - 10} more`);
    }
  }
});

const totalIssues = Object.values(issues).reduce((sum, arr) => sum + arr.length, 0);
console.log(`\n\n🎯 Total Issues: ${totalIssues}`);

if (totalIssues === 0) {
  console.log('✅ No design issues found!');
} else {
  console.log('\n💡 Recommendations:');
  console.log('  1. Use Typography component for all text');
  console.log('  2. Use design tokens (Tailwind classes) instead of inline styles');
  console.log('  3. Add responsive breakpoints to all layouts');
  console.log('  4. Use consistent shadows and borders');
  console.log('  5. Avoid hardcoded colors');
}

