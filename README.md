# SenseCraft HMI Documentation

This repository contains the official documentation for SenseCraft HMI - a no-code UI builder platform for e-paper/e-ink displays.

## 🚀 Quick Start for AE Team

### Prerequisites

- Node.js 18+ installed on your computer
- Git installed
- Basic terminal/command line knowledge

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/Seeed-Solution/sensecraft-hmi-docs.git
   cd sensecraft-hmi-docs
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   - Visit http://localhost:4321
   - The site will auto-reload when you make changes

## 📝 How to Add/Edit Content

### File Structure
```
src/content/docs/
├── en/          # English content
├── zh/          # Chinese content
└── ja/          # Japanese content
```

### Adding a New Page

1. **Create a new `.md` or `.mdx` file** in the appropriate language folder:
   ```
   src/content/docs/en/guides/your-new-page.md
   ```

2. **Add frontmatter** at the top of your file:
   ```yaml
   ---
   title: Your Page Title
   description: Brief description of the page
   ---
   ```

3. **Write your content** using Markdown:
   ```markdown
   # Main Heading
   
   Your content here...
   
   ## Subheading
   
   - Bullet point 1
   - Bullet point 2
   
   ```

### Editing Existing Pages

1. **Find the file** you want to edit in `src/content/docs/`
2. **Make your changes** using any text editor
3. **Save the file** - the browser will auto-refresh

## 🌐 Multi-language Support

### Adding Content in Different Languages

1. **English**: Place files in `src/content/docs/en/`
2. **Chinese**: Place files in `src/content/docs/zh/`
3. **Japanese**: Place files in `src/content/docs/ja/`

**Important**: Keep the same file structure across all languages:
```
en/guides/getting-started.md
zh/guides/getting-started.md
ja/guides/getting-started.md
```

## 📸 Adding Images

1. **Place images** in `src/assets/` folder
2. **Reference in Markdown**:
   ```markdown
   ![Alt text](../../assets/your-image.png)
   ```

## 🎨 Common Content Examples

### Code Blocks
````markdown
```python
# Python example
import sensecraft_hmi

display = sensecraft_hmi.Display()
display.show_text("Hello World")
```
````

### Alerts/Callouts
```markdown
:::tip
This is a helpful tip for users
:::

:::caution
Important information users should know
:::

:::danger
Critical warnings go here
:::
```

### Tables
```markdown
| Feature | Description | Status |
|---------|-------------|--------|
| E-Paper Support | 7.5" displays | ✅ |
| Color E-Ink | Spectra 6 | ✅ |
| No-Code UI | Drag & Drop | ✅ |
```

## 🚀 Deployment

### Building for Production
```bash
npm run build
```

The built files will be in the `dist/` folder.

### Preview Production Build
```bash
npm run preview
```

## 📋 Checklist for AE Before Publishing

- [ ] Content is technically accurate
- [ ] All code examples are tested
- [ ] Images are properly displayed
- [ ] Links are working
- [ ] Content exists in all 3 languages (EN/ZH/JA)
- [ ] No sensitive information included

## 🛠️ Troubleshooting

### Common Issues

1. **"Module not found" error**
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```

2. **Port already in use**
   ```bash
   npm run dev -- --port 3000
   ```

3. **Build errors**
   - Check for syntax errors in Markdown files
   - Ensure all image paths are correct
   - Verify frontmatter format (YAML)

## 📞 Need Help?

- **Documentation Issues**: Create an issue on GitHub
- **Technical Support**: Contact the development team
- **Content Questions**: Reach out to the technical writing team

## 🔧 Useful Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run astro` | Run Astro CLI commands |

## 📚 Additional Resources

- [Astro Documentation](https://docs.astro.build)
- [Starlight Theme Docs](https://starlight.astro.build)
- [Markdown Guide](https://www.markdownguide.org)

---

**Last Updated**: October 2024  
**Maintained by**: Seeed Studio Documentation Team