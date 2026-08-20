# Draft: Why we open-sourced Website 404 Redirects

Status: **Draft — not for publication**

Target: GitHub (org blog or repository announcement)

Voice reference: [writing_voice.md](./writing_voice.md)

---

## Research summary

### Website 404 Redirects (open source)

- **Repo:** [Apogee-Information-Systems/website-404-redirects](https://github.com/Apogee-Information-Systems/website-404-redirects)
- **Composer package:** `apogee/website-404-redirects` (MIT, PHP 8.2+, Laravel 11–12)
- **Created:** June 2026; v1.0.0 extracted from an in-app module we had been running in production
- **Core behaviour:** log unmatched public `GET`/`HEAD` URLs with hit counts and timestamps; serve 301 redirects from a database table via early middleware, before routing runs
- **Schema:** single `website_404_redirects` table (path, `redirect_to`, hit counts, first/last seen)
- **Optional:** Filament admin plugin to review hits, set redirects, and ignore noise paths
- **Auto-wiring:** middleware prepended globally, 404 logging via exception handler — most apps need no `bootstrap/app.php` changes
- **GitHub Pages positioning:** a Laravel tool we run in production and publish for others to adopt, fork, and extend

### Context (no commercial product layer)

Unlike [PageSpeed Watcher](./draft-pagespeed-watcher-open-source-blog.md), Website 404 Redirects does not have a separate SaaS product built on top. It is a focused infrastructure package: log broken URLs, fix them without redeploying hard-coded redirect maps. It sits alongside PageSpeed Watcher in our open-source portfolio as production code we extracted when the pattern proved useful across client projects.

### Narrative arc

1. Client sites get restructured — migrations, CMS changes, URL rewrites — and old paths start returning 404s
2. Redirects lived in `.htaccess`, nginx config, or route files; every fix required a deploy
3. Nobody had a clear picture of which paths were actually breaking in production
4. We built an in-app module: log 404 hits, manage redirects from the database, optional Filament admin
5. Extracted it as a Composer package and published on GitHub for the Laravel community

---

## Draft post

**Suggested title:** Open-sourcing Website 404 Redirects: database-driven 301s for Laravel

**Suggested subtitle:** How we stopped redeploying redirect maps and started logging broken URLs in production.

---

When a client site gets restructured, old URLs do not disappear politely. A page moves, a slug changes, a section is retired, and within days `/old-section/article-name` is returning 404. You add a redirect — in `.htaccess`, in nginx, in a route file — deploy, and move on. Six months later, after another migration, the map is out of date again and Search Console is full of crawl errors nobody noticed in time. We built a Laravel package to log public 404 paths, serve 301 redirects from the database, and fix broken URLs without redeploying hard-coded maps, then open-sourced it so other teams can use the same approach.

### Broken URLs at agency scale

Apogee Information Systems develops custom software, digital platforms, and open-source tools for organisations across Europe. Much of our work is long-term support: deployments, infrastructure, SEO, and content migrations across dozens of properties.

The failure mode is familiar. A client restructures their site — new CMS, new URL scheme, retired sections — and old paths start returning 404. Redirects end up scattered across server config, route files, and one-off `.htaccess` rules. Every fix requires a deploy. Meanwhile, nobody has a clear picture of which paths are actually breaking: log files are noisy, analytics undercount, and Search Console lags by days or weeks. By the time someone notices, rankings have already moved and the redirect map is a patchwork of fixes from three different people.

At that point we treated 404 management as infrastructure, not a post-migration cleanup task.

### What we built first in Laravel

Among many different open source solutions, as well as our own Apogee Essence framework, we build with Laravel. When we need something reliable and repeatable, we ship it as a package (config, migrations, middleware, tests) and wire it into our applications.

Website 404 Redirects started as an in-app module on client projects. The requirements were straightforward:

- Log unmatched public `GET` and `HEAD` requests with hit counts and first/last seen timestamps
- Serve 301 redirects from a database table, evaluated early — before routing and controllers run
- Exclude noise paths (admin, API, static assets, Livewire) via configurable patterns
- Optionally manage everything from a Filament admin panel
- Auto-wire on install so most applications need no `bootstrap/app.php` changes

The package registers `RedirectWebsite404s` middleware globally (prepended so redirects apply before routing), hooks into `NotFoundHttpException` to log hits, and invalidates a cached redirect map when rows change. Path normalization (lowercase segments, trailing slash handling) keeps `/Foo` and `/foo` on one row. The scope was deliberately narrow: log, redirect, configure — not a full SEO audit tool or sitemap manager.

### From in-app module to public package

The module ran on multiple client sites before we extracted it. The pattern was the same each time: install, migrate, let 404s accumulate for a week, review the hit table, set redirects for the paths that mattered. Content editors could fix broken links through Filament without asking for a deploy.

Version 1.0.0 (June 2026) packaged the core model, migration, services, middleware, 404 logging listener, config, cache observer, and Orchestra Testbench tests. The optional Filament plugin (`Website404RedirectsFilamentPlugin`) followed as a separate concern, with a `RedirectAdminAuthorizer` contract so each host application defines its own access control.

There is no commercial platform layer on top of this one. Website 404 Redirects is the whole product: a focused package for a specific operational problem. It sits in our open-source portfolio alongside [PageSpeed Watcher](https://github.com/Apogee-Information-Systems/pagespeed-watcher) — different problem, same principle: code we run in production, published when it is stable enough to share.

### Why we published it on GitHub

Laravel conventions, ecosystem packages, and patterns shape much of our work, and publishing Website 404 Redirects is one way to give that back.

1. The problem is not unique to us. Any Laravel team maintaining content-heavy sites eventually needs visibility into broken URLs and a way to fix redirects without redeploying config files.
2. The package stands on its own. Bolt it onto your application, use the Filament admin or build your own UI against the same table — you should not need a hosted product to log 404s and serve database redirects.
3. We run it in production. Like our [PageSpeed Watcher](https://github.com/Apogee-Information-Systems/pagespeed-watcher) package, this is code extracted from live client projects, not a demo repository.
4. Transparency matters. Redirect tooling touches public URLs and SEO. Open source lets you inspect what is logged, what is excluded, and how paths are normalized before they hit the database.

The MIT licence is deliberate: adopt it, extend it, embed it in client projects. Layer, don't replace.

### Install and what the package includes

Install via Composer:

```bash
composer require apogee/website-404-redirects

php artisan vendor:publish --tag=website-404-redirects-config
php artisan migrate
```

Most apps need nothing else — middleware and 404 logging are auto-wired on install.

**Included**

- 404 hit logging for public `GET`/`HEAD` requests with hit counts and timestamps
- Database-driven 301 redirects via early middleware (before routing runs)
- Configurable path exclusions, normalization, and redirect caching
- Optional Filament admin plugin to review hits and set redirects
- `RedirectAdminAuthorizer` contract for host-defined access control
- Auto-registration — no `bootstrap/app.php` changes required for most apps

**Not included**

- SEO audit or broken-link crawling
- Sitemap generation or management
- Analytics integration (Google Search Console, Matomo, etc.)
- Multi-site or multi-tenant dashboard
- Automatic redirect suggestions based on content similarity

Those are separate concerns. The package handles the operational loop: see what is breaking, fix it in the database, serve the redirect on the next request.

### Optional Filament admin

If your application already runs Filament, register the plugin on your panel:

```php
use Apogee\Website404Redirects\Filament\Website404RedirectsFilamentPlugin;

public function panel(Panel $panel): Panel
{
    return $panel
        // ...
        ->plugin(Website404RedirectsFilamentPlugin::make());
}
```

Override `RedirectAdminAuthorizer` in your `AppServiceProvider` to control who can manage redirects — the package ships a no-op implementation that denies everyone until you define your own policy.

### What we learned running it in production

Three things stood out while building and operating this across client environments:

- Redirects must run before routing. If middleware runs after the router, matched routes and controller `abort(404)` paths behave differently from unmatched URLs. Prepending `RedirectWebsite404s` globally ensures database redirects apply consistently, whether the path was never defined or was explicitly aborted.
- Exclusions are as important as inclusions. Without sensible defaults for admin, API, health checks, and static assets, the hit table fills with noise. The `exclude_patterns` config uses `Str::is` patterns — customise after publishing.
- Path normalization is a semver contract. Lowercasing segments, stripping trailing slashes, and enforcing max path length affect how rows are deduplicated and matched. Changing those rules is a breaking change and must ship as a major version. Document it clearly; your existing redirect rows depend on it.

### Links

- **Package:** [Apogee-Information-Systems / website-404-redirects](https://github.com/Apogee-Information-Systems/website-404-redirects)
- **Overview:** [Apogee on GitHub — Website 404 Redirects](https://apogee-information-systems.github.io/website-404-redirects.html)
- **Sister package:** [Apogee-Information-Systems / pagespeed-watcher](https://github.com/Apogee-Information-Systems/pagespeed-watcher)

Issues and pull requests are welcome. We are especially interested in feedback from teams running this across content migrations and long-lived client sites.

---

*Apogee Information Systems · Thessaloniki · Luxembourg · Barcelona · [apogee.lu](https://apogee.lu/) · [apogee.gr](https://apogee.gr/)*
