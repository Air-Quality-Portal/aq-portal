import { makeCardMiniProps } from "../content.helpers";
import type { EventContent } from "../types";

export const transformEventToCardMiniProps = (event: EventContent) => {
  const { isLatest, ...eventRest } = event;
  return makeCardMiniProps({
    ...eventRest,
    ...(isLatest ? { tag: "Latest Activation" } : {}),
  });
};
