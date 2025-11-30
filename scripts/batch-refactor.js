#!/usr/bin/env node

/**
 * Batch Refactoring Script - Safe and Conservative
 * Only refactors simple inline headings to Typography
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
  let changes = 0;

  // Only refactor VERY simple single-line headings
  // Pattern: <h1 className="...">Simple Text</h1>
  const patterns = [
    {
      level: 1,
      regex: /<h1\s+className="[^"]*">([^<{}\n]+?)<\/h1>/g,
      variant: 'h1'
    },
    {
      level: 2,
      regex: /<h2\s+className="[^"]*">([^<{}\n]+?)<\/h2>/g,
      variant: 'h2'
    },
    {
      level: 3,
      regex: /<h3\s+className="[^"]*">([^<{}\n]+?)<\/h3>/g,
      variant: 'h3'
    },
    {
      level: 4,
      regex: /<h4\s+className="[^"]*">([^<{}\n]+?)<\/h4>/g,
      variant: 'h4'
    },
    {
      level: 5,
      regex: /<h5\s+className="[^"]*">([^<{}\n]+?)<\/h5>/g,
      variant: 'h5'
    },
    {
      level: 6,
      regex: /<h6\s+className="[^"]*">([^<{}\n]+?)<\/h6>/g,
      variant: 'h6'
    },
  ];

  patterns.forEach(({ regex, variant, level }) => {
    content = content.replace(regex, (match, text) => {
      // Skip if text is too long or contains special chars
      if (text.length > 100 || text.includes('${') || text.includes('`')) {
        return match;
      }
      changes++;
      return `<Typography variant="${variant}" as="h${level}">${text.trim()}</Typography>`;
    });
  });

  // Add Typography import if needed
  if (changes > 0 && !content.includes("import Typography from '../components/Typography'")) {
    const lastImportMatch = content.match(/\nimport [^;]+;(?=\n(?!import))/);
    if (lastImportMatch) {
      const insertPos = lastImportMatch.index + lastImportMatch[0].length;
      content = content.slice(0, insertPos) + 
                "\nimport Typography from '../components/Typography';" +
                content.slice(insertPos);
    }
  }

  if (changes > 0) {
    fs.writeFileSync(filePath, content, 'utf-8');
  }

  return changes;
}

// Main
const pagesDir = path.join(__dirname, '..', 'pages');
const files = fs.readdirSync(pagesDir)
  .filter(f => f.endsWith('.tsx'))
  .sort();

console.log(`${colors.cyan}Starting batch refactoring of ${files.length} pages...${colors.reset}\n`);

let totalChanges = 0;
let filesChanged = 0;

files.forEach((file, i) => {
  const filePath = path.join(pagesDir, file);
  const changes = refactorFile(filePath);
  
  if (changes > 0) {
    console.log(`${colors.green}✓ ${file}: ${changes} headings${colors.reset}`);
    filesChanged++;
    totalChanges += changes;
  } else {
    console.log(`${colors.yellow}○ ${file}: no changes${colors.reset}`);
  }
});

console.log(`\n${colors.green}✓ Complete: ${filesChanged}/${files.length} files, ${totalChanges} headings refactored${colors.reset}`);

