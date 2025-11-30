#!/usr/bin/env node

/**
 * Complete All Refactoring - 2,320 Opportunities
 * Aggressive but safe approach for ALL patterns
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
    headings: 0,
    paragraphs: 0,
    containers: 0,
    flexboxes: 0,
  };

  const original = content;

  // 1. ALL remaining headings (very aggressive)
  const headingPatterns = [
    { regex: /<h1([^>]*)>((?:(?!<\/h1>).)*?)<\/h1>/gs, variant: 'h1', level: 1 },
    { regex: /<h2([^>]*)>((?:(?!<\/h2>).)*?)<\/h2>/gs, variant: 'h2', level: 2 },
    { regex: /<h3([^>]*)>((?:(?!<\/h3>).)*?)<\/h3>/gs, variant: 'h3', level: 3 },
    { regex: /<h4([^>]*)>((?:(?!<\/h4>).)*?)<\/h4>/gs, variant: 'h4', level: 4 },
    { regex: /<h5([^>]*)>((?:(?!<\/h5>).)*?)<\/h5>/gs, variant: 'h5', level: 5 },
    { regex: /<h6([^>]*)>((?:(?!<\/h6>).)*?)<\/h6>/gs, variant: 'h6', level: 6 },
  ];

  headingPatterns.forEach(({ regex, variant, level }) => {
    content = content.replace(regex, (match, attrs, innerContent) => {
      // Skip if already Typography
      if (innerContent.includes('<Typography')) {
        return match;
      }
      
      // Skip if too complex (has other heading tags inside)
      if (innerContent.match(/<h[1-6]/)) {
        return match;
      }
      
      // Extract className
      const classMatch = attrs.match(/className="([^"]*)"/);
      const classes = classMatch ? classMatch[1].split(' ').filter(c => 
        c.includes('text-') || 
        c.includes('font-') ||
        c.includes('leading-') ||
        c.includes('tracking-') ||
        c.includes('dark:')
      ).join(' ') : '';
      
      const classAttr = classes ? ` className="${classes}"` : '';
      
      changes.headings++;
      return `<Typography variant="${variant}" as="h${level}"${classAttr}>${innerContent.trim()}</Typography>`;
    });
  });

  // 2. ALL remaining paragraphs
  const paragraphPattern = /<p([^>]*)>((?:(?!<\/p>).){10,500}?)<\/p>/gs;
  content = content.replace(paragraphPattern, (match, attrs, innerContent) => {
    // Skip if already Typography or has complex content
    if (innerContent.includes('<Typography') || innerContent.includes('<Link') || innerContent.includes('<Button')) {
      return match;
    }
    
    // Extract className
    const classMatch = attrs.match(/className="([^"]*)"/);
    let variant = 'body';
    let classes = '';
    
    if (classMatch) {
      const allClasses = classMatch[1];
      if (allClasses.includes('text-lg')) variant = 'body-lg';
      if (allClasses.includes('text-xl')) variant = 'body-xl';
      if (allClasses.includes('text-sm')) variant = 'caption';
      
      classes = allClasses.split(' ').filter(c => 
        c.includes('text-slate') || 
        c.includes('text-primary') ||
        c.includes('dark:text') ||
        c.includes('leading-') ||
        c.includes('tracking-')
      ).join(' ');
    }
    
    const classAttr = classes ? ` className="${classes}"` : '';
    
    changes.paragraphs++;
    return `<Typography variant="${variant}"${classAttr}>${innerContent.trim()}</Typography>`;
  });

  // 3. Simple max-w containers (safe pattern)
  const containerPattern = /<div className="(max-w-(?:7xl|6xl|5xl|4xl|3xl|2xl|xl) mx-auto px-4[^"]*)">/g;
  content = content.replace(containerPattern, (match, className) => {
    // Keep only non-container classes
    const classes = className.split(' ').filter(c => 
      !c.includes('max-w') && 
      !c.includes('mx-auto') && 
      !c.includes('px-') &&
      !c.includes('sm:px-') &&
      !c.includes('lg:px-')
    );
    
    const classAttr = classes.length > 0 ? ` className="${classes.join(' ')}"` : '';
    changes.containers++;
    return `<Container${classAttr}>`;
  });

  // 4. Simple flex containers (safe pattern only)
  const flexPattern = /<div className="(flex (?:flex-col |flex-row )?(?:gap-\d+ )?(?:items-\w+ )?(?:justify-\w+ )?)">/g;
  content = content.replace(flexPattern, (match, className) => {
    // Parse flex properties
    const directionMatch = className.match(/flex-(col|row)/);
    const gapMatch = className.match(/gap-(\d+)/);
    const alignMatch = className.match(/items-(\w+)/);
    const justifyMatch = className.match(/justify-(\w+)/);
    
    if (!directionMatch) return match; // Skip if no direction
    
    const direction = directionMatch[1] === 'col' ? 'col' : 'row';
    const gap = gapMatch ? gapMatch[1] : '4';
    const align = alignMatch ? alignMatch[1] : undefined;
    const justify = justifyMatch ? justifyMatch[1] : undefined;
    
    let props = `direction="${direction}" gap={${gap}}`;
    if (align) props += ` align="${align}"`;
    if (justify) props += ` justify="${justify}"`;
    
    changes.flexboxes++;
    return `<Stack ${props}>`;
  });

  // Add imports if needed
  const needsTypography = content.includes('<Typography') && !original.includes('<Typography');
  const needsContainer = content.includes('<Container') && !original.includes('<Container');
  const needsStack = content.includes('<Stack') && !original.includes('<Stack');

  const imports = [];
  if (needsTypography && !content.includes("import Typography from '../components/Typography'")) {
    imports.push("import Typography from '../components/Typography';");
  }
  if (needsContainer && !content.includes("import Container from '../components/Container'")) {
    imports.push("import Container from '../components/Container';");
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

  const totalChanges = changes.headings + changes.paragraphs + changes.containers + changes.flexboxes;
  
  if (totalChanges > 0) {
    fs.writeFileSync(filePath, content, 'utf-8');
  }

  return { changes, totalChanges };
}

// Main
const pagesDir = path.join(__dirname, '..', 'pages');
const files = fs.readdirSync(pagesDir)
  .filter(f => f.endsWith('.tsx'))
  .sort();

console.log(`${colors.cyan}${colors.blue}🚀 Complete All Refactoring - 2,320 Opportunities${colors.reset}\n`);
console.log(`${colors.cyan}Processing ${files.length} pages...${colors.reset}\n`);

let totalChanges = {
  headings: 0,
  paragraphs: 0,
  containers: 0,
  flexboxes: 0,
};
let filesChanged = 0;

files.forEach((file, i) => {
  const filePath = path.join(pagesDir, file);
  const { changes, totalChanges: fileTotal } = refactorFile(filePath);
  
  if (fileTotal > 0) {
    console.log(`${colors.green}✓ ${file}${colors.reset}`);
    if (changes.headings > 0) console.log(`  ${colors.magenta}├─${colors.reset} ${changes.headings} headings`);
    if (changes.paragraphs > 0) console.log(`  ${colors.magenta}├─${colors.reset} ${changes.paragraphs} paragraphs`);
    if (changes.containers > 0) console.log(`  ${colors.magenta}├─${colors.reset} ${changes.containers} containers`);
    if (changes.flexboxes > 0) console.log(`  ${colors.magenta}└─${colors.reset} ${changes.flexboxes} flexboxes`);
    
    totalChanges.headings += changes.headings;
    totalChanges.paragraphs += changes.paragraphs;
    totalChanges.containers += changes.containers;
    totalChanges.flexboxes += changes.flexboxes;
    filesChanged++;
  } else {
    console.log(`${colors.yellow}○ ${file}${colors.reset}`);
  }
});

const grandTotal = totalChanges.headings + totalChanges.paragraphs + totalChanges.containers + totalChanges.flexboxes;

console.log(`\n${colors.green}${colors.blue}✨ Complete!${colors.reset}`);
console.log(`${colors.cyan}Files changed: ${filesChanged}/${files.length}${colors.reset}`);
console.log(`${colors.cyan}Total changes: ${grandTotal}${colors.reset}`);
console.log(`  ${colors.magenta}├─${colors.reset} Headings: ${totalChanges.headings}`);
console.log(`  ${colors.magenta}├─${colors.reset} Paragraphs: ${totalChanges.paragraphs}`);
console.log(`  ${colors.magenta}├─${colors.reset} Containers: ${totalChanges.containers}`);
console.log(`  ${colors.magenta}└─${colors.reset} Flexboxes: ${totalChanges.flexboxes}`);

