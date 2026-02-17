---
name: retro
description: Generate a sprint retrospective summary from notes
---

# Sprint Retro Summary Generator

Read CLAUDE.md for product context and current focus areas.

Then, based on the retro notes or discussion points provided, generate a structured retrospective summary:

## 1. What Went Well
- List 3-5 highlights with specific evidence (not generic praise)

## 2. What Didn't Go Well
- List 3-5 issues with root cause analysis (ask "why?" at least twice)

## 3. Action Items
For each action item, specify:
- **What** needs to change (concrete, not vague)
- **Who** owns it (or which role)
- **How we'll know** it worked (measurable outcome)

## 4. Metrics Check
- Compare current metrics from /docs/metrics.md against where we are
- Flag any metrics moving in the wrong direction

## Rules

- Be honest, not diplomatic — the retro is useless if it sugarcoats problems
- If no retro notes are provided, ask the user what went well and what didn't before generating
- Keep the total summary under 400 words
- End with one question for the team to discuss: "What is the one thing we should change next sprint?"
