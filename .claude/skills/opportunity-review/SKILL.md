---
name: opportunity-review
description: Run a multi-perspective adversarial review of a product opportunity, feature, or strategic decision. Spawns three parallel agents (CTO, CFO, Skeptical Customer) to stress-test the idea from technical, economic, and user-value angles.
argument-hint: [topic or path to brief, e.g. "CLAUDE.md" or "add multi-provider OCR support"]
---

# Opportunity Review

Run a three-perspective adversarial review to stress-test a product opportunity, feature proposal, or strategic decision.

## Setup

1. Read CLAUDE.md for product context and domain knowledge.
2. Read any relevant context files:
   - /docs/personas.md (user personas)
   - /docs/metrics.md (success metrics)
   - /docs/competitive-landscape.md (competitive landscape)
   - /docs/interview_analysis.md (user research)
   - Any file or topic the user specifies as the subject of the review
3. If the user provides a specific brief, feature idea, or problem statement as an argument, use that as the review subject. If no argument is given, review the overall product opportunity from CLAUDE.md.

## Execution

Spawn **three agents in parallel** using the Task tool (subagent_type: general-purpose). Each agent must read CLAUDE.md and relevant docs/research in the repo to ground its review.

### Agent 1: CTO — Technical Feasibility

Prompt the agent to act as the CTO. It should write exactly 5 bullet points covering:
- Technical risks and blind spots
- Architecture concerns (dependencies, coupling, failure modes)
- Data model and pipeline robustness
- Scalability and maintainability
- Security and privacy implications

### Agent 2: CFO — Unit Economics

Prompt the agent to act as the CFO. It should write exactly 5 bullet points covering:
- Cost structure (per-unit costs, infrastructure costs)
- Revenue model viability and willingness to pay
- Market size and customer acquisition feasibility
- Scale economics (what breaks when usage grows)
- Most realistic commercial path (or honest assessment that there isn't one)

### Agent 3: Skeptical Customer

Prompt the agent to act as a skeptical target user who will not adopt unless genuinely convinced. It should write exactly 5 bullet points covering:
- Whether the status quo is painful enough to justify switching
- Engagement frequency and habit formation
- Privacy and trust concerns
- Whether the tool provides actionable insight vs. restating known information
- Whether simpler alternatives (spreadsheet, photo album, manual tracking) would suffice

## Output format

Each agent returns its section with a bold header and 5 bullets (2-3 sentences each). No emoji.

After all three agents return, write a **Synthesis** section that:
1. Identifies the common thread across all three perspectives
2. Lists 3 key decisions the team must make next, framed as questions

## Saving the output

- Save the full review to `/docs/` with the filename format: `opportunity-review-YYYY-MM-DD.md`
- If a file with that name already exists, append a sequential suffix (e.g., `opportunity-review-2026-02-18-2.md`)
- Include a metadata header at the top: date, subject of review, method

## Rules

- Always spawn all three agents in parallel — do not run them sequentially
- Each agent must independently read the source material (CLAUDE.md, docs, research) to ground its review
- Do not soften or editorialize the agents' outputs — present them as-is
- The synthesis must surface genuine tensions, not paper over disagreements
- If agents flag the same concern from different angles, call that out explicitly as a convergence signal
- Keep each bullet to 2-3 sentences — dense and specific, not vague or generic
- Do not use emoji in any output

## Additional resources

- For product context, see CLAUDE.md
- For user personas, see [/docs/personas.md](/docs/personas.md)
- For metrics context, see [/docs/metrics.md](/docs/metrics.md)
- For competitive context, see [/docs/competitive-landscape.md](/docs/competitive-landscape.md)
- For user research, see [/docs/interview_analysis.md](/docs/interview_analysis.md) and [/research/](/research/)
- For previous reviews, see `/docs/opportunity-review-*.md`
