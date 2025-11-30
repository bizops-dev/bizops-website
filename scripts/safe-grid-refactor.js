#!/usr/bin/env node

/**
 * Safe Grid Refactoring
 * Only refactor simple grid patterns
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function refactorFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');
  let changes = 0;

  const lines = content.split('\n');
  const newLines = [];
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmed = line.trim();
    
    // Check for simple grid pattern
    // Pattern: <div className="grid grid-cols-X lg:grid-cols-Y gap-Z">
    const gridMatch = trimmed.match(/^<div className="(grid[^"]*)">/);
    
    if (gridMatch) {
      const fullClass = gridMatch[1];
      
      // Extract grid properties
      const lgColsMatch = fullClass.match(/lg:grid-cols-(\d+)/);
      const mdColsMatch = fullClass.match(/md:grid-cols-(\d+)/);
      const baseColsMatch = fullClass.match(/grid-cols-(\d+)/);
      const gapMatch = fullClass.match(/gap-(\d+)/);
      
      if (lgColsMatch || mdColsMatch) {
        const cols = lgColsMatch ? lgColsMatch[1] : (mdColsMatch ? mdColsMatch[1] : (baseColsMatch ? baseColsMatch[1] : '3'));
        const gap = gapMatch ? gapMatch[1] : '6';
        
        // Get additional classes
        const additionalClasses = fullClass.split(' ').filter(c => 
          !c.includes('grid') && 
          !c.includes('gap-') &&
          !c.includes('cols-')
        );
        
        // Build new line
        const indent = line.match(/^(\s*)/)[1];
        const classAttr = additionalClasses.length > 0 ? ` className="${additionalClasses.join(' ')}"` : '';
        
        newLines.push(`${indent}<Grid cols={${cols}} gap={${gap}}${classAttr}>`);
        changes++;
        continue;
      }
    }
    
    newLines.push(line);
  }
  
  let newContent = newLines.join('\n');
  
  // Add Grid import if needed
  if (changes > 0 && !content.includes("import Grid from '../components/Grid'")) {
    const lastImportMatch = newContent.match(/\nimport [^;]+;(?=\n(?!import))/);
    if (lastImportMatch) {
      const insertPos = lastImportMatch.index + lastImportMatch[0].length;
      newContent = newContent.slice(0, insertPos) + 
                "\nimport Grid from '../components/Grid';" +
                newContent.slice(insertPos);
    }
  }
  
  if (changes > 0) {
    fs.writeFileSync(filePath, newContent, 'utf-8');
  }

  return changes;
}

// Main
const pagesDir = path.join(__dirname, '..', 'pages');
const files = fs.readdirSync(pagesDir)
  .filter(f => f.endsWith('.tsx'))
  .sort();

console.log('🔄 Safe Grid Refactoring...\n');

let totalChanges = 0;
let filesChanged = 0;

files.forEach(file => {
  const filePath = path.join(pagesDir, file);
  const changes = refactorFile(filePath);
  
  if (changes > 0) {
    console.log(`✓ ${file}: ${changes} grids`);
    totalChanges += changes;
    filesChanged++;
  }
});

console.log(`\n✅ Total: ${filesChanged} files, ${totalChanges} grids refactored`);

