import { Children, isValidElement, type ReactElement, type ReactNode } from "react";
import { describe, expect, it } from "vitest";
import { AppLinkStyled } from "@/app/components/AppLink";
import type { CardTextOnlySection, WorkshopItem, WorkshopSection } from "@/app/site-config/types";
import {
  makeCardDetailedImageLeftProps,
  makeCardDetailedTextOnlyProps,
  makeCardMastHeadProps,
  makeContentTypeTag,
  makePrimaryTag,
  makeSimpleTag,
  makeTutorialLevelTag,
  makeWorkshopCardSections,
} from "./content.helpers";

const makeWorkshop = (
  id: string,
  startDate: string,
  overrides: Partial<WorkshopItem> = {},
): WorkshopItem => ({
  id,
  title: `Workshop ${id}`,
  href: `/workshops/${id}`,
  startDate,
  callToActions: {},
  ...overrides,
});

describe("Tag makers", () => {
  describe("makePrimaryTag", () => {
    it("creates a primary tag with correct properties", () => {
      const tag = makePrimaryTag("NASA");
      expect(tag.label).toBe("NASA");
      expect(tag.variant).toBe("solid");
      expect(tag.bgColor).toBe("base-lightest");
      expect(tag.textColor).toBe("primary-dark");
    });

    it("preserves tag text exactly", () => {
      const tag = makePrimaryTag("EPA/NOAA");
      expect(tag.label).toBe("EPA/NOAA");
    });

    it("handles tags with special characters", () => {
      const tag = makePrimaryTag("PM2.5");
      expect(tag.label).toBe("PM2.5");
    });
  });

  describe("makeSimpleTag", () => {
    it("creates a simple tag with correct properties", () => {
      const tag = makeSimpleTag("Air Quality");
      expect(tag.label).toBe("Air Quality");
      expect(tag.variant).toBe("outline");
      expect(tag.color).toBe("base-light");
    });
  });

  describe("makeTutorialLevelTag", () => {
    it("creates beginner tag with correct casing and colors", () => {
      const tag = makeTutorialLevelTag("beginner");
      expect(tag.label).toBe("BEGINNER");
      expect(tag.color).toBe("success-lighter");
      expect(tag.textColor).toBe("success-darker");
    });

    it("creates intermediate tag with correct casing and colors", () => {
      const tag = makeTutorialLevelTag("intermediate");
      expect(tag.label).toBe("INTERMEDIATE");
      expect(tag.variant).toBe("solid");
      expect(tag.color).toBe("info-lighter");
      expect(tag.textColor).toBe("info-darker");
    });

    it("creates advanced tag with correct casing and colors", () => {
      const tag = makeTutorialLevelTag("advanced");
      expect(tag.label).toBe("ADVANCED");
      expect(tag.color).toBe("secondary-lighter");
      expect(tag.textColor).toBe("secondary-darker");
    });
  });

  describe("makeContentTypeTag", () => {
    it("creates a tag for dataset content type", () => {
      const tag = makeContentTypeTag("dataset");
      expect(tag.label).toEqual("product");
      expect(tag.variant).toBe("solid");
      expect(tag.color).toBe("base-light");
    });
  });
});

describe("Card props helpers", () => {
  it("renders an unlinked title with matching typography but no click target", () => {
    const card = makeCardDetailedTextOnlyProps({
      id: "unlinked-workshop",
      title: "Unlinked workshop",
    });
    expect(isValidElement<{ children: ReactNode }>(card.title)).toBe(true);
    if (!isValidElement<{ children: ReactNode }>(card.title)) return;

    const [title] = Children.toArray(card.title.props.children);
    expect(isValidElement<{ className: string; href?: string }>(title)).toBe(true);
    if (!isValidElement<{ className: string; href?: string }>(title)) return;

    expect(title.type).toBe("span");
    expect(title.props).toMatchObject({
      className: "font-body-lg text-light",
      children: "Unlinked workshop",
    });
    expect(title.props.href).toBeUndefined();
  });

  it("renders a linked title that carries the href and external flag", () => {
    const card = makeCardDetailedTextOnlyProps({
      id: "linked-workshop",
      title: "Linked workshop",
      href: "https://example.com/workshop",
      isExternal: true,
    });
    expect(isValidElement<{ children: ReactNode }>(card.title)).toBe(true);
    if (!isValidElement<{ children: ReactNode }>(card.title)) return;

    const [title] = Children.toArray(card.title.props.children);
    expect(isValidElement(title)).toBe(true);
    if (!isValidElement(title)) return;

    expect(title.type).toBe(AppLinkStyled);
    expect(title.props).toMatchObject({
      className: "font-body-lg text-light",
      href: "https://example.com/workshop",
      isExternal: true,
      variant: "text",
      children: "Linked workshop",
    });
  });

  it("renders the description below the title", () => {
    const card = makeCardDetailedTextOnlyProps({
      id: "described-workshop",
      title: "Described workshop",
      description: "What the workshop covers",
    });
    expect(isValidElement<{ children: ReactNode }>(card.title)).toBe(true);
    if (!isValidElement<{ children: ReactNode }>(card.title)) return;

    const [, description] = Children.toArray(card.title.props.children);
    expect(isValidElement(description)).toBe(true);
    if (!isValidElement(description)) return;

    expect(description.type).toBe("p");
    expect(description.props).toMatchObject({ children: "What the workshop covers" });
  });
});

