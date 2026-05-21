import { InPageNavigation } from "@trussworks/react-uswds";
import Image from "next/image";
import {
  PageStatus,
  Section,
  SectionCardCarousel,
  SectionCardSimple,
  SectionHeading,
} from "@/app/components/";
import { STORIES_BY_ID } from "@/app/site-config/stories";
import type {
  InnerContentBlock,
  StoryContentBlock,
  StoryPageData,
} from "@/app/site-config/stories/types";

/** Renders inner blocks — no <Section> wrapper, used inside a SectionContainerBlock */
function InnerBlockRenderer({ block }: { block: InnerContentBlock }) {
  if (block.component === "prose") {
    return <div>{block.content}</div>;
  }

  if (block.component === "image") {
    return (
      <figure className="margin-0">
        <div className="position-relative height-card-lg">
          <Image src={block.src} alt={block.alt} fill className="object-fit-cover" />
        </div>
        {block.caption && (
          <figcaption className="font-body-xs text-base-dark margin-top-1">
            {block.caption}
          </figcaption>
        )}
      </figure>
    );
  }

  if (block.component === "section-heading") {
    return <SectionHeading>{block.text}</SectionHeading>;
  }

  return null;
}

/** Renders top-level story body blocks */
function ContentBlockRenderer({ block }: { block: StoryContentBlock }) {
  if (block.component === "section") {
    return (
      <Section bgColor={block.bgColor}>
        {block.children.map((child, index) => (
          // biome-ignore lint/suspicious/noArrayIndexKey: inner blocks have no stable key
          <InnerBlockRenderer key={index} block={child} />
        ))}
      </Section>
    );
  }

  if (block.component === "card-carousel") {
    return <SectionCardCarousel sectionHeading={block.heading} cards={block.cards} />;
  }

  if (block.component === "card-simple") {
    return <SectionCardSimple sectionHeading={block.heading} cards={block.cards} />;
  }

  return null;
}

function StoryBody({ story }: { story: StoryPageData }) {
  if (!story.body?.length) return null;

  return (
    <>
      {story.body.map((block, index) => (
        // biome-ignore lint/suspicious/noArrayIndexKey: content blocks have no stable key
        <ContentBlockRenderer key={index} block={block} />
      ))}
    </>
  );
}

export default async function StoriesItemPage(props: PageProps<"/stories/[id]">) {
  const { id } = await props.params;

  const story = STORIES_BY_ID[id];

  if (!story) {
    return (
      <PageStatus
        label={`Stories Item: ${id}`}
        heading="Under development"
        description="The page you're looking for is under development."
      />
    );
  }

  return (
    <div className="grid-container">
      <div className="grid-row">
        <aside className="grid-col-2">
          {/* //THIS COMPONENT SHOULD BE ELEVATED to reusable  */}
          <div></div>
          <div className="usa-in-page-nav-container">
            <InPageNavigation
              contentSelector="#page-main-content"
              headingElements={["h2"]}
              content={<h3>On this page</h3>}
              title="On this page"
            />
          </div>
        </aside>

        <div id="page-main-content" className="grid-col-10">
          <StoryBody story={story} />
        </div>
      </div>
    </div>
  );
}
