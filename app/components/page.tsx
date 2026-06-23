import { Section, SectionCardSimple, SectionHeading } from "@/app/components/";
import { makeCardSimpleProps } from "../site-config/content.helpers";
import { NEWS_EVENTS_CARDS } from "../site-config/home/home-sectioncardmosaic-news-events";
import { typedMap } from "../site-config/typed.helpers";

export default function ComponentsPage() {
  return (
    <>
      <Section>
        <SectionHeading>Section Component & SectionHeading Component</SectionHeading>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eleifend nibh velit, a
          eleifend nunc egestas ac. Duis laoreet maximus magna quis tempus. Integer placerat orci
          quis arcu interdum, id consequat turpis consectetur. Vestibulum ullamcorper pulvinar nisl
          sit amet facilisis. Fusce id auctor libero, at lacinia justo. Suspendisse venenatis nibh
          id libero rutrum, et egestas eros ornare. In vel lacus in enim imperdiet ultrices. In
          blandit leo et vestibulum condimentum. Sed sagittis neque nisi, non egestas eros venenatis
          sed. Sed eget condimentum mi.
        </p>
        <p>
          Phasellus aliquam lorem ex, in tincidunt metus euismod ac. Sed at vehicula odio, eget
          euismod urna. Fusce ipsum ante, fringilla quis fermentum vitae, semper quis massa. Integer
          velit leo, fermentum et bibendum non, eleifend ac urna. Aliquam consectetur lacus et eros
          hendrerit, in faucibus turpis malesuada. Pellentesque odio lacus, vulputate aliquet orci
          non, pharetra egestas mauris. Etiam id vulputate arcu, a placerat quam. Donec vitae ligula
          faucibus, condimentum sem id, mollis nisi. Duis pulvinar elit sollicitudin orci venenatis,
          id lobortis nunc aliquam. Donec tincidunt enim at erat aliquet, sit amet consequat nunc
          rutrum. Curabitur at neque molestie felis egestas elementum at a velit. Integer ac erat
          vestibulum, vulputate augue vitae, maximus neque. Praesent malesuada fringilla blandit.
          Donec lobortis aliquam orci eget suscipit. Fusce vestibulum vel metus eget ultricies.
          Quisque ut tincidunt ante. Mauris faucibus erat vitae justo mattis dictum. Vivamus
          tincidunt et ante id hendrerit.
        </p>
        <code className="bg-base-lighter font-code-xs">
          {`<Section>
              <SectionHeading>Example Section Headline</SectionHeading>
              <p>
                Lorem ipsum dolor sit amet...
              </p>
            </Section>`}
        </code>
      </Section>
      <Section bgColor="base-lightest">
        <SectionHeading href="/">Section with bgColor and SectionHeading Component</SectionHeading>
        <p>Section content with grey background.</p>
        <code className="bg-base-lighter font-code-xs">
          {`<Section bgColor="base-lightest">
              <SectionHeading href="/">Example Section Headline</SectionHeading>
              <p>
                Lorem ipsum dolor sit amet...
              </p>
            </Section>`}
        </code>
      </Section>

      <SectionCardSimple
        sectionHeading={<SectionHeading>SectionCardSimple Component</SectionHeading>}
        cards={typedMap(NEWS_EVENTS_CARDS, makeCardSimpleProps)}
      >
        <p>Lorem ipsum dolor sit amet...</p>
        <code className="bg-base-lighter font-code-xs">
          {`<SectionCardSimple
              sectionHeading={<SectionHeading>SectionCardSimple Component</SectionHeading>}
              cards={typedMap(NEWS_EVENTS_CARDS, makeCardSimpleProps)}
            >
              <p>
                Lorem ipsum dolor sit amet...
              </p>
            </SectionCardSimple>`}
        </code>
      </SectionCardSimple>
    </>
  );
}
