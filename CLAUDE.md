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

- Frontend: Simple HTML/CSS/JS (or lightweight framework) — keep it minimal
- Backend: Python (Flask or FastAPI) for OCR and LLM integration
- OCR: Tesseract or cloud OCR API for text extraction from images/PDFs
- LLM: Claude API for interpreting extracted text and generating explanations
- Charts: Chart.js or similar lightweight charting library
- Data storage: Local JSON or SQLite — no need for a full database at this stage

## Project Structure

```
docs/           — Product documentation (personas, metrics, competitive landscape)
research/       — User interviews and raw research data
samples/        — Example consumption letters and test data
.claude/commands/ — Reusable skills (slash commands) for common workflows
```

## How to Help Me

- When I ask for analysis of a consumption letter, always extract: consumption value, unit, period, cost, and any comparison data
- Present data insights visually when possible — charts over tables
- When generating explanations, write for someone with no energy industry knowledge — plain language, no jargon
- Challenge my assumptions — ask "what evidence supports this?" when I propose features
- Default to simple implementations — this is a personal tool, not enterprise software
- When writing code, keep dependencies minimal and prefer standard library where possible
- Always consider the German-language context of the source letters (field names, units, date formats)
