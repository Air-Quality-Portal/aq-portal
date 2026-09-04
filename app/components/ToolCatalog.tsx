import { CardDetailed } from "@teamimpact/veda-ui-blocks";
import { AppImage } from "@/app/components/AppImage";
import { makePrimaryTag } from "@/app/site-config/content.helpers";
import type { ToolContent } from "@/app/site-config/types";

const hrefLabel = (href: string) => href.replace(/^https?:\/\//, "").replace(/\/$/, "");

export type ToolCatalogLayout = "thirds" | "feature";

/*
 * Column width and the image `sizes` hint have to agree: `sizes` tells the
 * browser how wide the thumbnail will render so it can pick a source from the
 * srcset, and a stale value makes next/image serve an undersized image. Keeping
 * both on one entry means picking a layout picks a matching pair.
 */
const LAYOUTS = {
  /** Even 3-up grid — the tools catalog. */
  thirds: {
    desktopCol: () => "desktop:grid-col-4",
    sizes: "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
  },
  /** Alternating wide/narrow pairs — the homepage. Each row sums to 12: 7+5, 5+7. */
  feature: {
    desktopCol: (index: number) =>
      index % 4 === 0 || index % 4 === 3 ? "desktop:grid-col-7" : "desktop:grid-col-5",
    // 58vw is 7/12 of the row; 812px is that same fraction of the 87.5rem
    // grid-container max-width, where the card stops growing with the viewport.
    sizes: "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1400px) 58vw, 812px",
  },
} as const satisfies Record<
  ToolCatalogLayout,
  { desktopCol: (index: number) => string; sizes: string }
>;

type ToolCatalogProps = {
  tools: ToolContent[];
  /** @default "thirds" */
  layout?: ToolCatalogLayout;
};

export const ToolCatalog = ({ tools, layout = "thirds" }: ToolCatalogProps) => {
  const { desktopCol, sizes } = LAYOUTS[layout];

  return (
    <div className="grid-row grid-gap">
      {tools.map((tool, index) => (
        <div
          key={tool.id}
          className={`grid-col-12 tablet:grid-col-6 ${desktopCol(index)} margin-y-1 desktop:margin-y-2`}
        >
          <CardDetailed
            className="height-full border-1px border-base-lighter"
            imagePosition="top"
            image={<AppImage {...tool.thumbnailImage} fill sizes={sizes} />}
            tagPrimary={tool.tagPrimary ? makePrimaryTag(tool.tagPrimary) : undefined}
            intro={tool.fullname}
            title={
              <div className="blocks-card-detailed__title font-sans-lg text-light">
                {tool.title}
              </div>
            }
            description={tool.description}
            tags={
              tool.additionalTags
                ? tool.additionalTags.map((label) => ({
                    label,
                    variant: "text",
                    color: "base",
                    className: "font-mono-2xs",
                  }))
                : undefined
            }
            callToActionSecondary={{
              href: tool.href,
              label: hrefLabel(tool.href),
              variant: "text",
              isExternal: true,
            }}
          />
        </div>
      ))}
    </div>
  );
};
