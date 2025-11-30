#!/usr/bin/env node

/**
 * Complete Refactoring Script - All Patterns
 * Refactors: Headings, Containers, Grids (conservative approach)
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
  blue: '\x1b[34m',
};

function refactorFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');
  let changes = {
    headings: 0,
    containers: 0,
    grids: 0,
  };

  const original = content;

  // 1. Refactor remaining headings (more patterns)
  const headingPatterns = [
    // Simple headings without Typography yet
    { regex: /<h1\s+className="[^"]*">([^<{}\n]+?)<\/h1>/g, variant: 'h1', level: 1 },
    { regex: /<h2\s+className="[^"]*">([^<{}\n]+?)<\/h2>/g, variant: 'h2', level: 2 },
    { regex: /<h3\s+className="[^"]*">([^<{}\n]+?)<\/h3>/g, variant: 'h3', level: 3 },
    { regex: /<h4\s+className="[^"]*">([^<{}\n]+?)<\/h4>/g, variant: 'h4', level: 4 },
    { regex: /<h5\s+className="[^"]*">([^<{}\n]+?)<\/h5>/g, variant: 'h5', level: 5 },
    { regex: /<h6\s+className="[^"]*">([^<{}\n]+?)<\/h6>/g, variant: 'h6', level: 6 },
  ];

  headingPatterns.forEach(({ regex, variant, level }) => {
    const matches = content.match(regex);
    if (matches) {
      content = content.replace(regex, (match, text) => {
        if (text.length > 150 || text.includes('${') || text.includes('`')) {
          return match;
        }
        changes.headings++;
        return `<Typography variant="${variant}" as="h${level}">${text.trim()}</Typography>`;
      });
    }
  });

  // 2. Refactor simple containers (max-w-7xl mx-auto px-4...)
  // Only refactor if it's a simple wrapper div
  const containerPattern = /<div className="(max-w-(?:7xl|6xl|5xl) mx-auto px-4[^"]*)">/g;
  const containerMatches = content.match(containerPattern);
  if (containerMatches) {
    content = content.replace(containerPattern, (match, className) => {
      // Extract additional classes
      const classes = className.split(' ');
      const additionalClasses = classes.filter(c => 
        !c.includes('max-w') && 
        !c.includes('mx-auto') && 
        !c.includes('px-') &&
        !c.includes('sm:px-') &&
        !c.includes('lg:px-')
      );
      
      if (additionalClasses.length > 5) {
        return match; // Too complex, skip
      }
      
      const classAttr = additionalClasses.length > 0 
        ? ` className="${additionalClasses.join(' ')}"` 
        : '';
      
      changes.containers++;
      return `<Container${classAttr}>`;
    });
  }

  // 3. Refactor simple grids
  const gridPattern = /<div className="(grid grid-cols-\d+[^"]*)">/g;
  const gridMatches = content.match(gridPattern);
  if (gridMatches) {
    content = content.replace(gridPattern, (match, className) => {
      // Extract cols and gap
      const lgColsMatch = className.match(/lg:grid-cols-(\d+)/);
      const mdColsMatch = className.match(/md:grid-cols-(\d+)/);
      const gapMatch = className.match(/gap-(\d+)/);
      
      if (!lgColsMatch) return match; // Skip if no lg:grid-cols
      
      const cols = lgColsMatch[1];
      const gap = gapMatch ? gapMatch[1] : '6';
      
      // Extract additional classes
      const classes = className.split(' ');
      const additionalClasses = classes.filter(c => 
        !c.includes('grid') && 
        !c.includes('gap-') &&
        !c.includes('cols-')
      );
      
      if (additionalClasses.length > 5) {
        return match; // Too complex, skip
      }
      
      const classAttr = additionalClasses.length > 0 
        ? ` className="${additionalClasses.join(' ')}"` 
        : '';
      
      changes.grids++;
      return `<Grid cols={${cols}} gap={${gap}}${classAttr}>`;
    });
  }

  // Add imports if needed
  const needsTypography = content.includes('<Typography') && !original.includes('<Typography');
  const needsContainer = content.includes('<Container') && !original.includes('<Container');
  const needsGrid = content.includes('<Grid') && !original.includes('<Grid');

  if (needsTypography || needsContainer || needsGrid) {
    const imports = [];
    if (needsTypography && !content.includes("import Typography from '../components/Typography'")) {
      imports.push("import Typography from '../components/Typography';");
    }
    if (needsContainer && !content.includes("import Container from '../components/Container'")) {
      imports.push("import Container from '../components/Container';");
    }
    if (needsGrid && !content.includes("import Grid from '../components/Grid'")) {
      imports.push("import Grid from '../components/Grid';");
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
  }

  const totalChanges = changes.headings + changes.containers + changes.grids;
  
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

console.log(`${colors.cyan}${colors.blue}🚀 Complete Refactoring - All Patterns${colors.reset}\n`);
console.log(`${colors.cyan}Processing ${files.length} pages...${colors.reset}\n`);

let totalChanges = {
  headings: 0,
  containers: 0,
  grids: 0,
};
let filesChanged = 0;

files.forEach((file, i) => {
  const filePath = path.join(pagesDir, file);
  const { changes, totalChanges: fileTotal } = refactorFile(filePath);
  
  if (fileTotal > 0) {
    console.log(`${colors.green}✓ ${file}${colors.reset}`);
    if (changes.headings > 0) console.log(`  - ${changes.headings} headings`);
    if (changes.containers > 0) console.log(`  - ${changes.containers} containers`);
    if (changes.grids > 0) console.log(`  - ${changes.grids} grids`);
    
    totalChanges.headings += changes.headings;
    totalChanges.containers += changes.containers;
    totalChanges.grids += changes.grids;
    filesChanged++;
  } else {
    console.log(`${colors.yellow}○ ${file}${colors.reset}`);
  }
});

const grandTotal = totalChanges.headings + totalChanges.containers + totalChanges.grids;

console.log(`\n${colors.green}✨ Complete!${colors.reset}`);
console.log(`${colors.cyan}Files changed: ${filesChanged}/${files.length}${colors.reset}`);
console.log(`${colors.cyan}Total changes: ${grandTotal}${colors.reset}`);
console.log(`  - Headings: ${totalChanges.headings}`);
console.log(`  - Containers: ${totalChanges.containers}`);
console.log(`  - Grids: ${totalChanges.grids}`);

