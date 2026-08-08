# Project Rules & Conversation Protocol

This repository adheres to a standardized conversation lifecycle protocol for all AI coding assistants.

## 1. Startup Protocol (Beginning of Conversation)
- **Git Synchronization**: At the beginning of a conversation turn before executing requested changes, always verify and pull the latest changes from the remote repository using `git pull`.

## 2. In-Session Protocol (During Conversation)
- **Local Modifications Only**: All code, document, and structural edits made during a conversation must remain local.
- **No Mid-Session Pushing**: Do not commit or push to Git after individual edits or partial tasks. Defer all commits and pushes until work is finalized at the end of the session.

## 3. Shutdown Protocol (End of Conversation)
When all requested tasks for the conversation are completed and validated:
- **Update Changelog**: Document all changes made during the conversation in [`CHANGELOG.md`](file:///Users/duncande/Documents/website/CHANGELOG.md) following the established format (`Added`, `Changed`, `Fixed`, etc.).
- **Git Commit**: Stage modified files (including `CHANGELOG.md`) and create a clear, descriptive commit message.
- **Git Push**: Push the committed changes to the remote repository using `git push`.
