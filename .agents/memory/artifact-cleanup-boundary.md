---
name: Artifact cleanup boundary
description: Replit-managed artifact metadata and workflows can outlive the application source files.
---

The workspace may retain registered artifact metadata and managed workflows after an artifact's application source and dependencies are removed. Direct deletion of platform-managed metadata or workflow removal can be rejected.

**Why:** Replit owns the artifact registration and associated workflow lifecycle; those records are separate from the application code and can be excluded from a root-level static site's published output.

**How to apply:** During a project conversion, remove the obsolete application source and dependencies, preserve protected registrations unless a supported cleanup operation is available, and clearly distinguish remaining platform metadata from shipped site content.