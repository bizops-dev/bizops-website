#!/usr/bin/env node

/**
 * Ultra Aggressive Refactoring
 * Refactor ALL remaining patterns to reach 100%
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function refactorFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');
  let changes = {
    flex: 0,
    grid: 0,
    spaceY: 0,
  };

  const lines = content.split('\n');
  const newLines = [];
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmed = line.trim();
    const indent = line.match(/^(\s*)/)[1];
    
    // 1. ALL remaining flex patterns (even without gap)
    if (trimmed.match(/^<div className="[^"]*flex[^"]*">/)) {
      const classMatch = line.match(/className="([^"]*)"/);
      if (classMatch) {
        const fullClass = classMatch[1];
        
        // Must have "flex " or be "flex"
        if (fullClass.includes('flex')) {
          const dirMatch = fullClass.match(/flex-(col|row)/);
          const gapMatch = fullClass.match(/gap-(\d+)/);
          const alignMatch = fullClass.match(/items-(start|center|end|baseline|stretch)/);
          const justifyMatch = fullClass.match(/justify-(start|center|end|between|around|evenly)/);
          
          const direction = dirMatch ? dirMatch[1] : 'row';
          const gap = gapMatch ? gapMatch[1] : '4';
          
          const additionalClasses = fullClass.split(' ').filter(c => 
            !c.includes('flex') && 
            !c.includes('gap-') &&
            !c.includes('items-') &&
            !c.includes('justify-')
          );
          
          let props = `direction="${direction}" gap={${gap}}`;
          if (alignMatch) props += ` align="${alignMatch[1]}"`;
          if (justifyMatch) props += ` justify="${justifyMatch[1]}"`;
          
          const classAttr = additionalClasses.length > 0 ? ` className="${additionalClasses.join(' ')}"` : '';
          
          newLines.push(`${indent}<Stack ${props}${classAttr}>`);
          changes.flex++;
          continue;
        }
      }
    }
    
    // 2. Remaining grids
    if (trimmed.match(/^<div className="[^"]*grid[^"]*">/)) {
      const classMatch = line.match(/className="([^"]*)"/);
      if (classMatch) {
        const fullClass = classMatch[1];
        
        if (fullClass.includes('grid')) {
          const lgColsMatch = fullClass.match(/lg:grid-cols-(\d+)/);
          const mdColsMatch = fullClass.match(/md:grid-cols-(\d+)/);
          const baseColsMatch = fullClass.match(/grid-cols-(\d+)/);
          const gapMatch = fullClass.match(/gap-(\d+)/);
          
          const cols = lgColsMatch ? lgColsMatch[1] : (mdColsMatch ? mdColsMatch[1] : (baseColsMatch ? baseColsMatch[1] : '3'));
          const gap = gapMatch ? gapMatch[1] : '6';
          
          const additionalClasses = fullClass.split(' ').filter(c => 
            !c.includes('grid') && 
            !c.includes('gap-') &&
            !c.includes('cols-')
          );
          
          const classAttr = additionalClasses.length > 0 ? ` className="${additionalClasses.join(' ')}"` : '';
          
          newLines.push(`${indent}<Grid cols={${cols}} gap={${gap}}${classAttr}>`);
          changes.grid++;
          continue;
        }
      }
    }
    
    // 3. Remaining space-y
    if (trimmed.match(/^<div className="[^"]*space-y-\d+[^"]*">/)) {
      const classMatch = line.match(/className="([^"]*)"/);
      if (classMatch) {
        const fullClass = classMatch[1];
        const spaceMatch = fullClass.match(/space-y-(\d+)/);
        
        if (spaceMatch) {
          const gap = spaceMatch[1];
          
          const additionalClasses = fullClass.split(' ').filter(c => 
            !c.includes('space-y')
          );
          
          const classAttr = additionalClasses.length > 0 ? ` className="${additionalClasses.join(' ')}"` : '';
          
          newLines.push(`${indent}<Stack direction="col" gap={${gap}}${classAttr}>`);
          changes.spaceY++;
          continue;
        }
      }
    }
    
    newLines.push(line);
  }
  
  let newContent = newLines.join('\n');
  
  // Add imports if needed
  const needsGrid = changes.grid > 0 && !content.includes("import Grid from '../components/Grid'");
  const needsStack = (changes.flex + changes.spaceY) > 0 && !content.includes("import Stack from '../components/Stack'");
  
  const imports = [];
  if (needsGrid) imports.push("import Grid from '../components/Grid';");
  if (needsStack) imports.push("import Stack from '../components/Stack';");
  
  if (imports.length > 0) {
    const lastImportMatch = newContent.match(/\nimport [^;]+;(?=\n(?!import))/);
    if (lastImportMatch) {
      const insertPos = lastImportMatch.index + lastImportMatch[0].length;
      newContent = newContent.slice(0, insertPos) + 
                '\n' + imports.join('\n') +
                newContent.slice(insertPos);
    }
  }
  
  const totalChanges = changes.flex + changes.grid + changes.spaceY;
  
  if (totalChanges > 0) {
    fs.writeFileSync(filePath, newContent, 'utf-8');
  }

  return { changes, totalChanges };
}

// Main
const pagesDir = path.join(__dirname, '..', 'pages');
const files = fs.readdirSync(pagesDir)
  .filter(f => f.endsWith('.tsx'))
  .sort();

console.log('🚀 Ultra Aggressive Refactoring - Final Push to 100%\n');

let totalChanges = {
  flex: 0,
  grid: 0,
  spaceY: 0,
};
let filesChanged = 0;

files.forEach(file => {
  const filePath = path.join(pagesDir, file);
  const { changes, totalChanges: fileTotal } = refactorFile(filePath);
  
  if (fileTotal > 0) {
    console.log(`✓ ${file}: Flex:${changes.flex} Grid:${changes.grid} SpaceY:${changes.spaceY}`);
    totalChanges.flex += changes.flex;
    totalChanges.grid += changes.grid;
    totalChanges.spaceY += changes.spaceY;
    filesChanged++;
  }
});

const grandTotal = totalChanges.flex + totalChanges.grid + totalChanges.spaceY;

console.log(`\n✅ Total: ${filesChanged} files, ${grandTotal} components`);
console.log(`   Flex → Stack: ${totalChanges.flex}`);
console.log(`   Grid: ${totalChanges.grid}`);
console.log(`   Space-y → Stack: ${totalChanges.spaceY}`);

