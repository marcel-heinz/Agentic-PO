---
name: analyze-letter
description: Analyze an uploaded energy consumption letter and extract structured data
---

# Energy Consumption Letter Analyzer

Read CLAUDE.md for product context and domain knowledge.

Then analyze the provided consumption letter (image, PDF, or pasted text) and produce:

## 1. Extracted Data

Pull out all structured data points:
- **Billing period** (month/year, start date, end date)
- **Meter readings** (start, end, difference)
- **Consumption value** (with unit: kWh or m³)
- **Cost** (total, per-unit breakdown if available)
- **Comparison data** (previous period, building average, if present)

Present this as a clean markdown table.

## 2. Plain-Language Explanation

Write a 3-5 sentence explanation of what this letter says, as if explaining to someone who has never seen an energy bill before. Cover:
- How much was consumed and what that means in practical terms
- Whether consumption is higher or lower than the comparison period
- Any red flags or anomalies

## 3. Recommendations

Based on the extracted data:
- Is consumption trending up, down, or stable?
- Any actionable suggestions (e.g., "Your warm water usage is 30% above building average — consider shorter showers or checking for leaks")

## Rules

- If the letter is in German, extract data but write the analysis in English
- If data points are unclear or missing, flag them explicitly — do not guess
- Always note the confidence level: "High confidence" / "Medium — layout unclear" / "Low — manual check needed"
- Suggest what structured JSON format this data should be stored in for future charting
