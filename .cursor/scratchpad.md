# Background and Motivation
Adapt the existing dark-mode, multi-tab financial dashboard template into an internal admin and operations control panel for Openly. Preserve the visual system and component style while increasing data density and control visibility. This is a multi-page internal app for Operations, Finance, Compliance, and Engineering to monitor money movement, investigate failures, and manage risk.

# Key Challenges and Analysis
- Need to find the existing template structure and pages to map new sections and navigation.
- Must keep visual system consistent while increasing data density and action visibility.
- Ensure operational UX requirements: explicit states, warnings for destructive actions, and auditability.
- Multi-page app implies routing/navigation changes; may touch multiple components.

# High-level Task Breakdown
1. Locate dashboard template pages, layout, and navigation.
   - Success: Identify the main layout, nav, and dashboard page file(s) to edit.
2. Update sidebar navigation to new admin tabs.
   - Success: Sidebar renders the new labels in the correct order.
3. Remap top metrics bar to new KPIs.
   - Success: KPI cards show the specified labels and match existing styling.
4. Repurpose main chart and table sections.
   - Success: Chart titles/legends reflect payout volume, failures, provider health; table columns and row links map to global payouts and operational details.
5. Add admin-only action affordances and warnings.
   - Success: UI elements for freeze/retry/cancel/override with warning states and audit log timestamps are visible and consistent.
6. Sanity check for data density and explicit states.
   - Success: No decorative charts without operational meaning; labels and status chips are explicit.

# Project Status Board
- [x] Locate template layout/pages and nav
- [x] Update sidebar navigation labels
- [x] Update top metrics bar KPIs
- [x] Repurpose chart and table sections
- [x] Add admin-only actions with warnings/audit info
- [ ] Review for data density and explicit states

# Current Status / Progress Tracking
Located primary dashboard and component files: `app/page.tsx`, `components/sidebar.tsx`, `components/dashboard-metrics.tsx`, `components/performance-chart.tsx`, `components/ticker-list.tsx`, and `components/header.tsx`.
Repo hygiene: removed `auto-commit.sh` and `run.sh` from git tracking (files preserved locally).
Sidebar updated with admin navigation: System Overview, Merchants, Global Payouts, Ledger, Compliance & Risk, Providers, Events & Webhooks.
Top metrics bar updated to: Total Funds Under Management, Total Locked Funds, Provider Balances, Payout Queue Depth, Failed Payouts (24h).
Main chart retitled to system-wide payout volume with successful vs failed payouts and provider health trends. Main table repurposed to global payouts with failure reasons, retry counts, provider, status, and lifecycle links.
Admin actions added with destructive warnings and audit log fields (last action, timestamp, actor).

# Executor's Feedback or Assistance Requests
Step 5 complete. Please confirm so I can proceed to Step 6 (review for data density and explicit states).

# Lessons
None yet.

