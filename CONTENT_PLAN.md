## Landing Page Content Plan — NiyoGen (FastGraph Swarm Builder and EvolSpace)

Audience: Founders, engineering leaders, data scientists, research engineers, platform teams.
Primary goal: Convert interested evaluators into trials/demos; secondary goal: educate and build trust.

### Positioning Statement (above-the-fold)
- Headline: FastGraph Swarm Builder — build swarms of agents from simple prompts.
- Subhead: Compose multi‑agent workflows in minutes, connect external systems and capabilities, and evolve into industrial integrations and service pipelines with governance built in.
- Primary CTA: Start free / Book a demo. Secondary CTA: Watch 90‑second overview.

### Key Messaging Pillars (reinforced across sections)
- Swarm intelligence for real-world ops: coordination, reliability, scale.
- Safety and governance: guardrails, auditability, policy enforcement.
- Velocity for R&D teams: reproducible workflows, collaboration, observability.

---

## Information Architecture (page structure) and rationale

1) Header and Navigation
- Elements: Logo, primary nav (`Swarm Builder`, `Assistant`, `EvolSpace`, `Solutions`, `Pricing`, `Docs`), theme toggle.
- Why: Fast orientation and predictable wayfinding. Keep CTAs persistently visible.

2) Hero (problem → solution → proof)
- Content: Headline, subhead, 2 CTAs, mini social proof (logos/metrics), short looped video.
- Why: Communicate value in under 5 seconds and offer two intent paths (explore vs. convert).
- Mini social proof copy: “In industry collaborations with two companies.”

3) Product Overview Cards (3-up)
- Cards: FastGraph Swarm Builder, EvolSpace (Agent Evolution & Guardrailed Assistants).
- Each includes: 1‑sentence outcome, 3 bullets, Learn more link.
- Why: Segment by buyer need; enable quick scanning.

4) Solutions by Persona/Use Case
- Personas: Platform/ML team, Research engineering, Data science, Compliance/Sec.
- Why: Tailor benefits and outcomes; provide concrete scenarios.

5) Deep Sections for Each Product
- Structure per product: Value, Capabilities, How it works, Architecture diagram, Demo CTA, Trust signals.
- Why: Support mid‑funnel research with enough specificity to earn a trial.

6) Demos and Examples
- Embedded short videos, interactive sandboxes or hosted notebooks.
- Why: Reduce time‑to‑first‑value; move users from reading to trying.

7) Security, Compliance, and Governance
- Items: Data handling, policy & guardrails, audit logs, SSO/SCIM, SOC2 roadmap.
- Why: Address blockers early; de‑risk adoption.

8) Pricing (simple tiers + enterprise)
- Starter (free), Growth, Enterprise with contact.
- Why: Transparency and a default path to evaluate.

9) Testimonials and Logos
- Quotes from early users; measurable outcomes (e.g., time‑to‑insight, incident MTTR).
- Why: Social proof to counter uncertainty.

10) FAQ
- Topics: deployment, data security, latency, integrations, support.
- Why: Handle common objections asynchronously.

11) Final CTA
- Repeat primary CTA; add calendar booking link.
- Why: Convert late‑stage evaluators.

12) Footer
- Links: Docs, API, Changelog, GitHub, Community, Privacy, Terms.
- Why: Standard utilities and credibility.

---

## Product Sections — What to publish and why

### 1) FastGraph Swarm Builder (Swarm Intelligence Platform)
- Outcome: Let users build swarms of specialized agents from simple prompts, integrate external systems, and evolve into industrial pipelines—reliably and at scale.
- Publish:
  - Problem framing: brittle single‑agent systems; orchestration gaps; lack of observability.
  - Capabilities: multi‑agent workflows, prompt‑defined agent roles, tool routing, external connectors, retries/timeouts, shared memory, event bus, scheduling.
  - Architecture: control plane, execution plane, message bus, state store, vector/knowledge interfaces, plugin/tool adapters.
  - Reliability: typed contracts, circuit breakers, backoff, quorum/consensus patterns.
  - Observability: traces, metrics, logs, session replays; experiment tracking.
  - Deployment: cloud, self‑hosted, hybrid; secrets management.
  - Integrations: data lakes, queues, LLM providers, vector DBs, code repos, issue trackers.
  - Demo: interactive flow—configure a 3‑agent swarm to triage incidents.
- Why: Buyers need proof of operational maturity beyond “agents as a demo.”

