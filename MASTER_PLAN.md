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

### 11. Staff Training & Onboarding Hub
- Onboarding checklist builder with role-specific task lists and sign-off tracking.
- Menu knowledge base — dishes/drinks with allergens, pairing notes, upsell prompts.
- Competency assessment — quiz builder tied to menu items or SOPs.
- Progress tracker — manager view across the team.
- Pulls from Allergen Matrix and SOP Generator localStorage.
- Printable induction packs. 100% localStorage, mobile-first, Liquid Glass aesthetic.

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
**Staff Training & Onboarding Hub**
- `tools/training-hub/index.html`
- UK hospitality has the highest staff turnover of any industry (~75% annually). Every new hire costs £1,500–£3,000 to onboard. This tool cuts that cost and accelerates time-to-competency.
- **Core modules:**
  - Onboarding checklist builder — create structured induction programs with role-specific task lists, sign-off tracking, and completion percentages
  - Menu knowledge base — add dishes/drinks with descriptions, allergens, upsell notes, and pairing suggestions; staff can self-study before service
  - SOP quick-reference cards — searchable, mobile-optimised SOPs staff can pull up mid-shift
  - Competency assessment — simple pass/fail quiz builder tied to menu items or procedures
  - Progress tracker — manager view showing who's completed what across the team
- **Integration:** pulls allergen data from Allergen Matrix Builder, pulls SOPs from SOP Generator localStorage
- **Mobile-first:** staff use it on their phones between covers
- 100% localStorage, no logins, Liquid Glass dark premium aesthetic
- Export: printable induction packs for paper-based venues

### Why This Wins
- **Retention play**: structured onboarding reduces 90-day dropout by ~30% (CIPD data)
- **Compliance**: food hygiene, allergen awareness, and licensing training can be tracked and evidenced
- **Consistency**: every staff member learns the same thing — eliminates "ask whoever trained me" variation
- **No competition at this price point**: Deputy, Trainual, etc. cost £100–£500/month; this is free
- **Natural upsell**: Jordan can offer bespoke onboarding content build as a consulting service

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
| Staff Training & Onboarding Hub | /tools/training-hub/ | 🔨 Next |

## The Infinite Loop Protocol
At the end of every task list, the system MUST execute the following sequence indefinitely:
1. **Research**: Analyze the current app state, user friction points, and modern hospitality tech trends.
2. **Plan**: Formulate the next phase of the Master Plan. Expand the scope.
3. **Implement**: Build the new features or polish existing ones to an "amazing" standard.
4. **Check & Debug**: Ensure zero errors, perfect mobile responsiveness, and accurate math.
5. **Ship**: Commit, push to main, and deploy to Vercel.
6. **Repeat**: Return to step 1. Do not stop.
