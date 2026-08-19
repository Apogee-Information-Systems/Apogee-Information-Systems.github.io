# Draft: Why we open-sourced PageSpeed Watcher

Status: **Draft — not for publication**

Target: GitHub (org blog or repository announcement)

Voice reference: [writing_voice.md](./writing_voice.md)

---

## Research summary

### PageSpeed Watcher (open source)

- **Repo:** [Apogee-Information-Systems/pagespeed-watcher](https://github.com/Apogee-Information-Systems/pagespeed-watcher)
- **Composer package:** `apogee/laravel-pagespeed-watcher` (MIT, PHP 8.2+, Laravel 11–13)
- **Created:** August 2025; Phase 1 covers config, migrations, a PSI client with retries and rate limiting, and Artisan commands
- **Commands:** `watcher:test-page` (full PageSpeed Insights run — not a lightweight key check) and `watcher:usage` (daily and weekly quota with cost estimates)
- **Schema:** `watcher_pages`, `watcher_test_results`, `watcher_settings`, `watcher_api_usage`
- **GitHub Pages positioning:** a Laravel tool we run in production and publish for others to adopt, fork, and extend

### Apogee Watcher (commercial product)

- **Site:** [apogeewatcher.com](https://apogeewatcher.com/) — multi-tenant PageSpeed monitoring for agencies, freelancers, and in-house teams
- **Origin** ([Changelog #1](https://apogeewatcher.com/blog/changelog-1-from-zero-to-one)): built as an internal Laravel package first; that package became the foundation for the platform
- **Pain points** ([Introducing Watcher](https://apogeewatcher.com/blog/introducing-watcher), [The Fragmented Monitoring Problem](https://apogeewatcher.com/blog/the-fragmented-monitoring-problem)): manual PageSpeed Insights checks, spreadsheet sprawl, per-site tool costs, Lighthouse CI maintenance overhead, missed regressions, no multi-tenant dashboard or client-ready reporting
- **Blog voice:** practitioner-focused, Core Web Vitals–literate, concrete — not promotional

### Narrative arc

1. Agency portfolio grew; manual monitoring did not scale
2. Built an internal Laravel package to run scheduled PSI checks and persist results
3. Extended that foundation into Apogee Watcher (Laravel + Filament) for multi-tenancy, discovery, budgets, alerts, and white-label reports
4. Open-sourced the package for the Laravel community; the SaaS carries the agency workflow layer

---

## Draft post

**Suggested title:** Open-sourcing PageSpeed Watcher: from internal Laravel monitoring to a public package

**Suggested subtitle:** How a portfolio monitoring problem became a production package, and what we chose to publish on GitHub.

---

When you manage many client sites, manual PageSpeed Insights checks do not scale. You run PSI on one property, copy LCP and INP into a spreadsheet, open the next client, and repeat until the list resets before you finish. We built a Laravel package to run scheduled tests, persist results, and track API usage, then open-sourced it so other teams can use the same foundation without our SaaS layer.

### Manual PSI checks at agency scale

Apogee Information Systems develops custom software, digital platforms, and open-source tools for organisations across Europe. Much of our work is long-term support: deployments, infrastructure, SEO, and performance, and for years monitoring followed the same manual loop.

The tools we tried each covered one part of the workflow. Per-site pricing became expensive at agency scale, and Lighthouse CI was capable but added its own maintenance: pipelines, secrets, alerting, and keeping tests meaningful across dozens of properties. Data lived in different places, so regressions were easy to miss, and the familiar failure mode still happened: a client's performance dropped after a deployment, we did not catch it in routine checks, they noticed first, and rankings had already moved. At that point we treated monitoring as infrastructure, not a weekly chore.

### What we built first in Laravel

Among many different open source solutions, as well as our own Apogee Essence framework, we build with Laravel. When we need something reliable and repeatable, we ship it as a package (config, migrations, Artisan commands, tests) and wire it into our applications.

PageSpeed Watcher started as internal tooling: scheduled Google PageSpeed Insights checks, results stored in our database, and visibility into API usage so quota and cost did not surprise us. Phase 1 was deliberately narrow:

- PSI client with timeouts, retries, and rate limiting
- Database tables for pages, test results, settings, and daily API usage
- `watcher:test-page` to run a full PSI test from the CLI (not a cheap "is my key valid?" check; Google's API has no separate validation endpoint, and every call consumes quota)
- `watcher:usage` for today's totals, the last seven days, and cost estimates beyond the free tier
- Configuration for thresholds, discovery limits, and scheduled daily tests

The goal was straightforward production code: run quietly on a schedule while we focus on client work.

### From package engine to agency platform

The package handles running tests and storing data. It does not handle managing twenty client organisations, onboarding sites without hand-entering URLs, per-site performance budgets, or white-label PDF reports.

Apogee Watcher builds on the same foundation: Laravel, Filament, and PageSpeed Watcher at the core. The platform adds multi-tenancy, automated page discovery, performance budgets, alerts, and client-ready reporting. The package remains the engine; the platform is the agency workflow around it. If you have read our [changelog](https://apogeewatcher.com/blog/changelog-1-from-zero-to-one) or [introductory posts](https://apogeewatcher.com/blog/introducing-watcher), the split is the same: we needed the package first, and the product followed when we saw other agencies facing the same operational gap.

### Why we published it on GitHub

Laravel conventions, ecosystem packages, and patterns shape much of our work, and publishing PageSpeed Watcher is one way to give that back.

1. The problem is not unique to us. Any Laravel team tracking Core Web Vitals eventually needs scheduled PSI checks, persisted history, and API usage visibility, without rebuilding the same integration each time.
2. The package stands on its own. Bolt it onto your application, fork the schema, or build your own dashboard; you should not need a hosted product to get the building blocks.
3. We run it in production. Like our [Website 404 Redirects](https://github.com/Apogee-Information-Systems/website-404-redirects) package, this is code we use ourselves, not a demo repository.
4. Transparency matters. Performance tooling touches client data and third-party APIs. Open source lets you inspect what runs, what is stored, and how quota is counted.

The MIT licence is deliberate: adopt it, extend it, embed it in client projects. If Apogee Watcher fits your agency workflow, use it. If you only need the Laravel layer, the package is there for that too. Layer, don't replace.

### Install and what Phase 1 includes

Install via Composer:

```bash
composer require apogee/laravel-pagespeed-watcher

php artisan vendor:publish --tag=watcher-config
php artisan vendor:publish --tag=watcher-migrations
php artisan migrate

php artisan watcher:test-page
php artisan watcher:usage
```

**Included**

- Artisan commands for PSI tests and API usage tracking
- Migrations for pages, test results, settings, and API usage
- PSI integration designed for scheduled jobs, not one-off browser tests
- Configuration for thresholds, rate limits, and discovery limits

**Not included**

- Multi-tenant admin UI
- Automated page discovery interface
- Performance budgets and alert routing (Slack, webhooks)
- White-label PDF reports
- Hosted monitoring dashboard

Those capabilities live in [Apogee Watcher](https://apogeewatcher.com/). The package is the layer we were ready to share; the platform is where we invest in agency-specific product work.

### What we learned running it in production

Three things stood out while building and operating this across client environments:

- Command names should reflect cost. We originally shipped `watcher:test-api-key`, which implied a cheap validation call. PSI has no separate validation endpoint, and every test consumes quota. We renamed it to `watcher:test-page` so the cost is explicit before someone runs it in CI.
- API usage is part of the feature. Portfolios scale test volume quickly, and tracking daily usage (plus estimated cost past the free tier) matters as much as the scores themselves.
- Lab data is only half the story. PageSpeed Insights returns Lighthouse lab metrics and, when available, Chrome UX Report (CrUX) field data. The package runs PSI and persists results; interpreting lab versus field, and acting on both, is still operational work, which is why we write about it on the [Apogee Watcher blog](https://apogeewatcher.com/blog).

### Links

- **Package:** [Apogee-Information-Systems / pagespeed-watcher](https://github.com/Apogee-Information-Systems/pagespeed-watcher)
- **Overview:** [Apogee on GitHub — PageSpeed Watcher](https://apogee-information-systems.github.io/pagespeed-watcher.html)
- **Agency monitoring platform:** [apogeewatcher.com](https://apogeewatcher.com/)

Issues and pull requests are welcome. We are especially interested in feedback from teams running this on schedules across multiple environments.

---

*Apogee Information Systems · Thessaloniki · Luxembourg · Barcelona · [apogee.lu](https://apogee.lu/) · [apogee.gr](https://apogee.gr/)*
