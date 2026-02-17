# Competitive Landscape

## Market Context

The residential energy monitoring market in Germany is split between **smart-meter-native solutions** (digital data feeds) and **analog users** (paper letters, traditional meters). Most existing products target the smart-meter segment. The paper-letter segment — which represents millions of German households — is largely unserved.

## Competitor Analysis

### 1. Provider-Specific Apps (e.g., Techem, ista)

| Aspect | Details |
|--------|---------|
| **What they do** | Large metering companies like Techem and ista offer tenant portals where consumption data is displayed digitally |
| **Strengths** | Direct data feed from meters — no OCR needed; official data source |
| **Weaknesses** | Only available if your building uses that specific provider; often clunky UX; no cross-provider support; many tenants don't even know they have access |
| **Gap we exploit** | Not all providers offer digital portals. Even when they do, the data presentation is just as confusing as the paper letter. No plain-language explanations. |

### 2. Smart Home Energy Apps (e.g., Tibber, 1KOMMA5)

| Aspect | Details |
|--------|---------|
| **What they do** | Smart energy management — real-time consumption tracking, dynamic tariffs, device-level monitoring |
| **Strengths** | Beautiful UX; real-time data; actionable insights; active community |
| **Weaknesses** | Require smart meters and/or proprietary hardware; focused on electricity, not warm water; subscription model; not available for traditional buildings |
| **Gap we exploit** | These products don't exist for the analog world. No smart meter? No service. We serve the underserved: paper-letter recipients. |

### 3. Generic Expense/Budget Trackers (e.g., Finanzguru, Outbank)

| Aspect | Details |
|--------|---------|
| **What they do** | Track bank transactions and categorize expenses, including utility payments |
| **Strengths** | Already installed by many users; automatic cost tracking via bank feed |
| **Weaknesses** | Track costs only, not consumption units (kWh, m³); no concept of "usage trends"; no ability to parse consumption letters; no explanations |
| **Gap we exploit** | They tell you what you paid, not what you consumed. Our product bridges the gap between payment data and consumption data. |

## Our Differentiation

| Dimension | Existing Solutions | Our Approach |
|-----------|--------------------|--------------|
| **Input** | Smart meters, digital feeds, bank data | Paper letters (photo upload) |
| **Processing** | Structured data pipelines | OCR + LLM interpretation |
| **Output** | Charts and numbers | Charts + plain-language explanations |
| **Target user** | Tech-forward, smart-home users | Everyone — especially analog users |
| **Barrier to entry** | Hardware, provider lock-in, setup effort | Snap a photo — done |

## Key Insight

> The market is optimizing for the future (smart meters, IoT, real-time data) while ignoring the present (millions of people with paper letters who need help *now*). We serve the present.
