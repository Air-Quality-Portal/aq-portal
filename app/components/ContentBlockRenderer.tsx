import { Link } from "@teamimpact/veda-ui-blocks";
import Image from "next/image";
import type { ReactNode } from "react";
import { ImageComparison, Section, SectionCardCarousel, SectionHeading } from "@/app/components";
import type { ContentBlock } from "@/app/site-config/types";
import { makeCardCarouselProps, makeCardSimpleProps } from "../site-config/content.helpers";
import { typedMap } from "../site-config/typed.helpers";

const MDX_LINK_PATTERN = /\[([^\]]+)\]\(([^)]+)\)/g;

const renderParagraphWithMdxLinks = (paragraph: ReactNode) => {
  if (typeof paragraph !== "string") {
    return paragraph;
  }

  const parts: ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null = MDX_LINK_PATTERN.exec(paragraph);

  while (match) {
    const [fullMatch, label, href] = match;
    const startIndex = match.index;
    const endIndex = startIndex + fullMatch.length;

    if (startIndex > lastIndex) {
      parts.push(paragraph.slice(lastIndex, startIndex));
    }

    const isExternal = /^(?:https?:)?\/\//.test(href);
    parts.push(
      <Link
        key={`${label}-${href}-${startIndex}`}
        href={href}
        variant="text"
        isExternal={isExternal}
      >
        {label}
      </Link>,
    );

    lastIndex = endIndex;
    match = MDX_LINK_PATTERN.exec(paragraph);
  }

  if (lastIndex === 0) {
    return paragraph;
  }

  if (lastIndex < paragraph.length) {
    parts.push(paragraph.slice(lastIndex));
  }

  return parts;
};

export const ContentBlockRenderer = ({ block }: { block: ContentBlock }) => {
  switch (block.type) {
    case "text":
      return (
        <Section>
          {block.heading &&
            (block.headingLevel === "h4" ? (
              <h4 className="font-heading-lg margin-bottom-1">{block.heading}</h4>
            ) : block.headingLevel === "h3" ? (
              <h3 className="font-heading-xl margin-bottom-1">{block.heading}</h3>
            ) : (
              <SectionHeading>{block.heading}</SectionHeading>
            ))}
          {block.paragraphs.map((p, i) => (
            // biome-ignore lint/suspicious/noArrayIndexKey: static content, never reorders
            <p key={i}>{renderParagraphWithMdxLinks(p)}</p>
          ))}
        </Section>
      );

    case "list":
      return (
        <Section>
          {block.heading &&
            (block.headingLevel === "h4" ? (
              <h4 className="font-heading-lg margin-bottom-1">{block.heading}</h4>
            ) : block.headingLevel === "h3" ? (
              <h3 className="font-heading-xl margin-bottom-1">{block.heading}</h3>
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
        <Section>
          <div role="note" className="usa-alert usa-alert--info usa-alert--slim margin-bottom-4">
            <div className="usa-alert__body">
              <p className="usa-alert__text">{block.text}</p>
            </div>
          </div>
        </Section>
      );

    case "slider":
      return (
        <Section>
          <ImageComparison
            before={block.before}
            after={block.after}
            sizes="(max-width: 1024px) 100vw, 768px"
          />
        </Section>
      );

    case "video":
      return (
        <Section className="display-flex flex-justify-center flex-align-center">
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
        <Section className="display-flex flex-justify-center flex-align-center">
          <figcaption className="font-body-sm text-base margin-top-1">
            <Image
              src={block.src}
              alt={block.alt}
              width={block.width}
              height={block.height}
              style={{ width: block.maxWidth ?? "100%", height: "auto" }}
            />
            <div className="padding-top-2">{block.alt}</div>
          </figcaption>
        </Section>
      );
    case "card-carousel": {
      const isSimpleCards = block.cardComponentType === "simple";
      const mappedCards = isSimpleCards
        ? typedMap(block.cards, makeCardSimpleProps)
        : typedMap(block.cards, makeCardCarouselProps);

      return (
        <SectionCardCarousel
          cards={mappedCards}
          sectionHeading={block.sectionHeading}
          cardComponentType={isSimpleCards ? "simple" : "carousel"}
        />
      );
    }
    case "link":
      return (
        <Section>
          <Link
            href={block.href}
            target={block.target}
            rel={block.rel}
            variant="text"
            isExternal={block.target === "_blank"}
          >
            {block.label}
          </Link>
        </Section>
      );
  }
};
