import {
  ContentBlockRenderer,
  PageMasthead,
  SectionCardCarousel,
  SectionCardSimple,
  SectionCardSimpleMosaic,
  SectionHeading,
} from "@/app/components/";
import { SectionCardMini } from "../components/SectionCardMini";
import {
  makeCardCarouselProps,
  makeCardMastHeadProps,
  makeCardSimpleProps,
} from "../site-config/content.helpers";
import { transformEventToCardMiniProps } from "../site-config/event/event.helpers";
import {
  RESPOND_CONTENT,
  RESPOND_DATASTORIES,
  RESPOND_EVENTS,
  RESPOND_STORIES,
  RESPOND_TRAININGS,
} from "../site-config/theme/theme__respond";
import { typedMap } from "../site-config/typed.helpers";

export default function RespondPage() {
  const { title, theme, subtitle, mastheadImage } = RESPOND_CONTENT;

  return (
    <>
      <PageMasthead {...makeCardMastHeadProps({ title, subtitle, theme, mastheadImage })} />
      <SectionCardSimpleMosaic
        sectionHeading={<SectionHeading href="/news-events">Stories of Impact</SectionHeading>}
        cards={typedMap(RESPOND_STORIES, makeCardSimpleProps)}
      />
      {RESPOND_CONTENT.body.map((block, index) => (
        // biome-ignore lint/suspicious/noArrayIndexKey: static content, never reorders
        <ContentBlockRenderer key={index} block={block} />
      ))}
      <SectionCardMini
        sectionHeading={<SectionHeading href="/events">Latest Disaster Activations</SectionHeading>}
        cards={typedMap(RESPOND_EVENTS, transformEventToCardMiniProps)}
      />
      <SectionCardCarousel
        sectionHeading={<SectionHeading href="/stories">Data Stories</SectionHeading>}
        cards={typedMap(RESPOND_DATASTORIES, makeCardCarouselProps)}
      />
      <SectionCardSimple
        sectionHeading={<SectionHeading href="/training">Resources & Learning</SectionHeading>}
        cards={typedMap(RESPOND_TRAININGS, makeCardSimpleProps)}
      />
    </>
  );
}
