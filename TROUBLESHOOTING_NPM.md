# npm Authentication Troubleshooting

## Issue: 403 Forbidden when creating token

You're seeing this error:
```
npm error 403 403 Forbidden - POST https://registry.npmjs.org/-/npm/v1/tokens
```

## Solution Steps

### Step 1: Check if you're logged in

```bash
npm whoami
```

**Expected:** Shows your npm username (e.g., "ckelsoe")
**If error:** You're not logged in, proceed to Step 2

### Step 2: Login to npm

```bash
npm login
```

You'll be prompted for:
1. **Username:** Your npm username
2. **Password:** Your npm password
3. **Email:** Your email address
4. **OTP (if 2FA enabled):** 6-digit code from authenticator app

**Important:** Modern npm uses a web-based login flow. If prompted, it may open your browser.

### Step 3: Verify login

```bash
npm whoami
```

Should now show your username.

### Step 4: Now create token (if needed for GitHub Actions)

```bash
npm token create
```

This should now work without the 403 error.

---

## Alternative: Publish without token creation

**You don't need to create a token to publish manually!**

The token is only needed for automated GitHub Actions publishing. For manual publishing, you just need to be logged in.

### To publish manually:

```bash
# 1. Login (one time)
npm login

# 2. Verify
npm whoami

# 3. Publish
cd D:\Git\claude-code-skills-development\prompt-improvement-assistant\release
npm publish --access public
```

---

## Common Issues

### Issue: "npm login" opens browser but fails

**Solution:** Use legacy authentication:
```bash
npm login --auth-type=legacy
```

This uses the old-style command-line prompts instead of browser.

### Issue: 2FA code not working

**Causes:**
- Code expired (they're time-based, 30-second window)
- Clock on your computer is wrong
- Using backup codes instead of authenticator app

**Solution:**
1. Generate fresh code from authenticator app
2. Enter it immediately
3. Check your system clock is correct

### Issue: "Email address is not verified"

**Solution:**
1. Check your email for verification link from npm
2. Click the verification link
3. Try `npm login` again

### Issue: Forgot npm password

**Solution:**
1. Go to https://www.npmjs.com/login
2. Click "Forgot password?"
3. Follow reset instructions
4. Return and use `npm login` with new password

---

## Quick Publish Checklist (No Token Needed)

For manual publishing, skip token creation entirely:

```bash
# 1. Login to npm
npm login
# Enter username, password, email, OTP (if 2FA enabled)

# 2. Verify authentication
npm whoami
# Should show: ckelsoe

# 3. Navigate to release directory
cd D:\Git\claude-code-skills-development\prompt-improvement-assistant\release

# 4. Validate package
npm run validate

# 5. Test package
npm test

# 6. Publish
npm publish --access public

# Done!
```

---

## When DO You Need a Token?

**Only for automated publishing via GitHub Actions.**

If you want to use the automated workflow (push tag → auto-publish), then you need:

1. Create token after successful login:
   ```bash
   npm login
   npm whoami  # Verify first
   npm token create --read-only=false
   ```

2. Copy the token (it's only shown once!)

3. Add to GitHub repo secrets:
   - Go to: https://github.com/ckelsoe/claude-skill-prompt-architect/settings/secrets/actions
   - Click "New repository secret"
   - Name: `NPM_TOKEN`
   - Value: [paste token]

But for now, **manual publishing is simpler** and doesn't require token creation.

---

## Recommended First Publish Approach

**Skip the token for now. Publish manually:**

1. Make sure you're in the release directory:
   ```bash
   cd D:\Git\claude-code-skills-development\prompt-improvement-assistant\release
   ```

2. Login to npm:
   ```bash
   npm login
   ```

3. Publish:
   ```bash
   npm publish --access public
   ```

4. Verify on npm:
   ```bash
   npm view @ckelsoe/claude-skill-prompt-architect
   ```

**That's it!** No token needed.

You can set up the GitHub Actions token later if you want automated publishing.

---

## Error Messages Decoded

### 403 Forbidden
- **Cause:** Not authenticated or insufficient permissions
- **Fix:** Run `npm login` first

### 404 Not Found
- **Cause:** Package name doesn't exist or typo
- **Fix:** Check package name in package.json

### 401 Unauthorized
- **Cause:** Login expired or invalid credentials
- **Fix:** Run `npm login` again

### EPUBLISHCONFLICT
- **Cause:** Version already published
- **Fix:** Bump version (`npm version patch`)

### ENEEDAUTH
- **Cause:** Not logged in
- **Fix:** Run `npm login`

---

## Next Steps

Since you got the 403 error, try this sequence:

```bash
# 1. Login
npm login

# 2. Confirm it worked
npm whoami

# 3. Go to release directory
cd D:\Git\claude-code-skills-development\prompt-improvement-assistant\release

# 4. Publish
npm publish --access public
```

If that works, you're published! Token creation can wait for later when you want automated publishing.
