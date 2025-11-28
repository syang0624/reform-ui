# Publishing Guide

This guide covers how to publish the Reform Party UI package to npm and deploy the demo website to GitHub Pages.

## Prerequisites

Before publishing, ensure you have:

1. An npm account (create one at https://www.npmjs.com/signup)
2. GitHub repository set up
3. GitHub Pages enabled in repository settings

## Publishing to npm

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

## Publishing Workflow When Main Branch is Updated

When you push changes to the `main` branch and want to publish a new version to npm:

```bash
# 1. Make your changes and test them locally
npm run build
cd demo && npm run dev  # Test the demo

# 2. Commit and push your changes
git add .
git commit -m "Your changes description"
git push

# 3. Bump the version (this updates package.json AND creates a git tag)
npm version patch  # or minor, or major

# 4. Build the package
npm run build

# 5. Publish to npm
npm publish

# 6. Push the version bump and tag to GitHub
git push && git push --tags
```

### Quick Reference

After main branch updates, run these commands:

```bash
npm version patch && npm run build && npm publish && git push --tags
```

This will:
1. Bump the patch version in package.json
2. Create a git tag (e.g., v1.0.1)
3. Build the package
4. Publish to npm
5. Push the tag to GitHub

### Creating a GitHub Release (Optional)

After publishing, you can create a GitHub release:

1. Go to your repository on GitHub
2. Click "Releases" → "Create a new release"
3. Select the tag you just created (e.g., v1.0.1)
4. Add release notes describing the changes
5. Click "Publish release"

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

### npm Publish Fails

- **Authentication Error**: Run `npm login` and try again
- **Version Already Published**: Bump the version number in `package.json`
- **Access Denied**: Ensure you have permissions for the reform-ui package (check you're logged in with the correct npm account)

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

For issues and questions, please visit the [GitHub repository](https://github.com/syang0624/reform-ui).
