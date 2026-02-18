# Product Context — Energy Consumption Analytics

## What This Product Does

A personal tool that turns monthly energy consumption letters (paper/PDF from local provider) into structured, understandable data. Users upload or photograph their monthly warm water consumption overview, and the app uses OCR + LLM to extract key figures, visualize consumption trends over time, and explain what the numbers actually mean in plain language.

## Who Uses It

- **Primary: Marcel (Apartment Tenant)** — Receives monthly consumption letters for warm water from a local energy provider. Wants to understand whether consumption is normal, track trends over months/years, and catch anomalies early before they become expensive surprises. Not technically savvy regarding energy metrics.
- **Secondary: Cost-Conscious Renters** — People in shared or multi-unit buildings who receive opaque consumption overviews and want transparency without needing domain expertise.

## What Matters Right Now

- **North star metric:** Percentage of monthly letters processed and tracked (target: 100% of received letters uploaded and analyzed)
- **Current focus:** Core OCR pipeline — reliably extracting consumption data from the specific letter format of the local provider
- **Key constraint:** Letters vary in layout between providers; start with one provider's format and generalize later

## Domain Knowledge

- Consumption letters typically contain: billing period, meter readings (start/end), consumption in kWh or m³, cost breakdown, comparison to previous period, comparison to building average
- Common units: kWh (kilowatt-hours) for heating, m³ (cubic meters) for warm water
- German energy providers often use "Heizkostenabrechnung" or "Verbrauchsinformation" as letter titles
- Key data points to extract: consumption value, unit, period (month/year), cost, comparison values

## Tech Stack & Conventions

- **Framework:** Next.js 16.1 (App Router, Turbopack)
- **Frontend:** React 19, Tailwind CSS 4, Recharts (charts/data viz), Three.js (3D consumption view)
- **Backend:** Next.js API Routes (serverless functions)
- **Database:** Supabase (PostgreSQL + Realtime subscriptions for live updates)
- **OCR:** Claude API vision capabilities for text extraction from images/PDFs (upload → send image to Claude → extract structured data)
- **LLM:** OpenRouter API for interpreting extracted text, generating explanations, and answering follow-up questions (allows swapping models freely)
- **Auth:** Supabase Auth (email/password — keep it simple)
- **Storage:** Supabase Storage for uploaded letter images/PDFs
- **Deployment:** Vercel (auto-deploy from main branch)
- **Package manager:** pnpm
- **Linting:** ESLint + Prettier (default Next.js config)
- Use `"use client"` only when necessary — prefer Server Components by default
- API routes go in `app/api/` — keep them thin, delegate logic to `lib/`
- Supabase client: use `@supabase/ssr` for server-side, `@supabase/supabase-js` for client-side
- Environment variables: `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`, `ANTHROPIC_API_KEY`, `OPENROUTER_API_KEY`

## Project Structure

```
app/              — Next.js App Router pages and layouts
app/api/          — API routes (serverless functions for OCR, LLM calls)
components/       — React components (upload form, charts, letter display)
lib/              — Shared utilities (Supabase client, Claude API helpers, data parsing)
public/           — Static assets
docs/             — Product documentation (personas, metrics, competitive landscape)
research/         — User interviews and raw research data
samples/          — Example consumption letters and test data
.claude/skills/   — Reusable skills (each skill has its own directory with SKILL.md)
```

## How to Help Me

- When I ask for analysis of a consumption letter, always extract: consumption value, unit, period, cost, and any comparison data
- Present data insights visually when possible — charts over tables
- When generating explanations, write for someone with no energy industry knowledge — plain language, no jargon
- Challenge my assumptions — ask "what evidence supports this?" when I propose features
- Default to simple implementations — this is a personal tool, not enterprise software
- When writing code, keep dependencies minimal — prefer what's already in the stack (Next.js, Supabase, Recharts) over adding new packages
- Always consider the German-language context of the source letters (field names, units, date formats)
