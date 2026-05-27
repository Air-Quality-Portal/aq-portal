import { Link } from "@teamimpact/veda-ui-blocks";
import Image from "next/image";

import { ImageComparison, Section, SectionHeading } from "@/app/components";
import type { ContentBlock } from "@/app/site-config/types";

export const ContentBlockRenderer = ({ block }: { block: ContentBlock }) => {
  switch (block.type) {
    case "text":
      return (
        <Section>
          {block.heading &&
            (block.headingLevel === "h4" ? (
              <h4 id={block.id} className="font-heading-lg margin-bottom-1">
                {block.heading}
              </h4>
            ) : block.headingLevel === "h3" ? (
              <h3 id={block.id} className="font-heading-xl margin-bottom-1">
                {block.heading}
              </h3>
            ) : (
              <SectionHeading id={block.id}>{block.heading}</SectionHeading>
            ))}
          {block.paragraphs.map((p, i) => (
            // biome-ignore lint/suspicious/noArrayIndexKey: static content, never reorders
            <p key={i}>{p}</p>
          ))}
        </Section>
      );

    case "list": {
      const metadataDetails =
        block.listStyle === "metadata"
          ? block.items
              .map((item) => {
                if (typeof item !== "string") return null;

                const separatorIndex = item.indexOf(":");
                if (separatorIndex === -1) return null;

                const label = item.slice(0, separatorIndex).trim();
                const value = item.slice(separatorIndex + 1).trim();
                if (!label || !value) return null;

                return { label, value };
              })
              .filter((detail): detail is { label: string; value: string } => detail !== null)
          : [];

      return (
        <Section>
          {block.heading &&
            (block.headingLevel === "h4" ? (
              <h4 id={block.id} className="font-heading-lg margin-bottom-1">
                {block.heading}
              </h4>
            ) : block.headingLevel === "h3" ? (
              <h3 id={block.id} className="font-heading-xl margin-bottom-1">
                {block.heading}
              </h3>
            ) : (
              <SectionHeading id={block.id}>{block.heading}</SectionHeading>
            ))}
          {block.showDividerAfterHeading && (
            <div className="border-bottom border-base-lighter margin-bottom-3" />
          )}
          {metadataDetails.length > 0 ? (
            <>
              <dl className="grid-row grid-gap margin-y-0">
                {metadataDetails.map((detail) => (
                  <div key={detail.label} className="grid-col-4 margin-bottom-2">
                    <dt className="text-uppercase text-base-dark font-sans-2xs margin-bottom-05 text-bold">
                      {detail.label}
                    </dt>
                    <dd className="margin-0 font-body-md text-base-darkest">{detail.value}</dd>
                  </div>
                ))}
              </dl>
              {block.showDividerAfterItems && (
                <div className="border-bottom border-base-lighter margin-bottom-3" />
              )}
            </>
          ) : (
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
          )}
          {block.paragraphs?.map((paragraph, i) => (
            // biome-ignore lint/suspicious/noArrayIndexKey: static content, never reorders
            <p key={i}>{paragraph}</p>
          ))}
        </Section>
      );
    }

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
          <Image
            src={block.src}
            alt={block.alt}
            width={block.width}
            height={block.height}
            style={{ width: block.maxWidth ?? "100%", height: "auto" }}
          />
        </Section>
      );

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
