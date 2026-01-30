# Openly Admin Control Panel

Internal, multi-page admin and operations dashboard for monitoring system-wide money movement, investigating failures, and managing risk. Built on Next.js with a dense, dark-mode UI for Operations, Finance, Compliance, and Engineering.

## Quick Start
- Install: `pnpm install`
- Dev server: `pnpm dev`
- Build: `pnpm build`
- Lint: `pnpm lint`

If pnpm reports ignored build scripts (e.g. `sharp`), run `pnpm approve-builds` and then re-run `pnpm install`.

## Routes
- `/` (System Overview)
- `/merchants`
- `/global-payouts`
- `/ledger`
- `/compliance-risk`
- `/providers`
- `/events-webhooks`

## Structure
- `app/` Next.js routes
- `components/` shared UI (camelCase filenames)
- `components/ui/` shadcn/ui primitives (unchanged)

## Notes
- Sidebar navigation uses Next `Link` and highlights the active route.
- `/system-overview` redirects to `/` so the System Overview matches the main dashboard.

