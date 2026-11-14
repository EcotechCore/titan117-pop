# Progress · titan117-pop

The product owner portal's own log (the shared docs are copied from `titan117-web`). Update this file in the same commit as the work, newest first. Phases are in the [roadmap](01-launch-roadmap-v1.md); this repo is part of phase 0 (an empty app deployed behind two-factor) and phase 5 (the error report screens).

**Now:** phase 0 is done (14 Nov 2026): the empty portal is live behind staff sign-in. **Next step:** phase 5 brings the first screens; before it, Clerk Pro with required two-factor and the removal of `PORTAL_TWO_FACTOR` (decisions §37).
## Log

### 14 Nov 2026 · Phase 0 done: deployed behind staff sign-in

Deployed at `titan117-pop.vercel.app` from `EcotechCore/titan117-pop`. Checked there: signed out, every page redirects to sign-in and back; the Clerk application is TITAN117 Staff with invite-only sign-up; the owner signed in. Two-factor is off by the explicit setting until Clerk Pro (decisions §37). A CI step now checks the repository settings on every run (`scripts/check-repo-settings.mjs`): `main` protected, rules applying to admins, every CI job a required check. The pull request rule isn't visible to that check and is confirmed by hand when settings change. Not checked: a customer account being refused.

### 13 Nov 2026 · Secret scanning config, branch protection

Gitleaks flagged the fake Clerk keys that let `next build` run in CI; `.gitleaks.toml` keeps the default rules and allows exactly those two values. The Staff application's keys are in `.env.local` (git-ignored); `.env.example` holds placeholders only. **Branch protection on `main`** (guardrails §13), set with this commit: changes only through pull requests, every CI job required and up to date with `main`, admins included, no force-pushes or deletions. No review is required while there is one developer. Left: the Vercel project and a sign-in on the deployed portal.

### 7 Nov 2026 · Repo created

Decided to keep the product owner portal in its own repo (decisions §6). Created locally with a README, `.gitignore`, this log, and the shared docs and `CLAUDE.md` copied from `titan117-web` with `scripts/sync-docs.py`. No app code yet; nothing committed or pushed.
