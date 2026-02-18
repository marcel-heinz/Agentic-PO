---
name: interview-analysis
description: Analyze user interview transcripts and extract structured research insights. Use when the user uploads, pastes, or references interview transcripts to synthesize jobs-to-be-done, pain points, and behavioral patterns.
argument-hint: [path to transcript(s) or directory, e.g. /research/ or /research/interview-transcript-03.md]
---

# Interview Analysis

Read CLAUDE.md for product context and domain knowledge.

Then read ALL interview transcripts at the provided path (or in `/research/` by default). Analyze every transcript — do not skip any.

Produce a single synthesized analysis covering:

## 1. Jobs to Be Done

Extract the core jobs users are trying to accomplish. Use the format:
- **Job title** — one-sentence description with supporting evidence (participant name, quote)

Prioritize by frequency (how many participants mentioned it) and intensity (how emotionally it was expressed).

## 2. Pain Points

Create a comparison table across all participants:

| Pain Point | Participant 1 | Participant 2 | ... | Severity |
|---|---|---|---|---|

Severity = High / Medium / Low, based on:
- How many participants mentioned it
- Whether it has a concrete financial or behavioral impact
- Whether existing workarounds exist

## 3. What Works Already Well

Identify anything users mentioned that is positive about their current experience — even small things. These are constraints to preserve, not problems to solve.

## 4. Key Behavioral Insights

Synthesize cross-cutting patterns that inform product decisions:
- Usage frequency and triggers
- Workflow preferences (e.g., photo-first, zero manual entry)
- Motivation hierarchy (financial > environmental > curiosity)
- Competence signals (even experts struggle = design problem, not user problem)

## 5. Willingness to Pay

Summarize any pricing signals: price points mentioned, payment model preferences (subscription vs. one-time vs. free), and reference frames participants use to justify value.

## 6. Problem Statement

Write a single-sentence problem statement that synthesizes all findings. Format:
**[Who] [situation] [pain] — leading to [consequence].**

## Rules

- Analyze ALL transcripts found — never skip or summarize only a subset
- Always attribute insights to specific participants by name
- Include direct quotes where they strengthen a point (use blockquote formatting)
- If only one participant mentions a pain point, still include it but note the limited evidence
- Do not invent or extrapolate beyond what participants actually said
- If transcripts are in German, extract insights but write the analysis in English
- Flag conflicting signals across participants explicitly — disagreement is data
- Save the output to `/docs/interview_analysis.md` (overwrite if it exists, or ask the user for a different filename)

## Existing analysis

- Check if `/docs/interview_analysis.md` already exists. If it does, ask the user whether to overwrite, append (for new transcripts), or save to a different file.

## Additional resources

- For product context, see CLAUDE.md
- For raw transcripts, see [/research/](/research/)
- For existing analysis, see [/docs/interview_analysis.md](/docs/interview_analysis.md)
