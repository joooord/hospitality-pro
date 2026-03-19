# Hospitality Pro

Hospitality Pro is Jordan Pitts' field-ready operating system for modern hospitality operators. It combines:

1. **The AI Operations Toolkit for Hospitality** — a 9k-word playbook covering automations, department playbooks, and a 50+ prompt library.
2. **Single-purpose AI/web tools** — 10 premium, self-hosted utilities for pricing, procurement, reviews, rotas, SOPs, allergen compliance, and more.

All tooling is static HTML/CSS/JS (file:// friendly) with per-tool OpenRouter API key inputs when LLM access is required. No vendor lock-in.

## Contents

```
index.html                → landing page
guide.md                  → full playbook
/tools/
  recipe-costing/         → GP & Recipe Costing Calculator
  review-responder/       → AI Review Responder
  procurement-generator/  → Smart Procurement Order Generator
  pre-arrival-email/      → Pre-Arrival Email Sequence Builder
  menu-engineering/       → Menu Engineering Analyzer
  rota-optimizer/         → AI Rota Optimizer
  financial-narrative/    → Weekly Financial Narrative Generator
  sop-generator/          → SOP Generator
  allergen-matrix/        → Dietary & Allergen Matrix Builder
  delivery-pricing/       → Delivery Platform Pricing Optimizer
```

## Local Development

This is a static site. Open `index.html` (or any tool HTML) directly in a browser. For API-powered tools, supply your own [OpenRouter](https://openrouter.ai) key.

## Deployment

Hospitality Pro can be deployed anywhere static sites run (Vercel, Netlify, S3, nginx). On Vercel:

```bash
vercel deploy --prod --name hospitality-pro
```

The `tools/` directory is served as-is, so deep links like `/tools/review-responder/` remain static.

---
Built by Jordan Pitts.
