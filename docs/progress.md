# Progress · titan117-pop

The product owner portal's own log (the shared docs are copied from `titan117-web`). Update this file in the same commit as the work, newest first. Phases are in the [roadmap](01-launch-roadmap-v1.md); this repo is part of phase 0 (an empty app deployed behind two-factor) and phase 5 (the error report screens).

**Now:** phase 0 is done (14 Nov 2026): the empty portal is live behind staff sign-in. **Next step:** phase 5 brings the first screens; before it, Clerk Pro with required two-factor and the removal of `PORTAL_TWO_FACTOR` (decisions §37).
## Log

### 15 Nov 2026 · Phase 5: setup and health (shared docs)

Decisions §46 (the first-launch wizard, the checklist, the health check, disk thresholds) and its line on the owner checklist. Built in `titan117-desktop` on `phase-5-setup`; nothing changed in this repo's code.

### 15 Nov 2026 · Shared docs synced: phase 5 error reports

Decisions §45 and the owner checklist. **Next here:** the error screens (groups, a group's reports, mark fixed) on `errorReports.groups`, `groupReports` and `markFixed`, once Clerk Pro and required two-factor are in place (§37).

### 15 Nov 2026 · The owner checklist

Every open item for the owner, from all three repos' logs, is now in one place: `docs/owner-checklist.md` (shared doc): decisions to confirm (§44 first), checks only the owner can run (phase 4's check), accounts and services, legal, vendors, before the beta. CLAUDE.md says new owner items go there in the same commit. At the owner's request, phase 5 starts before phase 4's check is run; that's recorded on the checklist for the owner to confirm.

### 15 Nov 2026 · Shared docs synced: phase 4

Decisions §44 (web search and artifacts, to be confirmed), the search and share-link service rows, the phase 4 open-source references and the feature map's note that Serper is dropped. The licence check allows `Zlib`, as in the other two repos. **For phase 5:** a screen for reports about shared pages (`shares.openReports` and `shares.decide` in Convex, admin only).

### 15 Nov 2026 · Shared docs synced: the system voices

Synced from `titan117-web`: decisions §43.10, read aloud keeps the system voices and Kokoro is not used (GPL inside). Nothing else changed here.

### 15 Nov 2026 · Shared docs synced: commands on Windows

Synced from `titan117-web`: decisions §43.1, Windows commands run without an OS sandbox (the owner chose option A). Nothing else changed here.

### 15 Nov 2026 · Shared docs synced: phase 3

Synced from `titan117-web`: decisions §43 (phase 3: the shell sandbox, the network policy, memory, skills, connectors, speech; closes open decision 2), new rows in `external-services.md` (MCP connectors, the user's own browser, the Whisper model) and `open-source-references.md`, and the shell sandbox marked decided in `v1-scope.md`. Nothing else changed here.

### 15 Nov 2026 · Shared docs synced: deleting an account

Synced from `titan117-web`: decisions §42 (account deletion after 30 days), the `users` row in the data table, and Clerk's and Stripe's deletion facts in `external-services.md`. Nothing else changed here.

### 15 Nov 2026 · Shared docs synced: the website in the web app

Synced from `titan117-web`: decisions §41 (the website in the web app, legal pages, the waiver confirmed on invoices) and Stripe's invoice-footer facts in `external-services.md`. Nothing else changed here.

### 15 Nov 2026 · Shared docs synced: your own API keys

Synced from `titan117-web`: decisions §40 (the user's own API keys, the "via" label, faster lease renewal) and how Titan117 calls each provider in `external-services.md`. Nothing else changed here.

### 15 Nov 2026 · Shared docs synced: desktop sign-in and the licence lease

Synced from `titan117-web`: decisions §39 (desktop sign-in through the browser, device tokens, the signed licence lease), the `deviceSignIns` row and `devices` fields in the data table, and the architecture's sign-in steps. Nothing else changed here.

### 15 Nov 2026 · Shared docs synced: the credits proxy

Synced from `titan117-web`: the `proxyCalls` row in the data table (decisions §11) and how the proxy charges OpenRouter calls (`external-services.md`). Nothing else changed here.

### 15 Nov 2026 · Shared docs synced: plans, credits and Stripe

Synced from `titan117-web`: four new tables in the data table (decisions §11: `stripeCustomers`, `stripeEvents`, `creditBuckets`, `creditLedger`) and the no-refunds rule in `pricing.md` (decisions §33.8). Nothing else changed here.

### 15 Nov 2026 · Shared docs synced: phase 2 prep

Synced from `titan117-web`: Stripe and the users' own model keys checked against the vendors' docs in `external-services.md`; phase 2 references cloned and licence-checked in `open-source-references.md`. Nothing else changed here.

### 14 Nov 2026 · Phase 0 done: deployed behind staff sign-in

Deployed at `titan117-pop.vercel.app` from `EcotechCore/titan117-pop`. Checked there: signed out, every page redirects to sign-in and back; the Clerk application is TITAN117 Staff with invite-only sign-up; the owner signed in. Two-factor is off by the explicit setting until Clerk Pro (decisions §37). A CI step now checks the repository settings on every run (`scripts/check-repo-settings.mjs`): `main` protected, rules applying to admins, every CI job a required check. The pull request rule isn't visible to that check and is confirmed by hand when settings change. Not checked: a customer account being refused.

### 13 Nov 2026 · Secret scanning config, branch protection

Gitleaks flagged the fake Clerk keys that let `next build` run in CI; `.gitleaks.toml` keeps the default rules and allows exactly those two values. The Staff application's keys are in `.env.local` (git-ignored); `.env.example` holds placeholders only. **Branch protection on `main`** (guardrails §13), set with this commit: changes only through pull requests, every CI job required and up to date with `main`, admins included, no force-pushes or deletions. No review is required while there is one developer. Left: the Vercel project and a sign-in on the deployed portal.

### 7 Nov 2026 · Repo created

Decided to keep the product owner portal in its own repo (decisions §6). Created locally with a README, `.gitignore`, this log, and the shared docs and `CLAUDE.md` copied from `titan117-web` with `scripts/sync-docs.py`. No app code yet; nothing committed or pushed.
