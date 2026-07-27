import { Link, Tag } from "@teamimpact/veda-ui-blocks";
import Image from "next/image";

import {
  ImageComparison,
  Section,
  SectionCardDetailed,
  SectionCardSimple,
  SectionHeading,
} from "@/app/components";
import { StacCompareBlock, StacSingleLayerBlock } from "@/app/components/blocks";
import {
  getMetadataFieldTag,
  makeCardDetailedImageLeftProps,
  makeCardSimpleProps,
} from "@/app/site-config/content.helpers";
import { getDatasetsByIds } from "@/app/site-config/dataset";
import { typedMap } from "@/app/site-config/typed.helpers";
import type { ContentBlock } from "@/app/site-config/types";

function ContentHeading({
  heading,
  headingLevel,
}: {
  heading: string;
  headingLevel?: "h2" | "h3" | "h4";
}) {
  if (headingLevel === "h4") return <div className="font-sans-md margin-bottom-1">{heading}</div>;

  if (headingLevel === "h3") return <div className="font-sans-lg margin-bottom-1">{heading}</div>;

  return <SectionHeading>{heading}</SectionHeading>;
}

function ContentLead({ lead }: { lead?: string }) {
  if (!lead) return null;

  return <p className="text-base margin-top-0 margin-bottom-3">{lead}</p>;
}

const TUTORIAL_LEVEL_COLOR: Record<string, string> = {
  Beginner: "success-lighter",
  Intermediate: "info-lighter",
  Advanced: "secondary-lighter",
};

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
          {block.heading && (
            <ContentHeading heading={block.heading} headingLevel={block.headingLevel} />
          )}
          {block.paragraphs.map((p, i) => (
            // biome-ignore lint/suspicious/noArrayIndexKey: static content, never reorders
            <p key={i}>{p}</p>
          ))}
        </Section>
      );

    case "list":
      return (
        <Section isMultiColumnLayout={isMultiColumnLayout}>
          {block.heading && (
            <ContentHeading heading={block.heading} headingLevel={block.headingLevel} />
          )}
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
          <div
            role="note"
            className="bg-primary-lightest border-left-1 border-primary radius-right-md padding-top-2 padding-bottom-105 padding-x-3 margin-bottom-4"
          >
            {block.label && (
              <p className="font-mono-3xs text-primary text-uppercase margin-top-0 margin-bottom-105">
                {block.label}
              </p>
            )}
            <p className="text-base-darkest line-height-sans-5 margin-0">{block.text}</p>
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
          {block.heading && (
            <ContentHeading heading={block.heading} headingLevel={block.headingLevel} />
          )}
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
          <figure className="margin-0">
            <Image
              src={block.src}
              alt={block.alt}
              width={block.width}
              height={block.height}
              style={{ width: block.maxWidth ?? "100%", height: "auto" }}
            />
            {block.caption && (
              <figcaption className="font-body-sm text-base margin-top-1">
                {block.caption}
              </figcaption>
            )}
          </figure>
        </Section>
      );
    case "stacSingleLayer":
      return (
        <Section isMultiColumnLayout={isMultiColumnLayout}>
          {block.heading && (
            <ContentHeading heading={block.heading} headingLevel={block.headingLevel} />
          )}
          <figure className="margin-0">
            <StacSingleLayerBlock block={block} />
            {block.caption && (
              <figcaption className="font-body-sm text-base margin-top-1">
                {block.caption}
              </figcaption>
            )}
          </figure>
        </Section>
      );

    case "stacCompare":
      return (
        <Section isMultiColumnLayout={isMultiColumnLayout}>
          {block.heading && (
            <ContentHeading heading={block.heading} headingLevel={block.headingLevel} />
          )}
          <figure className="margin-0">
            <StacCompareBlock block={block} />
            {block.caption && (
              <figcaption className="font-body-sm text-base margin-top-1">
                {block.caption}
              </figcaption>
            )}
          </figure>
        </Section>
      );

    case "linkList":
      return (
        <Section isMultiColumnLayout={isMultiColumnLayout}>
          {block.heading && (
            <ContentHeading heading={block.heading} headingLevel={block.headingLevel} />
          )}
          <ContentLead lead={block.lead} />
          <ul className="usa-list usa-list--unstyled">
            {block.links.map((link) => (
              <li key={link.href} className="margin-bottom-1">
                <Link href={link.href} isExternal={link.isExternal} variant="button-outline-gap">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </Section>
      );

    case "tutorialList":
      return (
        <Section isMultiColumnLayout={isMultiColumnLayout}>
          {block.heading && (
            <ContentHeading heading={block.heading} headingLevel={block.headingLevel} />
          )}
          <ContentLead lead={block.lead} />
          <ul className="usa-list usa-list--unstyled">
            {block.tutorials.map((tutorial) => (
              <li key={tutorial.href} className="margin-bottom-2">
                <div className="border-1px border-base-lighter radius-md padding-3">
                  <Link
                    href={tutorial.href}
                    className="font-body-lg"
                    variant="text-plain"
                    size="lg"
                  >
                    {tutorial.title}
                  </Link>
                  {tutorial.description && (
                    <p className="text-base margin-top-1 margin-bottom-0">{tutorial.description}</p>
                  )}
                  {(tutorial.duration || tutorial.level) && (
                    <div
                      className="display-flex flex-wrap flex-align-center margin-top-2"
                      style={{ gap: "0.5rem" }}
                    >
                      {tutorial.duration && (
                        <Tag variant="outline" color="base">
                          {tutorial.duration}
                        </Tag>
                      )}
                      {tutorial.level && (
                        <Tag variant="solid" color={TUTORIAL_LEVEL_COLOR[tutorial.level]}>
                          {tutorial.level.toUpperCase()}
                        </Tag>
                      )}
                    </div>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </Section>
      );

    case "sectionCardSimple":
      return (
        <SectionCardSimple
          isMultiColumnLayout={isMultiColumnLayout}
          description={block.description}
          sectionHeading={
            block.heading && (
              <SectionHeading {...(block.href ? { href: block.href } : {})}>
                {block.heading}
              </SectionHeading>
            )
          }
          cards={typedMap(block.cards, makeCardSimpleProps)}
        />
      );

    case "relatedDatasets": {
      const cards = getDatasetsByIds(block.datasetIds).map((dataset) =>
        makeCardDetailedImageLeftProps({
          id: dataset.id,
          contentType: dataset.contentType,
          title: dataset.title,
          description: dataset.description,
          thumbnailImage: dataset.thumbnailImage,
          tagPrimary: getMetadataFieldTag(dataset.metadata, "provider"),
          tags: dataset.categories,
        }),
      );

      return (
        <SectionCardDetailed
          isMultiColumnLayout={isMultiColumnLayout}
          description={block.description}
          sectionHeading={
            block.heading && (
              <ContentHeading heading={block.heading} headingLevel={block.headingLevel} />
            )
          }
          cards={cards}
        />
      );
    }
  }
};
