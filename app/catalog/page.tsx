import { Paragraph } from "@/app/disasters-components/paragraph";
import { Section } from "@/app/disasters-components/section";
import { SectionHeader } from "@/app/disasters-components/section-header";
import { ThemeTag } from "@/app/disasters-components/theme-tags";

// biome-ignore lint/style/noDefaultExport: Next.js requires default export for pages
export default function CatalogPage() {
  return (
    <div className="grid-container padding-y-6">
      <h1 className="font-heading-2xl text-primary-dark margin-bottom-8">Component Catalog</h1>

      {/* Section */}
      <section className="margin-bottom-8">
        <h2 className="font-sans-xl text-base-dark border-bottom-2px border-base-light padding-bottom-2 margin-bottom-4">
          Section
        </h2>
        <div className="margin-bottom-4">
          <p className="font-sans-xs text-base margin-bottom-2">Default</p>
          <Section>
            <SectionHeader headline="Example Section Headline" />

            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ultricies lectus
              nec sapien tincidunt, a condimentum magna fringilla. Suspendisse fermentum risus
              metus, at fringilla nisl condimentum et. Nullam tincidunt est sit amet augue pharetra
              egestas. In hac habitasse platea dictumst. Ut eleifend magna dui, eget dictum dui
              dapibus at. Donec porta turpis urna, ut elementum arcu pellentesque in. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit. Etiam facilisis dui sed lectus congue,
              eget accumsan leo scelerisque. Quisque quis odio eu quam ultrices convallis a quis
              elit. Nam at ultricies metus. Vivamus quam nisi, blandit non accumsan ac, molestie at
              nisl. Duis condimentum nisl erat, in lacinia mi sagittis a. Duis at commodo ipsum.
              Nunc in dictum urna, sed molestie nisi. Donec vitae felis iaculis, sodales felis sed,
              tempus ipsum. Duis massa elit, finibus aliquet tortor vel, dignissim sagittis velit.
              Nam vestibulum est eget pellentesque euismod. Vestibulum quis turpis tellus. Nunc
              iaculis nunc sed risus mollis malesuada sodales nec tellus. Cras congue ultrices odio
              id tincidunt. Maecenas aliquam commodo ex, eget dignissim nunc finibus eget. Praesent
              sodales lacus urna, et varius sapien hendrerit ac. Donec tempus massa risus, dapibus
              facilisis odio eleifend sed. Mauris mattis est vitae ligula scelerisque, non rutrum
              diam blandit. Sed eleifend purus libero, non fermentum tortor sagittis ut. Fusce
              posuere consectetur purus sit amet pellentesque. Sed id mauris volutpat, malesuada
              eros in, rhoncus enim. Etiam eleifend efficitur gravida. Morbi libero metus,
              sollicitudin eget risus eget, pharetra cursus nulla. Donec eget metus nisl. Fusce ut
              pretium risus. Pellentesque posuere neque a semper sodales. Nullam lacinia, dui ut
              semper blandit, neque erat vehicula elit, et pellentesque libero erat et enim. Proin
              sed enim orci. Vivamus non aliquet ante, a blandit libero. Nunc mattis consequat
              porttitor. Donec dolor leo, feugiat sit amet gravida ac, facilisis in orci. Integer
              leo lacus, mollis non ultricies a, pretium at dui.
            </Paragraph>
          </Section>
        </div>
        <div>
          <p className="font-sans-xs text-base margin-bottom-2">greyBackground=true</p>
          <Section greyBackground>
            <SectionHeader headline="Example Section Headline" />

            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ultricies lectus
              nec sapien tincidunt, a condimentum magna fringilla. Suspendisse fermentum risus
              metus, at fringilla nisl condimentum et. Nullam tincidunt est sit amet augue pharetra
              egestas. In hac habitasse platea dictumst. Ut eleifend magna dui, eget dictum dui
              dapibus at. Donec porta turpis urna, ut elementum arcu pellentesque in. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit. Etiam facilisis dui sed lectus congue,
              eget accumsan leo scelerisque. Quisque quis odio eu quam ultrices convallis a quis
              elit. Nam at ultricies metus. Vivamus quam nisi, blandit non accumsan ac, molestie at
              nisl. Duis condimentum nisl erat, in lacinia mi sagittis a. Duis at commodo ipsum.
              Nunc in dictum urna, sed molestie nisi. Donec vitae felis iaculis, sodales felis sed,
              tempus ipsum. Duis massa elit, finibus aliquet tortor vel, dignissim sagittis velit.
              Nam vestibulum est eget pellentesque euismod. Vestibulum quis turpis tellus. Nunc
              iaculis nunc sed risus mollis malesuada sodales nec tellus. Cras congue ultrices odio
              id tincidunt. Maecenas aliquam commodo ex, eget dignissim nunc finibus eget. Praesent
              sodales lacus urna, et varius sapien hendrerit ac. Donec tempus massa risus, dapibus
              facilisis odio eleifend sed. Mauris mattis est vitae ligula scelerisque, non rutrum
              diam blandit. Sed eleifend purus libero, non fermentum tortor sagittis ut. Fusce
              posuere consectetur purus sit amet pellentesque. Sed id mauris volutpat, malesuada
              eros in, rhoncus enim. Etiam eleifend efficitur gravida. Morbi libero metus,
              sollicitudin eget risus eget, pharetra cursus nulla. Donec eget metus nisl. Fusce ut
              pretium risus. Pellentesque posuere neque a semper sodales. Nullam lacinia, dui ut
              semper blandit, neque erat vehicula elit, et pellentesque libero erat et enim. Proin
              sed enim orci. Vivamus non aliquet ante, a blandit libero. Nunc mattis consequat
              porttitor. Donec dolor leo, feugiat sit amet gravida ac, facilisis in orci. Integer
              leo lacus, mollis non ultricies a, pretium at dui.
            </Paragraph>
          </Section>
        </div>
      </section>

      {/* SectionHeader */}
      <section className="margin-bottom-8">
        <h2 className="font-sans-xl text-base-dark border-bottom-2px border-base-light padding-bottom-2 margin-bottom-4">
          SectionHeader
        </h2>
        <SectionHeader headline="Example Section Headline" />
        <SectionHeader headline="Another Headline" />
      </section>

      {/* Paragraph */}
      <section className="margin-bottom-8">
        <h2 className="font-sans-xl text-base-dark border-bottom-2px border-base-light padding-bottom-2 margin-bottom-4">
          Paragraph
        </h2>
        <Paragraph>
          This is a paragraph component. It renders body text styled with the project's font and
          color conventions.
        </Paragraph>
        <Paragraph>A second paragraph to show stacking behavior.</Paragraph>
      </section>

      {/* ThemeTag */}
      <section className="margin-bottom-8">
        <h2 className="font-sans-xl text-base-dark border-bottom-2px border-base-light padding-bottom-2 margin-bottom-4">
          ThemeTag
        </h2>
        <div className="display-flex flex-wrap grid-gap-2">
          <div>
            <p className="font-sans-xs text-base margin-bottom-1">respond</p>
            <ThemeTag theme="respond" />
          </div>
          <div>
            <p className="font-sans-xs text-base margin-bottom-1">build</p>
            <ThemeTag theme="build" />
          </div>
          <div>
            <p className="font-sans-xs text-base margin-bottom-1">prepare</p>
            <ThemeTag theme="prepare" />
          </div>
          <div>
            <p className="font-sans-xs text-base margin-bottom-1">recover</p>
            <ThemeTag theme="recover" />
          </div>
        </div>
      </section>
    </div>
  );
}
