# Hello World - Millions Reach

A simple, modern "Hello World" static website ready to be deployed on GitHub Pages.

## Project Structure

```
millionsreach-about/
├── index.html      # Main HTML file
├── style.css       # Styling and responsive design
├── script.js       # Interactive JavaScript features
├── CNAME           # Custom domain configuration
└── README.md       # This file
```

## Features

- Modern, responsive design
- Gradient background with smooth animations
- Interactive button with click counter
- Mobile-friendly layout
- Ready for GitHub Pages deployment

## Local Testing

To test the website locally, simply open `index.html` in your web browser, or use a local server:

```bash
# Using Python 3
python3 -m http.server 8000

# Using Node.js (if you have http-server installed)
npx http-server
```

Then visit `http://localhost:8000` in your browser.

## GitHub Pages Deployment

### Step 1: Create GitHub Repository

1. Go to [GitHub](https://github.com) and log in to your account
2. Click the "+" icon in the top right corner
3. Select "New repository"
4. Repository name: `millionsreach-about`
5. Set visibility to **Public** (required for free GitHub Pages)
6. **Do NOT** initialize with README, .gitignore, or license
7. Click "Create repository"

### Step 2: Push Your Code to GitHub

After creating the repository, run these commands in your terminal:

```bash
# Navigate to the project folder
cd /home/harsh/Downloads/millionsreach-about

# Initialize Git (if not already done)
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: Hello World page"

# Add GitHub remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/millionsreach-about.git

# Push to GitHub
git branch -M main
git push -u origin main
```

**Note:** Replace `YOUR_USERNAME` with your actual GitHub username in the remote URL.

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on **Settings** (top right of the repository page)
3. Scroll down to **Pages** section in the left sidebar
4. Under **Source**, select:
   - Branch: `main` (or `master` if that's your default branch)
   - Folder: `/ (root)`
5. Click **Save**
6. GitHub will provide you with a URL like: `https://YOUR_USERNAME.github.io/millionsreach-about/`

Your site will be live in a few minutes!

### Step 4: Set Up Custom Domain (Optional)

If you want to use a custom domain (e.g., `www.millionsreach.com`):

#### 4.1: Update CNAME File

1. Edit the `CNAME` file in your repository
2. Add your domain (e.g., `www.millionsreach.com`)
3. Commit and push the changes:

```bash
git add CNAME
git commit -m "Add custom domain"
git push
```

#### 4.2: Configure DNS Settings

1. Log in to your domain registrar (GoDaddy, BigRock, Namecheap, etc.)
2. Go to DNS Management settings
3. Add a **CNAME record**:
   - **Host/Name:** `www` (or `@` for root domain)
   - **Value/Target:** `YOUR_USERNAME.github.io` (replace with your GitHub username)
   - **TTL:** 3600 (or default)

**Important Notes:**
- DNS propagation can take anywhere from a few minutes to 24-48 hours
- For root domain (without www), you may need to use A records instead of CNAME
- GitHub provides specific IP addresses for root domains - check GitHub Pages documentation

#### 4.3: Verify Domain in GitHub

1. Go to your repository Settings → Pages
2. Under "Custom domain", you should see your domain listed
3. GitHub will automatically create an SSL certificate for your domain

## Troubleshooting

### Site Not Loading
- Wait a few minutes after enabling GitHub Pages (deployment takes time)
- Check if the repository is set to Public
- Verify the branch name matches (main vs master)

### Custom Domain Not Working
- Wait for DNS propagation (can take up to 48 hours)
- Verify DNS records are correct using tools like `dig` or online DNS checkers
- Ensure CNAME file contains only the domain name (no http:// or https://)
- Check GitHub Pages settings for any error messages

### Files Not Updating
- Make sure you've committed and pushed changes to GitHub
- Clear your browser cache
- Check if GitHub Actions shows any build errors

## License

This is a simple Hello World project. Feel free to use and modify as needed.

## Support

For GitHub Pages documentation, visit: https://docs.github.com/en/pages

---

**Happy Coding! 🚀**

