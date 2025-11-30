#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function fixClosingTags(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');
  const lines = content.split('\n');
  
  // Track all opening Container/Grid/Stack tags and fix their closing
  const tagStack = [];
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmed = line.trim();
    const indent = line.match(/^(\s*)/)[1].length;
    
    // Track opening tags
    if (trimmed.startsWith('<Container')) {
      tagStack.push({ tag: 'Container', indent, line: i });
    } else if (trimmed.startsWith('<Grid ')) {
      tagStack.push({ tag: 'Grid', indent, line: i });
    } else if (trimmed.startsWith('<Stack ')) {
      tagStack.push({ tag: 'Stack', indent, line: i });
    }
    // Fix closing tags
    else if (trimmed === '</div>' && tagStack.length > 0) {
      // Check if this div should be a closing tag for our component
      const last = tagStack[tagStack.length - 1];
      if (indent === last.indent) {
        lines[i] = line.replace('</div>', `</${last.tag}>`);
        tagStack.pop();
      }
    }
    // Track actual closing tags
    else if (trimmed === '</Container>' || trimmed === '</Grid>' || trimmed === '</Stack>') {
      // Remove from stack
      if (tagStack.length > 0) {
        tagStack.pop();
      }
    }
  }
  
  fs.writeFileSync(filePath, lines.join('\n'), 'utf-8');
}

// Fix all pages
const pagesDir = path.join(__dirname, '..', 'pages');
const files = fs.readdirSync(pagesDir)
  .filter(f => f.endsWith('.tsx'))
  .sort();

console.log('🔧 Fixing all closing tags...\n');

files.forEach(file => {
  const filePath = path.join(pagesDir, file);
  fixClosingTags(filePath);
  console.log(`✓ ${file}`);
});

console.log('\n✅ All closing tags fixed!');

