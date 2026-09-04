import { Carousel } from "@teamimpact/veda-ui-blocks";
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
    <Carousel
      className="height-card-lg"
      maxVisibleItems={1}
      items={tools.map((tool) => ({
        image: (
          <AppImage
            {...tool.thumbnailImage}
            fill
            sizes="(max-width: 880px) 100vw, 880px"
            style={{ objectFit: "cover" }}
          />
        ),
      }))}
    />
  </>
);
