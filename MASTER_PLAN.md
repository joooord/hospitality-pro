# Hospitality Pro - Master Plan

## The Vision
A comprehensive, all-in-one hospitality management application.
Built first for "Hidden" (a premium, speakeasy-style cocktail bar in Middlestown), but designed agnostically to serve any hospitality business.

## The Aesthetic
Premium, dark, editorial, restrained. Clean typography. Liquid-glass UI elements where appropriate. Zero friction. It must be usable by a bartender mid-shift or a manager doing prep at 2 AM.

## Core Modules to Build

### 1. The Cocktail & Costing Engine ✅ SHIPPED
- Deep Math: Calculate true cost per serve.
- Target Margin: Input desired GP%, output recommended retail price.
- ABV Calculator: True ABV% in the glass.

### 2. Labor & Scheduling (Rota Optimizer) ✅ SHIPPED
- Wage model with live staff roster, shift assignment, and hourly burn tracking.
- Forecasted revenue input with automatic labor % + risk banding.
- Local-first persistence so rota data survives refreshes.

### 3. Inventory & Ordering ✅ SHIPPED — Supplier Automation Console v1
- Live PAR tracking against liquidGlassInventory ingredient database.
- Shortfall calculations → auto-generated order sheets grouped by supplier.
- Supplier database with contacts, delivery days, min orders, lead times.
- One-click copy/print of ready-to-send order lists.
- Spend forecasting per supplier + per order.

### 4. Daily Operations ✅ SHIPPED
- Opening and closing checklists.
- Prep lists (what to batch, what to prep).
- Maintenance logs.

### 5. End-of-Night Cash & Revenue Reconciliation ✅ SHIPPED
- Till reconciliation: Expected cash vs actual denomination count. Cash variance banner.
- Cash/card split with visual bar. Float in/out tracking.
- Comp & void logging with type tags (comp/void/manager discount).
- Daily GP snapshot: Auto-pulls wage cost from Rota Optimizer localStorage, live GP% ring.
- Historical log: localStorage persistence, date filtering, band filtering, click-to-reload.
- End-of-night summary: One-tap copyable/printable report for WhatsApp/email.
- Mobile-first, Liquid Glass dark premium aesthetic. Close in under 3 minutes.

### 6. Review Management ✅ SHIPPED
- AI-assisted review responses (Google/TripAdvisor/Booking.com).
- Platform-specific tone. Never says "discount". Brand voice locked.

### 7. Food Waste Audit Tracker ✅ SHIPPED
- Log waste events (item, quantity, reason, value).
- Weekly waste value vs theoretical waste allowance.
- Trend chart — top wasted items, root cause tagging.
- Pairs with Supplier Automation Console for intelligent re-ordering.

### 8. Staff Tip Pool & Distribution Calculator ✅ SHIPPED

### 11. Staff Training & Onboarding Hub ✅ SHIPPED
- Onboarding checklist builder with role-specific task lists and sign-off tracking.
- Menu knowledge base — dishes/drinks with allergens, pairing notes, upsell prompts. Seed data pre-loaded.
- Competency assessment — quiz builder with pass/fail and score tracking.
- Staff progress dashboard — manager view across the team, per-staff detail.
- Certificate modal on assessment pass — staff can screenshot.
- Manager/Staff mode toggle. 100% localStorage, mobile-first, Liquid Glass aesthetic.

