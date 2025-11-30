#!/usr/bin/env node

/**
 * Automated Refactoring Script V2
 * Refactors all pages to use new components (with proper closing tags)
 * 
 * Usage: node scripts/auto-refactor-v2.js
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  cyan: '\x1b[36m',
};

/**
 * Add imports to file if not present
 */
function addImports(content) {
  const imports = [
    "import Typography from '../components/Typography';",
    "import Container from '../components/Container';",
    "import Grid from '../components/Grid';",
    "import Stack from '../components/Stack';",
  ];

  let newContent = content;
  let hasChanges = false;

  imports.forEach(importStatement => {
    const importMatch = importStatement.match(/import (\w+|\{[^}]+\})/);
    if (!importMatch) return;
    
    const importName = importMatch[1].replace(/[{}]/g, '').trim();
    const hasImport = new RegExp(`import.*${importName}.*from`).test(content);
    
    if (!hasImport) {
      const lastImportIndex = content.lastIndexOf("import ");
      if (lastImportIndex !== -1) {
        const nextLineIndex = content.indexOf('\n', lastImportIndex);
        newContent = newContent.slice(0, nextLineIndex + 1) + 
                     importStatement + '\n' + 
                     newContent.slice(nextLineIndex + 1);
        hasChanges = true;
      }
    }
  });

  return { content: newContent, hasChanges };
}

/**
 * Refactor headings to Typography (simple inline only)
 */
function refactorHeadings(content) {
  let newContent = content;
  let changes = 0;

  // Only refactor simple single-line headings
  const headingPattern = /<h([1-6])\s+className="([^"]*)">(.*?)<\/h\1>/g;
  
  newContent = newContent.replace(headingPattern, (match, level, className, text) => {
    // Skip if text contains JSX or is too complex
    if (text.includes('<') || text.includes('{') || text.length > 200) {
      return match;
    }
    
    // Keep only essential classes
    const keepClasses = className.split(' ').filter(c => 
      (c.startsWith('text-') && !c.match(/text-(xs|sm|base|lg|xl|\d)/)) ||
      c.startsWith('m') || c.startsWith('p') ||
      c.includes('max-w')
    ).join(' ');
    
    const classAttr = keepClasses ? ` className="${keepClasses}"` : '';
    changes++;
    return `<Typography variant="h${level}" as="h${level}"${classAttr}>${text}</Typography>`;
  });

  return { content: newContent, changes };
}

/**
 * Refactor file
 */
function refactorFile(filePath) {
  console.log(`${colors.cyan}Processing: ${path.basename(filePath)}${colors.reset}`);
  
  let content = fs.readFileSync(filePath, 'utf-8');
  let totalChanges = 0;

  // 1. Add imports
  const { content: contentWithImports, hasChanges: importsAdded } = addImports(content);
  content = contentWithImports;
  if (importsAdded) {
    console.log(`  ${colors.green}✓ Added imports${colors.reset}`);
  }

  // 2. Refactor headings (conservative)
  const { content: contentWithHeadings, changes: headingChanges } = refactorHeadings(content);
  content = contentWithHeadings;
  totalChanges += headingChanges;
  if (headingChanges > 0) {
    console.log(`  ${colors.green}✓ Refactored ${headingChanges} headings${colors.reset}`);
  }

  // Write back to file
  if (totalChanges > 0 || importsAdded) {
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log(`  ${colors.bright}${colors.green}✓ Total changes: ${totalChanges}${colors.reset}\n`);
    return totalChanges;
  } else {
    console.log(`  ${colors.yellow}○ No changes needed${colors.reset}\n`);
    return 0;
  }
}

/**
 * Main function
 */
function main() {
  console.log(`${colors.bright}${colors.blue}🚀 Starting Conservative Refactoring...${colors.reset}\n`);
  console.log(`${colors.yellow}⚠️  This version only refactors simple headings to avoid breaking changes${colors.reset}\n`);

  const pagesDir = path.join(__dirname, '..', 'pages');
  const files = fs.readdirSync(pagesDir)
    .filter(f => f.endsWith('.tsx'))
    .sort();

  console.log(`${colors.cyan}Found ${files.length} pages to refactor${colors.reset}\n`);

  let totalChanges = 0;
  let filesChanged = 0;

  files.forEach((file, index) => {
    const filePath = path.join(pagesDir, file);
    console.log(`${colors.bright}[${index + 1}/${files.length}]${colors.reset}`);
    
    const changes = refactorFile(filePath);
    if (changes > 0) {
      filesChanged++;
      totalChanges += changes;
    }
  });

  console.log(`${colors.bright}${colors.green}✨ Refactoring Complete!${colors.reset}\n`);
  console.log(`${colors.cyan}Files changed: ${filesChanged}/${files.length}${colors.reset}`);
  console.log(`${colors.cyan}Total changes: ${totalChanges}${colors.reset}\n`);
  console.log(`${colors.green}✓ Conservative refactoring completed successfully${colors.reset}`);
  console.log(`${colors.cyan}Run: npm run build${colors.reset}\n`);
}

// Run
main();

