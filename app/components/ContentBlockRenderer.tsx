import { Link } from "@teamimpact/veda-ui-blocks";
import Image from "next/image";

import { ImageComparison, Section, SectionHeading } from "@/app/components";
import type { ContentBlock } from "@/app/site-config/types";
import { StacCompareBlock, StacSingleLayerBlock } from "./blocks";

export const ContentBlockRenderer = ({
  block,
  isMultiColumnLayout,
}: {
  block: ContentBlock;
  isMultiColumnLayout?: boolean;
}) => {
  switch (block.type) {
    case "text":
      return (
        <Section isMultiColumnLayout={isMultiColumnLayout}>
          {block.heading &&
            (block.headingLevel === "h4" ? (
              <h4 className="font-heading-lg margin-bottom-1">{block.heading}</h4>
            ) : block.headingLevel === "h3" ? (
              <h3 className="font-heading-lg margin-bottom-1">{block.heading}</h3>
            ) : (
              <SectionHeading>{block.heading}</SectionHeading>
            ))}
          {block.paragraphs.map((p, i) => (
            // biome-ignore lint/suspicious/noArrayIndexKey: static content, never reorders
            <p key={i}>{p}</p>
          ))}
        </Section>
      );

    case "list":
      return (
        <Section isMultiColumnLayout={isMultiColumnLayout}>
          {block.heading &&
            (block.headingLevel === "h4" ? (
              <h4 className="font-heading-lg margin-bottom-1">{block.heading}</h4>
            ) : block.headingLevel === "h3" ? (
              <h3 className="font-heading-lg margin-bottom-1">{block.heading}</h3>
            ) : (
              <SectionHeading>{block.heading}</SectionHeading>
            ))}
          <ul className="usa-list">
            {block.items.map((item, i) =>
              typeof item === "string" ? (
                // biome-ignore lint/suspicious/noArrayIndexKey: static content, never reorders
                <li key={i}>{item}</li>
              ) : (
                <li key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ),
            )}
          </ul>
        </Section>
      );

    case "note":
      return (
        <Section isMultiColumnLayout={isMultiColumnLayout}>
          <div role="note" className="usa-alert usa-alert--info usa-alert--slim margin-bottom-4">
            <div className="usa-alert__body">
              <p className="usa-alert__text">{block.text}</p>
            </div>
          </div>
        </Section>
      );

    case "slider":
      return (
        <Section isMultiColumnLayout={isMultiColumnLayout}>
          <ImageComparison
            before={block.before}
            after={block.after}
            sizes="(max-width: 1024px) 100vw, 768px"
          />
        </Section>
      );

    case "video":
      return (
        <Section isMultiColumnLayout={isMultiColumnLayout}>
          {block.title && <h3 className="font-heading-xl margin-bottom-1">{block.title}</h3>}
          {block.src ? (
            <video controls className="width-full display-block">
              <source src={block.src} />
              <track kind="captions" />
            </video>
          ) : (
            <div className="width-full bg-base-lightest display-flex flex-align-center flex-justify-center height-card padding-x-4">
              <p className="text-base margin-0">Video coming soon</p>
            </div>
          )}
          {block.caption && <p className="font-body-sm text-base margin-top-1">{block.caption}</p>}
        </Section>
      );

    case "image":
      return (
        <Section isMultiColumnLayout={isMultiColumnLayout}>
          <Image
            src={block.src}
            alt={block.alt}
            width={block.width}
            height={block.height}
            style={{ width: block.maxWidth ?? "100%", height: "auto" }}
          />
        </Section>
      );

    case "stacSingleLayer":
      return <StacSingleLayerBlock block={block} />;
    case "stacCompare":
      return <StacCompareBlock block={block} />;
  }
};
