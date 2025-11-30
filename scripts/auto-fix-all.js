#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function fixFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');
  let changes = 0;

  // Simple approach: Track opening tags and fix their closing
  const lines = content.split('\n');
  const tagStack = [];
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmed = line.trim();
    
    // Opening Container
    if (trimmed.startsWith('<Container')) {
      tagStack.push({ tag: 'Container', indent: line.match(/^(\s*)/)[1].length, line: i });
    }
    // Opening Grid
    else if (trimmed.startsWith('<Grid ')) {
      tagStack.push({ tag: 'Grid', indent: line.match(/^(\s*)/)[1].length, line: i });
    }
    // Closing </div>
    else if (trimmed === '</div>') {
      if (tagStack.length > 0) {
        const currentIndent = line.match(/^(\s*)/)[1].length;
        const last = tagStack[tagStack.length - 1];
        
        // If indent matches, this is probably the closing tag
        if (currentIndent === last.indent) {
          lines[i] = line.replace('</div>', `</${last.tag}>`);
          tagStack.pop();
          changes++;
        }
      }
    }
  }

  if (changes > 0) {
    fs.writeFileSync(filePath, lines.join('\n'), 'utf-8');
  }
  
  return changes;
}

// Keep trying to build and fix errors
let maxAttempts = 20;
let attempt = 0;

while (attempt < maxAttempts) {
  attempt++;
  console.log(`\nAttempt ${attempt}/${maxAttempts}...`);
  
  try {
    execSync('npm run build', { stdio: 'pipe', cwd: path.join(__dirname, '..') });
    console.log('✓ Build successful!');
    break;
  } catch (error) {
    const output = error.stdout?.toString() || error.stderr?.toString() || '';
    
    // Extract file with error
    const errorMatch = output.match(/\/pages\/([^:]+\.tsx):\d+:\d+: ERROR:/);
    
    if (errorMatch) {
      const fileName = errorMatch[1];
      const filePath = path.join(__dirname, '..', 'pages', fileName);
      
      console.log(`Fixing: ${fileName}`);
      const changes = fixFile(filePath);
      console.log(`  Fixed ${changes} closing tags`);
      
      if (changes === 0) {
        console.log('  No automatic fix available');
        break;
      }
    } else {
      console.log('No more errors to fix');
      break;
    }
  }
}

if (attempt >= maxAttempts) {
  console.log('\n⚠️  Max attempts reached. Manual review needed.');
} else {
  console.log('\n✓ All errors fixed!');
}

