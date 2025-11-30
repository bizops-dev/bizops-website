#!/usr/bin/env node

/**
 * Final Push Refactoring - Remaining Opportunities
 * Target: 100% of 2,320 opportunities
 * Approach: Aggressive but careful
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const colors = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  cyan: '\x1b[36m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
};

function refactorFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');
  let changes = {
    spans: 0,
    divs: 0,
    buttons: 0,
    links: 0,
  };

  const original = content;

  // 1. Refactor span tags with text classes to Typography
  const spanPattern = /<span className="(text-(?:xs|sm|base|lg|xl|2xl|3xl|4xl|5xl)[^"]*)">((?:(?!<span|<\/span).){5,100}?)<\/span>/g;
  content = content.replace(spanPattern, (match, className, text) => {
    // Skip if has complex content
    if (text.includes('<') || text.includes('${') || text.includes('`')) {
      return match;
    }
    
    // Determine variant
    let variant = 'body';
    if (className.includes('text-xs')) variant = 'caption';
    if (className.includes('text-sm')) variant = 'caption';
    if (className.includes('text-lg')) variant = 'body-lg';
    if (className.includes('text-xl')) variant = 'body-xl';
    
    // Keep color classes
    const colorClasses = className.split(' ').filter(c => 
      c.includes('text-') && !c.includes('text-xs') && !c.includes('text-sm') && 
      !c.includes('text-base') && !c.includes('text-lg') && !c.includes('text-xl')
    ).join(' ');
    
    const classAttr = colorClasses ? ` className="${colorClasses}"` : '';
    
    changes.spans++;
    return `<Typography variant="${variant}"${classAttr}>${text.trim()}</Typography>`;
  });

  // 2. Refactor simple div wrappers with only className
  // Pattern: <div className="space-y-X"> or <div className="mb-X">
  const simpleDivPattern = /<div className="((?:space-y-\d+|mb-\d+|mt-\d+))">/g;
  content = content.replace(simpleDivPattern, (match, className) => {
    const spaceMatch = className.match(/space-y-(\d+)/);
    const mbMatch = className.match(/mb-(\d+)/);
    const mtMatch = className.match(/mt-(\d+)/);
    
    if (spaceMatch) {
      changes.divs++;
      return `<Stack direction="col" gap={${spaceMatch[1]}}>`;
    }
    
    return match; // Keep other patterns as-is
  });

  // 3. Refactor remaining <p> tags without className
  const plainPPattern = /<p>((?:(?!<p|<\/p).){10,200}?)<\/p>/g;
  content = content.replace(plainPPattern, (match, text) => {
    // Skip if has complex content
    if (text.includes('<Link') || text.includes('<Button') || text.includes('<Typography')) {
      return match;
    }
    
    changes.spans++;
    return `<Typography variant="body">${text.trim()}</Typography>`;
  });

  // 4. Count remaining opportunities for reporting
  const remainingHeadings = (content.match(/<h[1-6][^>]*>/g) || []).length;
  const remainingPs = (content.match(/<p[^>]*>/g) || []).length;
  const remainingDivs = (content.match(/<div className="(?:max-w-|grid |flex )/g) || []).length;

  // Add imports if needed
  const needsTypography = content.includes('<Typography') && !original.includes('<Typography');
  const needsStack = content.includes('<Stack') && !original.includes('<Stack');

  const imports = [];
  if (needsTypography && !content.includes("import Typography from '../components/Typography'")) {
    imports.push("import Typography from '../components/Typography';");
  }
  if (needsStack && !content.includes("import Stack from '../components/Stack'")) {
    imports.push("import Stack from '../components/Stack';");
  }

  if (imports.length > 0) {
    const lastImportMatch = content.match(/\nimport [^;]+;(?=\n(?!import))/);
    if (lastImportMatch) {
      const insertPos = lastImportMatch.index + lastImportMatch[0].length;
      content = content.slice(0, insertPos) + 
                '\n' + imports.join('\n') +
                content.slice(insertPos);
    }
  }

  const totalChanges = changes.spans + changes.divs + changes.buttons + changes.links;
  
  if (totalChanges > 0) {
    fs.writeFileSync(filePath, content, 'utf-8');
  }

  return { 
    changes, 
    totalChanges,
    remaining: {
      headings: remainingHeadings,
      paragraphs: remainingPs,
      divs: remainingDivs,
    }
  };
}

// Main
const pagesDir = path.join(__dirname, '..', 'pages');
const files = fs.readdirSync(pagesDir)
  .filter(f => f.endsWith('.tsx'))
  .sort();

console.log(`${colors.cyan}${colors.blue}🚀 Final Push - Target 100% (2,320 opportunities)${colors.reset}\n`);
console.log(`${colors.cyan}Processing ${files.length} pages...${colors.reset}\n`);

let totalChanges = {
  spans: 0,
  divs: 0,
  buttons: 0,
  links: 0,
};
let totalRemaining = {
  headings: 0,
  paragraphs: 0,
  divs: 0,
};
let filesChanged = 0;

files.forEach((file, i) => {
  const filePath = path.join(pagesDir, file);
  const { changes, totalChanges: fileTotal, remaining } = refactorFile(filePath);
  
  if (fileTotal > 0) {
    console.log(`${colors.green}✓ ${file}${colors.reset}`);
    if (changes.spans > 0) console.log(`  ${colors.magenta}├─${colors.reset} ${changes.spans} spans/paragraphs`);
    if (changes.divs > 0) console.log(`  ${colors.magenta}├─${colors.reset} ${changes.divs} divs`);
    if (changes.buttons > 0) console.log(`  ${colors.magenta}├─${colors.reset} ${changes.buttons} buttons`);
    if (changes.links > 0) console.log(`  ${colors.magenta}└─${colors.reset} ${changes.links} links`);
    
    totalChanges.spans += changes.spans;
    totalChanges.divs += changes.divs;
    totalChanges.buttons += changes.buttons;
    totalChanges.links += changes.links;
    filesChanged++;
  } else {
    console.log(`${colors.yellow}○ ${file}${colors.reset}`);
  }
  
  totalRemaining.headings += remaining.headings;
  totalRemaining.paragraphs += remaining.paragraphs;
  totalRemaining.divs += remaining.divs;
});

const grandTotal = totalChanges.spans + totalChanges.divs + totalChanges.buttons + totalChanges.links;

console.log(`\n${colors.green}${colors.blue}✨ Complete!${colors.reset}`);
console.log(`${colors.cyan}Files changed: ${filesChanged}/${files.length}${colors.reset}`);
console.log(`${colors.cyan}Total changes: ${grandTotal}${colors.reset}`);
console.log(`  ${colors.magenta}├─${colors.reset} Spans/Paragraphs: ${totalChanges.spans}`);
console.log(`  ${colors.magenta}├─${colors.reset} Divs: ${totalChanges.divs}`);
console.log(`  ${colors.magenta}├─${colors.reset} Buttons: ${totalChanges.buttons}`);
console.log(`  ${colors.magenta}└─${colors.reset} Links: ${totalChanges.links}`);

console.log(`\n${colors.yellow}Remaining Opportunities:${colors.reset}`);
console.log(`  ${colors.magenta}├─${colors.reset} Headings: ${totalRemaining.headings}`);
console.log(`  ${colors.magenta}├─${colors.reset} Paragraphs: ${totalRemaining.paragraphs}`);
console.log(`  ${colors.magenta}└─${colors.reset} Divs (Container/Grid): ${totalRemaining.divs}`);

const estimatedTotal = 1118 + grandTotal;
const estimatedPercentage = Math.round((estimatedTotal / 2320) * 100);

console.log(`\n${colors.cyan}Estimated Total: ${estimatedTotal} / 2,320 (${estimatedPercentage}%)${colors.reset}`);

