#!/usr/bin/env node

/**
 * Phase 3 Refactoring - Final Safe Patterns
 * Focus on: Remaining headings with complex content, list items
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const colors = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  cyan: '\x1b[36m',
};

function refactorFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');
  let changes = {
    headings: 0,
    labels: 0,
  };

  const original = content;

  // 1. Refactor remaining h1-h6 tags (more aggressive patterns)
  // Pattern: <h3 className="...">Text with <span>nested</span> content</h3>
  const headingPatterns = [
    { regex: /<h1\s+className="([^"]*)">((?:(?!<h[1-6]|<\/h[1-6]).)+?)<\/h1>/gs, variant: 'h1', level: 1 },
    { regex: /<h2\s+className="([^"]*)">((?:(?!<h[1-6]|<\/h[1-6]).)+?)<\/h2>/gs, variant: 'h2', level: 2 },
    { regex: /<h3\s+className="([^"]*)">((?:(?!<h[1-6]|<\/h[1-6]).)+?)<\/h3>/gs, variant: 'h3', level: 3 },
    { regex: /<h4\s+className="([^"]*)">((?:(?!<h[1-6]|<\/h[1-6]).)+?)<\/h4>/gs, variant: 'h4', level: 4 },
    { regex: /<h5\s+className="([^"]*)">((?:(?!<h[1-6]|<\/h[1-6]).)+?)<\/h5>/gs, variant: 'h5', level: 5 },
    { regex: /<h6\s+className="([^"]*)">((?:(?!<h[1-6]|<\/h[1-6]).)+?)<\/h6>/gs, variant: 'h6', level: 6 },
  ];

  headingPatterns.forEach(({ regex, variant, level }) => {
    const matches = [...content.matchAll(regex)];
    matches.forEach(match => {
      const [fullMatch, className, innerContent] = match;
      
      // Skip if already Typography or too complex
      if (innerContent.includes('<Typography') || innerContent.includes('${')) {
        return;
      }
      
      // Skip if content is too long (likely complex)
      if (innerContent.length > 300) {
        return;
      }
      
      // Keep only color/weight classes, remove size classes
      const classes = className.split(' ').filter(c => 
        c.includes('text-slate') || 
        c.includes('text-white') ||
        c.includes('text-primary') ||
        c.includes('dark:text') ||
        c.includes('font-') ||
        c.includes('leading-') ||
        c.includes('tracking-')
      );
      
      const classAttr = classes.length > 0 ? ` className="${classes.join(' ')}"` : '';
      
      const replacement = `<Typography variant="${variant}" as="h${level}"${classAttr}>${innerContent.trim()}</Typography>`;
      
      content = content.replace(fullMatch, replacement);
      changes.headings++;
    });
  });

  // 2. Refactor label tags to Typography caption
  const labelPattern = /<label\s+className="([^"]*)">\s*([^<{}\n]{5,100}?)\s*<\/label>/g;
  const labelMatches = content.match(labelPattern);
  if (labelMatches) {
    content = content.replace(labelPattern, (match, className, text) => {
      // Skip if has htmlFor (form labels)
      if (match.includes('htmlFor')) {
        return match;
      }
      
      // Skip if text contains special chars
      if (text.includes('${') || text.includes('`')) {
        return match;
      }
      
      changes.labels++;
      return `<Typography variant="caption" className="${className}">${text.trim()}</Typography>`;
    });
  }

  // Add Typography import if needed
  const needsTypography = content.includes('<Typography') && !original.includes('<Typography');

  if (needsTypography && !content.includes("import Typography from '../components/Typography'")) {
    const lastImportMatch = content.match(/\nimport [^;]+;(?=\n(?!import))/);
    if (lastImportMatch) {
      const insertPos = lastImportMatch.index + lastImportMatch[0].length;
      content = content.slice(0, insertPos) + 
                "\nimport Typography from '../components/Typography';" +
                content.slice(insertPos);
    }
  }

  const totalChanges = changes.headings + changes.labels;
  
  if (totalChanges > 0) {
    fs.writeFileSync(filePath, content, 'utf-8');
  }

  return { changes, totalChanges };
}

// Main
const pagesDir = path.join(__dirname, '..', 'pages');
const files = fs.readdirSync(pagesDir)
  .filter(f => f.endsWith('.tsx'))
  .sort();

console.log(`${colors.cyan}Phase 3 Refactoring - Final Patterns${colors.reset}\n`);
console.log(`${colors.cyan}Processing ${files.length} pages...${colors.reset}\n`);

let totalChanges = {
  headings: 0,
  labels: 0,
};
let filesChanged = 0;

files.forEach((file, i) => {
  const filePath = path.join(pagesDir, file);
  const { changes, totalChanges: fileTotal } = refactorFile(filePath);
  
  if (fileTotal > 0) {
    console.log(`${colors.green}✓ ${file}${colors.reset}`);
    if (changes.headings > 0) console.log(`  - ${changes.headings} headings`);
    if (changes.labels > 0) console.log(`  - ${changes.labels} labels`);
    
    totalChanges.headings += changes.headings;
    totalChanges.labels += changes.labels;
    filesChanged++;
  } else {
    console.log(`${colors.yellow}○ ${file}${colors.reset}`);
  }
});

const grandTotal = totalChanges.headings + totalChanges.labels;

console.log(`\n${colors.green}✨ Complete!${colors.reset}`);
console.log(`${colors.cyan}Files changed: ${filesChanged}/${files.length}${colors.reset}`);
console.log(`${colors.cyan}Total changes: ${grandTotal}${colors.reset}`);
console.log(`  - Headings: ${totalChanges.headings}`);
console.log(`  - Labels: ${totalChanges.labels}`);