### 12. Food Safety & HACCP Compliance Logger ✅ SHIPPED
- Temperature logs (fridge/freezer/hot-hold), named units, auto pass/fail vs UK thresholds.
- Cleaning schedule (daily/weekly/monthly) with staff sign-off + timestamp.
- Corrective action records — open/resolved, EHO-standard format.
- 14 allergen awareness panel with venue notes (Natasha's Law).
- EHO-ready export: full dated compliance report, print-ready.
- Dashboard: at-a-glance status for all zones, overdue tasks, open CAs.
- 100% localStorage, mobile-first, Liquid Glass dark aesthetic.
### 13. Martyn's Law & Venue Safety Compliance Hub ✅ SHIPPED
- Counter-terrorism risk assessment builder covering venue profile, entry/exit mapping, vulnerable areas, and 20-point security measures checklist.
- Emergency procedure cards (suspicious package, evacuation, lockdown, hostile individual, bomb threat, hostile vehicle) with venue-specific annotations and print-ready format.
- Staff counter-terrorism training tracker with 3-year expiry automation (ACT Awareness, Run Hide Tell, ProtectUK, CTSA briefings).
- Compliance dashboard with Standard vs Enhanced tier logic, outstanding action list, and progress bands.
- Security incident log with severity banding, follow-up tracker, and police reference capture.
- EHO / authority-ready export compiling the entire compliance package plus JSON backup/restore.
- 100% localStorage, Liquid Glass dark premium UI, mobile-first, serious/official tone to match Martyn's Law legal stakes (Royal Assent April 2025).


### 10. Guest Micro-CRM ✅ SHIPPED
- "Little black book" for premium venues — remember your regulars.
- Full guest profiles: name, phone, email, birthday, anniversary, dietary, preferred drink, preferred seating, VIP status, notes.
- Visit log: date, party size, spend, notes. Auto-calculates lifetime value and visit frequency.
- Smart alerts: upcoming birthdays/anniversaries (within 30 days), regulars gone quiet (30+ days).
- Quick Add mid-service mode with live timer — capture intel in 15 seconds without breaking flow.
- Search & filter: instant name search, VIP/regular/new/quiet filters, birthday month filter.
- 100% localStorage, no cloud, no server, GDPR-friendly by design.
- Mobile-first, Liquid Glass dark premium aesthetic.

### 9. Private Event & Hire Planner ✅ SHIPPED
- Lightweight Tripleseat replacement for small premium venues.
- Quote generator, min spend calculator, deposit tracker.
- Event log with status pipeline (enquiry → confirmed → invoiced → complete).
- Drag-and-drop Kanban + click stage change from log view.
- CSV export, clipboard quote copy, print-ready modal.
- Pairs with Rota Optimizer, EOD Reconciliation, and Financial Narrative.

## Infinite Loop · Immediate Next Build
**Employment Rights Act Compliance Console**
- `tools/employment-rights/index.html`
- **Why now:** The Employment Rights Act 2025 received Royal Assent in December 2025 with day-one sick pay/paternity entitlement, Fair Work Agency oversight, and zero-hour reforms rolling in from April 2026, plus Phase 2 of the Employment (Allocation of Tips) Act landing October 2026 (Morning Advertiser, Moore Kingston Smith, TroncMaster Solutions). Operators must evidence compliance before inspections start.
- **Core modules:**
  - Day-One Rights register — capture SSP eligibility, paternity requests, and onboarding attestations the moment a staff member starts.
  - Sick pay & leave cost forecaster — model SSP / paternity cost exposure as staffing levels shift.
  - Shift notice & cancellation log — record rota publication dates, short-notice changes, and calculate compensation owed under the upcoming zero-hour fairness rules.
  - Tip policy consultation tracker — document worker consultations, distribute anonymised summaries, and store signed policies ahead of Phase 2 audits.
  - Fair Work Agency audit export — one-click dossier covering contracts issued, notice logs, tip distribution evidence, and grievance resolutions.
  - Worker status board — flag agency/zero-hour staff needing guaranteed hours offers, track exclusivity clauses and deadlines.
- **Legal context:** Employment Rights Act 2025 staggers obligations through 2026–27: day-one rights + Fair Work Agency (Apr 2026), stricter zero-hour protections and "fire & rehire" limits (late 2026), plus tipping consultations (Oct 2026). Documentation failures risk tribunal losses and civil penalties.
- **Competitive gap:** HR SaaS suites charge £3k+/yr and ignore independent venues. No lightweight, local-first console exists that translates the legislation into actionable checklists + evidence logs.
- 100% localStorage, mobile-first, Liquid Glass aesthetic — but with audit-grade seriousness.
- Direct upsell path: Employment law readiness retainer for Jordan's clients.

### Why This Wins
- **Unavoidable mandate**: employment-law reforms hit *every* venue regardless of size — unlike Martyn's Law tiering.
- **Paper trail pain**: rota emails, tip WhatsApps, and ad-hoc spreadsheets will not satisfy the Fair Work Agency; we give them a structured log instantly.
- **Future-proofing**: building now means Hidden is inspection-ready before April 2026 while competitors scramble.
- **Consulting leverage**: deliver day-one rights + tip compliance reviews as a paid service using the console.

## Execution Strategy
- **Autonomy**: Jim and the agents will continually build, test, refine, and deploy this app without asking for permission.
- **Iteration**: Every feature gets a v1 shipped fast, then polished based on the aesthetic guidelines.
- **Delivery**: Continuous deployment via Vercel. Code must be robust and error-free.

## Live Deployments
- **Production**: https://hospitality-pro.vercel.app
- **Repo**: https://github.com/joooord/hospitality-pro

## Tools Live (as of 2026-03-21, updated 2026-03-21)
| Tool | URL | Status |
|------|-----|--------|
| Cocktail & Costing Engine | /tools/cocktail-calculator/ | ✅ Live |
| Labor & Rota Optimizer | /tools/rota-optimizer/ | ✅ Live |
| Daily Ops Command Board | /tools/daily-ops/ | ✅ Live |
| Supplier Automation Console | /tools/supplier-orders/ | ✅ Live |
| Menu Engineering Analyzer | /tools/menu-engineering/ | ✅ Live |
| GP & Recipe Costing Suite | /tools/recipe-costing/ | ✅ Live |
| Smart Procurement Generator | /tools/procurement-generator/ | ✅ Live |
| Delivery Pricing Optimizer | /tools/delivery-pricing/ | ✅ Live |
| Financial Narrative Generator | /tools/financial-narrative/ | ✅ Live |
| Pre-Arrival Email Builder | /tools/pre-arrival-email/ | ✅ Live |
| AI Review Responder | /tools/review-responder/ | ✅ Live |
| Allergen Matrix Builder | /tools/allergen-matrix/ | ✅ Live |
| SOP Generator | /tools/sop-generator/ | ✅ Live |
| End-of-Night Reconciliation | /tools/eod-reconciliation/ | ✅ Live |
| Staff Tip Pool & Distribution | /tools/tip-pool/ | ✅ Live |
| Private Event & Hire Planner | /tools/event-planner/ | ✅ Live |
| Guest Micro-CRM | /tools/guest-crm/ | ✅ Live |
| Food Waste Audit Tracker | /tools/food-waste/ | ✅ Live |
| Staff Training & Onboarding Hub | /tools/staff-training/ | ✅ Live |
| Food Safety & HACCP Compliance Logger | /tools/food-safety/ | ✅ Live |
| Martyn's Law & Venue Safety Hub | /tools/venue-safety/ | ✅ Live |

## The Infinite Loop Protocol
At the end of every task list, the system MUST execute the following sequence indefinitely:
1. **Research**: Analyze the current app state, user friction points, and modern hospitality tech trends.
2. **Plan**: Formulate the next phase of the Master Plan. Expand the scope.
3. **Implement**: Build the new features or polish existing ones to an "amazing" standard.
4. **Check & Debug**: Ensure zero errors, perfect mobile responsiveness, and accurate math.
5. **Ship**: Commit, push to main, and deploy to Vercel.
6. **Repeat**: Return to step 1. Do not stop.
