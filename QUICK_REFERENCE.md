# 🚀 Portfolio Update Quick Reference

## The Golden Rule
**✏️ Only edit:** `assets/data/portfolio.json`
**🚫 Never edit:** `index.html` or `scripts/main.js`

---

## File Locations & Changes

| Need to Update | File to Edit | Where |
|---|---|---|
| Work Experience | `portfolio.json` | `"experiences"` array |
| Projects | `portfolio.json` | `"projects"` array |
| Education | `portfolio.json` | `"education"` array |
| Skills | `portfolio.json` | `"skills"` array |
| About/Bio | `portfolio.json` | `"aboutMe"` string |
| Social Links | `portfolio.json` | `"socialLinks"` array |
| Styling/Colors | `stylesheet.css` | CSS rules |
| Website Layout | `index.html` | HTML structure |

---

## 5-Step Update Process

1. **Open**: `assets/data/portfolio.json`
2. **Find**: The section you want to change
3. **Edit**: The content (follow JSON format rules)
4. **Save**: File (Ctrl+S)
5. **Refresh**: Browser (Ctrl+Shift+R)

✅ **Done!** Changes appear instantly.

---

## JSON Format Rules (MUST FOLLOW)

```json
✅ CORRECT                          ❌ WRONG
"title": "My Title"                "title": 'My Title'
"name": "John"                      "name": "John",  (trailing comma)
"items": "A, B, C"                  "items": A, B, C  (missing quotes)
```

### Special Characters
```
To include quotes:     "Say \"Hello\""
To include backslash:  "Path: C:\\Users"
```

---

## Common Templates

### Add Work Experience
```json
{
  "date": "2026-2027",
  "title": "Job Title",
  "company": "Company Name",
  "companyLink": "https://company.com",
  "companyDescription": "Company description",
  "points": [
    "<strong>Achievement</strong> description",
    "<strong>Achievement</strong> description"
  ]
}
```

### Add Project
```json
{
  "title": "Project Name",
  "link": "https://github.com/link",
  "date": "Month Year"
}
```

### Add Skill
```json
{
  "category": "Category Name",
  "items": "Skill1, Skill2, Skill3"
}
```

### Add Education
```json
{
  "school": "School Name",
  "degree": "Degree Type",
  "major": "Field of Study",
  "years": "2024-2026"
}
```

### Add Social Link
```json
{
  "platform": "Platform",
  "url": "https://profile-link.com",
  "name": "Display Name",
  "icon": "fa-platform-name"
}
```

---

## HTML Tags You Can Use

- `<strong>text</strong>` → **Bold**
- `<em>text</em>` → *Italic*
- Plain text → Normal

**Example**: `"<strong>Led</strong> <em>API redesign</em> improving performance by 40%"`

---

## Icon Names for Social Links

```
fa-linkedin      LinkedIn
fa-github        GitHub
fa-twitter       Twitter/X
fa-instagram     Instagram
fa-whatsapp      WhatsApp
fa-facebook      Facebook
fa-youtube       YouTube
fa-code          Generic coding icon
```

---

## Validation Checklist

- [ ] All strings have double quotes: `" "`
- [ ] No single quotes: ~~' '~~
- [ ] No trailing commas after last item
- [ ] All `{` have matching `}`
- [ ] All `[` have matching `]`
- [ ] Used `<strong>` not `<b>` for bold
- [ ] Escaped special characters: `\"` for quotes, `\\` for backslash

**🔗 Validate Online**: https://jsonlint.com

---

## Troubleshooting

| Issue | Solution |
|---|---|
| Changes not showing | Save file (Ctrl+S) → Hard refresh (Ctrl+Shift+R) |
| Error message appears | Check JSON syntax at jsonlint.com |
| Styling looks wrong | Check your HTML tags in JSON |
| Section missing | Verify section name matches exactly |
| Weird characters display | Make sure you're using `"` quotes, not `'` |

---

## JSON Validator Tool
🔗 **https://jsonlint.com**

Usage:
1. Copy your JSON content
2. Paste into jsonlint.com
3. Click "Validate JSON"
4. Fix any errors shown

---

## File Structure
```
kushal_portfolio/
├── index.html
├── stylesheet.css
├── PORTFOLIO_GUIDE.md          ← Detailed guide (you are here)
├── QUICK_REFERENCE.md          ← Quick reference (you are here)
├── README.md
├── assets/
│   ├── data/
│   │   └── portfolio.json      ← ⭐ EDIT THIS FILE
│   └── images/
├── scripts/
│   └── main.js
```

---

## Before You Ask for Help

✓ Did you save the file?
✓ Did you hard refresh the browser?
✓ Does jsonlint.com say your JSON is valid?
✓ Is the file at: `assets/data/portfolio.json`?

---

## Emergency Undo

If something breaks:

**Option 1**: Use browser "Undo" (Ctrl+Z) if you haven't closed the editor
**Option 2**: Delete all changes and restart from a backup
**Option 3**: Restore from git if you're using version control

---

**Questions?** Check `PORTFOLIO_GUIDE.md` for detailed explanations!
