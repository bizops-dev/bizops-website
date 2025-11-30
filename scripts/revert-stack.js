#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function revertFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');
  let changes = 0;

  // Revert <Stack direction="col" gap={X}> back to <div className="space-y-X">
  content = content.replace(/<Stack direction="col" gap=\{(\d+)\}>/g, (match, gap) => {
    changes++;
    return `<div className="space-y-${gap}">`;
  });

  // Revert </Stack> back to </div>
  content = content.replace(/<\/Stack>/g, () => {
    return '</div>';
  });

  // Remove Stack imports
  content = content.replace(/\nimport Stack from ['"]\.\.\/components\/Stack['"];?\n/g, '\n');

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

console.log('Reverting Stack refactoring...\n');

let totalChanges = 0;

files.forEach(file => {
  const filePath = path.join(pagesDir, file);
  const changes = revertFile(filePath);
  
  if (changes > 0) {
    console.log(`✓ ${file}: ${changes} reverted`);
    totalChanges += changes;
  }
});

console.log(`\n✓ Total: ${totalChanges} Stack changes reverted`);

