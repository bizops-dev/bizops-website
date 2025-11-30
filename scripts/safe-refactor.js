#!/usr/bin/env node

/**
 * Safe Manual Refactoring Helper
 * Only refactors simple, safe patterns
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function refactorSimpleHeadings(content) {
  let changes = 0;
  
  // Only refactor VERY simple headings (single line, no JSX, no complex classes)
  const patterns = [
    // h1 with simple text
    { 
      regex: /<h1 className="([^"]*text-4xl[^"]*)">\s*([^<{]+?)\s*<\/h1>/g,
      replace: (match, className, text) => {
        changes++;
        return `<Typography variant="h1" as="h1">${text.trim()}</Typography>`;
      }
    },
    // h2 with simple text
    {
      regex: /<h2 className="([^"]*text-3xl[^"]*)">\s*([^<{]+?)\s*<\/h2>/g,
      replace: (match, className, text) => {
        changes++;
        return `<Typography variant="h2" as="h2">${text.trim()}</Typography>`;
      }
    },
    // h3 with simple text
    {
      regex: /<h3 className="([^"]*text-2xl[^"]*)">\s*([^<{]+?)\s*<\/h3>/g,
      replace: (match, className, text) => {
        changes++;
        return `<Typography variant="h3" as="h3">${text.trim()}</Typography>`;
      }
    },
  ];

  let newContent = content;
  patterns.forEach(({ regex, replace }) => {
    newContent = newContent.replace(regex, replace);
  });

  return { content: newContent, changes };
}

function addImportsIfNeeded(content) {
  const needsTypography = content.includes('<Typography');
  const hasTypography = /import.*Typography.*from/.test(content);
  
  if (needsTypography && !hasTypography) {
    // Find last import
    const lastImport = content.lastIndexOf('\nimport ');
    if (lastImport !== -1) {
      const endOfLine = content.indexOf('\n', lastImport + 1);
      return content.slice(0, endOfLine + 1) + 
             "import Typography from '../components/Typography';\n" +
             content.slice(endOfLine + 1);
    }
  }
  
  return content;
}

// Get file from command line
const filePath = process.argv[2];
if (!filePath) {
  console.log('Usage: node scripts/safe-refactor.js pages/FileName.tsx');
  process.exit(1);
}

const fullPath = path.resolve(filePath);
let content = fs.readFileSync(fullPath, 'utf-8');

const { content: refactored, changes } = refactorSimpleHeadings(content);
const final = addImportsIfNeeded(refactored);

if (changes > 0) {
  fs.writeFileSync(fullPath, final, 'utf-8');
  console.log(`✓ Refactored ${changes} headings in ${path.basename(filePath)}`);
} else {
  console.log(`○ No simple headings to refactor in ${path.basename(filePath)}`);
}

