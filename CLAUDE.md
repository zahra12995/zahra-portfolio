# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Current State

This workspace currently has no application code, `tools/`, or `workflows/` directories — only three process documents: `CLAUDE (1).md`, `planning_phase.md`, and `secure.md`. They define the operating framework this project follows once a build starts. This file consolidates them for quick reference; treat the originals as authoritative if anything here drifts out of sync.

## Operating Framework: WAT (Workflows, Agents, Tools)

- **Workflows** (`workflows/`) — Markdown SOPs: objective, required inputs, tools to use, expected outputs, edge-case handling. `planning_phase.md` is the first to read on any new build, and should move into `workflows/` once that directory exists.
- **Agents** — you. Read the relevant workflow, sequence tool calls, recover from failures, ask clarifying questions instead of guessing.
- **Tools** (`tools/`) — Python scripts doing the actual execution (API calls, transforms, file/database I/O). Credentials live in `.env`, never inline in a script.

Rationale: chaining AI-driven steps compounds error (five steps at 90% accuracy each ≈ 59% overall success). Deterministic tools keep execution reliable; the agent's job is orchestration, not doing every step itself.

### Working this way
1. **Check `tools/` before writing a new script** — only build one if nothing existing covers the task.
2. **On failure, don't just recover — fix the root cause.** Fix the tool, verify the fix, then update the relevant workflow with what was learned (rate limits, timing quirks, unexpected behavior). Confirm before rerunning anything that burns paid API calls/credits.
3. **Never create or overwrite a workflow file without asking**, unless explicitly told to. Workflows are standing instructions to be refined over time, not scratch notes.

### File placement
- `.tmp/` — disposable intermediates (scraped data, exports); regenerable, never a deliverable
- `tools/` — Python execution scripts
- `workflows/` — SOPs
- `.env`, `credentials.json`, `token.json` — secrets and OAuth material, never committed
- Final deliverables belong in the relevant cloud service (Google Sheets, Slides, etc.), not left as local files

## Starting a New Build

Follow `planning_phase.md` in full before writing any code: brief → goal & constraints → architecture (UI, orchestration, business logic, data access, external integrations) → tech stack → clarifying questions (asked one at a time, all answered before proceeding) → project-specific CLAUDE.md → review & approval. Only move into execution — and only then switch out of Plan Mode — once the plan is approved. Structure every build prompt as:

```
Goal:
Relevant files/systems:
Constraints:
Expected output:
Verification steps:
```

## Permissions

Per `secure.md`, these shell commands are pre-approved without confirmation: `cat`, `touch`, `mkdir`, `ls`, `pwd`, `echo`. Destructive deletes (`rm -rf`, `rm -fdr`, `rm -fr`, `rmdir`) always require explicit user confirmation, regardless of mode.

## QA & Security Skills

`secure.md` defines two checklists to run before shipping anything built in this workspace:

- **QA** — functional completeness (no stubs, all flows tested end-to-end), code quality (no dead code or debug prints, consistent naming), no exposed secrets/PII, every API call error-handled with generic user-facing messages, dependency hygiene (`npm audit` or equivalent, no unused imports).
- **Security** — secrets only in `.env` (with a placeholder `.env.example` committed), rate limiting on public/AI-facing endpoints (baseline 10–50 messages per 10-minute session, `429` on breach, configurable via env vars), abuse/DDoS mitigation, auth routes and sessions properly protected/expired, input validation (parameterized queries, no `eval` on user input), HTTPS + security headers (`CSP`, `X-Frame-Options`, `X-Content-Type-Options`) + restrictive CORS in production.

Trigger phrases: "Run QA skill", "Run Security skill", "Run QA and Security skills — give me a pre-ship readiness report."

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
