---
name: GitHub branch push fallback
description: Reliable GitHub REST fallback when CLI push authentication fails and a large binary asset needs transfer.
---

When `git push` cannot authenticate but the GitHub connector is available, GitHub's Git Database API can create a remote commit and branch reference. Build the tree from the remote base, then compare its tree SHA and the resulting commit SHA with the local commit before creating the visible reference. Match author/committer metadata and include the final newline in the commit message; GitHub's API omits it when it is not supplied.

**Why:** A mismatched remote tree can indicate an incomplete binary transfer, and commit hashes depend on the exact tree, parent, metadata, and message bytes.

**How to apply:** Use `listConnections("github")` only inside a `use impure` function. CodeExecution `shellExec` may return only about 82 KB of a larger base64 output without marking it truncated; split binary output into chunks of 60 KB or less and compare the resulting Git blob SHA to `git rev-parse HEAD:path`. Create the branch reference only after the remote tree and commit match the local objects.