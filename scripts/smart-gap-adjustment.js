#!/usr/bin/env node

/**
 * Smart Gap Adjustment
 * Reduces aggressive gaps for smaller elements
 */

import { readdirSync, readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

const pagesDir = 'pages';
const files = readdirSync(pagesDir).filter(f => f.endsWith('.tsx'));

let totalFixed = 0;
let gapsReduced = 0;

console.log('🧠 Smart Gap Adjustment - Starting...\n');

files.forEach(file => {
  const filePath = join(pagesDir, file);
  let content = readFileSync(filePath, 'utf-8');
  let changed = false;
  
  // Strategy:
  // Look for className="..." containing 'flex' and 'gap-4'
  // If it also has 'text-xs' or 'text-sm', change to 'gap-2'
  
  content = content.replace(
    /className="([^"]*)"/g,
    (match, className) => {
      // Check if it has flex and gap-4
      if (className.includes('flex') && className.includes('gap-4')) {
        // Condition 1: Small text context (tags, metadata)
        if (className.includes('text-xs') || className.includes('text-sm')) {
          gapsReduced++;
          changed = true;
          return `className="${className.replace('gap-4', 'gap-2')}"`;
        }
        
        // Condition 2: Navigation links or major sections usually want wider gaps?
        // No, keep gap-4 as default, but maybe gap-6 for large text?
        // For now, only reducing is safe.
        
        // Condition 3: "items-center" often implies icon+text which needs smaller gap
        // But also used for navbars. Hard to distinguish without DOM context.
        // Let's stick to text size heuristic.
      }
      return match;
    }
  );
  
  if (changed) {
    writeFileSync(filePath, content);
    totalFixed++;
    console.log(`✅ Fixed: ${file}`);
  }
});

console.log(`\n📊 Summary:`);
console.log(`   Gaps reduced (4 -> 2): ${gapsReduced}`);
console.log(`\n🎉 Total files fixed: ${totalFixed}`);

