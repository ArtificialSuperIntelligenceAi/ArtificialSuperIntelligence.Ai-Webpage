# ArtificialSuperIntelligence.Ai - Deployment Guide

## 📁 Project Files
- `index.html` - Main website page
- `styles.css` - All styling and animations
- `script.js` - Interactive effects and functionality
- `framework.html` - Sample detail page template

## 🖥️ Local PC (Already Done)
Your files are already saved locally at:
`C:\Users\Steve\Desktop\Analytics App\`

## 🐙 GitHub Setup
1. Create a new repository on GitHub (e.g., "artificial-superintelligence-ai")
2. Initialize git in your project folder:
   ```bash
   cd "C:\Users\Steve\Desktop\Analytics App"
   git init
   git add .
   git commit -m "Initial commit - ArtificialSuperIntelligence.Ai website"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git push -u origin main
   ```

## 🌐 Bluehost Deployment
1. **Upload via File Manager:**
   - Log into Bluehost cPanel
   - Go to File Manager
   - Navigate to `public_html` (or your domain folder)
   - Upload all 4 files: `index.html`, `styles.css`, `script.js`, `framework.html`

2. **Or via FTP:**
   - Use FileZilla or similar FTP client
   - Connect to your Bluehost server
   - Upload files to `public_html` directory

## 🔄 Future Updates
After making changes:
1. Save files locally (already done in Cursor)
2. Push to GitHub: `git add . && git commit -m "Update message" && git push`
3. Upload updated files to Bluehost

## 📝 Notes
- The website is fully self-contained (no external dependencies)
- All animations and effects work with just these 4 files
- Responsive design works on all devices
- Tron-style effects and binary scrambling are fully functional

## 🎯 Live Site
Once uploaded to Bluehost, your site will be live at:
`https://yourdomain.com` (or your Bluehost subdomain)
