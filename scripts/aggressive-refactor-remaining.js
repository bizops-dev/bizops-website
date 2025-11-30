#!/usr/bin/env node

/**
 * Aggressive Refactoring - Remaining Patterns
 * Refactor ALL remaining Container, Grid, Stack patterns
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function refactorFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');
  let changes = {
    containers: 0,
    grids: 0,
    stacks: 0,
  };

  const lines = content.split('\n');
  const newLines = [];
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmed = line.trim();
    const indent = line.match(/^(\s*)/)[1];
    
    // 1. Remaining Containers (more patterns)
    if (trimmed.match(/^<div className="[^"]*max-w-[^"]*mx-auto[^"]*">/)) {
      const classMatch = line.match(/className="([^"]*)"/);
      if (classMatch) {
        const fullClass = classMatch[1];
        const sizeMatch = fullClass.match(/max-w-(7xl|6xl|5xl|4xl|3xl|2xl|xl)/);
        const size = sizeMatch ? sizeMatch[1] : 'xl';
        
        const additionalClasses = fullClass.split(' ').filter(c => 
          !c.includes('max-w') && 
          !c.includes('mx-auto') && 
          !c.match(/^px-/) &&
          !c.match(/^sm:px-/) &&
          !c.match(/^lg:px-/)
        );
        
        const classAttr = additionalClasses.length > 0 ? ` className="${additionalClasses.join(' ')}"` : '';
        const sizeAttr = size !== 'xl' ? ` size="${size}"` : '';
        
        newLines.push(`${indent}<Container${sizeAttr}${classAttr}>`);
        changes.containers++;
        continue;
      }
    }
    
    // 2. Remaining Grids (more patterns)
    if (trimmed.match(/^<div className="[^"]*grid[^"]*">/)) {
      const classMatch = line.match(/className="([^"]*)"/);
      if (classMatch) {
        const fullClass = classMatch[1];
        
        if (fullClass.includes('grid ') || fullClass.startsWith('grid ')) {
          const lgColsMatch = fullClass.match(/lg:grid-cols-(\d+)/);
          const mdColsMatch = fullClass.match(/md:grid-cols-(\d+)/);
          const baseColsMatch = fullClass.match(/grid-cols-(\d+)/);
          const gapMatch = fullClass.match(/gap-(\d+)/);
          
          if (lgColsMatch || mdColsMatch || baseColsMatch) {
            const cols = lgColsMatch ? lgColsMatch[1] : (mdColsMatch ? mdColsMatch[1] : (baseColsMatch ? baseColsMatch[1] : '3'));
            const gap = gapMatch ? gapMatch[1] : '6';
            
            const additionalClasses = fullClass.split(' ').filter(c => 
              !c.includes('grid') && 
              !c.includes('gap-') &&
              !c.includes('cols-')
            );
            
            const classAttr = additionalClasses.length > 0 ? ` className="${additionalClasses.join(' ')}"` : '';
            
            newLines.push(`${indent}<Grid cols={${cols}} gap={${gap}}${classAttr}>`);
            changes.grids++;
            continue;
          }
        }
      }
    }
    
    // 3. Remaining Stacks (flex patterns)
    if (trimmed.match(/^<div className="[^"]*flex[^"]*">/)) {
      const classMatch = line.match(/className="([^"]*)"/);
      if (classMatch) {
        const fullClass = classMatch[1];
        
        const dirMatch = fullClass.match(/flex-(col|row)/);
        const gapMatch = fullClass.match(/gap-(\d+)/);
        
        if (dirMatch && gapMatch) {
          const direction = dirMatch[1];
          const gap = gapMatch[1];
          
          const additionalClasses = fullClass.split(' ').filter(c => 
            !c.includes('flex') && 
            !c.includes('gap-')
          );
          
          const classAttr = additionalClasses.length > 0 ? ` className="${additionalClasses.join(' ')}"` : '';
          
          newLines.push(`${indent}<Stack direction="${direction}" gap={${gap}}${classAttr}>`);
          changes.stacks++;
          continue;
        }
      }
    }
    
    // 4. Space-y patterns to Stack
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
          changes.stacks++;
          continue;
        }
      }
    }
    
    newLines.push(line);
  }
  
  let newContent = newLines.join('\n');
  
  // Add imports if needed
  const needsContainer = changes.containers > 0 && !content.includes("import Container from '../components/Container'");
  const needsGrid = changes.grids > 0 && !content.includes("import Grid from '../components/Grid'");
  const needsStack = changes.stacks > 0 && !content.includes("import Stack from '../components/Stack'");
  
  const imports = [];
  if (needsContainer) imports.push("import Container from '../components/Container';");
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
  
  const totalChanges = changes.containers + changes.grids + changes.stacks;
  
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

console.log('🚀 Aggressive Refactoring - Remaining Patterns\n');

let totalChanges = {
  containers: 0,
  grids: 0,
  stacks: 0,
};
let filesChanged = 0;

files.forEach(file => {
  const filePath = path.join(pagesDir, file);
  const { changes, totalChanges: fileTotal } = refactorFile(filePath);
  
  if (fileTotal > 0) {
    console.log(`✓ ${file}: C:${changes.containers} G:${changes.grids} S:${changes.stacks}`);
    totalChanges.containers += changes.containers;
    totalChanges.grids += changes.grids;
    totalChanges.stacks += changes.stacks;
    filesChanged++;
  }
});

const grandTotal = totalChanges.containers + totalChanges.grids + totalChanges.stacks;

console.log(`\n✅ Total: ${filesChanged} files, ${grandTotal} components`);
console.log(`   Containers: ${totalChanges.containers}`);
console.log(`   Grids: ${totalChanges.grids}`);
console.log(`   Stacks: ${totalChanges.stacks}`);

