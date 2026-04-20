# 🚀 Quick Start Guide

## Important: PowerShell Execution Policy

If you encounter an execution policy error when running npm commands, use one of these solutions:

### Solution 1: Use CMD (Recommended for quick start)

```cmd
cd c:\Users\daniy\Desktop\SPA\Portfolio
npm install
npm run dev
```

### Solution 2: Change PowerShell Execution Policy (Admin required)

```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

Then run:

```powershell
npm install
npm run dev
```

## Running the Portfolio

1. **Install dependencies** (if not already done)

   ```bash
   npm install
   ```

2. **Start development server**

   ```bash
   npm run dev
   ```

3. **Open browser**
   - Navigate to `http://localhost:5173`
   - The portfolio will hot-reload as you make changes

## Portfolio Features

✅ **Modern Navigation Bar** - Smooth scrolling with section indicators  
✅ **Hero Section** - Eye-catching intro with contact icons (Email, LinkedIn, GitHub)  
✅ **Expertise Section** - Technical skills organized by category  
✅ **Projects Showcase** - Impact-driven project descriptions  
✅ **Experience Timeline** - Visual work history with tech stack badges  
✅ **Contact Section** - Clean, accessible contact links  
✅ **Fully Responsive** - Works on all devices  
✅ **Smooth Animations** - Professional transitions and hover effects

## Customization Tips

### Colors

Edit CSS variables in `src/index.css`:

```css
--accent: #00ff88; /* Change primary accent color */
--bg-primary: #0a0a0a; /* Main background */
```

### Content

- **Hero**: Update `src/components/Hero.jsx`
- **Projects**: Modify `src/components/Projects.jsx`
- **Experience**: Edit `src/components/Experience.jsx`
- **Skills**: Update `src/components/Expertise.jsx`

## Deploy to Production

### Build

```bash
npm run build
```

### Deploy Options

- **Vercel**: `vercel deploy`
- **Netlify**: Drag `dist` folder to Netlify
- **GitHub Pages**: Use `gh-pages` package
- **AWS S3**: Upload `dist` folder to S3 bucket

## Tech Stack Highlights

- ⚛️ React 18 (Modern hooks)
- ⚡ Vite (Lightning-fast builds)
- 🎨 Custom CSS (No framework bloat)
- 🎯 React Icons (Professional iconography)
- 📱 Fully Responsive Design
- ♿ Accessible (ARIA labels, semantic HTML)

---

**Built with precision for maximum impact** 🚀