### 2) EvolSpace — Agent Evolution & Guardrailed Assistants
- Outcome: Create and evolve agents, evaluate performance, and launch policy‑aware assistants—without running your own infrastructure.
- Publish:
  - Guardrails: content policy, PII redaction, retrieval scoping, tool permissioning.
  - Control: prompt templates, moderation, human‑in‑the‑loop approvals, audit trails.
  - Connectors: knowledge bases, ticketing, monitoring tools, CRMs.
  - Evolution: evaluation runs, comparisons, targeted updates.
  - Metrics: deflection rate, time‑to‑resolution, coverage, intervention rate.
  - Templates: Support Copilot, Oncall Copilot, Analyst Copilot; embed SDKs.
  - Demo: guided assistant with policy examples and flagged responses.
- Why: Safety and governance determine enterprise viability.

### 3) (Optional deeper section) EvolSpace — Evaluation & Governance Details
- Publish:
  - Hosted evolution loops and evaluation runs, dataset/prompt versioning, artifact registry, run comparisons.
  - Collaboration: shareable projects, role‑based access.
  - Reproducibility: pinned models, seeds, deterministic pipelines.
  - Extensibility: plugin system for tools, evaluators, datasets.

---

## Copy Guidelines
- Tone: Clear, technical‑credible, not hypey. Lead with outcomes; back with specifics.
- Style: Short sentences, scannable bullets, concrete metrics; avoid jargon.
- Claims: Quantify when possible (e.g., “cut triage time by 28%”).

## Visual/Asset Guidelines
- Diagrams: System architecture (control vs. execution planes), agent graph, guardrail decision tree.
- Screens: Swarm builder, run trace view, policy editor, EvolSpace project view.
- Motion: 60–90s overview video; <15s micro‑demos.

## SEO and Metadata
- Core keywords: NiyoGen, FastGraph Swarm Builder, swarm intelligence platform, multi‑agent orchestration, AI guardrails, guardrailed chat assistant, EvolSpace agent evolution service.
- Title: FastGraph Swarm Builder, Guardrailed Assistants, and EvolSpace | NiyoGen
- Meta description: Build agent swarms from simple prompts, launch safe assistants, and evolve agents with a managed evaluation service.
- OpenGraph/Twitter cards with branded preview image.

## CTAs and Conversion Paths
- Primary: Start free / Book demo.
- Secondary: Try interactive demo, View docs, GitHub.
- Persona‑specific deep links: Platform (deploy docs), Research (EvolSpace demo), Ops (assistant playbooks).

## Trust and Proof
- Add: Customer logos, quotes with outcomes, case studies (1‑pager PDFs), uptime page link, changelog velocity.

## Analytics & Events (what to measure)
- Hero CTA clicks (by persona), demo start/completion, sandbox usage, docs clicks, pricing views, contact form, FAQ expand, theme toggle.

## Implementation Mapping (to current scaffold)
- `index.html` sections map 1:1 to Hero, Features (3‑up overview), Testimonials, Pricing, FAQ, and Final CTA; expand with dedicated product subpages or deeper sections.
- Use `styles.css` variables for rapid brand theming; dark mode already included.
- Add interactive demos via small `script.js` modules or embed notebooks/sandboxes.
 - Add `How it works` section with `assets/architecture.svg` illustrating prompts → swarms → EvolSpace → external systems.

## Content Checklist (publish‑ready)
- [ ] Finalized positioning statement and 3 product blurbs
- [ ] Diagrams (SVG) and 3 key screenshots
- [ ] 90s overview video + 2 micro‑demos
- [ ] Pricing copy and FAQ
- [ ] Security & compliance page stub
- [ ] Case study (first logo/quote)
- [ ] Instrumentation plan implemented

