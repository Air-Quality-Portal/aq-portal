import { makeThemeTag } from "../site-config/content.helpers";
import type { Theme } from "../site-config/types";

export const ThemeTag = ({ theme }: { theme: Theme }) => makeThemeTag(theme);
