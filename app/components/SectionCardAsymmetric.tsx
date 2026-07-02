import type { ComponentProps, ReactElement, ReactNode } from "react";
import { getAlternatingGridClasses } from "./component.helpers";
import { SectionHeading } from "./SectionHeading";

export type SectionCardAsymmetricProps = Omit<ComponentProps<"div">, "children"> & {
  cards: ReactElement[];
  sectionHeading: {
    title: ReactNode;
    href?: string;
    linkLabel?: string;
  };
};

export const SectionCardAsymmetric = ({
  cards,
  sectionHeading,
  className,
  ...props
}: SectionCardAsymmetricProps) => {
  const hasViewAllLink = sectionHeading.href?.trim().length;

  return (
    <div className={className} {...props}>
      <SectionHeading
        href={hasViewAllLink ? sectionHeading.href : undefined}
        linkLabel={sectionHeading.linkLabel}
      >
        {sectionHeading.title}
      </SectionHeading>

      {cards.length > 0 && (
        <div className="grid-row grid-gap-2 margin-bottom-neg-2">
          {cards.map((card, index) => (
            <div
              key={card.key ?? `section-card-asymmetric-${index}`}
              className={`${getAlternatingGridClasses(index)} margin-bottom-2`}
            >
              {card}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
