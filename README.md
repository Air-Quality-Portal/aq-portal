# Disasters Portal

Built with Next.js, TinaCMS, USWDS, and `@teamimpact/veda-ui-blocks`.

## Setup

```bash
pnpm install
pnpm dev
```

Open <http://localhost:3000>

## How It Works

Consumes `@teamimpact/veda-ui-blocks` from npm. Imports `disasters.css` for theming — fonts are bundled in the compiled CSS, no separate imports needed.

## CMS

Local filesystem mode (`TINA_PUBLIC_IS_LOCAL=true`). Content edits save to `content/` directory.
