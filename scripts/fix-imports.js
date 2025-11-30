#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const pagesDir = path.join(__dirname, '..', 'pages');
const files = fs.readdirSync(pagesDir).filter(f => f.endsWith('.tsx'));

let fixed = 0;

files.forEach(file => {
  const filePath = path.join(pagesDir, file);
  let content = fs.readFileSync(filePath, 'utf-8');
  
  // Fix broken imports where new imports were inserted in the middle of an existing import
  const brokenPattern = /import \{([^}]*)\nimport (Stack|Grid|Container|Typography) from/g;
  
  if (brokenPattern.test(content)) {
    console.log(`Fixing: ${file}`);
    
    // Reset regex
    brokenPattern.lastIndex = 0;
    
    content = content.replace(brokenPattern, (match, existingImports, newImport) => {
      return `import {${existingImports}} from 'lucide-react';\nimport ${newImport} from`;
    });
    
    fs.writeFileSync(filePath, content, 'utf-8');
    fixed++;
  }
});

console.log(`\nFixed ${fixed} files`);

