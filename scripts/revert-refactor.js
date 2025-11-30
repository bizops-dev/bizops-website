#!/usr/bin/env node

/**
 * Revert Container/Grid refactoring
 * Rollback to original <div> tags
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function revertFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');
  let changes = 0;

  // Revert <Container> back to <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  content = content.replace(/<Container([^>]*)>/g, (match, attrs) => {
    changes++;
    const className = attrs.match(/className="([^"]*)"/);
    const additionalClasses = className ? ` ${className[1]}` : '';
    return `<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8${additionalClasses}">`;
  });

  // Revert </Container> back to </div>
  content = content.replace(/<\/Container>/g, () => {
    return '</div>';
  });

  // Revert <Grid> back to <div className="grid ...">
  content = content.replace(/<Grid cols=\{(\d+)\} gap=\{(\d+)\}([^>]*)>/g, (match, cols, gap, attrs) => {
    changes++;
    const className = attrs.match(/className="([^"]*)"/);
    const additionalClasses = className ? ` ${className[1]}` : '';
    return `<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-${cols} gap-${gap}${additionalClasses}">`;
  });

  // Revert </Grid> back to </div>
  content = content.replace(/<\/Grid>/g, () => {
    return '</div>';
  });

  // Remove Container/Grid imports
  content = content.replace(/\nimport Container from ['"]\.\.\/components\/Container['"];?\n/g, '\n');
  content = content.replace(/\nimport Grid from ['"]\.\.\/components\/Grid['"];?\n/g, '\n');

  if (changes > 0) {
    fs.writeFileSync(filePath, content, 'utf-8');
  }

  return changes;
}

// Revert all pages
const pagesDir = path.join(__dirname, '..', 'pages');
const files = fs.readdirSync(pagesDir)
  .filter(f => f.endsWith('.tsx'))
  .sort();

console.log('Reverting Container/Grid refactoring...\n');

let totalChanges = 0;

files.forEach(file => {
  const filePath = path.join(pagesDir, file);
  const changes = revertFile(filePath);
  
  if (changes > 0) {
    console.log(`✓ ${file}: ${changes} reverted`);
    totalChanges += changes;
  }
});

console.log(`\n✓ Total: ${totalChanges} changes reverted`);

