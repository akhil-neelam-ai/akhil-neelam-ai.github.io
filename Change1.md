# Change 1: Add a homepage portrait and simplify the footer

## Goals

- Add a user-supplied portrait to the homepage landing area, arranged so it complements the introduction on desktop and remains clear on narrow screens.
- Remove the exact footer credit “Made with care by Akhil Neelam.”
- Keep the footer’s LinkedIn link, email link, and copyright notice.

## Acceptance criteria

- The portrait is a local site asset, not a remote image.
- The portrait has appropriate alternative text and works in light and dark themes.
- The homepage remains readable and unclipped at 375px and 1280px.
- The footer credit is absent from every page while its other links and copyright remain.
- Existing résumé and screenshot uploads are not published.
- The Jekyll build succeeds and all four site routes continue to work.

## Required asset

- Akhil supplied a portrait; its optimized 1200 × 1200 local copy is `assets/images/akhil-neelam.jpg`.
- Keep the original upload under `attached_assets/` excluded from the generated site.
- Do not substitute the GitHub Pages settings screenshot, extract an image from the résumé, or fetch a portrait from a URL.

## Implementation status

Completed on `feature/landing-photo-clean-footer`.

- Added the portrait beside the homepage introduction on desktop and above it on mobile.
- Removed only the requested footer credit; retained LinkedIn, email, and copyright.
- Added a Jekyll Preview workflow for checking the same root-level site in Replit.

## Verification

- Jekyll build succeeds; home, about, work experience, contact, and portrait routes return HTTP 200.
- The generated site excludes this plan and the uploaded source files.
- Preview checked at desktop and 375px mobile widths in both light and dark themes; no clipping observed.

## Out of scope

- No changes to résumé details, other page content, or contact information.