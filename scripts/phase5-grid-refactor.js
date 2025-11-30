#!/usr/bin/env node

/**
 * Phase 5 - Grid Refactoring (Safe Patterns Only)
 * Only refactor simple, standalone grid patterns
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
    grids: 0,
    stacks: 0,
  };

  const original = content;

  // 1. Simple Grid patterns (standalone, not nested in Container)
  // Pattern: <div className="grid grid-cols-X gap-Y ...">
  const gridPattern = /<div className="(grid grid-cols-\d+ (?:md:grid-cols-\d+ )?(?:lg:grid-cols-\d+ )?gap-\d+)">/g;
  content = content.replace(gridPattern, (match, className) => {
    // Extract cols and gap
    const lgColsMatch = className.match(/lg:grid-cols-(\d+)/);
    const mdColsMatch = className.match(/md:grid-cols-(\d+)/);
    const baseColsMatch = className.match(/grid-cols-(\d+)/);
    const gapMatch = className.match(/gap-(\d+)/);
    
    if (!lgColsMatch && !mdColsMatch) return match; // Skip if no responsive cols
    
    const cols = lgColsMatch ? lgColsMatch[1] : (mdColsMatch ? mdColsMatch[1] : baseColsMatch[1]);
    const gap = gapMatch ? gapMatch[1] : '6';
    
    changes.grids++;
    return `<Grid cols={${cols}} gap={${gap}}>`;
  });

  // 2. Simple Stack/Flex patterns
  // Pattern: <div className="flex flex-col gap-X">
  const stackPattern = /<div className="(flex flex-col gap-\d+)">/g;
  content = content.replace(stackPattern, (match, className) => {
    const gapMatch = className.match(/gap-(\d+)/);
    const gap = gapMatch ? gapMatch[1] : '4';
    
    changes.stacks++;
    return `<Stack direction="col" gap={${gap}}>`;
  });

  // Add imports if needed
  const needsGrid = content.includes('<Grid') && !original.includes('<Grid');
  const needsStack = content.includes('<Stack') && !original.includes('<Stack');

  const imports = [];
  if (needsGrid && !content.includes("import Grid from '../components/Grid'")) {
    imports.push("import Grid from '../components/Grid';");
  }
  if (needsStack && !content.includes("import Stack from '../components/Stack'")) {
    imports.push("import Stack from '../components/Stack';");
  }

  if (imports.length > 0) {
    const lastImportMatch = content.match(/\nimport [^;]+;(?=\n(?!import))/);
    if (lastImportMatch) {
      const insertPos = lastImportMatch.index + lastImportMatch[0].length;
      content = content.slice(0, insertPos) + 
                '\n' + imports.join('\n') +
                content.slice(insertPos);
    }
  }

  const totalChanges = changes.grids + changes.stacks;
  
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

console.log(`${colors.cyan}Phase 5 - Grid & Stack Refactoring${colors.reset}\n`);
console.log(`${colors.cyan}Processing ${files.length} pages...${colors.reset}\n`);

let totalChanges = {
  grids: 0,
  stacks: 0,
};
let filesChanged = 0;

files.forEach((file, i) => {
  const filePath = path.join(pagesDir, file);
  const { changes, totalChanges: fileTotal } = refactorFile(filePath);
  
  if (fileTotal > 0) {
    console.log(`${colors.green}✓ ${file}${colors.reset}`);
    if (changes.grids > 0) console.log(`  - ${changes.grids} grids`);
    if (changes.stacks > 0) console.log(`  - ${changes.stacks} stacks`);
    
    totalChanges.grids += changes.grids;
    totalChanges.stacks += changes.stacks;
    filesChanged++;
  } else {
    console.log(`${colors.yellow}○ ${file}${colors.reset}`);
  }
});

const grandTotal = totalChanges.grids + totalChanges.stacks;

console.log(`\n${colors.green}✨ Complete!${colors.reset}`);
console.log(`${colors.cyan}Files changed: ${filesChanged}/${files.length}${colors.reset}`);
console.log(`${colors.cyan}Total changes: ${grandTotal}${colors.reset}`);
console.log(`  - Grids: ${totalChanges.grids}`);
console.log(`  - Stacks: ${totalChanges.stacks}`);

