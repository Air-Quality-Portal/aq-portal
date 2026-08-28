import { CardDetailed } from "@teamimpact/veda-ui-blocks";
import Image from "next/image";
import { makePrimaryTag } from "@/app/site-config/content.helpers";
import type { ToolContent } from "@/app/site-config/types";

const hrefLabel = (href: string) => href.replace(/^https?:\/\//, "").replace(/\/$/, "");

type ToolCatalogProps = {
  tools: ToolContent[];
  getColClassName?: (index: number) => string;
};

const defaultColClassName = () =>
  "grid-col-12 tablet:grid-col-6 desktop:grid-col-4 margin-y-1 desktop:margin-y-2";

export const ToolCatalog = ({ tools, getColClassName = defaultColClassName }: ToolCatalogProps) => (
  <div className="grid-row grid-gap">
    {tools.map((tool, index) => (
      <div key={tool.id} className={getColClassName(index)}>
        <CardDetailed
          className="height-full border-1px border-base-lighter"
          imagePosition="top"
          image={
            <Image
              {...tool.thumbnailImage}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          }
          tagPrimary={tool.tagPrimary ? makePrimaryTag(tool.tagPrimary) : undefined}
          intro={tool.fullname}
          title={
            <div className="blocks-card-detailed__title font-sans-lg text-light">{tool.title}</div>
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
