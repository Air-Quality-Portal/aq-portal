import {
  ContentBlockRenderer,
  PageMasthead,
  SectionCardCarousel,
  SectionCardSimple,
  SectionCardSimpleMosaic,
  SectionHeading,
} from "@/app/components/";
import {
  makeCardCarouselProps,
  makeCardMastHeadProps,
  makeCardSimpleProps,
} from "../site-config/content.helpers";
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
      <PageMasthead {...makeCardMastHeadProps({ title, subtitle, theme, mastheadImage })} />
      <SectionCardSimpleMosaic
        sectionHeading={<SectionHeading href="/news-events">Stories of Impact</SectionHeading>}
        cards={typedMap(RECOVER_STORIES, makeCardSimpleProps)}
      />
      {RECOVER_CONTENT.body.map((block, index) => (
        // biome-ignore lint/suspicious/noArrayIndexKey: static content, never reorders
        <ContentBlockRenderer key={index} block={block} />
      ))}
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
