import type { CardDetailedProps, CardProps, CardSimpleProps } from "@teamimpact/veda-ui-blocks";
import type React from "react";
import { AppImage } from "@/app/components/AppImage";
import { AppLinkStyled } from "@/app/components/AppLink";
import {
  type CardTag,
  type CardTextOnlySection,
  CONTENT_TYPES,
  type ContentType,
  type DatasetMetadata,
  type DatasetMetadataEntry,
  type DatasetTagGroup,
  type IterableItemWithId,
  type TaggedCardSection,
  type TutorialLevel,
  type TutorialSection,
  type WorkshopItem,
  type WorkshopPhase,
  type WorkshopSection,
  type WorkshopStatus,
} from "@/app/site-config/types";

/**
 * True for hrefs that leave the site: absolute URLs with a scheme and
 * protocol-relative ones. In-page anchors and app-internal paths are internal.
 * Card helpers derive a link's `isExternal` from this so authored content
 * carries the href alone.
 */
export const isExternalHref = (href: string): boolean => /^([a-z][a-z0-9+.-]*:)?\/\//i.test(href);

export const makePrimaryTag = (tag: string): CardTag => ({
  label: tag,
  variant: "solid",
  bgColor: "base-lightest",
  textColor: "primary-dark",
});

export const makeSimpleTag = (tag: string): CardTag => ({
  label: tag,
  variant: "outline",
  color: "base-light",
});

export const makeContentTypeTag = (tag: ContentType): CardTag => ({
  ...makeSimpleTag(CONTENT_TYPES[tag].label),
  variant: "solid",
});

const TUTORIAL_LEVEL_COLOR = {
  beginner: "success",
  intermediate: "info",
  advanced: "secondary",
} as const satisfies Record<TutorialLevel, string>;

export const makeTutorialLevelTag = (level: TutorialLevel): CardTag => ({
  ...makeSimpleTag(level.toUpperCase()),
  variant: "solid",
  color: `${TUTORIAL_LEVEL_COLOR[level]}-lighter`,
  textColor: `${TUTORIAL_LEVEL_COLOR[level]}-darker`,
});

export const makeTutorialCardSection = ({
  tutorials,
  ...section
}: TutorialSection): CardTextOnlySection => ({
  ...section,
  items: tutorials.map((tutorial, index) => ({
    id: `tutorial-${index}`,
    title: tutorial.title,
    href: tutorial.href,
    isExternal: isExternalHref(tutorial.href),
    description: tutorial.description,
    tags: [
      ...(tutorial.duration ? [makeSimpleTag(tutorial.duration)] : []),
      ...(tutorial.level ? [makeTutorialLevelTag(tutorial.level)] : []),
    ],
  })),
});

export const makeTaggedCardSection = ({
  items,
  ...section
}: TaggedCardSection): CardTextOnlySection => ({
  ...section,
  items: items.map(({ tags, callToAction, ...item }) => ({
    ...item,
    isExternal: isExternalHref(item.href),
    tags: tags?.map((tag) => makeSimpleTag(tag)),
    ...(callToAction && {
      callToAction: { ...callToAction, isExternal: isExternalHref(callToAction.href) },
    }),
  })),
});

const EXACT_UTC_TIMESTAMP = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}Z$/;

const parseExactUtcTimestamp = (value: unknown): number | undefined => {
  if (typeof value !== "string" || !EXACT_UTC_TIMESTAMP.test(value)) return undefined;

  const instant = Date.parse(value);
  if (!Number.isFinite(instant)) return undefined;

  return new Date(instant).toISOString() === value.replace("Z", ".000Z") ? instant : undefined;
};

/**
 * Workshop content stores UTC instants; visitors see the dates in their own
 * time zone. `timeZone` is undefined in the browser, which selects the
 * runtime's local zone, and is set explicitly in tests.
 */
const makeWorkshopDateFormatter = (timeZone?: string) =>
  new Intl.DateTimeFormat("en-US", { timeZone, month: "long", day: "numeric", year: "numeric" });

const makeWorkshopDateTag = (
  formatter: Intl.DateTimeFormat,
  startDate: string,
  endDate = startDate,
): CardTag => ({
  label: formatter.formatRange(new Date(startDate), new Date(endDate)),
  variant: "text",
  color: "base-dark",
});

const makeWorkshopFormatTag = (tag: string): CardTag => ({
  label: tag,
  variant: "solid",
  color: "primary-lightest",
  textColor: "primary-darker",
});

const CURRENT_EVENT_TAG: CardTag = {
  label: "CURRENT",
  variant: "solid",
  color: "success-lighter",
  textColor: "success-darker",
};

const PAST_EVENT_TAG: CardTag = {
  label: "PAST",
  variant: "solid",
  color: "base-lighter",
  textColor: "base-dark",
};

