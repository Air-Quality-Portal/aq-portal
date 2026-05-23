import { Card } from "@teamimpact/veda-ui-blocks";
import {
  type CardMastheadPropsArgs,
  makeCardMastHeadProps,
} from "@/app/site-config/content.helpers";

export const PageMasthead = (cardProps: CardMastheadPropsArgs) => (
  <div className="display-flex minh-masthead">
    <Card {...makeCardMastHeadProps(cardProps)} />
  </div>
);
