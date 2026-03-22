# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

ARIA AI ("Agentic Stack") landing page — a single-page marketing site for an AI agent consultancy based in Paris, France. The site targets potential clients who want AI agents (RAG, SQL automation, HITL workflows) deployed in their business. Brand name is **ARIA AI**, domain is `agenticstack.fr`.

## Commands

- `npm run dev` — start dev server (localhost:3000)
- `npm run build` — production build
- `npm run lint` — ESLint (flat config, Next.js core-web-vitals + TypeScript rules)

## Tech Stack

- **Next.js 16** with App Router, React 19, React Compiler enabled (`reactCompiler: true` in next.config.ts)
- **Tailwind CSS v4** via `@tailwindcss/postcss` — uses `@import "tailwindcss"` syntax, NOT the v3 `@tailwind` directives
- **Framer Motion** for animations (scroll-triggered, layout animations, AnimatePresence transitions)
- **Lucide React** for icons
- **Geist** font family (sans + mono) loaded via `next/font/google`
- Path alias: `@/*` maps to project root

## Architecture

The entire site is a single client component (`app/page.tsx`, ~460 lines) containing:
- `Navbar` — fixed nav with framer-motion `layoutId` pill indicator, scroll-snap section navigation
- `PricingCard` — reusable pricing tier component
- `LandingPage` (default export) — 5 full-viewport scroll-snap sections: Hero, Process, Pricing, Contact, Legal (Mentions Légales)

Contact form submits to **Formspree** (`https://formspree.io/f/mlgpwkqz`). There is also an unused API route at `app/api/contact/route.ts` (placeholder, not wired up).

## Design System

- Dark theme only — background `#030303`, blue/indigo accent palette (`#3b82f6`, `#6366f1`)
- CSS custom properties defined in `globals.css` `:root` and `@theme inline` block
- Custom CSS classes: `.btn-primary-cyber`, `.btn-secondary-glass`, `.glass-nav`, `.section-fixed`, `.content-density-fix`, `.scanline`, `.ecg-line`, `.energy-flash`
- Full-viewport scroll-snap (`scroll-snap-type: y mandatory`) with `body { overflow: hidden }`
- Typography: aggressive uppercase, italic, heavy tracking — cyberpunk/aerospace aesthetic
- Responsive scaling via `.content-density-fix` (scales down on lg/xl breakpoints)

## Guidelines File

`guidelines.md` contains the product specification for an e-commerce demo AI agent — this describes the **demo product** ARIA AI would build for clients, not the landing page itself. It defines USE_CASE_CARDS JSON schema, HITL approval workflow contracts, and tool categories (SQL, RAG, WEB, PYTHON_CHART, HITL).

## Key Details

- French legal section (Mentions Légales) with placeholder fields `[Ton Nom Complet]`, `[Ton Adresse Professionnelle]` — SIRET pending registration
- Pricing in EUR: Micro-RAG (€150 setup + €20/mo), Data Bridge (€400 + €45/mo), Full Automation (custom)
- Loading animation: split-curtain reveal with energy flash on initial page load (2s delay)
