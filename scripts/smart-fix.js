#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function smartFixFile(filePath, errorLines) {
  let content = fs.readFileSync(filePath, 'utf-8');
  const lines = content.split('\n');
  
  // Sort error lines in reverse order to fix from bottom to top
  errorLines.sort((a, b) => b - a);
  
  errorLines.forEach(lineNum => {
    const line = lines[lineNum - 1]; // 0-indexed
    
    if (line && line.includes('</div>')) {
      // Check what opening tag is expected
      // Look backwards for unclosed Container or Grid
      let openTag = null;
      let openIndent = null;
      const currentIndent = line.match(/^(\s*)/)[1].length;
      
      for (let i = lineNum - 2; i >= 0; i--) {
        const prevLine = lines[i];
        const prevIndent = prevLine.match(/^(\s*)/)[1].length;
        
        if (prevIndent === currentIndent) {
          if (prevLine.includes('<Container') && !prevLine.includes('</Container>')) {
            openTag = 'Container';
            break;
          }
          if (prevLine.includes('<Grid ') && !prevLine.includes('</Grid>')) {
            openTag = 'Grid';
            break;
          }
        }
      }
      
      if (openTag) {
        lines[lineNum - 1] = line.replace('</div>', `</${openTag}>`);
      }
    }
  });
  
  fs.writeFileSync(filePath, lines.join('\n'), 'utf-8');
}

// Auto-fix loop
let maxAttempts = 50;
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
    
    // Extract all errors
    const errorRegex = /\/pages\/([^:]+\.tsx):(\d+):\d+: ERROR: Expected closing "div" tag to match opening "(\w+)" tag/g;
    const errors = {};
    let match;
    
    while ((match = errorRegex.exec(output)) !== null) {
      const [, fileName, lineNum, expectedTag] = match;
      if (!errors[fileName]) {
        errors[fileName] = [];
      }
      errors[fileName].push(parseInt(lineNum));
    }
    
    if (Object.keys(errors).length === 0) {
      console.log('No fixable errors found');
      console.log(output);
      break;
    }
    
    // Fix each file
    for (const [fileName, errorLines] of Object.entries(errors)) {
      const filePath = path.join(__dirname, '..', 'pages', fileName);
      console.log(`  Fixing ${fileName} (${errorLines.length} errors)`);
      smartFixFile(filePath, errorLines);
    }
  }
}

console.log(`\nCompleted in ${attempt} attempts`);

