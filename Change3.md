# Change 3: Add a homepage portrait and simplify the footer

## Goal
Give the homepage a clear visual introduction and keep the footer focused on useful links.

## Planned changes
- Add the supplied portrait as a local image beside the homepage introduction on desktop and above it on narrow screens.
- Preserve the current homepage introduction, role, and links.
- Remove the footer credit while keeping LinkedIn, email, and copyright.
- Exclude this plan and uploaded source files from the generated site.

## Acceptance criteria
- The portrait has descriptive alternative text and works with both color themes.
- The homepage remains readable at desktop and mobile widths.
- The footer credit is absent while its links and copyright remain.
- The Jekyll build succeeds and the generated site does not contain `Change3.html`.