#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function fixClosingTags(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');
  const lines = content.split('\n');
  
  // Replace all </div> with </Container> where Container is open
  const tagStack = [];
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmed = line.trim();
    const indent = line.match(/^(\s*)/)[1].length;
    
    // Track opening tags
    if (trimmed.startsWith('<Container')) {
      tagStack.push({ tag: 'Container', indent, line: i });
    } else if (trimmed.startsWith('<Stack ')) {
      tagStack.push({ tag: 'Stack', indent, line: i });
    } else if (trimmed.startsWith('<Grid ')) {
      tagStack.push({ tag: 'Grid', indent, line: i });
    }
    // Fix closing tags
    else if (trimmed === '</div>' && tagStack.length > 0) {
      const last = tagStack[tagStack.length - 1];
      if (indent === last.indent) {
        lines[i] = line.replace('</div>', `</${last.tag}>`);
        tagStack.pop();
      }
    }
    // Track self-closing
    else if (trimmed.includes('</Container>')) {
      // Remove from stack if exists
      for (let j = tagStack.length - 1; j >= 0; j--) {
        if (tagStack[j].tag === 'Container' && tagStack[j].indent === indent) {
          tagStack.splice(j, 1);
          break;
        }
      }
    }
  }
  
  fs.writeFileSync(filePath, lines.join('\n'), 'utf-8');
}

// Auto-fix loop
let maxAttempts = 30;
let attempt = 0;

while (attempt < maxAttempts) {
  attempt++;
  console.log(`Attempt ${attempt}...`);
  
  try {
    execSync('npm run build', { 
      stdio: 'pipe', 
      cwd: path.join(__dirname, '..'),
      encoding: 'utf-8'
    });
    console.log('✓ Build successful!');
    break;
  } catch (error) {
    const output = error.stdout || error.stderr || '';
    
    // Extract file with error
    const errorMatch = output.match(/\/pages\/([^:]+\.tsx):\d+:\d+: ERROR:/);
    
    if (errorMatch) {
      const fileName = errorMatch[1];
      const filePath = path.join(__dirname, '..', 'pages', fileName);
      
      console.log(`  Fixing ${fileName}...`);
      fixClosingTags(filePath);
    } else {
      console.log('No more fixable errors');
      break;
    }
  }
}

console.log(`\nCompleted in ${attempt} attempts`);

