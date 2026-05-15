import { Tag } from "@teamimpact/veda-ui-blocks";
import { CONTENT_THEMES } from "@/app/site-config/constants";

type Theme = "respond" | "build" | "prepare" | "recover";

type ThemeTagProps = {
  theme: Theme;
};

export const ThemeTag = ({ theme }: ThemeTagProps) => {
  const { label, className, bgColor } = CONTENT_THEMES[theme];
  return (
    //Needed to wrap in a div to contain width of tag component to it contents
    <div className="blocks-card-simple__tag">
      <Tag variant="solid" color={bgColor} className={className}>
        {label}
      </Tag>
    </div>
  );
};
