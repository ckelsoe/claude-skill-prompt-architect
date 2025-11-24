#!/usr/bin/env node

/**
 * Publish Helper Script
 * 
 * Interactive script to help publish the Prompt Architect skill to npm.
 * Performs pre-publish checks, validation, and guides through the process.
 * 
 * Usage:
 *   npm run publish
 *   node scripts/publish.js
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
const readline = require('readline');

// Colors
const colors = {
  reset: '\x1b[0m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  cyan: '\x1b[36m',
  bold: '\x1b[1m',
};

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function question(query) {
  return new Promise(resolve => rl.question(query, resolve));
}

async function main() {
  log('\n' + '='.repeat(60), 'cyan');
  log('  📦 Prompt Architect - npm Publish Helper', 'cyan');
  log('='.repeat(60) + '\n', 'cyan');

  try {
    // Step 1: Check if logged into npm
    log('Step 1: Checking npm authentication...', 'blue');
    try {
      const npmUser = execSync('npm whoami', { encoding: 'utf8', stdio: 'pipe' }).trim();
      log(`✅ Logged in as: ${npmUser}\n`, 'green');
    } catch (error) {
      log('❌ Not logged into npm\n', 'red');
      log('Please run: npm login\n', 'yellow');
      process.exit(1);
    }

    // Step 2: Check git status
    log('Step 2: Checking git status...', 'blue');
    try {
      const gitStatus = execSync('git status --porcelain', { encoding: 'utf8' });
      if (gitStatus.trim()) {
        log('⚠️  Uncommitted changes detected:\n', 'yellow');
        log(gitStatus, 'yellow');
        const answer = await question('\nContinue anyway? (y/N): ');
        if (answer.toLowerCase() !== 'y') {
          log('\n❌ Aborted. Commit your changes first.\n', 'red');
          process.exit(1);
        }
      } else {
        log('✅ Working directory clean\n', 'green');
      }
    } catch (error) {
      log('⚠️  Not a git repository (skipping)\n', 'yellow');
    }

    // Step 3: Validate skill structure
    log('Step 3: Validating skill structure...', 'blue');
    try {
      execSync('npm run validate', { stdio: 'inherit' });
      log('', 'reset');
    } catch (error) {
      log('\n❌ Validation failed. Fix errors before publishing.\n', 'red');
      process.exit(1);
    }

    // Step 4: Read current version
    const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
    const currentVersion = packageJson.version;
    
    log(`Step 4: Current version: ${currentVersion}`, 'blue');
    log('\nWhat type of version bump?', 'cyan');
    log('  1. patch (bug fixes)     - 1.0.0 → 1.0.1');
    log('  2. minor (new features)  - 1.0.0 → 1.1.0');
    log('  3. major (breaking)      - 1.0.0 → 2.0.0');
    log('  4. skip (keep current)   - ' + currentVersion);
    log('  5. custom version\n');
    
    const versionChoice = await question('Enter choice (1-5): ');
    
    let newVersion = currentVersion;
    if (versionChoice === '1') {
      execSync('npm version patch', { stdio: 'inherit' });
      newVersion = JSON.parse(fs.readFileSync('package.json', 'utf8')).version;
    } else if (versionChoice === '2') {
      execSync('npm version minor', { stdio: 'inherit' });
      newVersion = JSON.parse(fs.readFileSync('package.json', 'utf8')).version;
    } else if (versionChoice === '3') {
      execSync('npm version major', { stdio: 'inherit' });
      newVersion = JSON.parse(fs.readFileSync('package.json', 'utf8')).version;
    } else if (versionChoice === '5') {
      const custom = await question('Enter custom version (e.g., 1.2.3): ');
      execSync(`npm version ${custom}`, { stdio: 'inherit' });
      newVersion = JSON.parse(fs.readFileSync('package.json', 'utf8')).version;
    }
    
    log(`\n✅ Version: ${newVersion}\n`, 'green');

    // Step 5: Preview package
    log('Step 5: Previewing package contents...', 'blue');
    try {
      execSync('npm pack --dry-run', { stdio: 'inherit' });
      log('', 'reset');
    } catch (error) {
      log('⚠️  Could not preview package\n', 'yellow');
    }

    // Step 6: Confirm publish
    log('\n' + '='.repeat(60), 'cyan');
    log(`${colors.bold}Ready to publish:${colors.reset}`);
    log(`  Package: ${packageJson.name}`);
    log(`  Version: ${newVersion}`);
    log(`  Description: ${packageJson.description.substring(0, 60)}...`);
    log('='.repeat(60) + '\n', 'cyan');
    
    const confirm = await question('Publish to npm? (yes/NO): ');
    if (confirm.toLowerCase() !== 'yes') {
      log('\n❌ Publish cancelled\n', 'red');
      process.exit(0);
    }

    // Step 7: Publish
    log('\nStep 7: Publishing to npm...', 'blue');
    try {
      execSync('npm publish --access public', { stdio: 'inherit' });
      log('\n✅ Successfully published to npm!\n', 'green');
    } catch (error) {
      log('\n❌ Publish failed\n', 'red');
      log('Check the error above and try again.\n', 'yellow');
      process.exit(1);
    }

    // Step 8: Push git tags
    log('Step 8: Pushing git tags...', 'blue');
    try {
      const pushTags = await question('Push tags to git remote? (y/N): ');
      if (pushTags.toLowerCase() === 'y') {
        execSync('git push --tags', { stdio: 'inherit' });
        log('✅ Tags pushed\n', 'green');
      } else {
        log('⚠️  Skipped git push. Remember to push tags manually:\n', 'yellow');
        log('   git push --tags\n', 'yellow');
      }
    } catch (error) {
      log('⚠️  Not a git repository\n', 'yellow');
    }

    // Success!
    log('\n' + '='.repeat(60), 'green');
    log('  🎉 Publication Complete!', 'green');
    log('='.repeat(60) + '\n', 'green');
    
    log('📦 Package URL:', 'cyan');
    log(`   https://www.npmjs.com/package/${packageJson.name}\n`);
    
    log('📝 Next steps:', 'cyan');
    log('   1. Check package on npmjs.com');
    log('   2. Test installation: npm install -g ' + packageJson.name);
    log('   3. Create GitHub release (if applicable)');
    log('   4. Update CHANGELOG.md');
    log('   5. Announce release\n');

  } catch (error) {
    log(`\n❌ Error: ${error.message}\n`, 'red');
    process.exit(1);
  } finally {
    rl.close();
  }
}

main();
