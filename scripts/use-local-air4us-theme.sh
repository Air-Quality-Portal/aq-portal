#!/usr/bin/env bash
set -euo pipefail

APP_PATH="$(cd "$(dirname "$0")/.." && pwd)"
DEFAULT_MONOREPO_PATH="$(cd "$APP_PATH/.." && pwd)/tinacms-portal-monorepo"
MONOREPO_PATH="${MONOREPO_PATH:-$DEFAULT_MONOREPO_PATH}"
DEFAULT_TARGET_BRANCH="feat/baseline-setup-for-aq"
TARGET_BRANCH="${1:-${TARGET_BRANCH:-$DEFAULT_TARGET_BRANCH}}"
PACKAGE_DIR="$MONOREPO_PATH/packages/blocks"
LAYOUT_FILE="$APP_PATH/app/layout.tsx"

if [[ "$TARGET_BRANCH" == "-h" || "$TARGET_BRANCH" == "--help" ]]; then
  echo "Usage: pnpm run theme:air4us:local -- [branch-name]"
  echo
  echo "Builds and links @teamimpact/veda-ui-blocks from the target monorepo branch."
  echo
  echo "Examples:"
  echo "  pnpm run theme:air4us:local"
  echo "  pnpm run theme:air4us:local -- feat/my-branch"
  echo "  TARGET_BRANCH=feat/my-branch pnpm run theme:air4us:local"
  exit 0
fi

if [[ ! -d "$MONOREPO_PATH/.git" ]]; then
  echo "Monorepo not found at: $MONOREPO_PATH"
  echo "Set MONOREPO_PATH to your local tinacms-portal-monorepo path, then rerun."
  echo "Example: MONOREPO_PATH=/absolute/path/to/tinacms-portal-monorepo pnpm run theme:air4us:local"
  exit 1
fi

if [[ ! -f "$PACKAGE_DIR/package.json" ]]; then
  echo "Blocks package not found at: $PACKAGE_DIR"
  exit 1
fi

CURRENT_BRANCH="$(git -C "$MONOREPO_PATH" branch --show-current)"
if [[ "$CURRENT_BRANCH" != "$TARGET_BRANCH" ]]; then
  echo "Switching monorepo from '$CURRENT_BRANCH' to '$TARGET_BRANCH'..."

  if git -C "$MONOREPO_PATH" show-ref --verify --quiet "refs/heads/$TARGET_BRANCH"; then
    git -C "$MONOREPO_PATH" checkout "$TARGET_BRANCH"
  else
    git -C "$MONOREPO_PATH" fetch --all --prune

    if git -C "$MONOREPO_PATH" show-ref --verify --quiet "refs/remotes/origin/$TARGET_BRANCH"; then
      git -C "$MONOREPO_PATH" checkout -B "$TARGET_BRANCH" --track "origin/$TARGET_BRANCH"
    else
      echo "Target branch '$TARGET_BRANCH' was not found locally or on origin."
      exit 1
    fi
  fi
fi

echo "Building @teamimpact/veda-ui-blocks from $TARGET_BRANCH..."
pnpm -C "$MONOREPO_PATH" --filter @teamimpact/veda-ui-blocks run build

echo "Linking $PACKAGE_DIR into app..."
pnpm -C "$APP_PATH" link "$PACKAGE_DIR"

if grep -q '"@teamimpact/veda-ui-blocks/air-quality.css"' "$LAYOUT_FILE"; then
  sed -i '' 's|"@teamimpact/veda-ui-blocks/air-quality.css"|"@teamimpact/veda-ui-blocks/air4us.css"|g' "$LAYOUT_FILE"
  echo "Updated layout theme import to air4us.css"
fi

if grep -q '"@teamimpact/veda-ui-blocks/disasters.css"' "$LAYOUT_FILE"; then
  sed -i '' 's|"@teamimpact/veda-ui-blocks/disasters.css"|"@teamimpact/veda-ui-blocks/air4us.css"|g' "$LAYOUT_FILE"
  echo "Updated layout theme import to air4us.css"
fi

echo "Done. Local package linked and Air4US theme import is set."
