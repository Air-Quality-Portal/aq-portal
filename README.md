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

## Base path

Set `NEXT_PUBLIC_BASE_PATH` (env var) at build time to serve the app under a subpath (e.g. `/air4us`). An unset env var serves from the root. See `.env.example` and `app/site-config/base-path.helpers.ts`.

```bash
NEXT_PUBLIC_BASE_PATH=/air4us pnpm build
```

Next inlines the value at build time, so it has to be set before `next build` rather than in the hosting runtime; changing it means rebuilding. In Amplify it is set as a branch-level environment variable.

Use `AppLink` or `AppLinkStyled` instead of native anchors to ensure basepaths are handled within links. These components utilize NextLink to automatically manage basepath using next.config. `basePath` only rewrites `next/link` and the router, so an internal link reaching `veda-ui-blocks` -- which renders plain anchors -- would otherwise silently drop the prefix.

Use `AppImage` and `AppVideo` instead of NextImage or native elements. These components apply the base path (external URLs pass through unchanged).

Structural blocks components take the link component rather than a prefixed string: `Header` and `Footer` via `linksAs`, cards via `as` on the card or its `callToAction`. Typing a card's props as `CardProps<typeof AppLink>` is what makes the `as` prop check.

Use root css vars for image path references in app css, as css does not have direct access to env vars to resolve a base path.

Note, portal specific image assets live in `public/`.

A lint rule blocks direct `next/link` and `next/image` imports outside the wrappers. `typedRoutes` is off; `next.config.ts` explains why.

## How It Works

The app consumes `@teamimpact/veda-ui-blocks` and applies the Air4US theme stylesheet (`air4us.css`) in the root layout. For local theme development, the script `pnpm run theme:air4us:local` builds and packs the local monorepo blocks package, then installs that tarball in this app.