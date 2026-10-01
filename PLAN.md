# Portfolio Site Plan

## Goal

Replace the starter app/workspace with a publish-ready Jekyll portfolio in the repository root for **akhil-neelam-ai.github.io**. GitHub Pages should publish from the `main` branch and `/` with `baseurl: ""`; the site will use Jekyll URL filters and will not use React, a backend, or a database.

## Pages and content

- **Home:** introduce Akhil using only facts supported by the résumé, with links to the other pages.
- **About:** present résumé-supported education, leadership, skills, and interests. Any personal introduction not supported by supplied material will be clearly marked as a placeholder.
- **Work Experience:** include the supplied roles, dates, and accomplishments for Volt AI, Uniblox, Centre for Gender and Politics, Central Square Foundation, and the Andhra Pradesh School Education Department.
- **Contact:** include a public `mailto:akhil_neelam@berkeley.edu` link and the supplied LinkedIn and personal-site links. Omit the phone number.
- All pages share navigation and a footer.

## Implementation

- Use Markdown pages with YAML front matter, reusable Jekyll layouts and includes, semantic HTML, responsive CSS, and minimal JavaScript for the light/dark theme toggle.
- Provide accessible contrast, a favicon, page-level SEO metadata, Open Graph metadata, and a sitemap.
- Include `_config.yml` with the GitHub user-site URL and an empty `baseurl`, plus a README covering content updates, local preview, and Lighthouse.
- Keep the website files directly in the repository root. Remove the generated app, API, library, and workspace package files that conflict with a Jekyll-only repository. Preserve Replit-managed environment metadata and the original résumé attachment.

## Assumptions and checks

- Use both light and dark themes and a friendly-feeling type direction.
- Use the supplied reference URL as optional inspiration without copying its content or branding. A visual preview was unavailable, and no specific qualities were identified, so the design will not assume details about what you liked.
- Do not invent employers, achievements, metrics, clients, or projects; use only supplied résumé facts and visibly mark any unsupplied personal copy as a placeholder.
- Check the root-level GitHub Pages structure, page navigation, and layouts at 375px and 1280px. Run a Jekyll build and check Lighthouse scores, aiming for at least 90 in Performance, Accessibility, Best Practices, and SEO.