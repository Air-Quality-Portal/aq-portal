# Disasters Portal

Built with Next.js, TinaCMS, USWDS, and `@tinacms-portal/blocks`.

## Setup

```bash
pnpm install
pnpm dev
```

Open <http://localhost:3000>

## How It Works

Consumes `@tinacms-portal/blocks` via git dependency (`github:NASA-IMPACT/tinacms-portal-monorepo.git#feat/setup-github-library`). The blocks package builds on install via `prepare` script, and a postinstall hook symlinks to the nested package location.

## CMS

Local filesystem mode (`TINA_PUBLIC_IS_LOCAL=true`). Content edits save to `content/` directory.
