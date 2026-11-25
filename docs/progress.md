# Progress · titan117-pop

The product owner portal's own log (the shared docs are copied from `titan117-web`). Update this file in the same commit as the work, newest first. Phases are in the [roadmap](01-launch-roadmap-v1.md); this repo is part of phase 0 (an empty app deployed behind two-factor) and phase 5 (the error report screens).

**Now:** phase 0 is done (14 Nov 2026): the empty portal is live behind staff sign-in. **Next step:** phase 5 brings the first screens; before it, Clerk Pro with required two-factor and the removal of `PORTAL_TWO_FACTOR` (decisions §37).
## Log

### 25 Nov 2026 · Phase 14: newsletters, analytics and the video studio (shared docs)

The shared docs are copied from `titan117-web`: decisions §63, the email providers' and Workers Analytics Engine rows, and the owner checklist. Nothing changes in the portal.

### 24 Nov 2026 · Phase 14's first two parts merged

The phase 14 pull requests are merged in all three repos (web #56 first, then desktop #51 and pop #43 after their docs check). CI caught a test that only failed on Linux (a `C:/Windows/…` path is relative there); fixed with a separate temporary folder. Run the desktop app from `main`.

### 24 Nov 2026 · Phase 14: reports, ads, leads and monitoring (shared docs)

The shared docs are copied from `titan117-web`: decisions §62.15–§62.19, the Google Ads and Meta Ads rows checked, and the owner checklist. Nothing changes in the portal.

### 24 Nov 2026 · Phase 14 started (shared docs)

The shared docs are copied from `titan117-web`: decisions §62 (the brand kit, ready-to-post posts with Copy and open, our own promo video engine; to be confirmed), the social platforms' row in `external-services.md`, phase 14's open-source rows, and the owner checklist. Nothing changes in the portal.

### 24 Nov 2026 · Phase 13: triggers and feeds (shared docs)

The shared docs are copied from `titan117-web`: decisions §61.18–§61.22 (triggers, ready-made schedules, feeds and the browser for watches, notifications; to be confirmed), EUR-Lex's feeds checked in `external-services.md`, and the owner checklist. Nothing changes in the portal.

### 24 Nov 2026 · Phase 13's first part merged

The phase 13 pull requests are merged in all three repos (web #53, desktop #48, pop #40); the owner checklist says to run the desktop app from `main`. Nothing changes in the portal.

### 24 Nov 2026 · Phase 13 started (shared docs)

The shared docs are copied from `titan117-web`: decisions §61 (automation: schedules, web watches and recordings, all on the laptop; to be confirmed), three new rows in `external-services.md`, phase 13's references and a phase 13 section on the owner checklist. No new Convex tables, so nothing changes in the portal.

### 22 Nov 2026 · Phase 12 merged (shared docs)

The phase 12 pull requests are merged in all three repos (web #41, desktop #39, pop #36); the owner checklist says to run the desktop app from `main`. Nothing changes in the portal.

### 22 Nov 2026 · Phase 12 started (shared docs)

Shared docs copied from `titan117-web`: decisions §60 (the QA and SEO agents, to be confirmed), new vendor rows (PageSpeed Insights and CrUX, AI search visibility, Search Console, DataForSEO, Business Profile), phase 12's open-source checks and the owner checklist. Nothing changes in the portal.

### 22 Nov 2026 · Phase 11 done and merged (shared docs)

Shared docs copied from `titan117-web`: the signed video webhook (decisions §59.13), the OpenRouter webhook facts, and the owner checklist (phase 11 done and merged; what to set before production). Nothing in the portal changes.

### 22 Nov 2026 · Phase 11: images and video (shared docs)

Shared docs copied from `titan117-web`: decisions §59.13 (images and video through credits, video jobs charged when they end, only their owner may follow them), the `proxyCalls` row's new job id, the OpenRouter media row and the owner checklist. Nothing in the portal changes.

### 22 Nov 2026 · Phase 11 started (shared docs)

Shared docs copied from `titan117-web`: the phase 11 start (decisions §59, to be confirmed: agents as files, built-in agents, parts handed between agents, smart routing, Compare, agents and skills on request, media next), the OpenRouter media row in `external-services.md`, phase 11's references with licences checked, and the owner checklist's phase 11 section. Nothing in the portal changes.

### 22 Nov 2026 · Phase 10 merged

The phase 10 pull requests are merged into `main` in all three repos (web #38, desktop #36, pop #33). The owner checklist now says to run the desktop app from `main` for phases 9 and 10, and its "Where the code is" line is current. Secret scanning flagged a fake base64 test value in the sync test; it's built at run time now and allowlisted with its reason in the desktop repo's `.gitleaks.toml`.

### 22 Nov 2026 · Phase 10: the rest (shared docs)

Copied from `titan117-web`: decisions §58.10–12 (`titan.ai`, another target, the sync core) and the owner checklist's additions. Nothing changes in the portal.

### 22 Nov 2026 · Phase 10 started: sidebar apps (shared docs)

Copied from `titan117-web`: decisions §58 (sidebar apps; the planned `syncChanges` table in §11, ciphertext only), the phase 10 rows in `open-source-references.md` and `external-services.md`, and the owner checklist's Phase 10 section. Nothing changes in the portal.

### 22 Nov 2026 · Phase 9: the rest this laptop could build (shared docs)

Shared docs synced: decisions §57.19 and the owner checklist's emulator and clean-Windows steps. Nothing changes in the portal.

### 22 Nov 2026 · Phase 9: desktop apps, first part (shared docs)

Shared docs synced: decisions §57.18 (desktop apps with Tauri, first part), the Tauri row and the owner checklist. Nothing changes in the portal.

### 21 Nov 2026 · Phase 9 started (shared docs)

Shared docs synced from titan117-web's phase-start review: decisions §57 (the app builder for mobile and desktop, to be confirmed), the new external-services rows (Expo, the Android SDK, Apple, Google Play, Tauri, Windows Sandbox, UTM and Tart, Podman and Docker, Maestro, device farms), phase 9's references and a phase 9 section on the owner checklist. Nothing changes in the portal.

### 21 Nov 2026 · Phase 8's work merged (shared docs)

#30 merged with titan117-web #35 and titan117-desktop #33; shared docs synced (the owner checklist now says to run the desktop app from `main`). Nothing changes in the portal.

### 21 Nov 2026 · Phase 8: shared docs synced

Decisions §56.26–§56.27 and the hosts' Git connections row. Nothing changes in the portal.

### 21 Nov 2026 · Phase 8: shared docs synced

Decisions §56.17–§56.25 and the Convex row. Nothing changes in the portal.

### 21 Nov 2026 · GitHub App: Repository creation permission

The owner gave our GitHub App "Repository creation: Read and write", so Save to GitHub can make the repository itself. After the owner saved and accepted it, GitHub's API lists `repository_creation: write`. Still to try: a real save from the Apps screen, signed in. Shared docs updated (decisions §56.16, the GitHub row, the owner checklist).

### 21 Nov 2026 · Phase 8: Save to GitHub (shared docs)

Shared docs synced: decisions §56.16 and the GitHub row. Nothing changes in the portal.

### 21 Nov 2026 · Phase 8 started (shared docs)

Shared docs synced: decisions §56 (the app builder for the web), the new external-services rows (Node.js, npm, Playwright's browsers, Cloudflare, Netlify, Vercel) and the owner checklist's phase 8 section. Nothing changes in the portal.

### 21 Nov 2026 · GitHub App registered (shared docs)

Shared docs synced: external services, decisions §55.9, owner checklist. Nothing changed in the portal.

### 21 Nov 2026 · Phase 7 done, except what waits outside the code (shared docs)

Shared docs synced: decisions §55, external services, owner checklist. Nothing changed in the portal.

### 20 Nov 2026 · Phase 7's check is met

**The code builder fixed a set of real issues in a sample repo and opened a pull request** (roadmap phase 7). Run with `TITAN_PR_REPO=ispasdani/titan117-sample-shop pnpm eval:pr`, Claude Haiku 5.5 on the development key, $0.03.

- **The sample repo:** `ispasdani/titan117-sample-shop`, private, made with the owner's OK. It's a small shop library whose tests pass but which has four real bugs, filed as issues #1–#4:
  - #1, the cart total ignores quantities;
  - #2, VAT rounding;
  - #3, slugs keep accents (Romanian ș and ț included) and double dashes;
  - #4, the shop counts as open on Sundays.
- **What Titan did:** it read the code and handed the job to the coding engine. The engine fixed `src/shop.js`, added a test for each issue, and ran the tests. Titan then made the branch `fix/shop-issues-1-4`, committed, pushed and opened [pull request #5](https://github.com/ispasdani/titan117-sample-shop/pull/5). Every command, change, commit, push and the pull request went through approvals.
- **Checked on GitHub, not from the model's word:**
  - the pull request is open, by `ispasdani` (the user, through GitHub's CLI), with "Fixes #1" to "Fixes #4" (GitHub links all four issues);
  - the commit is the user's, with `Co-authored-by: Titan117`;
  - on the pushed branch, 12 of 12 tests pass, and each issue's own example passes a separate check;
  - only `src/shop.js` and `test/shop.test.js` changed.
- **Phase 7 stays open** for:
  - the user's own coding tools (13.14);
  - other machines (3.15);
  - Seatbelt around OpenCode on macOS (needs a Mac);
  - GitHub sign-in through our app (needs its registration);
  - remote coding tasks (with phase 15).

  The pull request stays open in the sample repo for the owner to look at.

### 20 Nov 2026 · Phase 7: project memory, code review, open in your editor (shared docs)

Shared docs synced: decisions §54 items 9–13, owner checklist. Nothing changed in the portal.

### 20 Nov 2026 · Phase 7: git and the code builder screen (shared docs)

Shared docs synced from `titan117-web`: decisions §54, the GitHub row in external services, and the owner checklist. Nothing changed in the portal.

### 20 Nov 2026 · Phase 7 started (shared docs)

Shared docs synced from `titan117-web`: decisions §53 (the coding engine), the download row in external services, OpenCode's pinned commit, and new owner checklist lines. Phase 7 is built in `titan117-desktop`; nothing changed in the portal.

### 20 Nov 2026 · Phase 6 done (shared docs)

OCR's language files ship in the desktop app (decisions §51.8); phase 6 is done there. The owner's notes from 20 Nov 2026 are on the owner checklist. Nothing changed in this repo's code.

### 19 Nov 2026 · Dependencies updated

All the Dependabot updates in one tested change: Next.js and eslint-config-next 16.4.6, React 19.3.1, @clerk/nextjs 7.9.26, ESLint 10, TypeScript 6.0.3 (7 waits for typescript-eslint), @types/node 24 (matches Node 24; not 26). TypeScript 6 no longer loads Node's types by itself, so the tsconfig lists them. Typecheck, lint, 25 tests, build and licences pass.

### 19 Nov 2026 · Phase 4 done (shared docs)

The owner's checks of phases 4-6 recorded on the owner checklist; phase 4's check is met. Nothing changed in this repo's code.

### 18 Nov 2026 · Decisions §44–§51 confirmed; production waits

The owner reviewed and confirmed decisions §44 to §51 (web search and artifacts, error reports, setup, offline, keep awake and resume, the installer, the phase 4 leftovers and auto-update, the folder agent) and that phase 5 started before phase 4's check. One addition to §44: when asked to search on Google or another engine, Titan does that search in the visible browser (§44.12; the instruction is in the desktop app's prompt). Decided (§52): **production waits** until everything works locally; nothing built so far depends on it. The owner checklist now starts at step 3, trying it all locally.

### 16 Nov 2026 · Phase 6: the folder agent (shared docs)

Decisions §51, the embedding model under Hugging Face in external services, phase 6's open-source references (checked and cloned for reading), and phase 6 lines on the owner checklist (confirm §51, OCR's language files, the check with your own documents). Built in `titan117-desktop` on `phase-6-folder-agent`; nothing changed in this repo's code.

### 15 Nov 2026 · Shared docs synced: decisions §50 and the rewritten owner checklist

Nothing changed in this repo's code.

### 15 Nov 2026 · Owner checklist: Microsoft's runtime fetched, signing needed sooner

The owner allowed fetching Microsoft's Visual C++ redistributable (done in `titan117-desktop`); Smart App Control blocked the unsigned installer, so code signing moves up on the checklist. Nothing changed in this repo's code.

### 15 Nov 2026 · Phase 5: the Windows installer (shared docs)

Decisions §49 and three lines on the owner checklist (confirm §49, OK to fetch Microsoft's runtime installer, a code signing certificate). Built in `titan117-desktop` on `phase-5-installer`; nothing changed in this repo's code.

### 15 Nov 2026 · Phase 5: keep awake, checkpoints and notifications (shared docs)

Decisions §48 and its line on the owner checklist. Built in `titan117-desktop` on `phase-5-awake`; nothing changed in this repo's code.

### 15 Nov 2026 · Phase 5: offline (shared docs)

Decisions §47 (how the app notices it's offline, cloud tasks stopping cleanly, what waits) and two lines on the owner checklist. Built in `titan117-desktop` on `phase-5-offline`; nothing changed in this repo's code.

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
