import { type CardMiniProps, type CardProps, Link, Tag } from "@teamimpact/veda-ui-blocks";
import {
  makeCardMastHeadProps,
  makeCardMiniProps,
  toLongDate,
  toTitleCase,
} from "@/app/site-config/content.helpers";
import type { EventContent, IterableItemWithId } from "@/app/site-config/types";

export const transformEventToCardMiniProps = (
  event: EventContent,
): IterableItemWithId<CardMiniProps> => {
  const { isLatest, ...eventRest } = event;
  return makeCardMiniProps({
    ...eventRest,
    ...(isLatest ? { tag: "Latest Activation" } : {}),
  });
};

export const transformEventToPageMastHeadProps = (event: EventContent): CardProps => {
  const { lastUpdatedDate, mastheadImage, title, description } = event;

  return makeCardMastHeadProps({
    mastheadImage,
    title,
    description,
    tag: lastUpdatedDate ? (
      <Tag color="primary-lighter" textColor="primary-dark">
        Updated: {toLongDate(lastUpdatedDate)}
      </Tag>
    ) : undefined,
  });
};

export type SectionOverviewItemProps = {
  overviewItems: { title: string; content: React.ReactNode }[];
};

export const transformEventToSectionOverviewProps = (
  event: EventContent,
): SectionOverviewItemProps => {
  const { region, startDate, categories, linkDHSFEMA, linkUSGovernment } = event;

  return {
    overviewItems: [
      { title: "Region", content: region },
      { title: "Start Date", content: toLongDate(startDate) },
      { title: "Hazard(s)", content: categories.map((c) => toTitleCase(c)).join(", ") },
      linkDHSFEMA
        ? {
            title: "What DHS and FEMA are doing:",
            content: (
              <Link variant="text" isExternal href={linkDHSFEMA.href}>
                {linkDHSFEMA.label ?? "Read more."}
              </Link>
            ),
          }
        : null,
      linkUSGovernment
        ? {
            title: "What the U.S. government is doing:",
            content: (
              <Link variant="text" isExternal href={linkUSGovernment.href}>
                {linkUSGovernment.label ?? "Read more"}
              </Link>
            ),
          }
        : null,
    ].filter((item): item is NonNullable<typeof item> => item !== null),
  };
};
