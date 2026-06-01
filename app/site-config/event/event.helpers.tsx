import { Tag } from "@teamimpact/veda-ui-blocks";
import {
  formattedDate,
  makeCardMastHeadProps,
  makeCardMiniProps,
} from "@/app/site-config/content.helpers";
import type { EventContent } from "@/app/site-config/types";

export const transformEventToCardMiniProps = (event: EventContent) => {
  const { isLatest, ...eventRest } = event;
  return makeCardMiniProps({
    ...eventRest,
    ...(isLatest ? { tag: "Latest Activation" } : {}),
  });
};

export const transformEventToPageMastHeadProps = (event: EventContent) => {
  const { lastUpdatedDate, mastheadImage, title, description } = event;

  return makeCardMastHeadProps({
    mastheadImage,
    title,
    description,
    tag: lastUpdatedDate ? (
      <Tag color="primary-lighter" textColor="primary-dark">
        Updated: {formattedDate(lastUpdatedDate)}
      </Tag>
    ) : undefined,
  });
};
