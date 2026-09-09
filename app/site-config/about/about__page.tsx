import type { ContentBlock } from "@/app/site-config/types";

export type AboutPageBody = {
  body: ContentBlock[];
};

export const ABOUT_PAGE_BODY: AboutPageBody = {
  body: [
    {
      type: "text",
      heading: "A Multi-Agency Platform for Integrating Air Quality Information",
      headingLevel: "h2",
      paragraphs: [
        "The Air-quality Information Resource for the United States (AIR4US) helps lower the barriers to integrate information between air-quality remote sensing observations, model outputs, and in-situ monitors. By streamlining air-quality data from multiple organizations, AIR4US brings critical data together in one unified location to help air quality management working at local to national scales. AIR4US also aims to develop new future data integration capabilities based on stakeholder priorities. ",
      ],
    },
    {
      type: "image",
      src: "https://espo.nasa.gov/sites/default/files/images/GSFC_20171208_Archive_e001386~large.jpg",
      alt: "",
      width: 600,
      height: 400,
      unoptimized: true,
    },

    {
      type: "text",
      heading: "Our Partners",
      headingLevel: "h2",
      paragraphs: [
        "AIR4US is a cross-agency effort working to create an impactful air-quality information system for data-driven decision making. Our primary collaborators and partners include federal scientific authorities such as NASA, the Environmental Protection Agency (EPA), and the National Oceanic and Atmospheric Administration (NOAA). Each contributor brings a unique air-quality data portfolio and expertise, which when combined, provide a comprehensive picture of past, current, and future air quality. ",
      ],
    },

    {
      type: "text",
      heading: "Technical Support and Stakeholder Network",
      headingLevel: "h3",
      paragraphs: [
        "Beyond these central agencies, the partnership draws vital technical integration and testing support from NASA’s Health and Air Quality Applied Sciences Team (HAQAST), specifically through a dedicated Tiger Team. The initiative connects AIR4US to a broad network of end-user stakeholders from the U.S. air-quality management community through its user engagement group.",
      ],
    },
    {
      type: "text",
      heading: "Feedback",
      headingLevel: "h2",
      paragraphs: [
        "Your input is essential to helping us continuously improve the AIR4US platform. As we expand our services, data visualization tools, and capacity-building efforts, we welcome your suggestions, bug reports, and feature requests. Please reach out to {placeholder} to share your thoughts and ensure the platform meets your community’s needs.",
      ],
    },

    {
      type: "text",
      heading: "Contact",
      headingLevel: "h2",
      paragraphs: [
        "Have questions about the AIR4US Portal, its datasets, or how to get involved? Reach out to the team below.",
      ],
    },
  ],
};
