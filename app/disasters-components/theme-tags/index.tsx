import { Tag } from "@teamimpact/veda-ui-blocks";

type ThemeTagProps = {
  theme: "respond" | "build" | "prepare" | "recover";
};

const themeColors: Record<ThemeTagProps["theme"], string> = {
  respond: "var(--theme-respond)",
  build: "var(--theme-build)",
  prepare: "var(--theme-prepare)",
  recover: "var(--theme-recover)",
};

const themeTextColors: Record<ThemeTagProps["theme"], string> = {
  respond: "white",
  build: "white",
  prepare: "#0D313D",
  recover: "white",
};

const themeLabels: Record<ThemeTagProps["theme"], string> = {
  respond: "RESPOND",
  build: "BUILD RESILIENCE",
  prepare: "PREPARE",
  recover: "RECOVER",
};

export const ThemeTag = ({ theme }: ThemeTagProps) => {
  return (
    //Needed to wrap in a div to contain width of tag component to it contents
    <div className="blocks-card-simple__tag">
      <Tag variant="solid" color={themeColors[theme]} textColor={themeTextColors[theme]}>
        {themeLabels[theme]}
      </Tag>
    </div>
  );
};
