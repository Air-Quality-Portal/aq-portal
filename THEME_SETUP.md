# Air4US Theme Setup Guide

This guide explains how to connect the Air4US theme from the local monorepo to this Air Quality Portal app.

## First-Time Setup (New Machine)

1. Install prerequisites:
  - Node.js 20+
  - pnpm 10+
  - Git

2. Clone both repos:

```bash
git clone <aq-portal-repo-url>
git clone <tinacms-portal-monorepo-repo-url>
```

3. Install dependencies in both repos:

```bash
cd <path-to-aq-portal>
pnpm install

cd <path-to-tinacms-portal-monorepo>
pnpm install
```

4. Set shell variables (or add them to your shell profile):

```bash
export AQ_PORTAL_DIR="/absolute/path/to/aq-portal"
export MONOREPO_PATH="/absolute/path/to/tinacms-portal-monorepo"
```

5. Connect the local theme:

```bash
cd "$AQ_PORTAL_DIR"
pnpm run theme:air4us:local
```

Or target a specific branch directly:

```bash
cd "$AQ_PORTAL_DIR"
pnpm run theme:air4us:local -- feat/my-branch
```

6. Start the app:

```bash
cd "$AQ_PORTAL_DIR"
pnpm dev
```

## Prerequisites

You must have both repositories cloned locally on your machine:

- **AQ Portal**: `<path-to-aq-portal>` (this repo)
- **Monorepo**: `<path-to-tinacms-portal-monorepo>` (contains the theme)

Recommended shell variables:

```bash
export AQ_PORTAL_DIR="/absolute/path/to/aq-portal"
export MONOREPO_PATH="/absolute/path/to/tinacms-portal-monorepo"
```

If `MONOREPO_PATH` is not set, the script will also try this default:

- sibling folder: `../tinacms-portal-monorepo` (relative to this repo)

## Quick Start

### Run the Theme Setup Script

From the root of this project, run:

```bash
cd "$AQ_PORTAL_DIR"
pnpm run theme:air4us:local
```

To build from a different monorepo branch, pass it explicitly:

```bash
cd "$AQ_PORTAL_DIR"
pnpm run theme:air4us:local -- feat/my-branch
```

### What the Script Does

The `scripts/use-local-air4us-theme.sh` script automates the following steps:

1. **Selects branch**: Uses the provided branch argument, `TARGET_BRANCH`, or defaults to `feat/baseline-setup-for-aq`
2. **Switches branch**: Checks out the target branch locally, fetching from `origin` if needed
3. **Builds the package**: Runs `pnpm run build` for `@teamimpact/veda-ui-blocks`
4. **Links locally**: Symlinks `packages/blocks` into this app's `node_modules`
5. **Checks layout**: Warns if `app/layout.tsx` is not importing `air4us.css`

The script deliberately uses a plain symlink rather than `pnpm link`, which would add a
local `link:` path to `package.json` and `pnpm-lock.yaml` and break CI's
`pnpm install --frozen-lockfile`. A symlink lives entirely inside the gitignored
`node_modules` directory, so the tracked manifests stay pinned to the published version.
A `lefthook` pre-commit hook rejects any `link:` override that slips in.

## File Structure

The layout looks like this:

```tsx
import { Banner, Footer } from "@teamimpact/veda-ui-blocks";
import "@teamimpact/veda-ui-blocks/air4us.css";

import { HeaderWithCurrentPath } from "./components/HeaderWithCurrentPath";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="display-flex flex-column minh-viewport">
        <Banner />
        <HeaderWithCurrentPath />
        <main className="flex-1">{children}</main>
        <Footer {...MOCK_FOOTER_PROPS} />
      </body>
    </html>
  );
}
```

The layout uses flexbox with:
- `Banner` at the top (the USWDS "official website of the United States government"
  banner; it serves `us_flag_small.png`, `icon-dot-gov.svg`, and `icon-https.svg` out of
  `public/img/`)
- `HeaderWithCurrentPath` for navigation (a client wrapper around `Header` that supplies
  `currentPath` from `usePathname()` for active-nav highlighting)
- Flexible main content area
- `Footer` at the bottom

## Updating the Theme

If the theme changes in the monorepo, resync locally by running:

```bash
pnpm run theme:air4us:local
```

Or for a non-default branch:

```bash
pnpm run theme:air4us:local -- feat/my-branch
```

This will rebuild and relink the latest theme.

## Configuration

The script uses these inputs (optional):

- `MONOREPO_PATH` — Path to the tinacms-portal-monorepo (default: `../tinacms-portal-monorepo` if it exists)
- First positional argument — Git branch to build from
- `TARGET_BRANCH` — Fallback Git branch to build from (default: `feat/baseline-setup-for-aq`)

To override:

```bash
MONOREPO_PATH=/path/to/monorepo pnpm run theme:air4us:local -- feat/my-branch
```

## Troubleshooting

### "Monorepo not found"

Ensure the monorepo is cloned to the correct path:
```bash
ls "$MONOREPO_PATH/.git"
```

### "Target branch was not found..."

Check that the branch exists locally or on `origin`:
```bash
git -C "$MONOREPO_PATH" branch -a | grep feat/my-branch
```

### Build fails with SCSS errors

The theme may have compilation issues on the branch. Check:
```bash
pnpm -C "$MONOREPO_PATH" --filter @teamimpact/veda-ui-blocks run build
```

### CSS import not resolving

Ensure the linked package has built CSS output:
```bash
ls "$AQ_PORTAL_DIR/node_modules/@teamimpact/veda-ui-blocks/dist/"*.css
```

Should include `air4us.css`.

## Header Configuration

The header is configured in [`app/site-config/header.tsx`](app/site-config/header.tsx). Key props:

```tsx
export const MOCK_HEADER_PROPS: HeaderProps = {
  portalDetails: {
    logo: <></>,
    url: "/",
    title: "AIR4US",
  },
  navItems: [
    { label: "Tools Catalog", href: "/tools" },
    { label: "Data Catalog", href: "/data-gallery" },
    { label: "Resources", href: "/resources" },
    { label: "About Us", href: "/about" },
  ],
};
```

`currentPath` is not set here — `app/components/HeaderWithCurrentPath.tsx` is a client
component that supplies it from `usePathname()` so the active nav item is highlighted on
route changes.

## Footer Configuration

Footer props are in [`app/site-config/footer.tsx`](app/site-config/footer.tsx).

## Related Files

- **Layout**: [`app/layout.tsx`](app/layout.tsx)
- **Header Config**: [`app/site-config/header.tsx`](app/site-config/header.tsx)
- **Footer Config**: [`app/site-config/footer.tsx`](app/site-config/footer.tsx)
- **Theme Script**: [`scripts/use-local-air4us-theme.sh`](scripts/use-local-air4us-theme.sh)
- **Package Scripts**: [`package.json`](package.json) — `theme:air4us:local`

## Next Steps

After theme setup:

1. **Customize nav items** — Update nav links in `app/site-config/header.tsx`
2. **Add a logo** — `portalDetails.logo` in `app/site-config/header.tsx` is currently an
   empty fragment; drop an asset in `public/img/` and reference it there
3. **Configure footer** — Edit `app/site-config/footer.tsx`
4. **Build pages** — Create content pages that use the theme components
5. **Test responsiveness** — View the site on mobile to verify the theme's responsive behavior

## Need Help?

- Check the monorepo's `apps/sample-portal` for reference implementations
- Review theme styles in `packages/blocks/src/styles/air4us/`
- Consult the component library at `packages/blocks/src/components/`
