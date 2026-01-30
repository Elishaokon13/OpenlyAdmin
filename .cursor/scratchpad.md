# Background and Motivation
Adapt the existing dark-mode, multi-tab financial dashboard template into an internal admin and operations control panel for Openly. Preserve the visual system and component style while increasing data density and control visibility. This is a multi-page internal app for Operations, Finance, Compliance, and Engineering to monitor money movement, investigate failures, and manage risk.
Now extend the remaining sidebar pages (Merchants, Ledger, Compliance & Risk, Providers, Events & Webhooks, etc.) beyond the main dashboard.

# Key Challenges and Analysis
- Need to find the existing template structure and pages to map new sections and navigation.
- Must keep visual system consistent while increasing data density and action visibility.
- Ensure operational UX requirements: explicit states, warnings for destructive actions, and auditability.
- Multi-page app implies routing/navigation changes; may touch multiple components.
- Need to add new routes/pages while keeping consistent layout and header/sidebar.
- Each page needs meaningful operational content (no decorative charts).

# High-level Task Breakdown
1. Inventory existing routes/pages and layout reuse points.
   - Success: Identify where to add new pages and how layout is applied.
2. Create page shells for each sidebar item.
   - Success: Each route renders with header/sidebar and a page title.
3. Populate each page with operational sections.
   - Success: Each page has at least one metrics row and a dense table or panel relevant to the section.
4. Ensure explicit states and warnings are present where needed.
   - Success: Status chips, warnings, and audit hints appear on relevant pages.
5. Sanity check data density and navigation.
   - Success: No decorative charts; sidebar links map to actual pages.

# Project Status Board
- [x] Inventory routes/layout for new pages
- [x] Create page shells for sidebar items
- [x] Populate each page with operational content
- [ ] Add explicit state/warning affordances per page
- [ ] Verify data density and navigation

# Current Status / Progress Tracking
Inventory complete: only `app/page.tsx` exists; no other routes. Layout is shared via `app/layout.tsx`.
Created page shells using `components/page-shell.tsx` for: `app/system-overview/page.tsx`, `app/merchants/page.tsx`, `app/global-payouts/page.tsx`, `app/ledger/page.tsx`, `app/compliance-risk/page.tsx`, `app/providers/page.tsx`, `app/events-webhooks/page.tsx`.
Populated each page with operational metrics and dense tables aligned to its domain (payouts, merchants, ledger, compliance, providers, webhooks).

# Executor's Feedback or Assistance Requests
Step 3 complete. Please confirm so I can proceed to Step 4 (add explicit state/warning affordances per page).

# Lessons
None yet.

