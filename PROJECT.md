# Project Overview & Architecture Guide

**Project**: Official Academic Portfolio & Research Repository  
**Owner**: Professor Denvil R. Duncan, Ph.D.  
**Affiliation**: O'Neill School of Public and Environmental Affairs, Indiana University Bloomington  
**Live Site**: [https://duncande.github.io/](https://duncande.github.io/)

---

## 1. Project Purpose & Objectives

This repository powers the official personal website of **Professor Denvil R. Duncan**. The site serves as an authoritative digital academic portfolio highlighting his research, teaching, service, and professional contributions.

### Key Objectives:
1. **Academic Visibility & Search Presence (SEO)**: Maximize search engine ranking for key research queries, including *mileage tax*, *tax evasion*, *CAFE standards*, *platform labor market*, *discrimination*, and *food insecurity*.
2. **Research Showcase**: Provide scholars, policymakers, and students with immediate access to published articles, working paper manuscripts, abstracts, and BibTeX citations.
3. **Modern User Experience**: Deliver a fast, mobile-responsive, accessible interface featuring smooth dark/light mode switching and interactive paper filtering.

---

## 2. Technology Stack & Design System

The application is built using lightweight, framework-agnostic web technologies to ensure maximum performance, zero build overhead, and long-term sustainability:

- **Core Structure**: HTML5 Semantic Elements (`<main>`, `<section>`, `<article>`, `<header>`, `<footer>`, `<details>`)
- **Styling**: Vanilla CSS3 using custom CSS variables (Design System design tokens)
  - **Color Palettes**: Curated HSL color variables with dedicated dark/light mode mappings (`data-theme="light"` / `data-theme="dark"`).
  - **Visual Effects**: Glassmorphism (`backdrop-filter`), ambient radial background glows (`.bg-ambient-glow`), and CSS transitions.
- **Logic & Interactivity**: Client-side JavaScript (`app.js`)
  - Dataset-driven rendering for 31+ publications and working papers.
  - Category-based filter tabs and real-time text search.
  - Interactive modal dialog for BibTeX citations.
  - Persistent theme switching via `localStorage`.

---

## 3. Site Structure & Navigation

| File | Purpose / Description |
| :--- | :--- |
| [`index.html`](file:///Users/duncande/Documents/website/index.html) | **Homepage**: Hero profile, executive academic biography, Forbes spotlight feature, and top 5 recent publication cards with collapsible abstracts. |
| [`research.html`](file:///Users/duncande/Documents/website/research.html) | **Published Research**: Full dataset of 31 published peer-reviewed journal articles and policy briefs with category filtering, search, and BibTeX modals. |
| [`working-papers.html`](file:///Users/duncande/Documents/website/working-papers.html) | **Working Papers**: Active manuscripts under review, revisions requested, and work-in-progress research projects. |
| [`teaching.html`](file:///Users/duncande/Documents/website/teaching.html) | **Teaching Portfolio**: Undergraduate and graduate public finance/economics course offerings, syllabi, and teaching philosophy. |
| [`service.html`](file:///Users/duncande/Documents/website/service.html) | **Academic Service**: Journal editorial board appointments (*National Tax Journal*, *Public Budgeting & Finance*), university committees, and professional service. |
| [`contact.html`](file:///Users/duncande/Documents/website/contact.html) | **Contact & Location**: Office hours, campus location (O'Neill SPEA Suite 260), email contact, and academic profile links. |
| [`app.js`](file:///Users/duncande/Documents/website/app.js) | Main dataset (`publicationsData` & `workingPapersData`) and interactive rendering logic. |
| [`styles.css`](file:///Users/duncande/Documents/website/styles.css) | Core stylesheet containing global tokens, dark mode engine, typography, and card layouts. |
| [`sitemap.xml`](file:///Users/duncande/Documents/website/sitemap.xml) | Search engine sitemap for indexation. |
| [`robots.txt`](file:///Users/duncande/Documents/website/robots.txt) | Search engine crawler rules. |
| [`CHANGELOG.md`](file:///Users/duncande/Documents/website/CHANGELOG.md) | Project version history and change log. |

---

## 4. Search Engine Optimization (SEO) & Metadata

The codebase implements comprehensive technical and content SEO:

1. **Schema.org Structured Data (JSON-LD)**: Located in `index.html`, defining Dr. Duncan as a `Person` and `Professor of Economics` at Indiana University, explicitly declaring expertise in key research domains.
2. **Open Graph & Twitter Cards**: Social media cards configured across all HTML pages for clean previews when shared on Twitter/X, LinkedIn, or academic blogs.
3. **Canonical URLs & Meta Keywords**: Explicit `<link rel="canonical">` and keyword tags on every page.
4. **Collapsible Abstracts**: All paper abstracts are embedded in `<details class="abstract-details">` dropdowns, allowing search engine bots to read the full text while keeping the UI clean for human readers.

---

## 5. Maintenance Guide: Adding New Research

To add a new publication to the website:

1. Open [`app.js`](file:///Users/duncande/Documents/website/app.js).
2. Add a new object to the `publicationsData` array:
   ```javascript
   {
     id: "duncan-2026-newpaper",
     title: "Title of the New Paper",
     authors: "Denvil Duncan, Co-Author Name",
     journal: "Journal Name, Vol(Issue): Pages",
     year: 2026,
     category: "tax-policy", // Options: 'tax-policy', 'transportation', 'labor-supply', 'housing-public'
     abstract: "Full text of the abstract...",
     status: "Published",
     link: "https://doi.org/10.xxxx/xxxx"
   }
   ```
3. Save the file and push the changes to GitHub (`git push origin main`). GitHub Pages will deploy the update automatically.
