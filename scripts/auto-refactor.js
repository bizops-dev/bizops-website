#!/usr/bin/env node

/**
 * Automated Refactoring Script
 * Refactors all pages to use new components
 * 
 * Usage: node scripts/auto-refactor.js
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
    "import { gradients } from '../design-tokens';",
  ];

  let newContent = content;
  let hasChanges = false;

  imports.forEach(importStatement => {
    // Check if import already exists
    const importMatch = importStatement.match(/import (\w+|\{[^}]+\})/);
    if (!importMatch) return;
    
    const importName = importMatch[1].replace(/[{}]/g, '').trim();
    const hasImport = new RegExp(`import.*${importName}.*from`).test(content);
    
    if (!hasImport) {
      // Add import after last import statement
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
 * Refactor headings to Typography
 */
function refactorHeadings(content) {
  let newContent = content;
  let changes = 0;

  // Pattern: <h1 className="...">text</h1>
  const headingPattern = /<h([1-6])\s+className="([^"]*)">(.*?)<\/h\1>/gs;
  
  newContent = newContent.replace(headingPattern, (match, level, className, text) => {
    // Keep only essential classes (colors, margins, etc)
    const keepClasses = className.split(' ').filter(c => 
      c.startsWith('text-') && !c.match(/text-(xs|sm|base|lg|xl|\d)/) ||
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
 * Refactor containers to Container component
 */
function refactorContainers(content) {
  let newContent = content;
  let changes = 0;

  // Pattern: <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  const containerPattern = /<div className="([^"]*max-w-7xl[^"]*mx-auto[^"]*px-[^"]*)">/g;
  
  newContent = newContent.replace(containerPattern, (match, className) => {
    // Extract additional classes
    const additionalClasses = className.split(' ').filter(c => 
      !c.includes('max-w') && !c.includes('mx-auto') && !c.includes('px-')
    ).join(' ');
    
    const classAttr = additionalClasses ? ` className="${additionalClasses}"` : '';
    changes++;
    return `<Container${classAttr}>`;
  });

  return { content: newContent, changes };
}

/**
 * Refactor grid layouts to Grid component
 */
function refactorGrids(content) {
  let newContent = content;
  let changes = 0;

  // Pattern: <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  const gridPattern = /<div className="([^"]*grid[^"]*grid-cols[^"]*)">/g;
  
  newContent = newContent.replace(gridPattern, (match, className) => {
    // Extract cols and gap
    const lgColsMatch = className.match(/lg:grid-cols-(\d+)/);
    const gapMatch = className.match(/gap-(\d+)/);
    
    const cols = lgColsMatch ? lgColsMatch[1] : '3';
    const gap = gapMatch ? gapMatch[1] : '6';
    
    // Extract additional classes
    const additionalClasses = className.split(' ').filter(c => 
      !c.includes('grid') && !c.includes('gap-')
    ).join(' ');
    
    const classAttr = additionalClasses ? ` className="${additionalClasses}"` : '';
    changes++;
    return `<Grid cols={${cols}} gap={${gap}}${classAttr}>`;
  });

  return { content: newContent, changes };
}

/**
 * Refactor simple flex layouts to Stack component
 */
function refactorFlexLayouts(content) {
  let newContent = content;
  let changes = 0;

  // Pattern: <div className="flex flex-col gap-4">
  const flexPattern = /<div className="([^"]*flex[^"]*)">/g;
  
  newContent = newContent.replace(flexPattern, (match, className) => {
    // Only refactor simple flex layouts
    if (!className.includes('flex-col') && !className.includes('flex-row')) {
      return match; // Skip complex layouts
    }
    
    const direction = className.includes('flex-col') ? 'vertical' : 'horizontal';
    const gapMatch = className.match(/gap-(\d+)/);
    const gap = gapMatch ? gapMatch[1] : '4';
    
    // Extract alignment
    let align = '';
    if (className.includes('items-center')) align = ' align="center"';
    if (className.includes('items-start')) align = ' align="start"';
    if (className.includes('items-end')) align = ' align="end"';
    
    let justify = '';
    if (className.includes('justify-center')) justify = ' justify="center"';
    if (className.includes('justify-between')) justify = ' justify="between"';
    if (className.includes('justify-end')) justify = ' justify="end"';
    
    // Extract additional classes
    const additionalClasses = className.split(' ').filter(c => 
      !c.includes('flex') && !c.includes('gap-') && 
      !c.includes('items-') && !c.includes('justify-')
    ).join(' ');
    
    const classAttr = additionalClasses ? ` className="${additionalClasses}"` : '';
    changes++;
    return `<Stack direction="${direction}" gap={${gap}}${align}${justify}${classAttr}>`;
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

  // 2. Refactor headings
  const { content: contentWithHeadings, changes: headingChanges } = refactorHeadings(content);
  content = contentWithHeadings;
  totalChanges += headingChanges;
  if (headingChanges > 0) {
    console.log(`  ${colors.green}✓ Refactored ${headingChanges} headings${colors.reset}`);
  }

  // 3. Refactor containers
  const { content: contentWithContainers, changes: containerChanges } = refactorContainers(content);
  content = contentWithContainers;
  totalChanges += containerChanges;
  if (containerChanges > 0) {
    console.log(`  ${colors.green}✓ Refactored ${containerChanges} containers${colors.reset}`);
  }

  // 4. Refactor grids
  const { content: contentWithGrids, changes: gridChanges } = refactorGrids(content);
  content = contentWithGrids;
  totalChanges += gridChanges;
  if (gridChanges > 0) {
    console.log(`  ${colors.green}✓ Refactored ${gridChanges} grids${colors.reset}`);
  }

  // 5. Refactor flex layouts (conservative)
  // Commented out for now as it's too aggressive
  // const { content: contentWithFlex, changes: flexChanges } = refactorFlexLayouts(content);
  // content = contentWithFlex;
  // totalChanges += flexChanges;

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
  console.log(`${colors.bright}${colors.blue}🚀 Starting Automated Refactoring...${colors.reset}\n`);

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
  console.log(`${colors.yellow}⚠️  Please review changes and test thoroughly!${colors.reset}`);
  console.log(`${colors.cyan}Run: npm run build${colors.reset}`);
  console.log(`${colors.cyan}Run: npm run test:a11y${colors.reset}\n`);
}

// Run
main();

