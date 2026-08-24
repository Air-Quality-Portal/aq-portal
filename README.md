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

## Deploying under a path prefix

In production the app is served at `earth.gov/air4us` by a CloudFront behaviour
that forwards the path through unchanged, so the app itself has to know it lives
under `/air4us`. That prefix comes from `NEXT_PUBLIC_BASE_PATH`:

```bash
NEXT_PUBLIC_BASE_PATH=/air4us pnpm build
```

Leave it unset to serve at the root, which is what branch previews on
`*.amplifyapp.com` and local development do.

Next inlines the value at build time, so it has to be set before `next build`
rather than in the hosting runtime; changing it means rebuilding. In Amplify it
is set as a branch-level environment variable.

Because the prefix is applied at build time, `next/link`, the router and
`next/image` all emit it automatically. Only hand-written absolute paths to
files in `public/` need it added manually -- there are none today, but that is
the thing to watch when adding assets.

## How It Works

The app consumes `@teamimpact/veda-ui-blocks` and applies the Air4US theme stylesheet (`air4us.css`) in the root layout. For local theme development, the script `pnpm run theme:air4us:local` builds and packs the local monorepo blocks package, then installs that tarball in this app.