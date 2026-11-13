# Progress · titan117-pop

The product owner portal's own log (the shared docs are copied from `titan117-web`). Update this file in the same commit as the work, newest first. Phases are in the [roadmap](01-launch-roadmap-v1.md); this repo is part of phase 0 (an empty app deployed behind two-factor) and phase 5 (the error report screens).

**Now:** phase 0 in progress (13 Nov 2026): sign-in with a two-factor switch in code. **Next step:** the staff Clerk application in Invite-only mode, its keys in `.env.local` and Vercel, then a real sign-in on the deployed portal.

## Log

### 13 Nov 2026 · Secret scanning config, branch protection

Gitleaks flagged the fake Clerk keys that let `next build` run in CI; `.gitleaks.toml` keeps the default rules and allows exactly those two values. The Staff application's keys are in `.env.local` (git-ignored); `.env.example` holds placeholders only. **Branch protection on `main`** (guardrails §13), set with this commit: changes only through pull requests, every CI job required and up to date with `main`, admins included, no force-pushes or deletions. No review is required while there is one developer. Left: the Vercel project and a sign-in on the deployed portal.

### 7 Nov 2026 · Repo created

Decided to keep the product owner portal in its own repo (decisions §6). Created locally with a README, `.gitignore`, this log, and the shared docs and `CLAUDE.md` copied from `titan117-web` with `scripts/sync-docs.py`. No app code yet; nothing committed or pushed.
