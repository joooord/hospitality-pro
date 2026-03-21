# Hospitality Pro - Master Plan

## The Vision
A comprehensive, all-in-one hospitality management application.
Built first for "Hidden" (a premium, speakeasy-style cocktail bar in Middlestown), but designed agnostically to serve any hospitality business.

## The Aesthetic
Premium, dark, editorial, restrained. Clean typography. Liquid-glass UI elements where appropriate. Zero friction. It must be usable by a bartender mid-shift or a manager doing prep at 2 AM.

## Core Modules to Build

### 1. The Cocktail & Costing Engine (Completed)
- Deep Math: Calculate true cost per serve.
- Target Margin: Input desired GP%, output recommended retail price.
- ABV Calculator: True ABV% in the glass.

### 2. Labor & Scheduling (Rota Optimizer) (Completed)
- Wage model with live staff roster, shift assignment, and hourly burn tracking.
- Forecasted revenue input with automatic labor % + risk banding.
- Local-first persistence so rota data survives refreshes. Mobile layout polish queued for v2.

### 3. Inventory & Ordering
- Simple stock counting interface (mobile optimized).
- Par levels and auto-generation of supplier order lists.
- Supplier database (contacts, delivery days).

### 4. Daily Operations (Completed)
- Opening and closing checklists.
- Prep lists (what to batch, what to prep).
- Maintenance logs.

### 5. Review Management
- AI-assisted review responses (Google/TripAdvisor).
- Sentiment tracking.

## Infinite Loop · Immediate Next Build
- **Supplier Automation Console (Inventory & Ordering v1)**
  - Pull weekly par levels + current counts, calculate required quantities per supplier.
  - Output ready-to-send order sheets (email/WhatsApp) with spend forecast vs budget.
  - Surface supplier lead times + delivery windows so managers can batch orders intelligently.
  - Keep the Liquid Glass design language + local persistence. Ship fast, then layer review management.

## Execution Strategy
- **Autonomy**: Jim and the agents will continually build, test, refine, and deploy this app without asking for permission.
- **Iteration**: Every feature gets a v1 shipped fast, then polished based on the aesthetic guidelines.
- **Delivery**: Continuous deployment via Vercel. Code must be robust and error-free.

## The Infinite Loop Protocol
At the end of every task list, the system MUST execute the following sequence indefinitely:
1. **Research**: Analyze the current app state, user friction points, and modern hospitality tech trends.
2. **Plan**: Formulate the next phase of the Master Plan. Expand the scope.
3. **Implement**: Build the new features or polish existing ones to an "amazing" standard.
4. **Check & Debug**: Ensure zero errors, perfect mobile responsiveness, and accurate math.
5. **Ship**: Commit, push to main, and deploy to Vercel.
6. **Repeat**: Return to step 1. Do not stop.