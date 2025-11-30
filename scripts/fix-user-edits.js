#!/usr/bin/env node

/**
 * Fix User Manual Edits - Replace wrong closing tags
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filesToFix = [
  'pages/HomePage.tsx',
  'pages/TimelineGeneratorPage.tsx',
  'pages/TechnologyPage.tsx',
  'pages/ROIPage.tsx'
];

filesToFix.forEach(file => {
  const filePath = path.join(__dirname, '..', file);
  let content = fs.readFileSync(filePath, 'utf-8');
  
  // Replace all </div> that should be </Stack>
  // This is a simple heuristic: if previous line has <Stack, closing should be </Stack>
  const lines = content.split('\n');
  const newLines = [];
  
  for (let i = 0; i < lines.length; i++) {
    let line = lines[i];
    
    // If current line has </div> and previous non-empty line has <Stack
    if (line.trim() === '</div>' || line.trim().startsWith('</div>')) {
      // Look back for opening tag
      for (let j = i - 1; j >= 0; j--) {
        const prevLine = lines[j].trim();
        if (prevLine.includes('<Stack ')) {
          // Found opening Stack, replace closing div with Stack
          line = line.replace('</div>', '</Stack>');
          break;
        } else if (prevLine.includes('<div ') || prevLine.includes('<Grid ') || prevLine.includes('<Container ')) {
          // Found other opening tag, keep as div
          break;
        }
      }
    }
    
    newLines.push(line);
  }
  
  fs.writeFileSync(filePath, newLines.join('\n'), 'utf-8');
  console.log(`✓ Fixed ${file}`);
});

console.log('\n✅ All user edits fixed!');

