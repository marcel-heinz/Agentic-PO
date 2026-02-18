# Opportunity Review — Energy Consumption Analytics

**Date:** 2026-02-18
**Input:** Product opportunity brief (CLAUDE.md)
**Method:** Three-perspective adversarial review (CTO, CFO, Skeptical Customer)

---

## CTO Review — Technical Feasibility

- **OCR via Claude Vision is promising but brittle at the edges.** Using Claude's vision API for text extraction from photographed letters is a sound starting point for a single provider format, but real-world photos introduce skew, poor lighting, partial crops, and folds that degrade extraction accuracy unpredictably. There is no test harness, no golden dataset of labeled letter images, and no automated regression suite. Before writing application code, invest in a ground-truth corpus of at least 20-30 real letter images with manually verified extractions.

- **The dual-API architecture introduces compounding failure modes and cost opacity.** Every letter upload triggers at least two external API calls in sequence, meaning the pipeline's reliability is the product of both services' uptime and latency. OpenRouter adds another layer of indirection since it proxies to downstream model providers that can change pricing, rate limits, or behavior without notice. There is no fallback, retry, or circuit-breaker strategy documented, and the 30-second time-to-insight target leaves very little room.

- **The data model and storage strategy are underspecified for the core value proposition.** The product's differentiator is longitudinal tracking, but there is no database schema, no defined data model for consumption records, and no plan for how extracted JSON gets normalized and stored. Key questions are unresolved: how do you handle duplicate uploads, how do you reconcile the 13-month historical data embedded in each letter with previously stored records, and how do you version extractions when re-processing yields different numbers?

- **The "generalize later" strategy carries hidden architectural debt.** The extraction logic — prompt templates, expected field names, parsing heuristics — will inevitably be tightly coupled to Leipziger Stadtwerke's format unless the architecture accounts for provider-specific adapters from the start. Each provider uses different layouts, terminology, units, and data groupings. A lightweight abstraction layer should be part of the initial design to avoid a costly rewrite.

- **There is no data privacy or security architecture despite handling sensitive PII.** Letters contain tenant names, property addresses, unit locations, and tenant IDs. These images are sent to external APIs and stored in Supabase Storage. For a German product handling tenant data, even a personal tool should document its data flow, clarify what gets sent to which third party, and consider GDPR implications before onboarding any secondary users.

---

## CFO Review — Unit Economics

- **Cost per letter processed is low but not trivial at scale.** Each upload requires at minimum one Claude vision call and one OpenRouter LLM call, likely running EUR 0.03-0.10 per letter. With once-per-month usage, that is roughly EUR 0.60-1.20 per user per year in variable API costs alone — manageable personally, but at scale with no subscription revenue, these costs compound into a loss center.

- **Willingness to pay is dangerously low relative to the cost structure.** Research shows the strongest signal is EUR 5-10 one-time payment, with the primary user expressing no willingness to pay at all. A one-time EUR 5-10 fee barely covers 4-8 years of API costs for a single user, and the financial motivation (avoiding EUR 200-340 bill surprises) does not translate into recurring payment willingness because users perceive savings as speculative.

- **The addressable market is large on paper but fragmented and hard to reach.** Germany has roughly 20 million renter households, but letter formats differ across hundreds of providers, each requiring OCR tuning. Customer acquisition cost for a once-a-month utility with EUR 5-10 lifetime value makes traditional paid acquisition channels economically unviable.

- **Infrastructure costs are favorable only at hobby scale.** Supabase and Vercel free tiers suffice for a personal tool or a few dozen users. Crossing into hundreds of users pushes into paid tiers (Supabase Pro at USD 25/month, Vercel Pro at USD 20/month), and image storage costs grow linearly while revenue remains flat or nonexistent.

- **The most viable path is not a standalone consumer product.** The unit economics do not support a freemium consumer SaaS: variable costs per use, near-zero willingness to pay, once-a-month engagement. This works as a personal productivity tool or potentially as a white-label feature sold to property management companies or metering firms like Techem/ista — but as a standalone consumer business, the math does not close.

---

## Skeptical Customer Review — Does This Actually Help Me?

- **The status quo is annoying, but not that painful.** I spend 10 seconds glancing at the letter and toss it in a drawer. The letter already tells me my current consumption, last month, same month last year, the difference, and the building average. Unless this tool can tell me *specifically* what to change (shorter showers, lower thermostat, check for a leak), it is just a prettier version of the letter I already ignore.

- **Twelve interactions per year is a brutal engagement model.** I would open this app once a month, for maybe 90 seconds. That is not enough frequency to build a habit, justify keeping the app installed, or warrant giving it my email and trusting a new service. A photo album on my phone with 12 letter snapshots and a 15-minute spreadsheet session in December before the Nebenkostenabrechnung accomplishes roughly the same thing with zero dependencies.

- **I am being asked to upload documents containing my full name, address, tenant ID, and consumption patterns to a cloud service.** My personal data passes through at least three or four third-party services. For a personal tool built by one developer, I see no mention of a privacy policy, data retention limits, or GDPR compliance. The risk-reward ratio feels off for a problem I can solve with a drawer and a calculator.

- **The "annual bill surprise" problem is real, but this tool only diagnoses it — it cannot fix it.** Knowing my consumption is creeping up in March does not automatically lower it in April. The letters already show the year-over-year delta. What I actually need is actionable guidance tied to my specific apartment, or a direct connection to my Hausverwaltung to dispute charges. A chart that confirms what the letter already says does not save me 340 euros.

- **The tech stack is massively over-engineered for the problem it solves.** Next.js 16, React 19, Three.js for a "3D consumption view," two separate AI APIs — this is an enterprise-grade stack for a tool that processes one photo per month. A basic web form where I manually type in two numbers, or a shared Google Sheet with conditional formatting, would deliver 80% of the value with 5% of the complexity and zero API costs.

---

## Synthesis

**Common thread across all three perspectives:** The biggest risk is not technical — it is that the product adds a layer of polish on top of information the user already has, without unlocking genuinely new insight or action. The CTO says "build the data model first," the CFO says "the math does not close as a consumer product," and the customer says "tell me what to *do*, not just what I already know in a nicer format."

### Key decisions to make next

1. **Diagnose vs. prescribe** — Is this a dashboard (shows data) or an advisor (recommends actions)?
2. **Personal tool vs. product** — Optimize for Marcel's workflow, or build for a market?
3. **OCR-first vs. manual-first** — Is the OCR pipeline the core value, or is longitudinal tracking the core value regardless of input method?
