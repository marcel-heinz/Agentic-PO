---
name: prd
description: Generate a PRD from a problem statement. Use when the user wants to write a product requirements document, define a feature, or turn a problem into a spec.
argument-hint: [problem statement or feature idea]
---

# PRD Generator

Read the following context files:
- /docs/personas.md
- /docs/metrics.md
- CLAUDE.md

Then generate a PRD with these sections:

1. **Problem Statement** — What is the user pain? Include evidence from user research in /research/ if available.
2. **Target Persona** — Which persona from personas.md is most affected? Why?
3. **Proposed Solution** — High-level description. Keep it concise. No implementation details.
4. **Success Metrics** — Tied to the north star metric in metrics.md. Include 2-3 measurable input metrics.
5. **Risks & Open Questions** — What could go wrong? What do we not know yet?
6. **Scope: v1 IN vs. OUT** — Be ruthless. What is the smallest thing we can ship to learn?

## Rules

- Always challenge the problem statement before generating. Ask: "What evidence supports this being the #1 priority?"
- Reference actual user quotes from /research/ when available
- Keep the total PRD under 500 words — concise over comprehensive
- Use the user story format from CLAUDE.md: "As a [persona], I want [action], so that [outcome]"
- Write the PRD to /docs/prds/ with a descriptive filename

## Additional resources

- For user personas, see [/docs/personas.md](/docs/personas.md)
- For metrics context, see [/docs/metrics.md](/docs/metrics.md)
- For competitive context, see [/docs/competitive-landscape.md](/docs/competitive-landscape.md)
- For raw user research, see [/research/](/research/)
