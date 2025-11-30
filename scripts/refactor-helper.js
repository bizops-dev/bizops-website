#!/usr/bin/env node

/**
 * Refactoring Helper Script
 * Helps identify patterns that can be refactored to use new components
 * 
 * Usage: node scripts/refactor-helper.js [page-path]
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  cyan: '\x1b[36m',
};

/**
 * Analyze file for refactoring opportunities
 */
function analyzeFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const lines = content.split('\n');
  
  const findings = {
    headings: [],
    containers: [],
    grids: [],
    flexLayouts: [],
    gradients: [],
    customTabs: [],
  };

  lines.forEach((line, index) => {
    const lineNum = index + 1;
    
    // Find headings (h1-h6)
    if (/<h[1-6]\s+className/.test(line)) {
      findings.headings.push({ line: lineNum, content: line.trim() });
    }
    
    // Find max-w-7xl containers
    if (/max-w-7xl mx-auto/.test(line)) {
      findings.containers.push({ line: lineNum, content: line.trim() });
    }
    
    // Find grid layouts
    if (/grid grid-cols/.test(line)) {
      findings.grids.push({ line: lineNum, content: line.trim() });
    }
    
    // Find flex layouts
    if (/flex (flex-col|flex-row|items-|justify-)/.test(line)) {
      findings.flexLayouts.push({ line: lineNum, content: line.trim() });
    }
    
    // Find hardcoded gradients
    if (/bg-gradient-to/.test(line)) {
      findings.gradients.push({ line: lineNum, content: line.trim() });
    }
    
    // Find custom tab implementations
    if (/activeTab|setActiveTab/.test(line)) {
      findings.customTabs.push({ line: lineNum, content: line.trim() });
    }
  });

  return findings;
}

/**
 * Print analysis report
 */
function printReport(filePath, findings) {
  console.log(`\n${colors.bright}${colors.blue}📊 Refactoring Analysis Report${colors.reset}`);
  console.log(`${colors.cyan}File: ${filePath}${colors.reset}\n`);

  let totalFindings = 0;

  // Headings
  if (findings.headings.length > 0) {
    console.log(`${colors.yellow}📝 Headings (${findings.headings.length})${colors.reset}`);
    console.log(`   Replace with: ${colors.green}<Typography variant="h1" as="h1">${colors.reset}`);
    findings.headings.slice(0, 3).forEach(f => {
      console.log(`   Line ${f.line}: ${f.content.substring(0, 80)}...`);
    });
    if (findings.headings.length > 3) {
      console.log(`   ... and ${findings.headings.length - 3} more`);
    }
    console.log();
    totalFindings += findings.headings.length;
  }

  // Containers
  if (findings.containers.length > 0) {
    console.log(`${colors.yellow}📦 Containers (${findings.containers.length})${colors.reset}`);
    console.log(`   Replace with: ${colors.green}<Container>${colors.reset}`);
    findings.containers.slice(0, 3).forEach(f => {
      console.log(`   Line ${f.line}: ${f.content.substring(0, 80)}...`);
    });
    if (findings.containers.length > 3) {
      console.log(`   ... and ${findings.containers.length - 3} more`);
    }
    console.log();
    totalFindings += findings.containers.length;
  }

  // Grids
  if (findings.grids.length > 0) {
    console.log(`${colors.yellow}🔲 Grid Layouts (${findings.grids.length})${colors.reset}`);
    console.log(`   Replace with: ${colors.green}<Grid cols={3} gap={6}>${colors.reset}`);
    findings.grids.slice(0, 3).forEach(f => {
      console.log(`   Line ${f.line}: ${f.content.substring(0, 80)}...`);
    });
    if (findings.grids.length > 3) {
      console.log(`   ... and ${findings.grids.length - 3} more`);
    }
    console.log();
    totalFindings += findings.grids.length;
  }

  // Flex Layouts
  if (findings.flexLayouts.length > 0) {
    console.log(`${colors.yellow}↔️  Flex Layouts (${findings.flexLayouts.length})${colors.reset}`);
    console.log(`   Replace with: ${colors.green}<Stack direction="vertical" gap={4}>${colors.reset}`);
    findings.flexLayouts.slice(0, 3).forEach(f => {
      console.log(`   Line ${f.line}: ${f.content.substring(0, 80)}...`);
    });
    if (findings.flexLayouts.length > 3) {
      console.log(`   ... and ${findings.flexLayouts.length - 3} more`);
    }
    console.log();
    totalFindings += findings.flexLayouts.length;
  }

  // Gradients
  if (findings.gradients.length > 0) {
    console.log(`${colors.yellow}🎨 Hardcoded Gradients (${findings.gradients.length})${colors.reset}`);
    console.log(`   Replace with: ${colors.green}{gradients.primary}${colors.reset}`);
    findings.gradients.slice(0, 3).forEach(f => {
      console.log(`   Line ${f.line}: ${f.content.substring(0, 80)}...`);
    });
    if (findings.gradients.length > 3) {
      console.log(`   ... and ${findings.gradients.length - 3} more`);
    }
    console.log();
    totalFindings += findings.gradients.length;
  }

  // Custom Tabs
  if (findings.customTabs.length > 0) {
    console.log(`${colors.yellow}📑 Custom Tab Implementations (${findings.customTabs.length})${colors.reset}`);
    console.log(`   Replace with: ${colors.green}<Tabs tabs={[...]} />${colors.reset}`);
    findings.customTabs.slice(0, 3).forEach(f => {
      console.log(`   Line ${f.line}: ${f.content.substring(0, 80)}...`);
    });
    if (findings.customTabs.length > 3) {
      console.log(`   ... and ${findings.customTabs.length - 3} more`);
    }
    console.log();
    totalFindings += findings.customTabs.length;
  }

  // Summary
  console.log(`${colors.bright}${colors.green}✨ Total Refactoring Opportunities: ${totalFindings}${colors.reset}\n`);

  if (totalFindings === 0) {
    console.log(`${colors.green}✅ No refactoring needed! This file is already using new components.${colors.reset}\n`);
  } else {
    console.log(`${colors.cyan}📚 See REFACTORING_GUIDE.md for detailed instructions${colors.reset}\n`);
  }
}

