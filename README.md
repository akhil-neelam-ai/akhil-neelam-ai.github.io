# Akhil Neelam — Personal Portfolio

A static portfolio built with Jekyll, Markdown, HTML, and CSS. GitHub Pages can publish it directly from the `main` branch and the repository root; no separate build workflow is required.

## Publish with GitHub Pages

1. Create or use the GitHub repository named `akhil-neelam-ai.github.io`.
2. Push this repository’s root files to its `main` branch.
3. In the repository, open **Settings → Pages**.
4. Under **Build and deployment**, select **Deploy from a branch**, choose `main` and `/ (root)`, then save.

The site uses `url: "https://akhil-neelam-ai.github.io"` and an empty `baseurl`, as required for a GitHub user site.

## Update the site

- Edit `index.md`, `about.md`, `work-experience.md`, or `contact.md`. Each page’s title and description are in its YAML front matter.
- Navigation labels and paths are in `_data/navigation.yml`.
- Shared page structure is in `_layouts/default.html` and `_includes/`.
- Site styles are in `assets/css/site.css`; the small theme-toggle script is in `assets/js/theme.js`.
- Update the site URL or description in `_config.yml` if the GitHub username or site changes.
- Personal details on the pages come from the supplied résumé. Keep achievements and metrics accurate when editing.

## Preview locally

Install Ruby and Jekyll if they are not already available:

```sh
gem install jekyll
jekyll serve
```

Open `http://127.0.0.1:4000`. Jekyll rebuilds the site when source files change. The résumé upload is excluded from the generated site.

## Check responsive layouts and Lighthouse

Use Chrome DevTools’ device toolbar to inspect the pages at **375px** and **1280px**. In DevTools, open **Lighthouse**, select Performance, Accessibility, Best Practices, and SEO, then run the audit. Aim for a score of 90 or higher in each category.
