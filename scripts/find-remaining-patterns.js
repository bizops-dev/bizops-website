#!/usr/bin/env node

/**
 * Find Remaining Patterns to Refactor
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const pagesDir = path.join(__dirname, '..', 'pages');
const files = fs.readdirSync(pagesDir).filter(f => f.endsWith('.tsx'));

let stats = {
  divContainers: 0,
  divGrids: 0,
  divFlexes: 0,
  divSpaceY: 0,
  divOther: 0,
};

files.forEach(file => {
  const content = fs.readFileSync(path.join(pagesDir, file), 'utf-8');
  const lines = content.split('\n');
  
  lines.forEach(line => {
    const trimmed = line.trim();
    
    // Count remaining div patterns
    if (trimmed.startsWith('<div className="')) {
      if (trimmed.includes('max-w-') && trimmed.includes('mx-auto')) {
        stats.divContainers++;
      } else if (trimmed.includes('grid ') && !trimmed.includes('<Grid')) {
        stats.divGrids++;
      } else if (trimmed.includes('flex ') && !trimmed.includes('<Stack')) {
        stats.divFlexes++;
      } else if (trimmed.includes('space-y-')) {
        stats.divSpaceY++;
      } else {
        stats.divOther++;
      }
    }
  });
});

console.log('📊 Remaining Patterns Analysis:\n');
console.log(`Container patterns (max-w mx-auto): ${stats.divContainers}`);
console.log(`Grid patterns (grid): ${stats.divGrids}`);
console.log(`Flex patterns (flex): ${stats.divFlexes}`);
console.log(`Space-y patterns (space-y): ${stats.divSpaceY}`);
console.log(`Other div patterns: ${stats.divOther}`);
console.log(`\nTotal remaining divs: ${stats.divContainers + stats.divGrids + stats.divFlexes + stats.divSpaceY + stats.divOther}`);
console.log(`\nEstimated refactorable: ${stats.divContainers + stats.divGrids + stats.divFlexes + stats.divSpaceY}`);
console.log(`\nNote: "Other divs" are structural divs (wrappers, etc) - not refactorable`);

