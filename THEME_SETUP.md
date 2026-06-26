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

### 1. Run the Theme Setup Script

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

That's it! The script will:
- Switch the monorepo to the requested branch if needed
- Build the `@teamimpact/veda-ui-blocks` package from the monorepo branch
- Link the local package into this app with `pnpm link`
- Update the theme CSS import to `air4us.css`
- Add the `Banner` component to match the theme's layout

## What the Script Does

The `scripts/use-local-air4us-theme.sh` script automates the following steps:

1. **Selects branch**: Uses the provided branch argument, `TARGET_BRANCH`, or defaults to `feat/baseline-setup-for-aq`
2. **Switches branch**: Checks out the target branch locally, fetching from `origin` if needed
3. **Builds the package**: Runs `pnpm run build` for `@teamimpact/veda-ui-blocks`
4. **Links locally**: Runs `pnpm link` from `packages/blocks` into this app's `node_modules`
5. **Updates layout**: Switches theme import from old import to `air4us.css`
6. **Adds Banner**: Includes the `<Banner />` component for proper layout structure

Because this flow uses `pnpm link`, rerunning the setup does not rewrite this app's `package.json` dependency entry for `@teamimpact/veda-ui-blocks`.

## File Structure

After running the setup script, your layout will be:

```tsx
import { Banner, Footer, Header } from "@teamimpact/veda-ui-blocks";
import "@teamimpact/veda-ui-blocks/air4us.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="display-flex flex-column minh-viewport">
        <Banner />
        <Header {...MOCK_HEADER_PROPS} />
        <main className="flex-1">{children}</main>
        <Footer {...MOCK_FOOTER_PROPS} />
      </body>
    </html>
  );
}
```

The layout uses flexbox with:
- `Banner` at the top
- `Header` for navigation
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

## Manual pnpm Link (No Script)

If you want to do this manually, run:

```bash
MONOREPO_PATH=/Users/smalone/Documents/Projects/tinacms-portal-monorepo
TARGET_BRANCH=feat/my-branch

git -C "$MONOREPO_PATH" checkout "$TARGET_BRANCH"
pnpm -C "$MONOREPO_PATH" --filter @teamimpact/veda-ui-blocks run build
pnpm -C "$AQ_PORTAL_DIR" link "$MONOREPO_PATH/packages/blocks"
```

To remove the local link and go back to the registry version:

```bash
pnpm -C "$AQ_PORTAL_DIR" unlink @teamimpact/veda-ui-blocks
pnpm -C "$AQ_PORTAL_DIR" install
```

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
    logo: <Image src="/img/logo-header.png" alt="Disasters.gov" width={148} height={52} />,
    url: "/",
  },
  navItems: [
    { label: "About Us", href: "/about" },
    { label: "Explore By Need", subItems: [...] },
    { label: "Explore Data", subItems: [...] },
    { label: "Resources & Learning", subItems: [...] },
  ],
  currentPath: "/",  // Set dynamically in a wrapper for active nav highlighting
};
```

To make the header responsive to route changes, wrap it in a client component that passes `currentPath` from `usePathname()`.

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
2. **Update logo** — Replace `/public/img/logo-header.png`
3. **Configure footer** — Edit `app/site-config/footer.tsx`
4. **Build pages** — Create content pages that use the theme components
5. **Test responsiveness** — View the site on mobile to verify the theme's responsive behavior

## Need Help?

- Check the monorepo's `apps/sample-portal` for reference implementations
- Review theme styles in `packages/blocks/src/styles/air4us/`
- Consult the component library at `packages/blocks/src/components/`
