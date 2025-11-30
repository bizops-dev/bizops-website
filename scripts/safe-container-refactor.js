#!/usr/bin/env node

/**
 * Safe Container Refactoring - Manual Approach
 * Only refactor SIMPLE, STANDALONE max-w containers
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function refactorFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');
  let changes = 0;

  // Only refactor VERY simple standalone containers
  // Pattern: <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  // Must be at start of line (not nested deeply)
  const lines = content.split('\n');
  const newLines = [];
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmed = line.trim();
    
    // Check if it's a simple container pattern
    if (trimmed.match(/^<div className="max-w-(?:7xl|6xl|5xl|4xl|3xl|2xl|xl) mx-auto px-4/)) {
      // Extract the full className
      const classMatch = line.match(/className="([^"]*)"/);
      if (classMatch) {
        const fullClass = classMatch[1];
        
        // Extract size
        const sizeMatch = fullClass.match(/max-w-(7xl|6xl|5xl|4xl|3xl|2xl|xl)/);
        const size = sizeMatch ? sizeMatch[1] : 'xl';
        
        // Get additional classes (not max-w, mx-auto, px-*)
        const additionalClasses = fullClass.split(' ').filter(c => 
          !c.includes('max-w') && 
          !c.includes('mx-auto') && 
          !c.match(/^px-\d/) &&
          !c.match(/^sm:px-\d/) &&
          !c.match(/^lg:px-\d/)
        );
        
        // Build new line
        const indent = line.match(/^(\s*)/)[1];
        const classAttr = additionalClasses.length > 0 ? ` className="${additionalClasses.join(' ')}"` : '';
        const sizeAttr = size !== 'xl' ? ` size="${size}"` : '';
        
        newLines.push(`${indent}<Container${sizeAttr}${classAttr}>`);
        changes++;
        
        // Add Container import if not exists
        if (!content.includes("import Container from '../components/Container'")) {
          // Will add later
        }
        continue;
      }
    }
    
    newLines.push(line);
  }
  
  let newContent = newLines.join('\n');
  
  // Add Container import if needed
  if (changes > 0 && !content.includes("import Container from '../components/Container'")) {
    const lastImportMatch = newContent.match(/\nimport [^;]+;(?=\n(?!import))/);
    if (lastImportMatch) {
      const insertPos = lastImportMatch.index + lastImportMatch[0].length;
      newContent = newContent.slice(0, insertPos) + 
                "\nimport Container from '../components/Container';" +
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

console.log('🔄 Safe Container Refactoring...\n');

let totalChanges = 0;
let filesChanged = 0;

files.forEach(file => {
  const filePath = path.join(pagesDir, file);
  const changes = refactorFile(filePath);
  
  if (changes > 0) {
    console.log(`✓ ${file}: ${changes} containers`);
    totalChanges += changes;
    filesChanged++;
  }
});

console.log(`\n✅ Total: ${filesChanged} files, ${totalChanges} containers refactored`);

