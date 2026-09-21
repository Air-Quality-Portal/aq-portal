import { CardDetailed } from "@teamimpact/veda-ui-blocks";
import { AppImage } from "@/app/components/AppImage";
import { SectionIntro, type SectionIntroProps } from "@/app/components/SectionIntro";
import type { ToolContent } from "@/app/site-config/types";

type ToolHighlightsProps = {
  intro: SectionIntroProps;
  tools: ToolContent[];
};

export const ToolHighlights = ({ intro, tools }: ToolHighlightsProps) => (
  <>
    <SectionIntro {...intro} />
    <CardDetailed
      // CardDetailed renders `image` as a cover background sized by the card itself,
      // so the card carries the screenshot's aspect ratio to keep it from cropping.
      style={{ aspectRatio: "3416 / 1768" }}
      image={
        <AppImage
          src="/img/home/viz-tool.webp"
          alt="screenshot of air4us visualization tool"
          fill
          sizes="100vw"
          quality={90}
        />
      }
    />
  </>
);
