# Apogee Watcher Backlink Outreach Playbook

Status: **Internal — not for publication**

Product: [Apogee Watcher](https://apogeewatcher.com/) — multi-tenant PageSpeed / Core Web Vitals monitoring for agencies

Voice reference: [writing_voice.md](./writing_voice.md)

Outreach contact log: [apogee-watcher-outreach-contact-log.md](./apogee-watcher-outreach-contact-log.md) — every publisher contacted and when.

Research and outreach window: September 2026

---

## Purpose

This playbook documents how Apogee Information Systems runs backlink outreach for Apogee Watcher: guest-post pitches, article-update corrections, prospect vetting, and lessons from the September 2026 campaign. Use it when onboarding someone to outreach or resuming work after a pause.

Two tactics dominate:

- **Tactic A** — Guest posts / free blog contributions (write-for-us programmes)
- **Tactic B** — Article-update / "suggest a correction" outreach (outdated roundups, retired tools, taxonomy gaps)

Both tactics share the same product positioning block below. Never invent fees, emails, or programme rules — verify live before every send.

---

## Product positioning (use in every pitch)

Copy this block into pitches and adapt the lead sentence to the host site's audience. Keep claims factual; do not oversell.

**Apogee Watcher** is multi-tenant PageSpeed / Core Web Vitals monitoring built for agencies and multi-site teams.

| Capability | Pitch line |
| --- | --- |
| Data sources | Lab (Lighthouse via PageSpeed Insights API) **plus** CrUX field data on every scheduled test |
| Deployment | No client-side RUM snippet required; no per-client Google API key management |
| Discovery | Sitemap and HTML crawl page discovery — URL lists stay current as sites ship |
| Operations | Performance budgets, Slack / email / webhook alerts, white-label PDFs |
| Access control | Admin, Manager, and Viewer roles across organisations and sites |

**Positioning frame:** Watcher sits in the **middle band** between DIY PSI cron jobs / Looker dashboards and premium RUM depth (DebugBear, SpeedCurve, Calibre). Layer beside RUM when session-level proof is required; do not position as a RUM replacement.

**Tone:** Educational first, soft product mention. Cite Watcher blog posts as peer content where the host prefers third-party framing over vendor copy.

---

## Tactic A — Guest posts / free blog contributions

### Process

1. **Find prospects** — Tech / SaaS blogs with active write-for-us (WFU) or contributor programmes that fit Core Web Vitals, performance monitoring, DevOps, or agency tooling.
2. **Vet each prospect** before drafting:
   - Recent guest activity (~30 days) — inactive pipelines waste pitch time
   - No writer publish fee — prefer free / editorial inclusion over paid placements
   - Published guidelines and topic fit vs their archive
   - Topic gap — their readers need CWV / monitoring content they have not covered recently
3. **Check backlink reality** — Inspect 2–3 recent guest posts:
   - Dofollow vs nofollow on bio links, author-page Website buttons, and in-body product mentions
   - Whether body self-product links are allowed or editorial removes them
   - Canonical / republish rules if they syndicate
4. **Draft pitch** matching their stated process (email vs form, word count, code samples, disclosure rules). Cite Watcher blog samples when useful — see [Watcher blog assets](#watcher-blog-assets-to-reuse-in-pitches).
5. **Review before send** — Prefer a Gmail draft from `m.giannopoulos@apogee.lu` for Markos approval. Research only until send is approved.

### Lessons learned (September 2026)

#### AppSignal

- **Programme:** Active paid writer program (verify current terms on their site).
- **Backlink reality:** Soft dofollow mainly on the author-page **Website** button (`rel="noopener noreferrer"`, **not** `nofollow`) — **not** on the post bio. Body self-product links are unlikely.
- **Republish:** Requires canonical pointing to AppSignal.
- **Pitch status:** Draft to `editorial@appsignal.com` with CWV + APM topic angle.
- **Disclosure:** Watcher Team bylines and CWV posts are adjacent to their Node / Ruby / Python / Elixir code bar — state that clearly in the pitch; do not pretend to be a language-runtime tutorial shop.

#### DEVOPSdigest

- **Programme:** Vendor Forum blogging at no cost; daily external posts.
- **Rules:** Strict no-promo; homepage link only at end; no AI-generated copy (verify current policy).
- **Verdict:** Good free path — prioritise after higher-equity guest targets are in flight.

#### RabbitLoader

- **Topical fit:** Best CWV alignment in the batch.
- **Pipeline concern:** Guest activity looked inactive as of September 2026 (staff posts; last external guest ~June 2026).
- **Backlink rule:** One dofollow link stated in WFU.
- **Diligence:** "Link addition" wording on WFU — confirm whether they add links editorially or expect author-supplied anchors. Re-check before pitching.

#### Dropped or cautioned

| Prospect | Reason |
| --- | --- |
| Monitoring Weekly | Stale site / uncertain editorial cadence |
| Better Stack | Paused or inactive writer programme (verify live) |
| Instatus | Flaky WFU; competitor-link stripping observed in archive |

#### Prospect batch (September 2026)

**Watcher Bot curated 10:** AppSignal, DEVOPSdigest, RabbitLoader, SigNoz, HackerNoon, ProductLed, Smashing Magazine, DZone, SitePoint, DominasiSERP.

**Extended batch of 14** included the above plus additional DevOps / monitoring / SEO publications vetted in the same pass. Track individual status in the [status log](#status-log-as-of-2026-09-11).

### Guest-post pitch checklist

- [ ] WFU page and guidelines saved (date-stamped)
- [ ] 2–3 recent guest posts inspected for link placement
- [ ] Topic angle matches archive gap
- [ ] Watcher blog sample URLs attached where relevant
- [ ] Gmail draft created; not auto-sent
- [ ] Code-sample / disclosure requirements noted (AppSignal, Smashing, etc.)

---

## Tactic B — Article-update / "suggest a correction" outreach

### Process

1. **Find targets** — Outdated tool roundups, Core Web Vitals guides, or agency stack posts that:
   - Omit managed multi-tenant PSI monitors as a category
   - Cite the **retired CrUX Looker Dashboard** instead of CrUX Vis / History API
   - List only DIY PSI + Looker vs premium RUM (DebugBear / SpeedCurve) with no middle band
   - Treat Unlighthouse or one-off CLI tools as continuous monitoring
2. **Lead with reader value** — Factual correction first; offer 1–2 pasteable bullets the editor can drop in.
3. **Mention Watcher once** as a category example, not a hard sell.
4. **Prefer peer-content strategy** — Link to Watcher comparison posts that already frame the same taxonomy (build vs buy, synthetic middle band, CrUX dashboard retirement).
5. **Prioritise by equity** — Check Ahrefs DR before choosing high-equity correction plays vs easy-reply low-DR sites.
6. **Verify contacts** — Use live site contact forms or current author emails. Avoid stale company-directory addresses from LinkedIn-era listings or acquired products.

### Lessons and worked examples

#### PageSpeed Matters (Matt Suffoletto)

| Field | Detail |
| --- | --- |
| Contact | `ms@pagespeedmatters.com` (via tawk partner listing) |
| Article | Agency stack 2026 piece — frames DIY PSI + Looker vs DebugBear |
| Gap | Missing **managed PSI middle band** for multi-site agencies |
| Strategy | Peer-content pitch citing Watcher comparison posts (see URLs below) |
| Status | Gmail draft created; not auto-sent |

**Cite in pitch:**

- [Comparing PageSpeed monitoring tools: features agencies need](https://apogeewatcher.com/blog/comparing-pagespeed-monitoring-tools-features-agencies-need)
- [Lighthouse CI vs managed monitoring: build vs buy for agencies](https://apogeewatcher.com/blog/lighthouse-ci-vs-managed-monitoring-build-vs-buy-agencies)
- [DebugBear vs Apogee Watcher: synthetic monitoring for multi-site teams](https://apogeewatcher.com/blog/debugbear-vs-apogee-watcher-synthetic-monitoring-multi-site-teams)

#### Alphonso Labs (Neelabh Sinha)

| Field | Detail |
| --- | --- |
| URL | [Best website speed test tools — Core Web Vitals 2026](https://www.alphonsolabs.com/best-website-speed-test-tools-core-web-vitals-2026/) |
| DR (2026-09-11) | ~34 (Ahrefs free checker) |
| Gaps | Continuous monitoring lists only DebugBear / SpeedCurve / Calibre; **#12 CrUX Looker Dashboard retired** → point to CrUX Vis; Unlighthouse described as ongoing monitoring (it is one-off / CLI-oriented) |
| Contact | Form at `/contact/` (captcha) — **do not** use old `bizdev@alphonsolabs.com` from Pulse / LinkedIn-era records |
| Cite | [CrUX Dashboard retired: where to get TTFB, INP, and field history](https://apogeewatcher.com/blog/crux-dashboard-retired-where-to-get-ttfb-inp-field-history) |
| Status | Submitted 2026-09-11 via `/contact/` (confirmation: Your message was sent successfully. Thanks.) |

#### DR snapshot (2026-09-11, Ahrefs free checker)

| Domain | DR | Notes |
| --- | --- | --- |
| alphonsolabs.com | 34 | Prioritise — equity + topical fit |
| vantaj.co | 1.8 | Easy reply; low equity |
| seoautomationclub.com | 1.8 | Easy reply; low equity |

**Rule:** Score **equity** (DR, referring domains) and **topical easy-reply** separately. A DR-2 site can still be worth a five-minute correction if the author updates quickly.

#### Other update targets researched (not yet pitched)

- Search Engine Journal — CWV measurement guide (threshold / CrUX Dashboard errors)
- Vantaj, SEO Automation Club, SpeedVitals, SEO Rank Genius
- WP Rocket, PageSpeed Plus, Patrick Stox tools hub, Omni Apps

### Article-update pitch template (outline)

```
Subject: Factual update for [article title] — [specific gap]

Hi [Name],

[One sentence: you read their piece; one factual item is outdated / incomplete.]

Suggested correction (pasteable):
• [Bullet 1 — e.g. CrUX Dashboard retired Nov 2025; CrUX Vis + History API are the replacement]
• [Bullet 2 — e.g. managed multi-tenant PSI monitors exist between DIY cron and RUM suites]

For taxonomy context (optional third-party cite):
[One Watcher comparison URL — not a homepage link unless their guidelines allow]

Happy to clarify. No fee expected — just keeping the roundup accurate for readers.

[Signature]
```

---

## Watcher blog assets to reuse in pitches

Group by outreach angle. All URLs verified against the live sitemap as of September 2026.

### Tool comparison / agency taxonomy

| Post | URL |
| --- | --- |
| Comparing PageSpeed monitoring tools (agency checklist) | https://apogeewatcher.com/blog/comparing-pagespeed-monitoring-tools-features-agencies-need |
| PageSpeed Insights vs automated monitoring | https://apogeewatcher.com/blog/pagespeed-insights-vs-automated-monitoring-when-manual-checks-arent-enough |
| Lighthouse CI vs managed monitoring (build vs buy) | https://apogeewatcher.com/blog/lighthouse-ci-vs-managed-monitoring-build-vs-buy-agencies |
| DebugBear vs Apogee Watcher | https://apogeewatcher.com/blog/debugbear-vs-apogee-watcher-synthetic-monitoring-multi-site-teams |
| SpeedCurve vs Apogee Watcher | https://apogeewatcher.com/blog/speedcurve-vs-apogee-watcher-agency-multi-tenant |
| GTmetrix vs Apogee Watcher | https://apogeewatcher.com/blog/gtmetrix-vs-apogee-watcher-pagespeed-monitoring-agencies |
| Treo vs Apogee Watcher | https://apogeewatcher.com/blog/treo-vs-apogee-watcher-crux-agency-monitoring |
| PageVitals vs Apogee Watcher | https://apogeewatcher.com/blog/pagevitals-vs-apogee-watcher-rum-cicd-agency-portfolio-monitoring |
| Best free PageSpeed monitoring tools | https://apogeewatcher.com/blog/best-free-pagespeed-monitoring-tools |
| Apogee Watcher vs PostHog Web Vitals | https://apogeewatcher.com/blog/apogee-watcher-vs-posthog-web-vitals |
| Synthetic vs real user monitoring | https://apogeewatcher.com/blog/when-to-use-synthetic-vs-real-user-monitoring-performance |

### Core Web Vitals / CrUX / field data

| Post | URL |
| --- | --- |
| CrUX Dashboard retired (TTFB, INP, field history) | https://apogeewatcher.com/blog/crux-dashboard-retired-where-to-get-ttfb-inp-field-history |
| Why your CWV fix is not in CrUX yet (28-day window) | https://apogeewatcher.com/blog/why-core-web-vitals-fix-not-in-crux-yet-28-day-window |
| CrUX pipeline delays and client reports | https://apogeewatcher.com/blog/crux-pipeline-delays-late-field-data-client-reports |
| When LCP moves and nobody deployed (browser cadence) | https://apogeewatcher.com/blog/when-lcp-moves-nobody-deployed-browser-release-cadence-28-day-field-window |
| Late CLS vs early CLS | https://apogeewatcher.com/blog/late-cls-vs-early-cls-diagnose-layout-shift-after-load |
| PageSpeed Insights: no CLS or INP for your URL | https://apogeewatcher.com/blog/pagespeed-insights-no-cls-inp-for-url |

### Agency operations / monitoring workflow

| Post | URL |
| --- | --- |
| How to schedule test frequency across a portfolio | https://apogeewatcher.com/blog/how-to-schedule-pagespeed-monitoring-test-frequency-priority-portfolio |
| From reactive to proactive: smart alerts | https://apogeewatcher.com/blog/from-reactive-to-proactive-smart-alerts-performance-monitoring |
| How to onboard a new client for performance monitoring | https://apogeewatcher.com/blog/how-to-onboard-new-client-performance-monitoring |
| Building a performance review meeting agenda | https://apogeewatcher.com/blog/building-performance-review-meeting-agenda |

### Technical depth (guest posts needing practitioner bar)

| Post | URL |
| --- | --- |
| How Lighthouse performance scores are recorded and calculated | https://apogeewatcher.com/blog/how-lighthouse-performance-scores-recorded-calculated |
| TTFB won't go down: server-side culprits | https://apogeewatcher.com/blog/ttfb-wont-go-down-server-side-culprits-beyond-theme |
| Cache-Control headers for web performance | https://apogeewatcher.com/blog/cache-control-headers-for-web-performance-cdn-and-browser-caching-that-sticks |

**Pitch tip:** For DevOps / APM hosts (AppSignal, SigNoz), pair a comparison post with a mechanism post (Lighthouse score math, CrUX window). For SEO roundups, lead with CrUX dashboard retirement or tool taxonomy.

---

## Operating rules

1. **Never invent** fees, emails, DR figures, or programme guidelines — verify on the live site the day of outreach.
2. **Research only until Markos approves send** — use Gmail drafts; do not auto-send from tooling.
3. **Prefer free / editorial inclusion** over paid writer programmes unless explicitly approved.
4. **Educational first; soft product mention** — one Watcher reference per correction email; guest posts follow host promo rules.
5. **Re-check WFU and target article on send day** — programmes open and close without notice.
6. **Do not use stale contacts** — forms beat guessed `bizdev@` addresses; confirm author is still at the publication.
7. **Track backlink placement after publish** — note dofollow/nofollow, canonical, and whether the link survived an editorial pass.
8. **British English** in outbound copy per [writing_voice.md](./writing_voice.md).

---

## Status log (as of 2026-09-11; updated evening of 2026-09-11)

| Target | Tactic | Status | Next step |
| --- | --- | --- | --- |
| AppSignal | A — guest post | Gmail draft ready | Markos review → send to `editorial@appsignal.com` |
| PageSpeed Matters (Matt Suffoletto) | B — article update | Gmail draft ready | Markos review → send to `ms@pagespeedmatters.com` |
| Alphonso Labs | B — article update | Submitted 2026-09-11 via `/contact/` (confirmation: Your message was sent successfully. Thanks.) | Await reply / watch for article update |
| DEVOPSdigest | A — vendor forum | Not started | Draft vendor-forum post; homepage link only |
| RabbitLoader | A — guest post | On hold | Re-check guest pipeline activity before pitch |
| SigNoz | A — guest post | Research | Vet WFU + backlink placement |
| HackerNoon | A — guest post | Research | Vet WFU + recent external posts |
| ProductLed | A — guest post | Research | Confirm programme still open |
| Smashing Magazine | A — guest post | Research | High bar — match their editorial depth |
| DZone | A — guest post | Research | Check zone editor vs WFU |
| SitePoint | A — guest post | Research | Verify contributor terms |
| DominasiSERP | A — guest post | Research | Confirm language / market fit |
| Monitoring Weekly | A | Dropped | Stale — revisit only if site revives |
| Better Stack | A | Cautioned | Confirm writer programme status |
| Instatus | A | Cautioned | Competitor-link stripping risk |
| SEJ CWV guide | B | Research | Identify author + specific outdated claims |
| Vantaj / SEO Automation Club | B | Low priority | DR ~1.8 — batch after higher-equity targets |

Update this table when drafts are sent, replies arrive, or placements go live.

---

## Quick reference — when to use which tactic

```
                    ┌─────────────────────────────────────┐
                    │  Does the site accept guest posts   │
                    │  with topical fit for CWV / agency  │
                    │  monitoring?                         │
                    └──────────────┬──────────────────────┘
                           yes     │     no
                    ┌──────────────▼──────────────┐
                    │         TACTIC A            │
                    │  Guest post / WFU pitch     │
                    └─────────────────────────────┘
                           │
              Has outdated roundup we can fix?
                           │
                    ┌──────▼──────┐
                    │  TACTIC B   │
                    │  Correction │
                    │  outreach   │
                    └─────────────┘
```

Use **Tactic B** when editorial contact is easier via a factual fix than a cold guest pitch. Use **Tactic A** when the site actively publishes external authors and a net-new article fits their calendar.

---

## Source references

| Source | Use |
| --- | --- |
| [writing_voice.md](./writing_voice.md) | Tone, British English, product positioning |
| [apogeewatcher.com/blog](https://apogeewatcher.com/blog) | Live post list and slugs |
| Ahrefs free DR checker | Equity prioritisation (snapshot date in status log) |
| Gmail drafts (`m.giannopoulos@apogee.lu`) | Pre-send review queue |

When in doubt, read a recently published Watcher blog post and match its practitioner depth — outreach copy should sound like the same author team, not a link-building agency.
