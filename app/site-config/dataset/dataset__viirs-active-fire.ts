import { DEFAULT_STAC_CONFIG } from "@/app/site-config/map";
import type { DatasetContent } from "@/app/site-config/types";

export const DATASET__VIIRS_ACTIVE_FIRE: DatasetContent = {
  id: "viirs-active-fire",
  contentType: "dataset",
  title: "VIIRS Active Fire Detection",
  description:
    "NASA VIIRS (Visible Infrared Imaging Radiometer Suite) active fire detections derived from 375m thermal anomaly data. Near real-time fire locations for situational awareness and post-event impact assessment.",
  thumbnailImage: {
    src: "/img/logo-emblem.svg",
    alt: "VIIRS active fire detection",
  },
  themes: ["respond", "prepare"],
  categories: ["fire"],
  relatedContent: ["blackmarble-hd-daily", "blackmarble-composite"],
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
        collectionId: "viirs-active-fire",
        dateRange: { from: "2024-09-28", to: "2024-09-28" },
      },
    },
    {
      type: "text",
      heading: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur",
      headingLevel: "h3",
      paragraphs: [
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.",
        "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
      ],
    },
    {
      type: "text",
      heading: "Quis autem vel eum iure reprehenderit qui in ea voluptate",
      headingLevel: "h3",
      paragraphs: [
        "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
      ],
    },
  ],
};