describe("Workshop helpers", () => {
  const now = new Date("2026-06-15T12:00:00Z");

  const sectionsFor = (workshops: WorkshopItem[], section: Partial<WorkshopSection> = {}) =>
    makeWorkshopCardSections({ ...section, workshops }, { now, timeZone: "UTC" });

  const idsOf = ({ items }: CardTextOnlySection) => items.map(({ id }) => id);

  describe("ordering", () => {
    it("sorts upcoming workshops nearest first and past workshops most recent first", () => {
      const futureLater = makeWorkshop("future-later", "2026-08-01T12:00:00Z");
      const pastEarlier = makeWorkshop("past-earlier", "2026-04-01T12:00:00Z");
      const futureSooner = makeWorkshop("future-sooner", "2026-07-01T12:00:00Z");
      const pastLater = makeWorkshop("past-later", "2026-05-01T12:00:00Z");

      const result = sectionsFor([futureLater, pastEarlier, futureSooner, pastLater]);

      expect(idsOf(result.upcoming)).toEqual(["future-sooner", "future-later"]);
      expect(idsOf(result.past)).toEqual(["past-later", "past-earlier"]);
    });

    it("treats a workshop with no end as past once it has started", () => {
      const startingNow = makeWorkshop("starting-now", "2026-06-15T12:00:00Z");
      const startedEarlier = makeWorkshop("started-earlier", "2026-06-15T11:59:59Z");

      const result = sectionsFor([startingNow, startedEarlier]);

      expect(idsOf(result.upcoming)).toEqual(["starting-now"]);
      expect(idsOf(result.past)).toEqual(["started-earlier"]);
    });

    it("keeps a running workshop out of the past until its end date passes", () => {
      const running = makeWorkshop("running", "2026-06-14T12:00:00Z", {
        endDate: "2026-06-16T12:00:00Z",
      });
      const justEnded = makeWorkshop("just-ended", "2026-06-10T12:00:00Z", {
        endDate: "2026-06-15T11:59:59Z",
      });

      const result = sectionsFor([running, justEnded]);

      expect(idsOf(result.upcoming)).toEqual(["running"]);
      expect(idsOf(result.past)).toEqual(["just-ended"]);
    });

    it("lists a running workshop ahead of upcoming ones and sorts past ones by end date", () => {
      const running = makeWorkshop("running", "2026-06-14T12:00:00Z", {
        endDate: "2026-06-16T12:00:00Z",
      });
      const upcoming = makeWorkshop("upcoming", "2026-07-01T12:00:00Z");
      const startedFirstEndedLast = makeWorkshop("ended-last", "2026-04-01T12:00:00Z", {
        endDate: "2026-06-01T12:00:00Z",
      });
      const startedLastEndedFirst = makeWorkshop("ended-first", "2026-05-01T12:00:00Z");

      const result = sectionsFor([upcoming, startedLastEndedFirst, running, startedFirstEndedLast]);

      expect(idsOf(result.upcoming)).toEqual(["running", "upcoming"]);
      expect(idsOf(result.past)).toEqual(["ended-last", "ended-first"]);
    });

    it("keeps workshops sharing a date in the order they were authored", () => {
      const futureFirst = makeWorkshop("future-first", "2026-07-01T12:00:00Z");
      const pastFirst = makeWorkshop("past-first", "2026-05-01T12:00:00Z");
      const futureSecond = makeWorkshop("future-second", "2026-07-01T12:00:00Z");
      const pastSecond = makeWorkshop("past-second", "2026-05-01T12:00:00Z");

      const result = sectionsFor([futureFirst, pastFirst, futureSecond, pastSecond]);

      expect(idsOf(result.upcoming)).toEqual(["future-first", "future-second"]);
      expect(idsOf(result.past)).toEqual(["past-first", "past-second"]);
    });

    it("omits start dates that are not exact UTC instants", () => {
      const impossibleDate = makeWorkshop("impossible-date", "2026-02-30T12:00:00Z");
      const offsetTimestamp = makeWorkshop("offset", "2026-07-01T12:00:00+01:00");
      const missingSeconds = makeWorkshop("missing-seconds", "2026-07-01T12:00Z");
      const dateOnly = makeWorkshop("date-only", "2026-07-01");
      const prose = makeWorkshop("prose", "Summer 2026");

      const result = sectionsFor([
        impossibleDate,
        offsetTimestamp,
        missingSeconds,
        dateOnly,
        prose,
      ]);

      expect(idsOf(result.upcoming)).toEqual([]);
      expect(idsOf(result.past)).toEqual([]);
    });

    it("omits a workshop whose end date is unparseable or before its start date", () => {
      const unparseableEnd = makeWorkshop("unparseable-end", "2026-05-01T12:00:00Z", {
        endDate: "2026-05-03",
      });
      const emptyEnd = makeWorkshop("empty-end", "2026-05-01T12:00:00Z", { endDate: "" });
      const backwardsEnd = makeWorkshop("backwards-end", "2026-05-02T12:00:00Z", {
        endDate: "2026-04-01T12:00:00Z",
      });
      const usableEnd = makeWorkshop("usable-end", "2026-05-02T12:00:00Z", {
        endDate: "2026-05-04T12:00:00Z",
      });

      const result = sectionsFor([unparseableEnd, emptyEnd, backwardsEnd, usableEnd]);

      expect(idsOf(result.upcoming)).toEqual([]);
      expect(idsOf(result.past)).toEqual(["usable-end"]);
    });
  });

  describe("card content", () => {
    it("uses registration actions for upcoming workshops and recordings for past workshops", () => {
      const section: WorkshopSection = {
        heading: "Workshops",
        workshops: [
          makeWorkshop("future", "2026-07-01T12:00:00Z", {
            href: "https://example.com/future",
            tags: ["WEBINAR"],
            callToActions: {
              registration: { label: "Register", href: "https://example.com/register" },
              recording: { label: "Recording", href: "https://example.com/future-recording" },
            },
          }),
          makeWorkshop("past", "2026-05-01T12:00:00Z", {
            callToActions: {
              registration: { label: "Register", href: "/closed" },
              recording: { label: "Watch recording", href: "/recordings/past" },
            },
          }),
        ],
      };

      const result = makeWorkshopCardSections(section, { now, timeZone: "UTC" });

      expect(result.upcoming.items[0]).toMatchObject({
        id: "future",
        isExternal: true,
        callToAction: {
          label: "Register",
          href: "https://example.com/register",
          isExternal: true,
        },
      });
      expect(result.past.items[0]).toMatchObject({
        id: "past",
        callToAction: {
          label: "Watch recording",
          href: "/recordings/past",
          isExternal: false,
        },
      });
      expect(result.upcoming.items[0].tags?.map(({ label }) => label)).toEqual([
        "July 1, 2026",
        "WEBINAR",
      ]);
      expect(result.upcoming.items[0].tagPrimary).toBeUndefined();
      expect(result.past.items[0].tags?.map(({ label }) => label)).toEqual(["May 1, 2026"]);
      expect(result.past.items[0].tagPrimary).toMatchObject({ label: "PAST" });
    });

    it("labels a multi-day workshop with its date range", () => {
      const section: WorkshopSection = {
        workshops: [
          makeWorkshop("same-day", "2026-07-01T12:00:00Z", { endDate: "2026-07-01T20:00:00Z" }),
          makeWorkshop("same-month", "2026-07-06T12:00:00Z", { endDate: "2026-07-08T20:00:00Z" }),
          makeWorkshop("across-months", "2026-07-30T12:00:00Z", {
            endDate: "2026-08-02T20:00:00Z",
          }),
        ],
      };

      const result = makeWorkshopCardSections(section, { now, timeZone: "UTC" });

      // Intl separates a range with thin spaces around an en dash.
      expect(result.upcoming.items.map(({ tags }) => tags?.[0].label)).toEqual([
        "July 1, 2026",
        "July 6\u2009\u2013\u20098, 2026",
        "July 30\u2009\u2013\u2009August 2, 2026",
      ]);
    });

    it("labels dates in the visitor's time zone", () => {
      const section: WorkshopSection = {
        workshops: [
          // 9 PM on June 30 in New York, already July 1 in UTC.
          makeWorkshop("evening-us", "2026-07-01T01:00:00Z", { endDate: "2026-07-01T03:00:00Z" }),
        ],
      };

      const labelIn = (timeZone: string) =>
        makeWorkshopCardSections(section, { now, timeZone }).upcoming.items[0].tags?.[0].label;

      expect(labelIn("UTC")).toBe("July 1, 2026");
      expect(labelIn("America/New_York")).toBe("June 30, 2026");
    });

    it("marks a running workshop CURRENT and keeps its registration action", () => {
      const section: WorkshopSection = {
        workshops: [
          makeWorkshop("running", "2026-06-14T23:30:00Z", {
            endDate: "2026-06-16T12:00:00Z",
            tags: ["IN-PERSON WORKSHOP"],
            callToActions: {
              registration: { label: "Register", href: "https://example.com/register" },
            },
          }),
        ],
      };

      const result = makeWorkshopCardSections(section, { now, timeZone: "UTC" });
      const [item] = result.upcoming.items;

      expect(item.tags?.map(({ label }) => label)).toEqual([
        "June 14\u2009\u2013\u200916, 2026",
        "IN-PERSON WORKSHOP",
      ]);
      expect(item.tagPrimary).toMatchObject({ label: "CURRENT" });
      expect(item.callToAction).toMatchObject({ label: "Register" });
    });

    it("trims detail hrefs and treats whitespace-only hrefs as unavailable", () => {
      const section: WorkshopSection = {
        workshops: [
          makeWorkshop("linked", "2026-07-01T12:00:00Z", {
            href: "  https://example.com/workshop  ",
          }),
          makeWorkshop("unlinked", "2026-08-01T12:00:00Z", { href: "  " }),
        ],
      };

      const result = makeWorkshopCardSections(section, { now, timeZone: "UTC" });

      expect(result.upcoming.items[0]).toMatchObject({
        href: "https://example.com/workshop",
        isExternal: true,
      });
      expect(result.upcoming.items[1]).toMatchObject({ href: undefined, isExternal: false });
    });

    it("does not show a past workshop's registration action", () => {
      const section: WorkshopSection = {
        workshops: [
          makeWorkshop("past", "2026-05-01T12:00:00Z", {
            callToActions: { registration: { label: "Register", href: "/closed" } },
          }),
        ],
      };

      const result = makeWorkshopCardSections(section, { now, timeZone: "UTC" });

      expect(result.past.items[0].callToAction).toBeUndefined();
    });

    it("supports workshops without a detail href and omits unavailable actions", () => {
      const section: WorkshopSection = {
        workshops: [
          makeWorkshop("future", "2026-07-01T12:00:00Z", {
            href: undefined,
            callToActions: { registration: { label: "Register", href: "  " } },
          }),
          makeWorkshop("past", "2026-05-01T12:00:00Z"),
        ],
      };

      const result = makeWorkshopCardSections(section, { now, timeZone: "UTC" });

      expect(result.upcoming.items[0]).toMatchObject({ href: undefined, isExternal: false });
      expect(result.upcoming.items[0].callToAction).toBeUndefined();
      expect(result.past.items[0].callToAction).toBeUndefined();
    });
  });
});

