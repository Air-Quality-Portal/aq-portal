import { Card } from "@teamimpact/veda-ui-blocks";
import { type CardPropsArgs, makeCardMastHeadProps } from "@/app/components/content.helpers";

export const PageMasthead = (cardProps: CardPropsArgs) => (
  <div className="display-flex minh-masthead">
    <Card {...makeCardMastHeadProps(cardProps)} />
  </div>
);
