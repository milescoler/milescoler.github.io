# GitHub Pages Deployment Guide

This document provides instructions for deploying your data projects portfolio to GitHub Pages.

## Prerequisites

- A GitHub account
- Git installed on your local machine

## Deployment Steps

1. **Create a new GitHub repository**
   - Go to [GitHub](https://github.com) and sign in to your account
   - Click the "+" icon in the top right corner and select "New repository"
   - Name your repository `username.github.io` (replace "username" with your actual GitHub username)
   - Make the repository public
   - Do not initialize with a README, .gitignore, or license

2. **Initialize Git in your local project folder**
   ```bash
   cd /path/to/data-projects-portfolio
   git init
   git add .
   git commit -m "Initial commit"
   ```

3. **Connect your local repository to GitHub**
   ```bash
   git remote add origin https://github.com/username/username.github.io.git
   git branch -M main
   git push -u origin main
   ```

4. **Verify Deployment**
   - Your site should be available at `https://username.github.io` within a few minutes
   - If your site doesn't appear, check the GitHub repository settings to ensure GitHub Pages is enabled

## Customization

To customize this portfolio for your own projects:

1. **Update project information**
   - Edit the project cards in `index.html` to showcase your actual data projects
   - Replace placeholder images in the `assets` folder with screenshots of your projects
   - Update links to point to your actual project repositories or live demos

2. **Personalize the About section**
   - Update the profile image and description in the About section
   - Modify the skills list to reflect your actual technical skills

3. **Update contact information**
   - Replace the placeholder contact information with your actual email and social media profiles

## Maintenance

To update your portfolio after initial deployment:

1. Make changes to your local files
2. Commit the changes:
   ```bash
   git add .
   git commit -m "Description of changes"
   git push origin main
   ```

3. Your changes will be automatically deployed to GitHub Pages

## Troubleshooting

- If your site isn't displaying correctly, check the GitHub repository settings to ensure the correct branch is set as the source for GitHub Pages
- For custom domain setup, refer to [GitHub's documentation on custom domains](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)
