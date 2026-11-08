# titan117-pop

The Titan117 **product owner portal**: our own admin app for the owner and employees. Error reports, accounts and plans, credit corrections, kill switches for add-ons and coding-tool adapters, releases.

- **Who can use it:** named people only, with two-factor required; every view and change is logged ([`docs/security.md`](docs/security.md) B6, [`docs/guardrails.md`](docs/guardrails.md) §12b).
- **Backend:** none of its own. It calls the admin-only Convex functions that live in `titan117-web` and installs `@titan117/shared` at a fixed version ([`docs/03-architecture.md`](docs/03-architecture.md)).
- **Deploys:** its own Vercel project at its own address (for example `admin.titan117.com`).
- **Docs:** [`docs/`](docs/README.md), copied from `titan117-web` (edit them there). Working rules: [`CLAUDE.md`](CLAUDE.md). This repo's own log: [`docs/progress.md`](docs/progress.md).

The app itself is scaffolded in phase 0 (Next.js, pnpm), and its error screens come in phase 5 ([roadmap](docs/01-launch-roadmap-v1.md)).
