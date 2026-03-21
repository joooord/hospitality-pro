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

### 7. Food Waste Audit Tracker
- Log waste events (item, quantity, reason, value).
- Weekly waste value vs theoretical waste allowance.
- Trend chart — top wasted items, root cause tagging.
- Pairs with Supplier Automation Console for intelligent re-ordering.

### 8. Staff Tip Pool & Distribution Calculator ✅ SHIPPED

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
**Food Waste Audit Tracker**
- `tools/food-waste/index.html`
- UK hospitality businesses lose an average of £10,000/year to food waste (WRAP study). Zero tools in this suite currently address it.
- Log waste events: item name, category (prep waste / spoilage / over-production / plate waste), quantity, unit cost, calculated waste value, responsible section, reason.
- Weekly waste value vs theoretical waste allowance (configurable % of food revenue).
- Trend chart: top wasted items, root cause tagging, day-of-week patterns.
- Live waste cost tracker: total weekly waste £, waste as % of food revenue, comparison vs industry benchmark (avg 4-8%).
- Pairs with Supplier Automation Console: flag high-waste items for reduced PAR level recommendation.
- Printable weekly waste report — for kitchen brigade accountability and owner visibility.
- 100% localStorage, mobile-first, Liquid Glass dark premium aesthetic.
- Export: one-tap clipboard copy for WhatsApp/manager briefings.

### Why This Wins
- **Direct P&L impact**: a £10k/year waste problem solved in a browser tool = immediate ROI argument for new customers
- **Compliance angle**: environmental reporting requirements for UK hospitality increasing under Defra Food Waste legislation
- **Bridges to procurement**: waste data feeds directly back into PAR and ordering decisions
- **No competition at this price point**: professional food waste trackers (Winnow, Leanpath) cost £1,000+/month
- **Kitchen culture**: accountability without blame — data-driven conversations instead of guesswork

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
| Food Waste Audit Tracker | /tools/food-waste/ | 🔨 Next |

## The Infinite Loop Protocol
At the end of every task list, the system MUST execute the following sequence indefinitely:
1. **Research**: Analyze the current app state, user friction points, and modern hospitality tech trends.
2. **Plan**: Formulate the next phase of the Master Plan. Expand the scope.
3. **Implement**: Build the new features or polish existing ones to an "amazing" standard.
4. **Check & Debug**: Ensure zero errors, perfect mobile responsiveness, and accurate math.
5. **Ship**: Commit, push to main, and deploy to Vercel.
6. **Repeat**: Return to step 1. Do not stop.
