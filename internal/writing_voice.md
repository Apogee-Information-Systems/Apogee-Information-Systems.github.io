# Apogee Writing Voice

Internal reference for copy across Apogee properties. Derived from [apogee.gr](https://apogee.gr/), [apogee.lu](https://apogee.lu/), [apogeewatcher.com](https://apogeewatcher.com/), and our GitHub Pages site.

---

## Brand voice in one sentence

**Competent, precise, and long-term oriented** — we explain what we build, who it is for, and why it matters, with enough technical detail to earn trust from practitioners and institutions alike.

---

## Core principles

### 1. Lead with capability, not hype

State what the product or service does, who it serves, and the outcome it enables. Avoid superlatives (*revolutionary*, *game-changing*, *cutting-edge*) unless tied to a concrete fact.

| Do | Don't |
| --- | --- |
| "Automated PageSpeed monitoring for agencies and freelancers." | "The ultimate performance solution you've been waiting for." |
| "We design, develop and operate tailored information systems for public institutions." | "We disrupt the public-sector IT landscape." |

### 2. Be specific

Name technologies, metrics, programmes, and scale. Specificity signals experience.

- **Metrics:** 750+ projects, 24 years of experience, 6,000+ users, 2,800+ projects across 19 programmes
- **Technologies:** Laravel, Google PageSpeed Insights, CrUX, Modoboa, Postfix, SPF/DKIM/DMARC
- **Clients & contexts:** Interreg Europe, European Commission, EIPA, Università Cattolica del Sacro Cuore

When a number is unavailable, describe scope instead of inventing one.

### 3. British English

Use British spelling and punctuation conventions consistently:

- organisations, specialise, centre, colour (in prose), analyse
- En dash for ranges: `2009–2021`, `10–50+ sites`
- Em dash for elaboration: `Track Core Web Vitals — CLI validation, usage tracking, and scheduled tests`

### 4. First-person plural for the company

Write as **we** when Apogee speaks:

- "We design and operate…"
- "Our approach combines…"

Use **you** when addressing the reader directly (especially on product pages):

- "Set performance budgets and receive alerts when metrics exceed thresholds."
- "You don't manage API keys or quotas for each site."

### 5. Long-term credibility

Apogee was founded in **2002**. Reference this where it adds trust — especially on product pages competing with VC-backed SaaS:

- "No VC pressure — we build for the long term."
- "Many of our partnerships extend over a decade."

Do not over-repeat the founding year in every paragraph.

### 6. Honest scope

When selling or describing a product, state what is **included** and **not included**. MailOps pricing pages are the model: explicit lists prevent misunderstanding and support serious buyers.

---

## Tone by property

| Property | Audience | Tone | Typical length |
| --- | --- | --- | --- |
| **apogee.gr** | Prospects, partners, press | Institutional, mission-led, concise sections | Short blocks; news headlines |
| **apogee.lu** | EU institutions, enterprises | Corporate, comprehensive, partnership-focused | Long-form sections with numbered structure |
| **apogeewatcher.com** | Agencies, freelancers, in-house dev/SEO | Direct, benefit-led, competitively aware | Mix of punchy hero copy and detailed FAQ |
| **GitHub / open source** | Developers | Practical, production-oriented, minimal | One paragraph + feature bullets |

All properties share the same underlying voice; only depth and directness shift.

---

## Structural patterns

### Section numbering (apogee.lu, MailOps, GitHub)

Use numbered section labels for long pages:

```
// 01
## About Apogee Information Systems

// 02
## Capabilities
```

On shorter pages (GitHub, product cards), use comment-style kickers:

```
// Open source package
// Features
// Quick start
```

### Headlines

- **Corporate (apogee.lu):** Title Case or sentence case with clear nouns — "Custom Software & AI Development", "Vision & Values"
- **Product (Watcher):** Benefit + qualifier — "Automated PageSpeed Monitoring", "Fixes, not just errors"
- **Blog:** Declarative, specific, often problem-led — "TTFB Won't Go Down? Server-Side Culprits Beyond the Theme", "When PageSpeed Insights Shows No CLS or INP for Your URL"
- **Legacy (apogee.gr):** Occasional ALL CAPS section labels — "OUR MISSION", "OUR SERVICES" — prefer migrating new copy to Title Case

### Body paragraphs

- **Opening:** State purpose and audience in the first one or two sentences.
- **Middle:** Expand with capabilities, workflow, or context.
- **Close:** Outcome, CTA, or next step.

Example (corporate):

> Apogee develops and operates custom digital platforms for European institutions, public organisations and businesses. Since 2002, we have delivered hundreds of projects ranging from Interreg monitoring systems and AI-powered data platforms to learning environments, transactional systems and public-facing digital services.

Example (product):

> Apogee Watcher automates the entire performance monitoring workflow. Add your websites, and Watcher discovers pages from sitemaps and HTML crawl — no manual URL entry for every page.

### Lists and bullets

- **Feature lists:** Start with a verb or noun phrase; keep parallel structure.
- **Watcher marketing blocks:** May use `>` prefix as a design element in UI copy.
- **Comparison / differentiation:** Bullet lists with em dash lead-ins work well:

  > **Multi-tenant architecture** — True organisation-level separation with role-based access.

- **Technical docs:** Plain `<li>` items without decorative prefixes.

### Calls to action

Keep CTAs low-pressure and explicit:

- "contact us", "View on GitHub", "Start now", "Get a free domain check — no account needed"
- Avoid: "Don't miss out!", "Act now!", urgency manipulation

---

## Vocabulary & phrasing

### Words and phrases we use

| Term | Usage |
| --- | --- |
| *information systems* | Corporate services; preferred over generic "software" on apogee.lu |
| *digital platforms* | Web apps, portals, multi-user systems |
| *tailored / custom-built* | Bespoke work for a specific organisation |
| *long-term support* | Maintenance, helpdesk, operational continuity |
| *operational* | Day-to-day running of systems (MailOps, monitoring) |
| *actionable* | Diagnostics and suggestions the reader can act on |
| *white-label* | Client-facing reports under agency branding |
| *Core Web Vitals, CrUX, PageSpeed Insights* | Use correct names; abbreviate after first mention where appropriate |
| *lab data / field data* | Lighthouse vs real-user CrUX — always distinguish |
| *Layer, don't replace* | Integrate alongside existing stack (Watcher positioning) |

### Words to avoid or use sparingly

- *Solution* (acceptable in "solutions" plural or "digital solutions", not as a standalone buzzword)
- *Leverage*, *synergy*, *disrupt*, *pivot*
- *Simple* / *easy* without qualification — prefer "straightforward", "without manual URL entry", or describe the actual reduction in work
- *Best-in-class*, *world-class*, *industry-leading* unless backed by evidence

### Institutional language (apogee.gr / apogee.lu)

Reference EU and public-sector context naturally:

- Interreg programmes, European institutions, public organisations
- "monitoring information & reporting assistance", "policy learning platform", "stakeholder portals"
- Emphasise transparency, workflow support, cross-programme coordination where relevant

---

## Technical writing (Watcher blog & docs)

The blog targets **practitioners** who already know performance tooling. Match their expectations:

### Blog post formula

1. **Title:** Specific problem or question + scope hint
2. **Lead (1–2 sentences):** State the situation and where the answer lives ("Here is…", "When X… the bottleneck is often…")
3. **Body:** Mechanism first, then checklist or next steps
4. **Close:** What to monitor, what to do next, or what still requires Chrome-only tooling

Example lead pattern:

> When CDN and theme work fail to reduce TTFB, the bottleneck is often origin compute: WP-Cron storms, cold PHP workers, missing object cache, database load, and backup plugins during peak. Here is a server-side checklist for WordPress sites.

### Technical style rules

- Define acronyms on first use in public-facing posts (CrUX, INP, TTFB) unless the audience is strictly internal
- Prefer **precise verbs:** track, monitor, diagnose, correlate, persist, discover
- Use **tables** for metric definitions and plan comparisons
- Quote competitor pricing or features only when verifiable and relevant to differentiation
- Never invent benchmark numbers

### Open-source / GitHub copy

- One-sentence product summary with em-dash clauses for key capabilities
- Feature bullets: concrete artifacts (CLI commands, database schema, migrations)
- Mention production use: "practical Laravel tools we use in production and share"
- Link to GitHub repo; keep marketing minimal

---

## Product positioning patterns

### Apogee Watcher

- **Audience segments:** Agency technical leads (10–50+ sites), freelance developers (1–10 sites), in-house SEO/marketing teams
- **Problem frame:** Manual checks don't scale; per-site tools get expensive; Lighthouse CI is a maintenance burden; agencies lack multi-tenant dashboards and client-ready reporting
- **Differentiators:** Multi-tenant architecture, automated page discovery, lab + CrUX in every test, no API key management, agency-friendly pricing
- **UI copy may use** terminal motifs (`>`, `//`, monospace labels) — keep prose sections readable; do not overuse in long-form blog posts

### MailOps

- **Audience:** Self-hosted Modoboa administrators
- **Problem frame:** Operational data spread across OS, mail services, logs, and DNS
- **Voice:** Administrator-focused, diagnostic — "from 'something is wrong' to 'this is the cause and this is what needs to change'"
- **Structure:** Feature → vanilla Modoboa comparison → included / not included pricing blocks

### Corporate services (apogee.lu)

- **Audience:** EU programmes, public institutions, medium-to-large private organisations
- **Pillars:** Custom software & AI, project delivery, support & service management, quality/security/operations
- **Values section:** Quality, innovation (where measurable), evolution, partnership — each with a short explanatory paragraph

---

## Formatting conventions

| Element | Convention |
| --- | --- |
| Company name | **Apogee Information Systems** (first mention); **Apogee** thereafter |
| Product names | Apogee Watcher, Apogee MailOps, Essence, Voyager — capitalised |
| Repo paths | `Apogee-Information-Systems / pagespeed-watcher` (org / repo) |
| Dates | `19 Aug 2026` (blog), `2002–2026` (copyright range) |
| Offices | Thessaloniki · Luxembourg · Barcelona (middle dot separator) |
| Links | Descriptive anchor text; "Learn more at apogee.gr" not "click here" |

---

## Before publishing — checklist

- [ ] British English spelling throughout
- [ ] First paragraph answers: **what**, **who**, **why**
- [ ] Claims backed by specifics (metrics, features, or named standards)
- [ ] No unsupported superlatives
- [ ] CTAs clear and honest
- [ ] Technical terms used correctly (lab vs field, LCP/INP/CLS, etc.)
- [ ] Tone matches the target property (see table above)
- [ ] Included / not included stated for any commercial offer

---

## Source references

Research date: August 2026.

| Source | Notable patterns |
| --- | --- |
| [apogee.gr](https://apogee.gr/) | Mission statement, service cards, news headlines, EU/public-sector focus |
| [apogee.lu](https://apogee.lu/) | Numbered sections, capabilities, vision/values, project portfolio, track record |
| [apogeewatcher.com](https://apogeewatcher.com/) | Hero benefits, FAQ differentiation, pricing clarity, blog practitioner tone |
| [apogee.lu/mailops.html](https://apogee.lu/mailops.html) | Comparison tables, included/not-included lists, operator-focused diagnostics |
| [GitHub Pages site](../docs/) | `//` section labels, concise open-source descriptions |

When in doubt, read a recently published page on the target property and match its depth and rhythm.
