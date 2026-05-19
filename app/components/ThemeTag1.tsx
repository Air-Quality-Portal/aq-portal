import { Tag } from "@teamimpact/veda-ui-blocks";
import { CONTENT_THEMES } from "@/app/site-config/constants";

type Theme = "respond" | "build" | "prepare" | "recover";

type ThemeTagProps = {
  theme: Theme;
};

export const ThemeTag = ({ theme }: ThemeTagProps) => {
  const { label, className, bgColor } = CONTENT_THEMES[theme];
  return (
    <Tag variant="solid" color={bgColor} className={className}>
      {label}
    </Tag>
  );
};
