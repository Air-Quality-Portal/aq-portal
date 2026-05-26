import {
  PageMasthead,
  Section,
  SectionCardCarousel,
  SectionCardSimple,
  SectionCardSimpleMosaic,
  SectionHeading,
} from "@/app/components/";
import { makeCardCarouselProps, makeCardSimpleProps } from "../site-config/content.helpers";
import {
  RESPOND_CONTENT,
  RESPOND_DATASTORIES,
  RESPOND_STORIES,
  RESPOND_TRAININGS,
} from "../site-config/theme/theme__respond";
import { typedMap } from "../site-config/typed.helpers";

export default function RespondPage() {
  const { title, theme, subtitle, mastheadImage } = RESPOND_CONTENT;

  return (
    <>
      <PageMasthead {...{ title, subtitle, theme, mastheadImage }} />
      <SectionCardSimpleMosaic
        sectionHeading={<SectionHeading href="/news-events">News & Events</SectionHeading>}
        cards={typedMap(RESPOND_STORIES, makeCardSimpleProps)}
      />
      {/* Data Visualization */}
      <Section>
        <SectionHeading>Data Visualization</SectionHeading>
        <p>TODO: Map block</p>
      </Section>
      <SectionCardSimple
        sectionHeading={<SectionHeading href="/training">Resources & Learning</SectionHeading>}
        cards={typedMap(RESPOND_TRAININGS, makeCardSimpleProps)}
      />
      <SectionCardCarousel
        sectionHeading={<SectionHeading href="/stories">Data Stories</SectionHeading>}
        cards={typedMap(RESPOND_DATASTORIES, makeCardCarouselProps)}
      />
    </>
  );
}
