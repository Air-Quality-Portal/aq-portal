# Air Quality Portal

Built with Next.js, USWDS, and `@teamimpact/veda-ui-blocks`.

## Setup

```bash
pnpm install
pnpm dev
```

Open <http://localhost:3000>

## Local Air4US Theme Setup

If you are working with the local monorepo theme branch, run the onboarding guide first:

- See `THEME_SETUP.md`

After following that guide, use:

```bash
pnpm run theme:air4us:local
pnpm dev
```

## How It Works

The app consumes `@teamimpact/veda-ui-blocks` and applies the Air4US theme stylesheet (`air4us.css`) in the root layout. For local theme development, the script `pnpm run theme:air4us:local` builds and packs the local monorepo blocks package, then installs that tarball in this app.