# Changelog

All notable changes to Professor Denvil R. Duncan's Academic Website project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to semantic versioning standards.

## [1.1.0] - 2026-08-03

### Added
- **Interactive Abstract Dropdowns**: Implemented collapsible abstract dropdown toggles (`<details class="abstract-details">`) across all paper cards on `index.html`, `research.html`, and `working-papers.html`.
- **Complete Research Abstracts**: Updated all 31 published peer-reviewed journal papers and policy publications with full, author-verified abstracts in `app.js` and `index.html`.
- **Schema.org Structured Data (JSON-LD)**: Embedded `Person` and `CollegeOrUniversity` structured data on `index.html` detailing expertise in *Tax Policy & Evasion*, *Road Mileage User Taxes*, *CAFE Standards*, *Labor Discrimination*, and *Food Insecurity*.
- **Social Media Metadata**: Added Open Graph (`og:title`, `og:description`, `og:image`, `og:url`) and Twitter Card (`twitter:card`, `twitter:title`, `twitter:description`, `twitter:image`) preview tags.
- **Search Engine Crawler Files**: Created `sitemap.xml` and `robots.txt` for automatic search engine indexing.
- **Canonical & Keyword Tags**: Added canonical URL tags (`<link rel="canonical">`) and target academic keywords across page header elements.

### Changed
- **Homepage Executive Biography**: Updated biography on `index.html` to a refined, 3-paragraph scholarly narrative focusing on tax policy, transportation financing, labor discrimination, and food security research.
- **Research Topic Pills**: Refreshed homepage focus pills to reflect active research agendas: *Tax Policy & Evasion*, *Auto Regulation & Transportation*, *Platform Labor & Discrimination*, *Food Insecurity*, and *Public & Labor Economics*.
- **Publication Links**: Updated article URLs in `app.js` for direct DOI access and repository PDF manuscript links.

---

## [1.0.0] - 2026-08-01

### Added
- Initial release of Professor Denvil R. Duncan's personal academic website repository.
- Responsive, modern UI with CSS variables, light/dark theme toggle, ambient glow background effects, and glassmorphism styling.
- Interactive publication filtering engine by topic category (*Tax Policy*, *Transportation*, *Labor Supply*, *Housing & Public Policy*) and live keyword search in `app.js`.
- BibTeX citation generator modal for all published research.
