<div align="center">

# 📚 SenseCraft HMI Documentation

**Official Documentation for SenseCraft HMI Platform**

*A no-code UI builder for e-paper and e-ink displays*

[![Built with Astro](https://img.shields.io/badge/Built%20with-Astro-FF5D01?style=flat&logo=astro&logoColor=white)](https://astro.build)
[![Powered by Starlight](https://img.shields.io/badge/Powered%20by-Starlight-5D3FD3?style=flat)](https://starlight.astro.build)
[![License](https://img.shields.io/badge/License-MIT-blue.svg?style=flat)](LICENSE)

[🌐 View Documentation](https://sensecraft-hmi-docs.netlify.app) • [🐛 Report Bug](../../issues) • [💡 Request Feature](../../issues)

</div>

---

## 🎯 About This Project

This repository contains the **official documentation** for **SenseCraft HMI** - an innovative no-code platform that empowers users to design beautiful user interfaces for e-paper and e-ink displays without writing a single line of code.

### 🌟 What is SenseCraft HMI?

SenseCraft HMI is a comprehensive platform that includes:

- 🎨 **Canvas Editor** - Drag-and-drop UI design tool
- 🤖 **AI Generator** - AI-powered layout generation
- 🖼️ **Gallery** - Pre-made templates and designs
- 🌐 **Web Integration** - Real-time data display
- 📡 **RSS Support** - Dynamic content updates
- 📱 **Multi-device Support** - Compatible with various e-paper displays

### 📖 Documentation Features

- 🌍 **Multi-language Support** - Available in English, Chinese (简体中文), Japanese (日本語), and Spanish (Español)
- 🔍 **Full-text Search** - Find what you need quickly
- 📱 **Responsive Design** - Perfect on desktop, tablet, and mobile
- 🎯 **Easy Navigation** - Organized by topics and difficulty levels
- 💡 **Rich Examples** - Code snippets, tutorials, and best practices

---

## 🚀 Quick Start

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** v18.0 or higher
- **npm** v9.0 or higher
- **Git**

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/Seeed-Solution/sensecraft-hmi-docs.git
   cd sensecraft-hmi-docs
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm run dev
   ```

4. **Open in your browser**

   Navigate to [http://localhost:4321](http://localhost:4321)

   The site will automatically reload when you make changes! 🔄

---

## 🤝 How to Contribute

We welcome contributions from the community! Whether you're fixing a typo, improving documentation, or adding new content, your help is appreciated.

### 📝 Contributing Documentation

#### 1️⃣ **Edit Existing Content**

Find the file you want to edit:

```
src/content/docs/
├── en/     # English
├── zh/     # 简体中文
├── ja/     # 日本語
└── es/     # Español
```

Make your changes and submit a pull request!

#### 2️⃣ **Add New Pages**

Create a new `.md` or `.mdx` file in the appropriate language folder:

```markdown
---
title: Your Page Title
description: Brief description that appears in search results
---

# Your Page Title

Write your content here using Markdown...
```

#### 3️⃣ **Multi-language Guidelines**

When adding new content, please provide translations in all supported languages:

- ✅ **English** (`en/`) - Required
- ✅ **Chinese** (`zh/`) - Required
- ✅ **Japanese** (`ja/`) - Required
- ✅ **Spanish** (`es/`) - Required

Keep the same file structure across all languages:

```
en/guides/your-guide.md
zh/guides/your-guide.md
ja/guides/your-guide.md
es/guides/your-guide.md
```

### 🎨 Content Guidelines

#### **Markdown Formatting**

```markdown
# Heading 1
## Heading 2
### Heading 3

**Bold text**
*Italic text*
`Inline code`

- Bullet point 1
- Bullet point 2

1. Numbered list
2. Second item
```

#### **Code Blocks**

````markdown
```python
# Python example
import sensecraft_hmi

display = sensecraft_hmi.Display()
display.show_text("Hello World")
```
````

#### **Callouts/Admonitions**

```markdown
:::tip[Pro Tip]
Use AI Generator to quickly create layouts!
:::

:::note
This feature requires firmware v2.0 or higher.
:::

:::caution
Always backup your designs before updating firmware.
:::

:::danger
Incorrect voltage may damage your display!
:::
```

#### **Images**

1. Place images in `src/assets/` or `public/`
2. Reference in your markdown:

```markdown
![Alt text](../../assets/your-image.png)
```

#### **Tables**

```markdown
| Feature | Support | Status |
|---------|---------|--------|
| E-Paper | 7.5" | ✅ |
| Color | Spectra 6 | ✅ |
| No-Code | Yes | ✅ |
```

### 🔍 Before Submitting

Please ensure:

- ✅ Content is technically accurate
- ✅ All code examples are tested
- ✅ Images are properly displayed
- ✅ Links are working
- ✅ No spelling/grammar errors
- ✅ Follows existing documentation style
- ✅ Multi-language versions are consistent

### 🐛 Reporting Issues

Found a problem? Please [open an issue](../../issues) with:

- 📝 Clear description of the problem
- 📍 Link to the page (if applicable)
- 💡 Suggested solution (if you have one)

---

## 🛠️ Development Commands

| Command | Description |
|---------|-------------|
| `npm install` | Install dependencies |
| `npm run dev` | Start development server (port 4321) |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run astro` | Run Astro CLI commands |

### 🔧 Troubleshooting

<details>
<summary><strong>Module not found error</strong></summary>

```bash
rm -rf node_modules package-lock.json
npm install
```
</details>

<details>
<summary><strong>Port already in use</strong></summary>

```bash
npm run dev -- --port 3000
```
</details>

<details>
<summary><strong>Build errors</strong></summary>

- Check for syntax errors in Markdown files
- Ensure all image paths are correct
- Verify frontmatter YAML format
- Check for broken links
</details>

---

## 📁 Project Structure

```
sensecraft-hmi-docs/
├── src/
│   ├── content/
│   │   └── docs/           # Documentation content
│   │       ├── en/         # English
│   │       ├── zh/         # Chinese
│   │       ├── ja/         # Japanese
│   │       └── es/         # Spanish
│   ├── assets/             # Images and media
│   └── styles/             # Custom CSS
├── public/                 # Static assets
├── dist/                   # Build output
├── astro.config.mjs        # Astro configuration
└── package.json            # Dependencies
```

---

## 🌍 Supported Languages

<div align="center">

| Language | Code | Status | Maintainer |
|----------|------|--------|------------|
| English | `en` | ✅ Active | Core Team |
| 简体中文 | `zh` | ✅ Active | Core Team |
| 日本語 | `ja` | ✅ Active | Core Team |
| Español | `es` | ✅ Active | Core Team |

</div>

Want to add a new language? [Open an issue](../../issues) to discuss!

---

## 🔗 Useful Links

- 📚 [Astro Documentation](https://docs.astro.build)
- ⭐ [Starlight Theme](https://starlight.astro.build)
- ✍️ [Markdown Guide](https://www.markdownguide.org)
- 🎨 [SenseCraft HMI Platform](https://sensecraft.seeed.cc)
- 🏪 [Seeed Studio](https://www.seeedstudio.com)

---

## 📄 License

This documentation is open source and available under the [MIT License](LICENSE).

---

## 💬 Get Help

<div align="center">

**Questions? Issues? Suggestions?**

[💬 GitHub Discussions](../../discussions) • [🐛 Issue Tracker](../../issues) • [✉️ Contact Us](mailto:support@seeedstudio.com)

</div>

---

<div align="center">

**Built with ❤️ by [Seeed Studio](https://www.seeedstudio.com)**

⭐ Star us on GitHub if this documentation helped you!

</div>
