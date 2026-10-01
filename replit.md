# Akhil Neelam — Personal Portfolio

A static Jekyll portfolio intended for GitHub Pages at `akhil-neelam-ai.github.io`.

## Source of truth

- Page copy and YAML front matter: `index.md`, `about.md`, `work-experience.md`, and `contact.md`
- Shared page structure: `_layouts/default.html` and `_includes/`
- Site configuration and navigation: `_config.yml` and `_data/navigation.yml`
- Styling and theme toggle: `assets/css/site.css` and `assets/js/theme.js`

## Constraints

- Keep the complete Jekyll site at the repository root; publish from `main` and `/ (root)`.
- Preserve `baseurl: ""` and use Jekyll URL filters for internal links.
- Keep content in Markdown with front matter, presentation in reusable HTML/CSS, and JavaScript minimal.
- Do not add a backend, database, app framework, contact form, tracker, or unverified résumé claims.
- The uploaded résumé is excluded from the generated site. Its phone number is not published.

See `README.md` for publishing, editing, local preview, and Lighthouse instructions.