/**
 * Analyze all pages
 */
function analyzeAllPages() {
  const pagesDir = path.join(__dirname, '..', 'pages');
  const files = fs.readdirSync(pagesDir).filter(f => f.endsWith('.tsx'));

  console.log(`${colors.bright}${colors.blue}🔍 Analyzing ${files.length} pages...${colors.reset}\n`);

  const summary = [];

  files.forEach(file => {
    const filePath = path.join(pagesDir, file);
    const findings = analyzeFile(filePath);
    const total = Object.values(findings).reduce((sum, arr) => sum + arr.length, 0);
    
    if (total > 0) {
      summary.push({ file, total, findings });
    }
  });

  // Sort by total findings (descending)
  summary.sort((a, b) => b.total - a.total);

  // Print summary table
  console.log(`${colors.bright}📊 Refactoring Priority:${colors.reset}\n`);
  console.log('┌─────────────────────────────────┬───────────┐');
  console.log('│ Page                            │ Findings  │');
  console.log('├─────────────────────────────────┼───────────┤');
  
  summary.forEach(({ file, total }) => {
    const fileName = file.padEnd(31);
    const count = total.toString().padStart(9);
    const color = total > 50 ? colors.red : total > 20 ? colors.yellow : colors.green;
    console.log(`│ ${fileName} │ ${color}${count}${colors.reset} │`);
  });
  
  console.log('└─────────────────────────────────┴───────────┘\n');

  const totalAll = summary.reduce((sum, s) => sum + s.total, 0);
  console.log(`${colors.bright}Total refactoring opportunities: ${totalAll}${colors.reset}\n`);
  console.log(`${colors.cyan}Run: node scripts/refactor-helper.js pages/FileName.tsx${colors.reset}`);
  console.log(`${colors.cyan}To see detailed analysis for a specific page${colors.reset}\n`);
}

/**
 * Main function
 */
function main() {
  const args = process.argv.slice(2);

  if (args.length === 0) {
    // Analyze all pages
    analyzeAllPages();
  } else {
    // Analyze specific file
    const filePath = path.resolve(args[0]);
    
    if (!fs.existsSync(filePath)) {
      console.error(`${colors.red}Error: File not found: ${filePath}${colors.reset}`);
      process.exit(1);
    }

    const findings = analyzeFile(filePath);
    printReport(filePath, findings);
  }
}

// Run
main();

