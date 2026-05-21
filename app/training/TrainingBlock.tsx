import { Link } from "@teamimpact/veda-ui-blocks";
import Image from "next/image";

import { Section, SectionHeading } from "@/app/components";
import type { ContentBlock } from "@/app/site-config/types";

export const TrainingBlock = ({ block }: { block: ContentBlock }) => {
  switch (block.type) {
    case "text":
      return (
        <Section>
          {block.heading &&
            (block.headingLevel === "h3" ? (
              <h3 className="font-sans-xl margin-bottom-1">{block.heading}</h3>
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
        <Section>
          {block.heading &&
            (block.headingLevel === "h3" ? (
              <h3 className="font-sans-xl margin-bottom-1">{block.heading}</h3>
            ) : (
              <SectionHeading>{block.heading}</SectionHeading>
            ))}
          <ul className="usa-list">
            {block.items.map((item, i) => (
              // biome-ignore lint/suspicious/noArrayIndexKey: static content, never reorders
              <li key={i}>{item}</li>
            ))}
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

    case "cta":
      return (
        <Section>
          <Link href={block.href} variant="button">
            {block.label}
          </Link>
        </Section>
      );

    case "slider":
      return (
        <Section>
          <div className="grid-row grid-gap">
            {block.images.map((img) => (
              <div key={img.src} className="grid-col-12 tablet:grid-col-6">
                <div className="position-relative height-card-lg">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, 50vw"
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </div>
            ))}
          </div>
        </Section>
      );

    case "video":
      return (
        <Section>
          {block.title && <h3 className="font-sans-xl margin-bottom-1">{block.title}</h3>}
          {/* biome-ignore lint/a11y/useMediaCaption: captions not yet available for training videos */}
          <video controls className="width-full display-block">
            <source src={block.src} />
          </video>
          {block.caption && <p className="font-body-sm text-base margin-top-1">{block.caption}</p>}
        </Section>
      );

    case "about":
      return (
        <Section>
          <SectionHeading>{block.heading}</SectionHeading>

          <Image
            src={block.logo.src}
            alt={block.logo.alt}
            width={1495}
            height={190}
            style={{ width: "200px", height: "auto" }}
            className="margin-bottom-3"
          />

          {block.paragraphs.map((p, i) => (
            // biome-ignore lint/suspicious/noArrayIndexKey: static content, never reorders
            <p key={i} className="margin-bottom-2">
              {p}
            </p>
          ))}
          <ul className="usa-list usa-list--unstyled">
            {block.links.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </Section>
      );

    case "links":
      return (
        <Section>
          {block.heading && <SectionHeading>{block.heading}</SectionHeading>}
          <ul className="usa-list usa-list--unstyled">
            {block.items.map((item) => (
              <li key={item.href} className="margin-bottom-1">
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </Section>
      );
  }
};