describe("makeCardMastHeadProps", () => {
  const mastheadImage = { src: "/img/masthead.webp", alt: "A map" };

  /*
   * CardDetailed only supplies the `h2.blocks-card__title` wrapper when `title`
   * is a string; anything else it renders raw into the flex column, so a
   * formatted title has to carry that heading itself or its pieces stack.
   */
  it("keeps a formatted title inside a single card heading element", () => {
    const { title } = makeCardMastHeadProps({
      mastheadImage,
      title: "AQM O3 and PM2.5 Forecasts",
    });

    expect(isValidElement(title)).toBe(true);
    const heading = title as ReactElement<{ className?: string }>;
    expect(heading.type).toBe("h2");
    expect(heading.props.className).toBe("blocks-card__title");
  });
});

describe("card descriptions", () => {
  /*
   * veda-ui-blocks 0.1.0-beta.20 widened the card `description` prop to
   * `string | ReactElement`, so descriptions can carry subscript markup
   * rather than printing their pollutant symbols flat.
   */
  it("formats pollutant symbols in a detailed card description", () => {
    const { description } = makeCardDetailedImageLeftProps({
      id: "naqfc",
      contentType: "dataset",
      title: "NAQFC",
      description: "Forecast guidance for surface ozone (O3) and PM2.5",
      thumbnailImage: { src: "/img/card.webp", alt: "A map" },
    });

    expect(isValidElement(description)).toBe(true);
  });

  it("leaves a description without pollutants as a plain string", () => {
    const { description } = makeCardDetailedImageLeftProps({
      id: "aqs",
      contentType: "dataset",
      title: "AQS",
      description: "Validated hourly average pollutant data",
      thumbnailImage: { src: "/img/card.webp", alt: "A map" },
    });

    expect(description).toBe("Validated hourly average pollutant data");
  });
});
