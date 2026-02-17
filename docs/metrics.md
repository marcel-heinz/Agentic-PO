# Metrics Framework

## North Star Metric

**Monthly letters processed and tracked**
- Definition: Number of consumption letters successfully uploaded, parsed, and stored with extracted data
- Why this metric: It captures both adoption (user uploads) and product quality (successful extraction). If letters are processed, the user is getting value.
- Target: 100% of received letters for active users (1 upload per month per user)

## Input Metrics

### 1. OCR Extraction Accuracy
- Definition: Percentage of data fields correctly extracted from uploaded letters (consumption value, period, cost, comparison)
- Target: >90% field-level accuracy
- Why it matters: If extraction is wrong, users lose trust immediately. This is the foundation.

### 2. Time-to-Insight
- Definition: Time from photo upload to seeing the plain-language summary and chart
- Target: <30 seconds
- Why it matters: The value proposition is "snap and understand." If it takes minutes, users won't bother.

### 3. Monthly Retention
- Definition: Percentage of users who upload a letter in consecutive months
- Target: >70% month-over-month retention after 3 months
- Why it matters: The product only works if users build a history. One-time usage doesn't solve the longitudinal tracking problem.

## Counter-Metrics (watch for)

### Misinterpretation Rate
- Definition: Cases where extracted data is confidently wrong (e.g., wrong order of magnitude, swapped fields)
- Threshold: <2% — confident-but-wrong outputs erode trust faster than admitted uncertainty
- Mitigation: Always show confidence level; flag ambiguous extractions for manual review

## Current Baseline

- No product exists yet — all metrics are at zero
- User interviews indicate: ~10 seconds spent on letters today, 0% longitudinal tracking, 100% annual bill surprise rate among interviewed users
