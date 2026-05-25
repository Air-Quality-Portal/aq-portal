import { DEFAULT_STAC_CONFIG } from "@/app/site-config/map";
import type { DatasetContent } from "@/app/site-config/types";

export const DATASET__BLACKMARBLE_JUNE2026_COMPOSITE: DatasetContent = {
  id: "blackmarble-composite",
  contentType: "dataset",
  title: "Black Marble HD: Monthly Composite",
  description:
    "NASA Black Marble monthly composite of nighttime lights for January 2024. Provides a pre-event baseline for before/after disaster comparisons.",
  thumbnailImage: {
    src: "/img/logo-emblem.svg",
    alt: "Black Marble monthly composite nighttime lights",
  },
  themes: ["prepare", "respond"],
  categories: ["tropical cyclone"],
  body: [
    {
      type: "text",
      heading: "Lorem ipsum dolor sit amet consectetur adipiscing",
      headingLevel: "h3",
      paragraphs: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
      ],
    },
    {
      type: "stacSingleLayer",
      stacLayer: {
        ...DEFAULT_STAC_CONFIG,
        type: "raster",
        collectionId: "blackmarble-june2026-composite",
        dateRange: { from: "2024-08-01", to: "2024-08-31" },
      },
    },
    {
      type: "text",
      heading: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur",
      headingLevel: "h3",
      paragraphs: [
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus temporibusque autem quibusdam.",
      ],
    },
    {
      type: "text",
      heading: "Quis autem vel eum iure reprehenderit qui in ea voluptate",
      headingLevel: "h3",
      paragraphs: [
        "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur sed quia consequuntur magni dolores eos qui ratione sequi nesciunt.",
      ],
    },
  ],
};
