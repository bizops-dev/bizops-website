#!/usr/bin/env node

/**
 * Final Push to 100%
 * Find and refactor ALL remaining refactorable patterns
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const pagesDir = path.join(__dirname, '..', 'pages');
const files = fs.readdirSync(pagesDir).filter(f => f.endsWith('.tsx'));

console.log('🔍 Finding ALL remaining refactorable patterns...\n');

let patterns = {
  'h1-h6 not Typography': 0,
  'p not Typography': 0,
  'span with text not Typography': 0,
  'div with max-w mx-auto not Container': 0,
  'div with grid not Grid': 0,
  'div with flex not Stack': 0,
  'div with space-y not Stack': 0,
};

files.forEach(file => {
  const content = fs.readFileSync(path.join(pagesDir, file), 'utf-8');
  const lines = content.split('\n');
  
  lines.forEach((line, idx) => {
    const trimmed = line.trim();
    
    // Count remaining patterns
    if (trimmed.match(/^<h[1-6][>\s]/) && !line.includes('Typography')) {
      patterns['h1-h6 not Typography']++;
      console.log(`${file}:${idx+1} - <h*> tag`);
    }
    if (trimmed.match(/^<p[>\s]/) && !line.includes('Typography')) {
      patterns['p not Typography']++;
      console.log(`${file}:${idx+1} - <p> tag`);
    }
    if (trimmed.match(/^<span[>\s]/) && trimmed.includes('className') && !line.includes('Typography')) {
      patterns['span with text not Typography']++;
    }
    if (trimmed.match(/^<div className="[^"]*max-w-[^"]*mx-auto/) && !line.includes('Container')) {
      patterns['div with max-w mx-auto not Container']++;
      console.log(`${file}:${idx+1} - Container pattern`);
    }
    if (trimmed.match(/^<div className="[^"]*grid[^"]*"/) && !line.includes('Grid')) {
      patterns['div with grid not Grid']++;
      console.log(`${file}:${idx+1} - Grid pattern`);
    }
    if (trimmed.match(/^<div className="[^"]*flex[^"]*"/) && !line.includes('Stack')) {
      patterns['div with flex not Stack']++;
      console.log(`${file}:${idx+1} - Flex pattern`);
    }
    if (trimmed.match(/^<div className="[^"]*space-y-/) && !line.includes('Stack')) {
      patterns['div with space-y not Stack']++;
      console.log(`${file}:${idx+1} - Space-y pattern`);
    }
  });
});

console.log('\n📊 Summary of Remaining Refactorable Patterns:\n');
Object.entries(patterns).forEach(([key, count]) => {
  if (count > 0) {
    console.log(`${key}: ${count}`);
  }
});

const total = Object.values(patterns).reduce((a, b) => a + b, 0);
console.log(`\n🎯 Total remaining refactorable: ${total}`);
console.log(`\n💡 Target: ${2320 - 2233} = 87 components to reach 100%`);

