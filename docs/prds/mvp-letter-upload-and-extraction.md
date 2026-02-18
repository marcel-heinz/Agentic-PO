# PRD: MVP — Letter Upload & Extraction

## Problem Statement

German tenants receive monthly consumption letters (Verbrauchsabrechnung) they cannot understand. The letters contain dense tables, abbreviations, and multiple overlapping numbers — with no indication of which one matters. This leads to €200–€340 in avoidable annual bill surprises.

> "The letter is not made for humans." — Marcel H.
> "If I can read a P&L but can't understand my warm water bill, the problem isn't me." — Lisa K.

Marcel tried a spreadsheet to track consumption manually. He quit after 4 months — too much friction. Lisa actively searched for apps but found nothing for paper-letter recipients. No existing product serves this segment: smart-meter apps require hardware; provider portals are equally confusing; budget trackers show costs, not consumption.

## Target Persona

**Marcel — "The Overwhelmed Tenant."** He glances at each letter for ~10 seconds, puts it in a drawer, and gets blindsided at year-end. His core JTBD: "Just tell me how much I used and whether that's a lot." He will not invest manual effort — the input must be a photo, nothing more.

> As Marcel, I want to snap a photo of my consumption letter and instantly see what the numbers mean, so that I don't have to decipher it myself.

## Proposed Solution

A single-page web app. Upload a photo of your Verbrauchsabrechnung. Claude Vision extracts the Heizung and Warmwasser consumption values. The app displays the extracted data in a clean, readable format with a plain-language summary explaining what the numbers mean — in German, for someone with no energy domain knowledge.

## Success Metrics

| Metric | Target | Why |
|--------|--------|-----|
| **Letters processed** (north star) | 1 letter successfully extracted end-to-end | Validates the core loop works |
| **OCR extraction accuracy** | >90% field-level accuracy on Leipziger Stadtwerke format | If extraction is wrong, trust is zero |
| **Time-to-insight** | <30 seconds from upload to summary | "If I have to wait, I'll stop using it" |

## Risks & Open Questions

1. **OCR reliability** — Will Claude Vision reliably extract values from photos taken under varying lighting, angles, and camera quality?
2. **Single-format fragility** — The MVP only targets Leipziger Stadtwerke letters. How different are other providers' layouts?
3. **Trust calibration** — If the LLM confidently extracts wrong values, users lose trust faster than if it says "I'm not sure." How do we surface confidence?
4. **Photo quality floor** — What's the minimum image quality needed for reliable extraction?

## Scope: v1

### IN

- Single photo upload (one letter at a time)
- OCR extraction via Claude Vision API (Heizung + Warmwasser sections)
- Extracted fields: current month consumption (kWh), previous month, previous year, year-over-year delta, building average delta
- Clean display of extracted values
- Plain-language summary of what the numbers mean
- German UI text

### OUT

- User accounts / authentication
- Database storage / letter history
- Trend charts or visualizations
- Building average comparisons or benchmarks
- Multi-provider support
- Mobile app (web-only, mobile-responsive)
- Cost calculations or price data
- Notifications or alerts
