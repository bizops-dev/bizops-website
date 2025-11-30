#!/usr/bin/env node

/**
 * Safe Stack Refactoring
 * Only refactor simple flex patterns
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
    
    // Check for simple flex pattern
    // Pattern: <div className="flex flex-col gap-X"> or <div className="flex flex-row gap-X">
    const flexMatch = trimmed.match(/^<div className="(flex[^"]*)">/);
    
    if (flexMatch) {
      const fullClass = flexMatch[1];
      
      // Must have flex-col or flex-row
      const dirMatch = fullClass.match(/flex-(col|row)/);
      const gapMatch = fullClass.match(/gap-(\d+)/);
      
      if (dirMatch && gapMatch) {
        const direction = dirMatch[1];
        const gap = gapMatch[1];
        
        // Get additional classes
        const additionalClasses = fullClass.split(' ').filter(c => 
          !c.includes('flex') && 
          !c.includes('gap-')
        );
        
        // Build new line
        const indent = line.match(/^(\s*)/)[1];
        const classAttr = additionalClasses.length > 0 ? ` className="${additionalClasses.join(' ')}"` : '';
        
        newLines.push(`${indent}<Stack direction="${direction}" gap={${gap}}${classAttr}>`);
        changes++;
        continue;
      }
    }
    
    newLines.push(line);
  }
  
  let newContent = newLines.join('\n');
  
  // Add Stack import if needed
  if (changes > 0 && !content.includes("import Stack from '../components/Stack'")) {
    const lastImportMatch = newContent.match(/\nimport [^;]+;(?=\n(?!import))/);
    if (lastImportMatch) {
      const insertPos = lastImportMatch.index + lastImportMatch[0].length;
      newContent = newContent.slice(0, insertPos) + 
                "\nimport Stack from '../components/Stack';" +
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

console.log('🔄 Safe Stack Refactoring...\n');

let totalChanges = 0;
let filesChanged = 0;

files.forEach(file => {
  const filePath = path.join(pagesDir, file);
  const changes = refactorFile(filePath);
  
  if (changes > 0) {
    console.log(`✓ ${file}: ${changes} stacks`);
    totalChanges += changes;
    filesChanged++;
  }
});

console.log(`\n✅ Total: ${filesChanged} files, ${totalChanges} stacks refactored`);

