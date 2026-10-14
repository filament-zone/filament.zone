# Filament website

SvelteKit site with static assets and a server-side newsletter subscription endpoint.
It can run on **Cloudflare Workers with Static Assets** or **Cloudflare Pages with
Functions**. A static-only upload would disable `/api/subscribe`.

## Requirements and local development

- Node.js 22.12+ (Node.js 22 or 24 LTS recommended) and npm.
- A Cloudflare account for deployment.
- A Brevo API key for newsletter subscriptions.

```sh
npm ci
cp .dev.vars.example .dev.vars
# Set BREVO_API_KEY in .dev.vars (local use only).
npm run dev
```

Cloudflare bindings are emulated by the adapter during Vite development. Do not put
secrets in source code, Wrangler `vars`, or `PUBLIC_*` environment variables. The
Brevo key is read from `platform.env` at runtime, not bundled at build time. Without
it, the subscription endpoint returns HTTP 503; the rest of the site still works.

Publications live in `publications/*.md`. Every build runs `npm run cms-gen` to
regenerate `src/cms/publications.json`. After adding or editing a publication during
local development, run that command yourself.

```sh
npm run test
npm run check
npm run lint
npm run coverage
npm run build
npm run preview           # Vite preview, not the production Cloudflare runtime
npm run preview:workers   # Build and preview in local Workers runtime
npm run preview:pages     # Build and preview in local Pages runtime
```

The two targets share `.svelte-kit/cloudflare`, but generate different metadata.
Always rebuild for the target you are deploying; the deployment commands do this
for you. `svelte.config.js` is no longer used with SvelteKit 3: configuration lives
in `vite.config.js`, and TypeScript extends `$app/tsconfig`. TypeScript stays on 6.0
because the current ESLint tooling does not support TypeScript 7 yet.

## Deploy to Cloudflare Workers (recommended)

The root `wrangler.jsonc` configures the generated Worker entry point, the `ASSETS`
binding, and Worker Previews. Workers are the default deployment target, so normal
Wrangler commands work without `--config`. Change its `name` to match your Worker.

```sh
npx wrangler login
npm run deploy:workers
npx wrangler secret put BREVO_API_KEY
```

The initial deployment works without the key; subscriptions become available after
you set it. Wrangler prints the `workers.dev` URL. To serve `filament.zone`, add a
custom domain in the Cloudflare dashboard under **Workers & Pages → your Worker →
Settings → Domains & Routes** (the domain must be in your Cloudflare account).

For Git-connected **Workers Builds**, set:

| Setting         | Value                                        |
| --------------- | -------------------------------------------- |
| Root directory  | Repository root                              |
| Build command   | `npm run build`                              |
| Deploy command  | `npx wrangler deploy`                        |
| Node.js version | 22.12+ (for example, `NODE_VERSION=22.23.1`) |

For non-production branches, set the **Preview deploy command** (also called the
**Non-production branch deploy command**) to:

```sh
npx wrangler preview
```

The Workers config includes the `previews` block required by this command. For a
manual build and remote preview deployment, run `npm run deploy:workers:preview`.
This publishes a remote Preview; `npm run preview:workers` only runs locally.

Build the latest feature-branch commit for PR previews. If the log shows Vite 5,
SvelteKit 2, or Wrangler 3, it is not using the updated PR tree: verify the checkout
SHA in the build details before retrying. Both the PR head and GitHub merge ref
contain the updated toolchain and Wrangler configuration.

Set `BREVO_API_KEY` as a **runtime secret** on the Worker, not a build variable.
Worker Previews have separate secrets; configure the key for any Preview that
needs newsletter subscriptions using `wrangler preview secret`.

## Deploy to Cloudflare Pages

`cloudflare/pages/wrangler.jsonc` is the isolated Pages configuration. Pages
requires a standard filename, so Pages commands use `--cwd cloudflare/pages`
instead of a custom `--config` path. Its `name` must match your Pages project.
To create and deploy a Direct Upload project:

```sh
npx wrangler login
npx wrangler pages project create filament-zone --production-branch main --cwd cloudflare/pages
npm run deploy:pages
npx wrangler pages secret put BREVO_API_KEY --project-name filament-zone --cwd cloudflare/pages
```

After adding/changing the Pages secret, deploy again so the new deployment receives
it. Wrangler prints the `pages.dev` URL. Add `filament.zone` in the project's
**Custom domains** settings if desired.

Alternatively, create a **Git-connected Pages project** in the Cloudflare dashboard
and use these settings:

| Setting                | Value                                        |
| ---------------------- | -------------------------------------------- |
| Framework preset       | None (custom build)                          |
| Root directory         | `cloudflare/pages`                           |
| Build command          | `cd ../.. && npm ci && npm run build:pages`  |
| Build output directory | `../../.svelte-kit/cloudflare`               |
| Node.js version        | 22.12+ (for example, `NODE_VERSION=22.23.1`) |

Choose the project's production branch (`main` by default). Set `BREVO_API_KEY` as
an encrypted runtime variable/secret in **Settings → Variables and Secrets** for
both **Production** and **Preview** if previews should support subscriptions, then
redeploy. The Pages config supplies the compatibility date and `nodejs_compat`.
Do not use `wrangler deploy` for Pages; use `npm run deploy:pages`.

For an explicit CLI preview deployment:

```sh
npm run build:pages
npx wrangler pages deploy --cwd cloudflare/pages --branch my-preview-branch
```

For local Pages subscriptions, copy your local secret file into the Pages config
directory before `npm run preview:pages`:

```sh
cp .dev.vars cloudflare/pages/.dev.vars
```

Both local secret files are gitignored. Default Vite development uses the root
Workers config and the root `.dev.vars`.

## CI and verification

GitHub CI installs from the lockfile, runs tests/type checks/lint, builds the Workers
output, performs a Wrangler dry run, then builds the Pages output. It does not
publish deployments or need a Brevo key.

For unattended deployment, provide `CLOUDFLARE_API_TOKEN` and
`CLOUDFLARE_ACCOUNT_ID` as CI secrets. Use a token scoped to the target account with
Workers Scripts Edit (Workers) or Cloudflare Pages Edit (Pages) permissions. Keep
`BREVO_API_KEY` in the deployed application's runtime secrets.

Before going live, check `/`, `/publications`, a publication detail page,
`/sitemap.xml`, and a missing page (404). Test a subscription using your Brevo
configuration; without a runtime key, expect HTTP 503.

`npm audit` currently reports upstream advisories in Markdown-related development
tools and their transitive dependencies. Review those reports separately; avoid
`npm audit fix --force`, which currently proposes downgrades. No real Cloudflare
deployment is performed by local tests or Wrangler dry runs.
