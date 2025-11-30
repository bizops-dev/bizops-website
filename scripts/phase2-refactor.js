#!/usr/bin/env node

/**
 * Phase 2 Refactoring - Safe Patterns Only
 * Focus on: Typography enhancements, simple wrappers
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
    paragraphs: 0,
    spans: 0,
  };

  const original = content;

  // 1. Refactor simple paragraph tags to Typography
  // Pattern: <p className="text-lg text-slate-600...">Simple Text</p>
  const paragraphPattern = /<p className="(text-(?:lg|xl|sm|base)[^"]*)">\s*([^<{}\n]{10,200}?)\s*<\/p>/g;
  const paragraphMatches = content.match(paragraphPattern);
  if (paragraphMatches) {
    content = content.replace(paragraphPattern, (match, className, text) => {
      // Skip if text contains special chars or is too long
      if (text.includes('${') || text.includes('`') || text.length > 200) {
        return match;
      }
      
      // Determine variant based on className
      let variant = 'body';
      if (className.includes('text-lg')) variant = 'body-lg';
      if (className.includes('text-xl')) variant = 'body-xl';
      if (className.includes('text-sm')) variant = 'caption';
      
      // Keep color classes
      const colorClasses = className.split(' ').filter(c => 
        c.includes('text-slate') || 
        c.includes('text-primary') ||
        c.includes('dark:text')
      ).join(' ');
      
      const classAttr = colorClasses ? ` className="${colorClasses}"` : '';
      
      changes.paragraphs++;
      return `<Typography variant="${variant}"${classAttr}>${text.trim()}</Typography>`;
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

  const totalChanges = changes.paragraphs + changes.spans;
  
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

console.log(`${colors.cyan}Phase 2 Refactoring - Typography Enhancement${colors.reset}\n`);
console.log(`${colors.cyan}Processing ${files.length} pages...${colors.reset}\n`);

let totalChanges = {
  paragraphs: 0,
  spans: 0,
};
let filesChanged = 0;

files.forEach((file, i) => {
  const filePath = path.join(pagesDir, file);
  const { changes, totalChanges: fileTotal } = refactorFile(filePath);
  
  if (fileTotal > 0) {
    console.log(`${colors.green}✓ ${file}${colors.reset}`);
    if (changes.paragraphs > 0) console.log(`  - ${changes.paragraphs} paragraphs`);
    if (changes.spans > 0) console.log(`  - ${changes.spans} spans`);
    
    totalChanges.paragraphs += changes.paragraphs;
    totalChanges.spans += changes.spans;
    filesChanged++;
  } else {
    console.log(`${colors.yellow}○ ${file}${colors.reset}`);
  }
});

const grandTotal = totalChanges.paragraphs + totalChanges.spans;

console.log(`\n${colors.green}✨ Complete!${colors.reset}`);
console.log(`${colors.cyan}Files changed: ${filesChanged}/${files.length}${colors.reset}`);
console.log(`${colors.cyan}Total changes: ${grandTotal}${colors.reset}`);
console.log(`  - Paragraphs: ${totalChanges.paragraphs}`);
console.log(`  - Spans: ${totalChanges.spans}`);

