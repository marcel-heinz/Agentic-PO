# Agentic PO — Product Owner of the Future

## Enablement Session (90 min)

This repository is the companion project for the **"Product Owner of the Future"** enablement session. It demonstrates how Product Owners can use AI-native workflows — specifically Claude Code — to collapse the distance between insight and experiment.

The hands-on project is **Energy Consumption Analytics**: a small tool that takes monthly energy consumption letters (OCR), extracts structured data via LLM, and provides charts + plain-language explanations over time.

---

## Repository Structure

```
Agentic-PO/
├── CLAUDE.md                          # Product context file — the "product brain"
├── README.md                          # You are here
├── docs/
│   ├── personas.md                    # Key user personas
│   ├── metrics.md                     # North star + input metrics
│   └── competitive-landscape.md       # Alternatives & competitor analysis
├── research/
│   ├── interview-transcript-01.md     # User interview: energy bill frustrations
│   └── interview-transcript-02.md     # User interview: tracking consumption over time
├── samples/
│   └── sample-consumption-letter.md   # Example of a monthly energy consumption letter
└── .claude/
    └── skills/
        ├── prd/
        │   └── SKILL.md              # Skill: generate a PRD from a problem statement
        ├── analyze-letter/
        │   └── SKILL.md              # Skill: analyze an uploaded consumption letter
        └── retro/
            └── SKILL.md              # Skill: sprint retrospective summary
```

---

## Session Outline

| Block | Duration | What Happens |
|-------|----------|--------------|
| **Part 0** — Hypotheses & Provocations | 15 min | 5 hypotheses about the PO of the future. Interactive voting. |
| **Part 1** — Steinberger-to-PO Translation | 10 min | Side-by-side: how power-user devs work vs. power-user POs |
| **Part 2** — Live Demo with Claude Code | 30 min | 5 demos using this repo: CLAUDE.md, interview synthesis, parallel agents, skills, prototype |
| **Part 3** — The New PO Skill Stack | 10 min | What changes: skills that grow, shrink, and emerge |
| **Part 4** — Hands-On Experiment | 15 min | Participants build their own CLAUDE.md + skill |
| **Part 5** — Discussion Round | 10 min | Open dialogue on implications |

---

## The Hands-On Project: Energy Consumption Analytics

### The Problem

Every month, a paper letter arrives from the local energy provider with warm water consumption data. It is:

1. **A mess** — dense tables, abbreviations, unit conversions, comparison periods that are hard to parse
2. **A dead end** — no way to track consumption over time; each letter exists in isolation
3. **Unexplained** — the letter provides numbers but no context on what they mean or whether consumption is normal

### The Solution (built live in the session)

A small web app where you:

1. **Upload** a photo/scan of the monthly consumption letter
2. **Extract** structured data via OCR + LLM interpretation
3. **Visualize** consumption as charts (month-over-month, year-over-year)
4. **Explain** what the numbers mean in plain language

### Why This Project?

- It's **real** — this is an actual personal pain point, not a contrived demo
- It's **small enough** to prototype in 15-30 minutes with Claude Code
- It demonstrates the **full loop**: raw unstructured input → structured data → visualization → insight
- It touches **OCR, LLM extraction, data viz, and UX** — showing the breadth a PO can now reach

---

## How to Use This Repo

### For the Session Facilitator

1. Clone the repo
2. Open it in Claude Code (`claude` in terminal)
3. Claude reads `CLAUDE.md` automatically — your product context is loaded
4. Run the demos from Part 2 of the session plan
5. Use the skills in `.claude/skills/` for repeatable workflows

### For Participants (Hands-On)

1. Fork/clone this repo
2. Read through `CLAUDE.md` to understand how context engineering works
3. Try running `/prd` or `/analyze-letter` in Claude Code
4. Modify `CLAUDE.md` for your own product/team
5. Create your own skill in `.claude/skills/`

---

## Key Concepts Demonstrated

- **CLAUDE.md as Product Brain** — persistent context that makes every AI session productive from the start
- **Skills as Reusable Workflows** — slash commands that encode your team's best practices
- **Context Engineering** — the PO's new core skill: building the knowledge base that makes AI outputs useful
- **Speed-to-Learning** — going from interview notes to testable prototype in under 30 minutes

---

## Resources

- [Shipping at Inference Speed](https://steipete.me/posts/2025/shipping-at-inference-speed) — Peter Steinberger
- [Claude Code PM Course](https://ccforpms.com/) — Free, interactive
- [Awesome Claude Code](https://github.com/hesreallyhim/awesome-claude-code) — Community resources
