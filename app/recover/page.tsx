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
  RECOVER_CONTENT,
  RECOVER_DATASTORIES,
  RECOVER_STORIES,
  RECOVER_TRAININGS,
} from "../site-config/theme/theme__recover";
import { typedMap } from "../site-config/typed.helpers";

export default function RecoverPage() {
  const { title, theme, subtitle, mastheadImage } = RECOVER_CONTENT;

  return (
    <>
      <PageMasthead {...{ title, subtitle, theme, mastheadImage }} />
      <SectionCardSimpleMosaic
        sectionHeading={<SectionHeading href="/news-events">News & Events</SectionHeading>}
        cards={typedMap(RECOVER_STORIES, makeCardSimpleProps)}
      />
      {/* Data Visualization */}
      <Section>
        <SectionHeading>Data Visualization</SectionHeading>
        <p>TODO: Map block</p>
      </Section>
      <SectionCardCarousel
        sectionHeading={<SectionHeading href="/stories">Data Stories</SectionHeading>}
        cards={typedMap(RECOVER_DATASTORIES, makeCardCarouselProps)}
      />
      <SectionCardSimple
        sectionHeading={<SectionHeading href="/training">Resources & Learning</SectionHeading>}
        cards={typedMap(RECOVER_TRAININGS, makeCardSimpleProps)}
      />
    </>
  );
}