type DatedWorkshop = {
  workshop: WorkshopItem;
  sourceIndex: number;
  startsAtInstant: number;
  endsAtInstant: number;
};

type OrganizedWorkshop = WorkshopItem & { phase: WorkshopPhase };

type OrganizedWorkshops = {
  future: OrganizedWorkshop[];
  past: OrganizedWorkshop[];
};

const bySourceIndex = (first: DatedWorkshop, second: DatedWorkshop) =>
  first.sourceIndex - second.sourceIndex;

const getFutureWorkshops = (workshops: DatedWorkshop[], nowInstant: number): OrganizedWorkshop[] =>
  workshops
    .filter(({ endsAtInstant }) => endsAtInstant >= nowInstant)
    .sort(
      (first, second) =>
        first.startsAtInstant - second.startsAtInstant || bySourceIndex(first, second),
    )
    .map(({ workshop, startsAtInstant }) => ({
      ...workshop,
      phase: startsAtInstant <= nowInstant ? "current" : "upcoming",
    }));

const getPastWorkshops = (workshops: DatedWorkshop[], nowInstant: number): OrganizedWorkshop[] =>
  workshops
    .filter(({ endsAtInstant }) => endsAtInstant < nowInstant)
    .sort(
      (first, second) => second.endsAtInstant - first.endsAtInstant || bySourceIndex(first, second),
    )
    .map(({ workshop }) => ({ ...workshop, phase: "past" }));

const organizeWorkshops = (
  workshops: WorkshopItem[],
  now: Date = new Date(),
): OrganizedWorkshops => {
  const datedWorkshops = workshops.flatMap((workshop, sourceIndex) => {
    const startsAtInstant = parseExactUtcTimestamp(workshop.startDate);
    const endsAtInstant =
      workshop.endDate === undefined ? startsAtInstant : parseExactUtcTimestamp(workshop.endDate);

    if (
      startsAtInstant === undefined ||
      endsAtInstant === undefined ||
      endsAtInstant < startsAtInstant
    ) {
      return [];
    }

    return [{ workshop, sourceIndex, startsAtInstant, endsAtInstant }];
  });
  const nowInstant = now.getTime();

  return {
    future: getFutureWorkshops(datedWorkshops, nowInstant),
    past: getPastWorkshops(datedWorkshops, nowInstant),
  };
};

const makeWorkshopCardSection = (
  section: Omit<WorkshopSection, "workshops">,
  workshops: OrganizedWorkshop[],
  dateFormatter: Intl.DateTimeFormat,
): CardTextOnlySection => ({
  ...section,
  items: workshops.map((workshop) => {
    const isPast = workshop.phase === "past";
    const callToAction = isPast
      ? workshop.callToActions.recording
      : workshop.callToActions.registration;
    const callToActionHref = callToAction?.href?.trim();
    const workshopHref = workshop.href?.trim() || undefined;

    return {
      id: workshop.id,
      title: workshop.title,
      href: workshopHref,
      isExternal: isExternalHref(workshopHref ?? ""),
      description: workshop.description,
      tagPrimary:
        workshop.phase === "current" ? CURRENT_EVENT_TAG : isPast ? PAST_EVENT_TAG : undefined,
      tags: [
        makeWorkshopDateTag(dateFormatter, workshop.startDate, workshop.endDate),
        ...(workshop.tags?.map(makeWorkshopFormatTag) ?? []),
      ],
      callToAction:
        callToAction && callToActionHref
          ? {
              label: callToAction.label,
              href: callToActionHref,
              isExternal: isExternalHref(callToActionHref),
            }
          : undefined,
    };
  }),
});

export const makeWorkshopCardSections = (
  { workshops, ...section }: WorkshopSection,
  { now = new Date(), timeZone }: { now?: Date; timeZone?: string } = {},
): Record<WorkshopStatus, CardTextOnlySection> => {
  const { future, past } = organizeWorkshops(workshops, now);
  const dateFormatter = makeWorkshopDateFormatter(timeZone);

  return {
    upcoming: makeWorkshopCardSection(section, future, dateFormatter),
    past: makeWorkshopCardSection(section, past, dateFormatter),
  };
};

export const makeButtonOutlineLink = (href: string, isExternal = true) => ({
  href,
  isExternal,
  className:
    "flex-justify width-full shadow-none text-light padding-y-2 border-1px border-base-lighter",
  variant: "button-outline" as const,
});

/** The lines to render for a metadata entry : the sidebar prints one per line. */
export const getMetadataValueLines = (entry: DatasetMetadataEntry): React.ReactNode[] => {
  if (!Array.isArray(entry.value)) return [entry.value];
  if (entry.delimiter === "\n") return entry.value;
  return [entry.value.join(entry.delimiter ?? " ")];
};