## References
- Frontend repo structure inspiration and example assets: [fastgraph_fe on GitHub](https://github.com/prageethmgunathilaka/fastgraph_fe)

---

## Repo‑derived proof points and what we can show now

Reference: your frontend repo shows clear technical maturity and useful artifacts we can surface as proof to buyers and technical evaluators.

- Authentication and session rigor (teaser bullets + link outs)
  - Implementation notes and patterns: [AUTHENTICATION_IMPLEMENTATION.md](https://github.com/prageethmgunathilaka/fastgraph_fe/blob/main/AUTHENTICATION_IMPLEMENTATION.md)
  - Debug and troubleshooting depth: [AUTHENTICATION_DEBUG_GUIDE.md](https://github.com/prageethmgunathilaka/fastgraph_fe/blob/main/AUTHENTICATION_DEBUG_GUIDE.md), [AUTHENTICATION_TROUBLESHOOTING.md](https://github.com/prageethmgunathilaka/fastgraph_fe/blob/main/AUTHENTICATION_TROUBLESHOOTING.md)
  - Token behavior specifics: [TOKEN_EXPIRATION_GUIDE.md](https://github.com/prageethmgunathilaka/fastgraph_fe/blob/main/TOKEN_EXPIRATION_GUIDE.md)
  - Login refresh handling: [DEBUG_LOGIN_REFRESH.md](https://github.com/prageethmgunathilaka/fastgraph_fe/blob/main/DEBUG_LOGIN_REFRESH.md), [LOGIN_PAGE_REFRESH_FIX.md](https://github.com/prageethmgunathilaka/fastgraph_fe/blob/main/LOGIN_PAGE_REFRESH_FIX.md)

- Middleware and reliability mindset
  - Middleware testing strategy: [MIDDLEWARE_TESTING_GUIDE.md](https://github.com/prageethmgunathilaka/fastgraph_fe/blob/main/MIDDLEWARE_TESTING_GUIDE.md)
  - Actual middleware file to cite in diagrams: [middleware.ts](https://github.com/prageethmgunathilaka/fastgraph_fe/blob/main/middleware.ts)

- Live test pages to demonstrate guardrails and environment sanity (safe for public demos)
  - Login error scenarios: [test-login-errors.html](https://github.com/prageethmgunathilaka/fastgraph_fe/blob/main/test-login-errors.html)
  - Backend connectivity checks: [test-google-backend.html](https://github.com/prageethmgunathilaka/fastgraph_fe/blob/main/test-google-backend.html)
  - Env validation: [test-env.html](https://github.com/prageethmgunathilaka/fastgraph_fe/blob/main/test-env.html)
  - Debug login: [debug-login.html](https://github.com/prageethmgunathilaka/fastgraph_fe/blob/main/debug-login.html)

- Project tech baseline (credibility cues)
  - TypeScript + Next.js config: [next.config.ts](https://github.com/prageethmgunathilaka/fastgraph_fe/blob/main/next.config.ts), [tsconfig.json](https://github.com/prageethmgunathilaka/fastgraph_fe/blob/main/tsconfig.json)
  - Linting and build hygiene: [eslint.config.mjs](https://github.com/prageethmgunathilaka/fastgraph_fe/blob/main/eslint.config.mjs), [package.json](https://github.com/prageethmgunathilaka/fastgraph_fe/blob/main/package.json)
  - Changelog velocity for social proof: [Commits](https://github.com/prageethmgunathilaka/fastgraph_fe/commits/main)

How to surface these without overwhelming:
- Add a compact “Engineering depth” strip under each product with 2–3 linked bullets (Implementation, Testing, Troubleshooting), pointing to the above docs.
- Use a single architecture SVG that includes a “middleware/policy” box and annotate it with a small link “See middleware testing approach”.

## Screenshots and micro‑demos to capture this week
- Screenshots (static):
  - Policy/Middleware editor view (diagram mock if UI not ready) → caption: “Guardrails enforced in middleware.”
  - Run trace/flow (mock trace with retries/backoff) → caption: “Operational visibility for multi‑agent runs.”
  - EvolSpace project (evaluation runs + comparisons) → caption: “Evolve and evaluate agents safely.”
- Micro‑demos (10–15s, looped, muted):
  - “Login with guardrails”: open debug/test page, show blocked error path and success path.
  - “Swarm run”: trigger a small flow animation (frontend only) with a retry badge.
  - “Compare runs”: flip between two run summaries.

Placement in the page:
- Hero: one looping montage (3 tiles) to create intrigue.
- Product sections: one loop per section above the fold; link to “View details”.

## Light docs skeleton to link from the site (backed by repos)
- Getting Started → link to `fastgraph_fe` README and a quickstart section.
- Authentication & Sessions → link to authentication guides and token expiration guide.
- Middleware & Policy → link to middleware testing guide and `middleware.ts`.
- Demos & Test Pages → link to the four test/debug HTML pages for safe experimentation.
- Changelog → link to commits page.

## Short‑effort roadmap mapping to repos
- Interactive assistant demo (1–2 weeks): front end in `fastgraph_fe` using mocked data and deterministic guardrail outcomes (no public APIs yet).
- Swarm trace viewer (1–2 weeks): static JSON traces rendered in FE; later connect to `fastgraph-python` when APIs are available.
- EvolSpace teaser (1 week): sample project with evaluation runs and comparison screenshots.

## Open questions (so we can add precise, credible teasers)
1) `fastgraph-python`: when APIs are ready, which read‑only endpoints will come first (flows, runs, traces)?
2) EvolSpace: any assets or pipeline diagrams we can reference publicly?
3) Any pilot users or industries we can anonymize further (e.g., “pilots in fintech/telecom”)?
4) Are there security/compliance notes we can tease now (data handling, self‑host option)?



