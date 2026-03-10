# Portfolio Automation Guide

## 📋 Table of Contents
1. [Overview](#overview)
2. [What Was Done](#what-was-done)
3. [How It Works](#how-it-works)
4. [File Structure](#file-structure)
5. [How to Make Changes](#how-to-make-changes)
6. [Common Tasks](#common-tasks)
7. [Troubleshooting](#troubleshooting)

---

## Overview

Your portfolio has been **automated** to eliminate manual HTML editing. Instead of updating the `index.html` file every time you need to change content, you now simply edit a **JSON file** (`portfolio.json`), and the website automatically displays your updates.

### Why This Matters
- ✅ **No More HTML Editing**: All changes are made in one simple JSON file
- ✅ **Easy to Maintain**: Clear, organized data structure
- ✅ **Scalable**: Add hundreds of items without touching HTML
- ✅ **Less Error-Prone**: No risk of breaking HTML tags
- ✅ **Faster Updates**: Make changes in seconds

---

## What Was Done

### Files Created/Modified

1. **`assets/data/portfolio.json`** (NEW)
   - Contains all your portfolio content in JSON format
   - This is the **ONLY file you need to edit** to update your portfolio

2. **`scripts/main.js`** (REPLACED)
   - Now contains JavaScript functions that read from `portfolio.json`
   - Automatically generates HTML content on page load
   - No need to touch this file (already set up correctly)

3. **`index.html`** (SIMPLIFIED)
   - Reduced from 400+ lines to ~250 lines
   - Now contains only **container divs** with IDs
   - JavaScript fills these containers with content from JSON
   - No inline content anymore

### Technology Stack
- **Frontend**: HTML, CSS, JavaScript (vanilla - no frameworks needed)
- **Data Format**: JSON
- **Data Source**: Local file (`assets/data/portfolio.json`)

---

## How It Works

### The Automation Flow

```
1. User opens portfolio website
   ↓
2. Browser loads index.html
   ↓
3. index.html loads main.js script
   ↓
4. main.js runs DOMContentLoaded event
   ↓
5. JavaScript fetches portfolio.json
   ↓
6. JavaScript reads the JSON data
   ↓
7. JavaScript generates HTML from JSON
   ↓
8. Generated HTML displays on your portfolio
```

### Example: How Experience Sections Are Rendered

**JSON Data** (in `portfolio.json`):
```json
{
  "experiences": [
    {
      "date": "2025-2026",
      "title": "Senior Software Engineer",
      "company": "Edgeverve System Ltd",
      "companyLink": "https://www.edgeverve.com/",
      "companyDescription": "An Infosys subsidiary...",
      "points": [
        "<strong>Orchestrated</strong> the transition...",
        "<strong>Centralized</strong> access control..."
      ]
    }
  ]
}
```

**JavaScript Processing** (in `main.js`):
```javascript
function renderExperiences(experiences) {
  const container = document.getElementById('experiences-container');
  
  container.innerHTML = experiences.map(exp => `
    <div class="work-experience">
      <small class="date">${exp.date}</small>
      <h3 class="h5 date-title">
        ${exp.title} - 
        <a href="${exp.companyLink}" title="${exp.companyDescription}">
          ${exp.company}
        </a>
      </h3>
      ${exp.points.map(point => `<p>• ${point}</p>`).join('')}
    </div>
  `).join('');
}
```

**Result**: HTML automatically generated and displayed on page

---

## File Structure

```
kushal_portfolio/
├── index.html                    ← Main website (mostly HTML containers)
├── stylesheet.css               ← Styling (unchanged)
├── assets/
│   ├── data/
│   │   └── portfolio.json        ← ⭐ YOUR CONTENT (EDIT THIS FILE)
│   └── images/
│       └── (your images)
├── scripts/
│   └── main.js                  ← JavaScript automation (don't edit)
└── README.md                     ← This file
```

---

## How to Make Changes

### Step 1: Open the JSON File
**File Path**: `assets/data/portfolio.json`

### Step 2: Locate the Section You Want to Edit

The JSON file has these main sections:
- `aboutMe` - Your about/bio section
- `experiences` - Work experience entries
- `projects` - Personal projects
- `education` - Educational background
- `skills` - Technical skills by category
- `socialLinks` - Social media links

### Step 3: Make Your Changes

⚠️ **Important JSON Rules**:
- Use **double quotes** for all strings: `"like this"`
- **No single quotes**: ~~`'not this'`~~
- **No trailing commas**: 
  ```json
  ✅ Correct:     { "name": "value" }
  ❌ Wrong:       { "name": "value", }
  ```
- **Escape special characters**:
  ```json
  ✅ Use:    "text with \"quotes\""
  ✅ Or use: "text with special chars"
  ```

### Step 4: Save the File

### Step 5: Refresh Your Browser
The changes will appear instantly!

---

## Common Tasks

### Task 1: Add a New Work Experience

**Location**: `experiences` array in `portfolio.json`

**Template**:
```json
{
  "date": "YYYY-YYYY",
  "title": "Your Job Title",
  "company": "Company Name",
  "companyLink": "https://company-website.com",
  "companyDescription": "Brief description of company (hover tooltip)",
  "points": [
    "<strong>Achievement</strong> description here",
    "<strong>Achievement</strong> another description"
  ]
}
```

**Example**:
```json
{
  "date": "2026-2027",
  "title": "Lead Software Architect",
  "company": "Tech Innovations Inc",
  "companyLink": "https://techinnovations.com",
  "companyDescription": "Leading edge AI/ML solutions provider",
  "points": [
    "<strong>Architected</strong> enterprise-scale microservices handling 100K+ requests/sec",
    "<strong>Mentored</strong> 10 engineers on best practices in system design"
  ]
}
```

### Task 2: Add a New Project

**Location**: `projects` array in `portfolio.json`

**Template**:
```json
{
  "title": "Project Name",
  "link": "https://github-or-live-link.com",
  "date": "Month Year"
}
```

**Example**:
```json
{
  "title": "E-Commerce Platform API",
  "link": "https://github.com/ksb0896/ecommerce-api",
  "date": "March 2026"
}
```

### Task 3: Update Your About Me Section

**Location**: `aboutMe` string in `portfolio.json`

```json
"aboutMe": "Your new bio text. Use <strong>tags</strong> for emphasis."
```

**Tips**:
- Keep it under 3-4 sentences
- Use `<strong>text</strong>` for important keywords
- Avoid line breaks; keep it as one line

### Task 4: Add or Update Skills

**Location**: `skills` array in `portfolio.json`

**Template**:
```json
{
  "category": "Category Name",
  "items": "Item1, Item2, Item3, Item4"
}
```

**Example**:
```json
{
  "category": "AI/ML Tools",
  "items": "TensorFlow, PyTorch, OpenAI API, Hugging Face"
}
```

### Task 5: Add a New Education Entry

**Location**: `education` array in `portfolio.json`

**Template**:
```json
{
  "school": "School/University Name",
  "degree": "Degree Type",
  "major": "Field of Study",
  "years": "YYYY-YYYY"
}
```

**Example**:
```json
{
  "school": "Stanford University",
  "degree": "Master of Science",
  "major": "Computer Science",
  "years": "2024-2026"
}
```

### Task 6: Update Social Media Links

**Location**: `socialLinks` array in `portfolio.json`

**Template**:
```json
{
  "platform": "Platform Name",
  "url": "https://link-to-profile.com",
  "name": "Display Name",
  "icon": "fa-platform-name"
}
```

**Available Icons** (Font Awesome):
- `fa-linkedin` - LinkedIn
- `fa-github` - GitHub
- `fa-twitter` - Twitter/X
- `fa-instagram` - Instagram
- `fa-whatsapp` - WhatsApp
- `fa-facebook` - Facebook
- `fa-youtube` - YouTube

**Example**:
```json
{
  "platform": "Twitter",
  "url": "https://twitter.com/ksb0896",
  "name": "ksb0896",
  "icon": "fa-twitter"
}
```

---

## Format Reference

### Formatting Text with HTML Tags

You can use basic HTML tags in text fields:

```json
"<strong>Bold text</strong>"          ← Makes text bold
"<em>Italic text</em>"                ← Makes text italic
"Normal text"                          ← Plain text
```

**Examples**:
```json
"dates": "May 2025 - <strong>Present</strong>"
"description": "Led <strong>API redesign</strong> improving performance by <em>40%</em>"
```

### Special Characters to Escape

```json
To include:    Use:
"Quotes"       \"
Backslash \    \\
(rare)         Most others are fine in JSON strings
```

### Comments in JSON
⚠️ **JSON doesn't support comments!** If you need to remember something, store it separately or use an extra field you don't display.

---

## Troubleshooting

### Problem: Changes aren't showing on the website

**Solution**:
1. Make sure you saved the file (Ctrl+S)
2. Refresh your browser (Ctrl+Shift+R for hard refresh)
3. Check browser console for errors (F12 → Console tab)

### Problem: "Failed to load portfolio data" error

**Causes & Solutions**:
1. **JSON syntax error** → Check for:
   - Missing commas between objects
   - Trailing commas
   - Unclosed quotes
   - Use a JSON validator: https://jsonlint.com

2. **File path wrong** → Make sure file is at:
   `assets/data/portfolio.json`

3. **File not saved** → Save the file (Ctrl+S)

### Problem: Typography looks broken/weird

**Solution**: Check your HTML tags in the JSON
- ✅ `<strong>text</strong>` - Correct
- ❌ `<strong>text</strong>` - Using wrong quotes
- ❌ `<bold>text</bold>` - Wrong tag (use `<strong>`)

### Problem: Specific section not showing

**Steps to debug**:
1. Open browser console (F12)
2. Check if there are error messages
3. Verify the section name matches exactly:
   - `aboutMe`, `experiences`, `projects`, `education`, `skills`, `socialLinks`
4. Make sure data is properly enclosed in `{ }`

### Problem: Text with special characters

**Solution**: Escape special characters properly:
```json
"About Kushal & his work"     ← This works fine
"Quote: \"Hello world\""      ← This escapes quotes
"Path: C:\\Users\\Kushal"     ← This escapes backslashes
```

---

## Best Practices

### 1. Backup Before Major Changes
```
Step 1: Copy portfolio.json → portfolio.json.backup
Step 2: Make your changes
Step 3: Test thoroughly
```

### 2. Validate JSON Online
- Use: https://jsonlint.com
- Paste your JSON and validate before using

### 3. Keep Multiple Versions
If you frequently update, maintain backups:
- `portfolio.json` - Current
- `portfolio.json.backup` - Last working version
- `portfolio.json.old` - Archive

### 4. Test Changes on Desktop First
Before ensuring it works on mobile devices

### 5. Use Clear, Descriptive Language
Make your bullet points clear and scannable

### 6. Google Search Keywords
Add relevant keywords in your descriptions for SEO

---

## Advanced: How to Modify Styling

Your CSS is in `stylesheet.css`. Common elements to style:

```css
/* Experience */
.work-experience { ... }

/* Education */
.education-experience { ... }

/* Skills */
.language-experience { ... }

/* Social Links */
.social-buttons { ... }

/* Projects */
.card { ... }
```

To modify styling, edit `stylesheet.css` directly.

---

## Need Help?

### Quick Checklist Before Asking for Help:

- [ ] Saved the JSON file (Ctrl+S)
- [ ] Refreshed browser (Ctrl+Shift+R)
- [ ] Validated JSON syntax (https://jsonlint.com)
- [ ] Checked browser console (F12) for errors
- [ ] File is at correct path: `assets/data/portfolio.json`

### What to Include When Reporting Issues:

1. The exact error message (if any)
2. Which section you were editing
3. Your JSON code (use code block)
4. Browser console errors (F12)

---

## Summary

✨ **To Update Your Portfolio**: Edit `assets/data/portfolio.json` → Save → Refresh browser

That's it! No HTML knowledge needed. Happy updating! 🚀
