#!/usr/bin/env node

/**
 * Refactor ALL Flex Patterns to Stack
 * More aggressive - handle more flex variations
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
    const indent = line.match(/^(\s*)/)[1];
    
    // Match flex patterns
    if (trimmed.match(/^<div className="[^"]*flex[^"]*">/)) {
      const classMatch = line.match(/className="([^"]*)"/);
      if (classMatch) {
        const fullClass = classMatch[1];
        
        // Must start with "flex " or be "flex"
        if (fullClass.startsWith('flex ') || fullClass === 'flex') {
          // Extract properties
          const dirMatch = fullClass.match(/flex-(col|row)/);
          const gapMatch = fullClass.match(/gap-(\d+)/);
          const alignMatch = fullClass.match(/items-(start|center|end|baseline|stretch)/);
          const justifyMatch = fullClass.match(/justify-(start|center|end|between|around|evenly)/);
          
          // Default direction is row if not specified
          const direction = dirMatch ? dirMatch[1] : 'row';
          const gap = gapMatch ? gapMatch[1] : '4';
          
          // Get additional classes
          const additionalClasses = fullClass.split(' ').filter(c => 
            !c.includes('flex') && 
            !c.includes('gap-') &&
            !c.includes('items-') &&
            !c.includes('justify-')
          );
          
          // Build props
          let props = `direction="${direction}" gap={${gap}}`;
          if (alignMatch) props += ` align="${alignMatch[1]}"`;
          if (justifyMatch) props += ` justify="${justifyMatch[1]}"`;
          
          const classAttr = additionalClasses.length > 0 ? ` className="${additionalClasses.join(' ')}"` : '';
          
          newLines.push(`${indent}<Stack ${props}${classAttr}>`);
          changes++;
          continue;
        }
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

console.log('🚀 Refactoring ALL Flex Patterns to Stack\n');

let totalChanges = 0;
let filesChanged = 0;

files.forEach(file => {
  const filePath = path.join(pagesDir, file);
  const changes = refactorFile(filePath);
  
  if (changes > 0) {
    console.log(`✓ ${file}: ${changes} flex → Stack`);
    totalChanges += changes;
    filesChanged++;
  }
});

console.log(`\n✅ Total: ${filesChanged} files, ${totalChanges} Stack components`);

