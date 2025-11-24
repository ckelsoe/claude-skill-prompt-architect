# npm Publishing Guide for Prompt Architect

Complete guide for publishing and maintaining the Prompt Architect skill on npm.

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [Pre-Publication Checklist](#pre-publication-checklist)
3. [Publishing Process](#publishing-process)
4. [Post-Publication](#post-publication)
5. [Version Management](#version-management)
6. [Automated Publishing](#automated-publishing)
7. [Troubleshooting](#troubleshooting)

---

## Prerequisites

### Required Accounts & Tools

- **npm account**: https://www.npmjs.com/signup
- **GitHub account**: https://github.com (if using automated publishing)
- **Node.js** 14.0.0 or higher
- **Git** for version control

### Setup npm Authentication

```bash
# Login to npm
npm login

# Verify authentication
npm whoami
# Should show: ckelsoe

# Enable 2FA (recommended)
npm profile enable-2fa
```

### Setup GitHub (for automated publishing)

1. Generate npm token:
   ```bash
   npm token create --read-only=false
   ```

2. Add to GitHub Secrets:
   - Go to repository Settings → Secrets → Actions
   - Add secret: `NPM_TOKEN` = your token value

---

## Pre-Publication Checklist

### 1. Validate Skill Structure

```bash
npm run validate
```

This checks:
- ✅ SKILL.md exists with valid YAML frontmatter
- ✅ All framework files present
- ✅ All templates present
- ✅ Scripts exist
- ✅ package.json is valid

### 2. Run Tests

```bash
npm test
```

### 3. Review Package Contents

```bash
# Dry run to see what will be published
npm pack --dry-run

# Create actual tarball for inspection
npm pack

# Extract and inspect
tar -xzf ckelsoe-claude-skill-prompt-architect-1.0.0.tgz
cd package
ls -la
```

### 4. Verify Git Status

```bash
# Check for uncommitted changes
git status

# Commit everything
git add .
git commit -m "Prepare for v1.0.0 release"
```

### 5. Update CHANGELOG.md

Ensure CHANGELOG.md reflects all changes for the new version.

---

## Publishing Process

### Option 1: Interactive Publishing (Recommended)

Use the helper script for guided publishing:

```bash
node scripts/publish.js
```

This will:
1. ✅ Check npm authentication
2. ✅ Verify git status
3. ✅ Run validation and tests
4. ✅ Help you bump version
5. ✅ Preview package contents
6. ✅ Confirm before publishing
7. ✅ Publish to npm
8. ✅ Push git tags

### Option 2: Manual Publishing

#### Step 1: Bump Version

```bash
# For bug fixes (1.0.0 → 1.0.1)
npm version patch

# For new features (1.0.0 → 1.1.0)
npm version minor

# For breaking changes (1.0.0 → 2.0.0)
npm version major

# For pre-releases
npm version prerelease --preid=beta  # 1.0.0 → 1.0.1-beta.0
```

#### Step 2: Publish to npm

```bash
# Public scoped package
npm publish --access public

# With provenance (if using GitHub Actions)
npm publish --provenance --access public
```

#### Step 3: Push Tags

```bash
# Push commits and tags
git push
git push --tags
```

### Option 3: Automated Publishing (GitHub Actions)

Simply push a tag to trigger automated publishing:

```bash
# Create and push tag
git tag v1.0.0
git push --tags
```

GitHub Actions will automatically:
- Run tests
- Validate skill
- Publish to npm
- Create GitHub release

---

## Post-Publication

### 1. Verify Package on npm

```bash
# View package info
npm view @ckelsoe/claude-skill-prompt-architect

# Check latest version
npm view @ckelsoe/claude-skill-prompt-architect version

# View all versions
npm view @ckelsoe/claude-skill-prompt-architect versions
```

Visit: https://www.npmjs.com/package/@ckelsoe/claude-skill-prompt-architect

### 2. Test Installation

```bash
# Test global installation
npm install -g @ckelsoe/claude-skill-prompt-architect

# Test installation script
prompt-architect-install

# Verify in Claude Code
# Restart Claude Code and test: "Help me improve this prompt: write about AI"
```

### 3. Create GitHub Release

If not using automated releases:

```bash
# Using GitHub CLI
gh release create v1.0.0 --generate-notes

# Or manually at:
# https://github.com/ckelsoe/claude-skill-prompt-architect/releases/new
```

### 4. Announce Release

- Update project documentation
- Announce on relevant channels
- Share on social media (if applicable)

---

## Version Management

### Semantic Versioning

Follow [SemVer](https://semver.org/):

```
MAJOR.MINOR.PATCH

1.0.0 → Initial release
1.0.1 → Bug fix (PATCH)
1.1.0 → New feature, backwards compatible (MINOR)
2.0.0 → Breaking change (MAJOR)
```

### Version Bump Examples

**Bug Fixes:**
```bash
npm version patch -m "Fix: correct CO-STAR template typo"
```

**New Features:**
```bash
npm version minor -m "Add: PREP framework support"
```

**Breaking Changes:**
```bash
npm version major -m "Breaking: rename RISEN to RAISE framework"
```

**Pre-releases:**
```bash
npm version prerelease --preid=beta  # 1.0.0 → 1.0.1-beta.0
npm version prerelease --preid=beta  # 1.0.1-beta.0 → 1.0.1-beta.1
npm version minor                     # 1.0.1-beta.1 → 1.1.0
```

### Publishing Pre-releases

```bash
# Publish with beta tag
npm publish --tag beta

# Install beta version
npm install -g @ckelsoe/claude-skill-prompt-architect@beta

# Promote beta to latest
npm dist-tag add @ckelsoe/claude-skill-prompt-architect@1.1.0-beta.5 latest
```

---

## Automated Publishing

### GitHub Actions Workflows

Three workflows are configured:

#### 1. Test Workflow (`.github/workflows/test.yml`)

Runs on every push and PR:
- Tests on Node.js 14, 16, 18, 20
- Runs validation
- Runs tests
- Tests package creation

#### 2. Publish Workflow (`.github/workflows/publish.yml`)

Runs when you push a tag (`v*`):
- Validates skill
- Runs tests
- Publishes to npm with provenance
- Creates GitHub release

**Trigger:**
```bash
git tag v1.0.0
git push --tags
```

#### 3. Version Bump Workflow (`.github/workflows/version-bump.yml`)

Manual workflow for version bumping:
1. Go to Actions tab on GitHub
2. Select "Version Bump" workflow
3. Click "Run workflow"
4. Choose version type (patch/minor/major/prerelease)
5. Workflow creates commit and pushes

### Setting Up Automated Publishing

1. **Create npm token:**
   ```bash
   npm token create --read-only=false
   ```

2. **Add to GitHub Secrets:**
   - Repository Settings → Secrets → Actions
   - New secret: `NPM_TOKEN` = your token

3. **Test automated publish:**
   ```bash
   git tag v1.0.0-test
   git push --tags
   # Check Actions tab for results
   # Delete test tag after verification
   git tag -d v1.0.0-test
   git push --delete origin v1.0.0-test
   ```

---

## Troubleshooting

### Issue: "Package name already exists"

**Solution:** The scoped name `@ckelsoe/claude-skill-prompt-architect` should be unique to your account.

If someone else owns `@ckelsoe`, change to your username:
```json
// package.json
"name": "@your-username/claude-skill-prompt-architect"
```

### Issue: "You must be logged in to publish"

**Solution:**
```bash
npm login
npm whoami  # Verify
```

### Issue: "403 Forbidden"

**Causes & Solutions:**

1. **Not logged in:**
   ```bash
   npm login
   ```

2. **2FA required:**
   ```bash
   npm publish --otp=123456
   ```

3. **Insufficient permissions:**
   - Check you own the `@ckelsoe` scope
   - Or use `@your-username` instead

4. **Scoped package requires access flag:**
   ```bash
   npm publish --access public
   ```

### Issue: "Version already published"

**Solution:**
```bash
# Bump version
npm version patch
npm publish --access public
```

Note: You cannot republish the same version.

### Issue: "Validation failed"

**Solution:**
```bash
# Run validation to see specific errors
npm run validate

# Common fixes:
# - Ensure SKILL.md has valid YAML frontmatter
# - Check all framework files exist
# - Verify package.json is valid
```

### Issue: "npm pack shows unexpected files"

**Solution:** Check `.npmignore` and `files` in package.json

```bash
# See what will be published
npm pack --dry-run

# Adjust .npmignore or package.json files array
```

### Issue: "Installation script not found"

**Solution:** Ensure scripts have execute permissions

```bash
chmod +x scripts/*.js

# And verify bin field in package.json
```

### Issue: "GitHub Actions publish failed"

**Solution:** Check NPM_TOKEN secret

1. Generate new token: `npm token create`
2. Update GitHub secret
3. Re-run workflow

---

## Quick Reference

### First-Time Setup

```bash
# 1. Login to npm
npm login

# 2. Enable 2FA
npm profile enable-2fa

# 3. Setup GitHub secret (for automated publishing)
npm token create
# Add to GitHub repo secrets as NPM_TOKEN
```

### Publishing Checklist

```bash
# 1. Validate
npm run validate

# 2. Test
npm test

# 3. Preview
npm pack --dry-run

# 4. Commit changes
git add .
git commit -m "Prepare vX.Y.Z"

# 5. Bump version
npm version patch|minor|major

# 6. Publish
npm publish --access public

# 7. Push tags
git push --tags
```

### Quick Commands

```bash
# Validate skill
npm run validate

# Run tests
npm test

# Preview package
npm pack --dry-run

# Check current version
node -p "require('./package.json').version"

# View on npm
npm view @ckelsoe/claude-skill-prompt-architect

# Test install
npm install -g @ckelsoe/claude-skill-prompt-architect
```

---

## Support & Resources

- **npm Documentation**: https://docs.npmjs.com/
- **SemVer Specification**: https://semver.org/
- **GitHub Actions**: https://docs.github.com/en/actions
- **Package URL**: https://www.npmjs.com/package/@ckelsoe/claude-skill-prompt-architect
- **Repository**: https://github.com/ckelsoe/claude-skill-prompt-architect
- **Issues**: https://github.com/ckelsoe/claude-skill-prompt-architect/issues

---

## Maintainer Notes

### Regular Maintenance

- Review and respond to issues weekly
- Update frameworks based on community feedback
- Keep dependencies updated
- Monitor npm downloads/usage
- Update documentation as needed

### Release Schedule

Recommended schedule:
- **Patch releases**: As needed for bug fixes
- **Minor releases**: Monthly for new features
- **Major releases**: Annually for breaking changes

### Community Contributions

When accepting pull requests:
1. Review changes thoroughly
2. Run full test suite
3. Update CHANGELOG.md
4. Bump version appropriately
5. Give credit in release notes

---

**Happy Publishing! 🚀**
