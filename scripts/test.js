#!/usr/bin/env node

/**
 * Test Script
 * 
 * Runs basic tests to verify the skill package is properly configured.
 */

const fs = require('fs');
const path = require('path');

const colors = {
  reset: '\x1b[0m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
};

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

log('\n🧪 Running tests for Prompt Architect skill...\n', 'blue');

let passed = 0;
let failed = 0;

function test(description, fn) {
  try {
    fn();
    log(`✅ ${description}`, 'green');
    passed++;
  } catch (error) {
    log(`❌ ${description}`, 'red');
    log(`   ${error.message}`, 'red');
    failed++;
  }
}

// Tests
test('package.json exists', () => {
  if (!fs.existsSync('package.json')) throw new Error('Not found');
});

test('package.json is valid JSON', () => {
  JSON.parse(fs.readFileSync('package.json', 'utf8'));
});

test('SKILL.md exists', () => {
  if (!fs.existsSync('prompt-architect/SKILL.md')) throw new Error('Not found');
});

test('LICENSE exists', () => {
  if (!fs.existsSync('LICENSE')) throw new Error('Not found');
});

test('README.md exists', () => {
  if (!fs.existsSync('README.md')) throw new Error('Not found');
});

test('CHANGELOG.md exists', () => {
  if (!fs.existsSync('CHANGELOG.md')) throw new Error('Not found');
});

test('All framework files exist', () => {
  const frameworks = [
    'co-star.md',
    'risen.md',
    'rise.md',
    'tidd-ec.md',
    'rtf.md',
    'chain-of-thought.md',
    'chain-of-density.md',
  ];
  frameworks.forEach(f => {
    const fpath = path.join('prompt-architect', 'references', 'frameworks', f);
    if (!fs.existsSync(fpath)) {
      throw new Error(`Framework ${f} not found`);
    }
  });
});

test('All templates exist', () => {
  const templates = [
    'co-star_template.txt',
    'risen_template.txt',
    'rise-ie_template.txt',
    'rise-ix_template.txt',
    'tidd-ec_template.txt',
    'rtf_template.txt',
    'hybrid_template.txt',
  ];
  templates.forEach(t => {
    const tpath = path.join('prompt-architect', 'assets', 'templates', t);
    if (!fs.existsSync(tpath)) {
      throw new Error(`Template ${t} not found`);
    }
  });
});

test('Python scripts exist', () => {
  const scripts = ['framework_analyzer.py', 'prompt_evaluator.py'];
  scripts.forEach(s => {
    const spath = path.join('prompt-architect', 'scripts', s);
    if (!fs.existsSync(spath)) {
      throw new Error(`Script ${s} not found`);
    }
  });
});

test('package.json has required fields', () => {
  const pkg = JSON.parse(fs.readFileSync('package.json', 'utf8'));
  const required = ['name', 'version', 'description', 'main', 'keywords', 'license'];
  required.forEach(field => {
    if (!pkg[field]) throw new Error(`Missing field: ${field}`);
  });
});

test('package.json keywords include "claude-code"', () => {
  const pkg = JSON.parse(fs.readFileSync('package.json', 'utf8'));
  if (!pkg.keywords || !pkg.keywords.includes('claude-code')) {
    throw new Error('Missing "claude-code" keyword');
  }
});

// Summary
log('\n' + '='.repeat(50), 'blue');
log(`Tests completed: ${passed + failed} total`, 'blue');
log(`✅ Passed: ${passed}`, 'green');
if (failed > 0) {
  log(`❌ Failed: ${failed}`, 'red');
  log('='.repeat(50) + '\n', 'blue');
  process.exit(1);
} else {
  log('='.repeat(50), 'blue');
  log('\n✨ All tests passed!\n', 'green');
  process.exit(0);
}
