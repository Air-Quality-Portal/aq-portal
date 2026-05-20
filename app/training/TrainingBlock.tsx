import type { CardProps } from "@teamimpact/veda-ui-blocks";
import Image from "next/image";
import { SectionCardCarousel } from "@/app/components";
import type { ContentBlock, IterableItemWithId } from "@/app/components/types";

export const TrainingBlock = ({ block }: { block: ContentBlock }) => {
  switch (block.type) {
    case "text":
      return (
        <div className="margin-bottom-4">
          {block.heading && <h2 className="font-heading-xl margin-bottom-2">{block.heading}</h2>}
          {block.paragraphs.map((p) => (
            <p key={p} className="margin-bottom-2">
              {p}
            </p>
          ))}
        </div>
      );

    case "list":
      return (
        <div className="margin-bottom-4">
          {block.heading && <h2 className="font-heading-xl margin-bottom-2">{block.heading}</h2>}
          <ul className="usa-list">
            {block.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      );

    case "note":
      return (
        <blockquote className="usa-alert usa-alert--info usa-alert--slim margin-bottom-4">
          <div className="usa-alert__body">
            <p className="usa-alert__text">{block.text}</p>
          </div>
        </blockquote>
      );

    case "cta":
      return (
        <div className="margin-bottom-4">
          <a href={block.href} className="usa-button" target="_blank" rel="noopener noreferrer">
            {block.label}
          </a>
        </div>
      );

    case "slider": {
      const cards: IterableItemWithId<CardProps>[] = block.images.map((img, i) => ({
        id: `slider-${i}`,
        image: (
          <Image
            src={img.src}
            alt={img.alt}
            fill
            sizes="(max-width: 640px) 100vw, 50vw"
            style={{ objectFit: "cover" }}
          />
        ),
      }));
      return <SectionCardCarousel cards={cards} />;
    }

    case "about":
      return (
        <div className="margin-bottom-4 padding-4 bg-base-lightest">
          <Image
            src={block.logo.src}
            alt={block.logo.alt}
            width={200}
            height={50}
            style={{ height: "auto", maxWidth: "200px" }}
            className="margin-bottom-3"
          />
          <h2 className="font-heading-xl margin-bottom-2">{block.heading}</h2>
          {block.paragraphs.map((p) => (
            <p key={p} className="margin-bottom-2">
              {p}
            </p>
          ))}
          <ul className="usa-list usa-list--unstyled">
            {block.links.map((link) => (
              <li key={link.href}>
                <a href={link.href} target="_blank" rel="noopener noreferrer">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      );

    case "links":
      return (
        <div className="margin-bottom-4">
          {block.heading && <h2 className="font-heading-xl margin-bottom-2">{block.heading}</h2>}
          <ul className="usa-list usa-list--unstyled">
            {block.items.map((item) => (
              <li key={item.href} className="margin-bottom-1">
                <a href={item.href} target="_blank" rel="noopener noreferrer">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      );
  }
};
