#!/usr/bin/env node

/**
 * Fix Nested Containers (Double Padding)
 * Finds nested <Container> components and adds noPadding to the inner ones
 */

import { readdirSync, readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

const pagesDir = 'pages';
const files = readdirSync(pagesDir).filter(f => f.endsWith('.tsx'));

let totalFixed = 0;

console.log('🏗️  Fixing Nested Containers...\n');

files.forEach(file => {
  const filePath = join(pagesDir, file);
  let content = readFileSync(filePath, 'utf-8');
  let originalContent = content;
  
  // Strategy: 
  // We can't easily parse full XML tree with regex.
  // But we can look for specific patterns we know exist in the codebase:
  // <Container ...>
  //    <Container ...>
  
  // Or:
  // <Container size="...">
  //    <Container size="...">
  
  // We will simply regex for <Container ...> that is indented more than the previous <Container ...>? 
  // No, indentation is unreliable if minified/formatted.
  
  // Better heuristic:
  // Split by lines. Maintain a "container depth".
  // If depth > 0, any new <Container> gets `noPadding`.
  
  const lines = content.split('\n');
  let depth = 0;
  let changed = false;
  
  const newLines = lines.map(line => {
    // Check for closing container (naive, assumes </Container> is on its own line or at end)
    // This is risky if multiple containers on one line.
    // Let's assume Prettier-formatted code where tags are usually on new lines or distinct.
    
    // Count occurrences in line
    const openMatches = (line.match(/<Container/g) || []).length;
    const closeMatches = (line.match(/<\/Container>/g) || []).length;
    
    let processedLine = line;
    
    if (openMatches > 0) {
        // If we are already inside a container, and this line has an opening container
        if (depth > 0) {
            // Add noPadding if not present
            if (!line.includes('noPadding')) {
                processedLine = line.replace('<Container', '<Container noPadding');
                changed = true;
            }
        }
    }
    
    // Update depth for next lines
    // Note: This naive depth tracking assumes no self-closing containers for now, 
    // or checks for />
    const selfClosingMatches = (line.match(/<Container[^>]*\/>/g) || []).length;
    
    // Net change in depth
    // Opening tags that aren't self-closing increase depth
    // Closing tags decrease depth
    // Self-closing tags don't change depth (open + close immediately)
    
    const effectiveOpens = openMatches - selfClosingMatches;
    depth += (effectiveOpens - closeMatches);
    
    // Safety clamp (shouldn't happen if balanced)
    if (depth < 0) depth = 0;
    
    return processedLine;
  });
  
  if (changed) {
    writeFileSync(filePath, newLines.join('\n'));
    totalFixed++;
    console.log(`✅ Fixed: ${file}`);
  }
});

console.log(`\n🎉 Total files fixed: ${totalFixed}`);

