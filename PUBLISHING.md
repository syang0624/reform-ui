# Publishing Guide

This guide covers how to publish the Reform Party UI package to npm and deploy the demo website to GitHub Pages.

## Prerequisites

Before publishing, ensure you have:

1. An npm account (create one at https://www.npmjs.com/signup)
2. GitHub repository set up
3. GitHub Pages enabled in repository settings

## Automatic Publishing (Recommended)

The package is configured to automatically publish to npm whenever the version in `package.json` changes on the `main` branch.

### One-Time Setup

1. **Create an npm Access Token:**
   - Log in to [npmjs.com](https://www.npmjs.com/)
   - Go to your profile → Access Tokens
   - Click "Generate New Token" → "Classic Token"
   - Select "Automation" type
   - Copy the token (you won't be able to see it again!)

2. **Add Token to GitHub Secrets:**
   - Go to your GitHub repository
   - Navigate to `Settings` → `Secrets and variables` → `Actions`
   - Click "New repository secret"
   - Name: `NPM_TOKEN`
   - Value: Paste your npm access token
   - Click "Add secret"

### Publishing a New Version

Once set up, publishing is simple:

```bash
# 1. Make your changes
# 2. Bump the version
npm version patch  # or minor, or major

# 3. Commit and push
git add package.json
git commit -m "Bump version to 1.0.1"
git push

# GitHub Actions will automatically:
# - Build the package
# - Publish to npm
# - Create a GitHub release with the version tag
```

The workflow will only publish when the version number in `package.json` changes, preventing accidental duplicate publishes.

## Manual Publishing to npm

If you prefer to publish manually or need to troubleshoot:

### 1. Build the Package

First, ensure the package builds successfully:

```bash
npm run build
```

This will create the `dist` folder with all the compiled files.

### 2. Version the Package

Update the version number in `package.json` following semantic versioning:

- **Patch release** (bug fixes): `1.0.0` → `1.0.1`
- **Minor release** (new features): `1.0.0` → `1.1.0`
- **Major release** (breaking changes): `1.0.0` → `2.0.0`

Or use npm version:

```bash
npm version patch  # for bug fixes
npm version minor  # for new features
npm version major  # for breaking changes
```

### 3. Login to npm

```bash
npm login
```

### 4. Publish

For the first publish:

```bash
npm publish --access public
```

For subsequent publishes:

```bash
npm publish
```

### 5. Verify

Check that your package is published:

```bash
npm view reform-ui
```

Or visit: https://www.npmjs.com/package/reform-ui

## Deploying Demo to GitHub Pages

The demo website is automatically deployed to GitHub Pages when you push to the `main` branch.

### Initial Setup (One-time)

1. **Enable GitHub Pages in Repository Settings:**
   - Go to your repository on GitHub
   - Navigate to `Settings` → `Pages`
   - Under "Build and deployment":
     - Source: Select "GitHub Actions"
   - Save the settings

2. **Configure Repository Permissions:**
   - Go to `Settings` → `Actions` → `General`
   - Under "Workflow permissions":
     - Select "Read and write permissions"
     - Check "Allow GitHub Actions to create and approve pull requests"
   - Save the settings

### Automatic Deployment

Once set up, the demo website will automatically deploy when you:

1. Push changes to the `main` branch
2. Manually trigger the workflow from the Actions tab

The GitHub Actions workflow (`.github/workflows/deploy.yml`) will:
- Build the demo website
- Deploy it to GitHub Pages
- Make it available at: `https://[your-username].github.io/reform-ui/`

### Manual Deployment

You can also manually trigger a deployment:

1. Go to the "Actions" tab in your GitHub repository
2. Select the "Deploy to GitHub Pages" workflow
3. Click "Run workflow"
4. Select the branch (usually `main`)
5. Click "Run workflow"

### Local Testing

To test the demo locally before deploying:

```bash
cd demo
npm install
npm run dev
```

This will start a local development server. Open the URL shown in the terminal to preview the demo.

### Build Demo Locally

To build the demo locally:

```bash
cd demo
npm run build
```

The built files will be in `demo/dist`.

## Pre-publish Checklist

Before publishing a new version:

- [ ] All tests pass (run `npm run type-check`)
- [ ] Build succeeds (run `npm run build`)
- [ ] README.md is up to date
- [ ] CHANGELOG updated (if you maintain one)
- [ ] Version number bumped in package.json
- [ ] Git changes committed
- [ ] Demo website builds successfully
- [ ] Demo website tested locally

## Post-publish Steps

After publishing:

1. **Create a Git Tag:**
   ```bash
   git tag v1.0.0
   git push origin v1.0.0
   ```

2. **Create a GitHub Release:**
   - Go to your repository on GitHub
   - Click on "Releases" → "Create a new release"
   - Select the tag you just created
   - Add release notes describing changes
   - Publish the release

3. **Verify the Package:**
   - Install the package in a test project
   - Check that all components work as expected
   - Verify the demo website is accessible

## Updating the Demo Website

The demo website is in the `demo` directory. To update it:

1. Make changes to `demo/src/App.tsx`
2. Test locally: `cd demo && npm run dev`
3. Commit and push to `main` branch
4. GitHub Actions will automatically rebuild and deploy

## Troubleshooting

### Automatic Publishing Fails

- **NPM_TOKEN not found**:
  - Verify the secret is named exactly `NPM_TOKEN` in GitHub Secrets
  - Make sure you created an "Automation" type token, not "Publish" type
  - The token should have publish permissions
- **Version already published**:
  - Check if the version in package.json already exists on npm
  - Bump to a new version number
- **Workflow doesn't run**:
  - Verify the version in package.json actually changed in the commit
  - Check the Actions tab for any error messages
  - Ensure repository has Actions enabled in Settings

### Manual npm Publish Fails

- **Authentication Error**: Run `npm login` and try again
- **Version Already Published**: Bump the version number in `package.json`
- **Access Denied**: Ensure you have permissions for the package

### GitHub Pages Not Updating

- Check the Actions tab for deployment status
- Ensure GitHub Pages is enabled in repository settings
- Verify the workflow has proper permissions
- Check that the base path in `demo/vite.config.ts` matches your repository name

### Demo Build Fails

- Check Node.js version (should be 18+)
- Delete `demo/node_modules` and run `npm install` again
- Ensure peer dependencies are installed
- Check for TypeScript errors: `cd demo && npm run type-check`

## Support

For issues and questions, please visit the [GitHub repository](https://github.com/reform-party/ui).
