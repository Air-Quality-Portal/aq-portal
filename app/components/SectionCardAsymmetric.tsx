import type { ComponentProps, ReactElement, ReactNode } from "react";
import { getAlternatingGridClasses } from "./component.helpers";
import { SectionHeading } from "./SectionHeading";

export type SectionCardAsymmetricProps = Omit<ComponentProps<"div">, "children"> & {
  cards: ReactElement[];
  headline: ReactNode;
  viewAllLink: string;
  viewAllLabel?: string;
};

export const SectionCardAsymmetric = ({
  cards,
  headline,
  viewAllLink,
  viewAllLabel,
  className,
  ...props
}: SectionCardAsymmetricProps) => {
  const hasViewAllLink = viewAllLink.trim().length > 0;

  return (
    <div className={className} {...props}>
      <SectionHeading href={hasViewAllLink ? viewAllLink : undefined} linkLabel={viewAllLabel}>
        {headline}
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
