import { Card, type CardProps } from "@teamimpact/veda-ui-blocks";

export const PageMasthead = (cardProps: CardProps) => (
  <div className="display-flex minh-masthead">
    <Card {...cardProps} />
  </div>
);