export const getMetadataFields = (metadata: DatasetMetadata): [string, DatasetMetadataEntry][] =>
  Object.entries(metadata.fields ?? {});

export const getTagsAsList = (tags: DatasetTagGroup[]) => {
  return tags.flatMap((tag) => tag.options);
};
export const getMetadataFieldTag = (metadata: DatasetMetadata, key: string): string | undefined => {
  const entry = metadata.fields?.[key];
  return entry && getMetadataValueLines(entry).join(" ");
};

export type CardMastheadPropsArgs = Omit<CardProps, "title" | "image"> & {
  mastheadImage: {
    alt: string;
    src: string;
  };
  title?: string;
  tagPrimary?: string;
};

export const makeCardMastHeadProps = ({
  mastheadImage,
  title,
  tagPrimary,
  ...rest
}: CardMastheadPropsArgs): CardProps => ({
  image: <AppImage {...mastheadImage} sizes="100vw" fill />,
  title: title,
  tag: tagPrimary
    ? {
        label: tagPrimary,
        variant: "solid" as const,
        bgColor: "base-lightest",
        textColor: "primary-dark",
      }
    : undefined,
  ...rest,
});

// CardDetailed renders a 200 × 400 px image region. Request enough source width
// for object-fit: cover when a thumbnail has not already been cropped to 1:2.
export const CARD_DETAILED_IMAGE_SIZES = "384px";

export type CardDetailedPropsArgs = Omit<
  CardDetailedProps,
  "image" | "imagePosition" | "tags" | "tagPrimary" | "callToAction"
> & {
  id: string;
  contentType: ContentType;
  thumbnailImage: {
    alt: string;
    src: string;
  };
  tags?: DatasetTagGroup[];
  tagPrimary?: string;
  url?: string;
};

export const makeCardDetailedImageLeftProps = ({
  id,
  contentType,
  thumbnailImage,
  tagPrimary,
  tags,
  url,
  title,
  ...rest
}: CardDetailedPropsArgs): IterableItemWithId<CardDetailedProps> => {
  const href = url ? url : `${CONTENT_TYPES[contentType].route}/${id}`;
  const tagsList = tags ? getTagsAsList(tags) : [];
  return {
    id,
    className: "height-card-md bg-base-lightest",
    image: <AppImage {...thumbnailImage} fill sizes={CARD_DETAILED_IMAGE_SIZES} />,
    imagePosition: "left",
    title: (
      <AppLinkStyled
        className="font-body-lg text-light"
        href={href}
        isExternal={!!url}
        variant="text"
      >
        {title}
      </AppLinkStyled>
    ),
    tags: tagsList.map((tag) => makeSimpleTag(tag)),
    tagPrimary: tagPrimary ? { ...makePrimaryTag(tagPrimary) } : undefined,
    ...rest,
  };
};

export type CardDetailedTextOnlyPropsArgs = Omit<
  CardDetailedProps,
  "imagePosition" | "title" | "callToAction" | "callToActionSecondary"
> & {
  id: string;
  title: string;
  href?: string;
  isExternal?: boolean;
};

export const makeCardDetailedTextOnlyProps = ({
  id,
  title,
  href,
  isExternal,
  description,
  tags,
  className,
  ...rest
}: CardDetailedTextOnlyPropsArgs): IterableItemWithId<CardDetailedProps> => ({
  id,
  className,
  title: (
    <>
      {href ? (
        <AppLinkStyled
          className="font-body-lg text-light"
          href={href}
          isExternal={isExternal}
          variant="text"
        >
          {title}
        </AppLinkStyled>
      ) : (
        <span className="font-body-lg text-light">{title}</span>
      )}
      {description && (
        <p className="font-body-xs text-base-dark text-light margin-0">{description}</p>
      )}
    </>
  ),
  tags,
  ...rest,
});

export type CardSimplePropsArgs = Omit<CardSimpleProps, "image" | "tag" | "isExternal" | "href"> & {
  id: string;
  contentType: ContentType;
  thumbnailImage: {
    alt: string;
    src: string;
  };
  tag?: string;
  url?: string;
};

export const makeCardSimpleProps = ({
  id,
  contentType,
  thumbnailImage,
  tag,
  url,
  ...rest
}: CardSimplePropsArgs): IterableItemWithId<CardSimpleProps> => ({
  id,
  image: <AppImage {...thumbnailImage} fill sizes="(max-width: 1400px) 100vw, 1400px" />,
  tag: tag // TODO update function to allow user to choose which tag should be rendered
    ? makeSimpleTag(tag)
    : makeContentTypeTag(contentType),
  href: url ? url : `${CONTENT_TYPES[contentType].route}/${id}`,
  isExternal: !!url,
  ...rest,
});
