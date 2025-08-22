# Baxish Patel - Portfolio Website

A professional portfolio website showcasing 9+ years of QA expertise, built with React, TypeScript, and Tailwind CSS.

## Features

- 🎯 Professional hero section with contact information
- 📊 Comprehensive professional summary with key achievements
- 📅 Interactive experience timeline with detailed work history
- 🛠️ Skills matrix organized by categories (Programming, Testing Tools, DevOps)
- 🚀 Projects showcase featuring major accomplishments
- 📧 Contact section with mailto functionality
- 📱 Fully responsive design
- ⚡ Fast static site optimized for GitHub Pages

## Technology Stack

- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS with Shadcn/ui components
- **Build Tool**: Vite
- **Deployment**: GitHub Pages (static hosting)

## GitHub Pages Deployment

### Step 1: Repository Setup
1. Create a new repository on GitHub (e.g., `baxish-patel-portfolio`)
2. Clone this repository or copy all files to your new repository

### Step 2: Configure GitHub Pages
1. Go to your repository on GitHub
2. Navigate to **Settings** → **Pages**
3. Under "Source", select **GitHub Actions**

### Step 3: Create GitHub Actions Workflow
Create `.github/workflows/deploy.yml` in your repository:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
        
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'
          
      - name: Install dependencies
        run: npm ci
        
      - name: Build project
        run: npm run build
        working-directory: ./client
        
      - name: Setup Pages
        uses: actions/configure-pages@v4
        
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: './dist'

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

### Step 4: Update Package.json Scripts
Since we can't modify package.json directly, you'll need to update it manually with these scripts:

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  }
}
```

### Step 5: Deploy
1. Push your code to the `main` branch
2. GitHub Actions will automatically build and deploy your site
3. Your portfolio will be available at: `https://[username].github.io/[repository-name]`

## Local Development

```bash
# Install dependencies
npm install

# Start development server
cd client && npm run dev

# Build for production
cd client && npm run build

# Preview production build
cd client && npm run preview
```

## Customization

### Personal Information
Update your details in `client/src/data/portfolio-data.ts`:
- Personal information (name, email, phone, location)
- Professional summary
- Work experience
- Skills and competencies
- Projects

### Styling
- Colors and themes: `client/src/index.css`
- Component styles: Individual component files in `client/src/components/`

### Resume
Replace `client/public/Baxish_Patel_Resume_QA.pdf` with your own resume file.

## Contact Form

The contact form uses `mailto:` links to open the user's default email client with pre-filled information. This approach works perfectly for static hosting on GitHub Pages without requiring a backend server.

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile responsive design
- Optimized for performance and accessibility

## License

MIT License - feel free to use this template for your own portfolio.