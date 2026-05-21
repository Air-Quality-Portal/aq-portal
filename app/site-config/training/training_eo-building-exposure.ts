import type { TrainingContent } from "@/app/site-config/types";

export const eoBuildingExposure: TrainingContent = {
  id: "eo-building-exposure",
  contentType: "training",
  title:
    "Understanding EO-based Building Exposure Data: Application to Disaster Mitigation, Preparedness, Response and Recovery",
  description:
    "This module outlines the process of developing high-quality building exposure data and demonstrates how these datasets are strategically integrated into loss estimation to guide decision-making for emergency managers and planners.",
  thumbnailImage: {
    src: "/img/training/eo-building-exposure.webp",
    alt: "Los Angeles building exposure map showing building risk data across the city",
  },
  date: "2026-01-15",
  themes: ["recover", "prepare", "respond", "build"],
  categories: ["earthquake", "tropical cyclone"],
  heroImage: {
    src: "/img/training/eo-building-exposure.webp",
    alt: "Los Angeles building exposure map showing building risk data across the city",
  },
  body: [
    // ── Section 1 ────────────────────────────────────────────────────────────
    {
      type: "text",
      heading: "1. Building exposure data: an overview",
      paragraphs: [
        "Explains the purpose of building exposure data, how it is used, and its role in loss estimation. Reviews key stakeholders, use cases, and considerations for responsible application.",
      ],
    },
    {
      type: "note",
      text: "Recommended for: Educators, facilitators, planners, policy makers, emergency managers, GIS analysts, engineers, and researchers",
    },
    {
      type: "text",
      heading: "1.1 What is building exposure data",
      headingLevel: "h3",
      paragraphs: [
        "Explains the purpose of building exposure data, how it is used, and its role in loss estimation rather than as an end product. Clarifies that it is not building rendering data, but gridded building characteristics used for loss estimation. Presents examples to ground key concepts and introduces the key concepts of construction type, replacement cost, and building area.",
      ],
    },
    { type: "video", src: "" },
    {
      type: "text",
      heading: "1.2 From building exposure to decisions",
      headingLevel: "h3",
      paragraphs: [
        "Explains the use of loss estimation and CAT modeling to support decisions from planning and quantification to immediate response and recovery. Presents exposure as a key factor in the assessment of vulnerability and hazard to yield risk. Reviews key stakeholders such as NGOs, insurers, and governments and presents common uses for each. The benefit of more accurate exposure data is presented as a tool to reduce uncertainty, leading to opening of insurance markets and stabilizing economies. An assessment of Strengths, Weaknesses, Opportunities, and Threats (SWOT) introduces some key considerations.",
      ],
    },
    { type: "video", src: "" },
    {
      type: "text",
      heading: "1.3 Practical illustrations",
      headingLevel: "h3",
      paragraphs: [
        "Reviews two examples of building exposure data in use. One focuses on the Nepal earthquake, identifying distribution of casualties and impacts to support UNICEF outreach. The other covers a congressionally mandated study estimating the cost effectiveness of mitigation efforts which shape national policy and funding decisions.",
      ],
    },
    { type: "video", src: "" },
    {
      type: "text",
      heading: "1.4 GAIA — The Global Atlas of Infrastructure Assets",
      headingLevel: "h3",
      paragraphs: [
        "Presentation of GAIA, a global, gridded representation of the built environment. Highlights different attributes and discusses utility.",
      ],
    },
    { type: "video", src: "" },
    {
      type: "text",
      heading: "1.5 Levels of exposure data development",
      headingLevel: "h3",
      paragraphs: [
        "Introduces the five levels of building exposure data and why raw GIS data cannot be used directly without significant processing. Shows how the approach for development scales from global and national estimates down to aggregated and building-specific inputs, depending on the application. Uses Los Angeles to illustrate how these levels appear in terms of visual resolution.",
      ],
    },
    { type: "video", src: "" },
    {
      type: "text",
      heading: "1.6 Brief overview of exposure data development",
      headingLevel: "h3",
      paragraphs: [
        "Presents the process of integrating EO data, expert opinion and/or surveyed building attributes, and distribution of assets (population, building footprint, and replacement cost) to produce a gridded exposure database for loss modeling. Explains the role of EO at a global scale and uses Los Angeles to illustrate how development patterns are used to characterize the built environment. This discussion highlights key challenges in developing exposure data.",
      ],
    },
    { type: "video", src: "" },
    {
      type: "text",
      heading: "1.7 Limits, uncertainty, and how to use the data",
      headingLevel: "h3",
      paragraphs: [
        "Reviews inappropriate uses and decisions alongside appropriate applications. Shows that higher levels of exposure data do not necessarily improve accuracy, often due to overlooked readers such as replacement cost and building area. Uses research on Los Angeles and Kathmandu to illustrate how key exposure inputs alone can significantly shift estimates.",
      ],
    },
    { type: "video", src: "" },
    {
      type: "text",
      heading: "1.8 Using exposure data responsibly",
      headingLevel: "h3",
      paragraphs: [
        "Traces the insurance origins of loss estimation and examines how this perspective shapes what gets measured and ultimately who benefits. Shows how misperceptions surrounding data quality can substitute engineering judgment leading to unfair use of the results. Acknowledges that modeling is relatively simple, often overlooking the synergistic benefits of mitigation activities and the importance of a community perspective. Closes with suggestions to keep aware of potential consequences, advance research, and limit misuse.",
      ],
    },
    { type: "video", src: "" },

    // ── Section 2 ────────────────────────────────────────────────────────────
    {
      type: "text",
      heading: "2. The building exposure development process",
      paragraphs: [
        "The exposure development process is presented with a more in-depth look at the levels of building exposure data, a step-by-step guide to developing building exposure datasets, and how to ensure their quality.",
      ],
    },
    {
      type: "note",
      text: "Recommended for: GIS analysts, engineers, and researchers",
    },
    {
      type: "text",
      heading: "2.1 Understanding the levels of exposure data development: An in-depth review",
      headingLevel: "h3",
      paragraphs: [
        "Explains the five-tier hierarchy from global estimates to building-specific data and how development approach scales with application needs and available resources.",
      ],
    },
    { type: "video", src: "" },
    {
      type: "text",
      heading: "2.2 Making a building exposure dataset: A step-by-step approach",
      headingLevel: "h3",
      paragraphs: [
        "A step-by-step approach for building exposure development is provided using EO data from which development patterns are extracted and classified, correlated with building development patterns which are characterized statistically using expert opinion or sampling strategies, and distributing population, buildings, and replacement cost using various simulation approaches. The process of validation is also discussed.",
      ],
    },
    {
      type: "text",
      headingLevel: "h4",
      heading: "a) Establishing development patterns",
      paragraphs: [],
    },
    { type: "video", src: "" },
    {
      type: "text",
      headingLevel: "h4",
      heading: "b) Remote sensing classification: Techniques and applications",
      paragraphs: [],
    },
    { type: "video", src: "" },
    {
      type: "text",
      headingLevel: "h4",
      heading: "c) Developing mapping schemes and sampling protocols",
      paragraphs: [],
    },
    { type: "video", src: "" },
    {
      type: "text",
      headingLevel: "h4",
      heading: "d) Example: Costa Rica site surveys",
      paragraphs: [],
    },
    { type: "video", src: "" },
    {
      type: "text",
      headingLevel: "h4",
      heading: "e) Population, buildings, and replacement cost: Sources and challenges",
      paragraphs: [],
    },
    { type: "video", src: "" },
    {
      type: "text",
      headingLevel: "h4",
      heading: "f) Exposure modeling: Simulation approaches",
      paragraphs: [],
    },
    { type: "video", src: "" },
    {
      type: "text",
      headingLevel: "h4",
      heading: "g) Validation: Ensuring quality",
      paragraphs: [],
    },
    { type: "video", src: "" },

    // ── Section 3 ────────────────────────────────────────────────────────────
    {
      type: "text",
      heading: "3. Case Studies",
      paragraphs: [
        "Use cases illustrate the complexity of the decision-making process when exposure data is integrated into a project and how loss estimation can be used tactically for decision-making by emergency managers and planners.",
      ],
    },
    {
      type: "note",
      text: "Recommended for: Planners, policy makers, emergency managers, GIS analysts, engineers, and researchers",
    },
    {
      type: "text",
      heading: "3.1 Application to insurance and loss estimation: Tunisia",
      headingLevel: "h3",
      paragraphs: [
        "A demonstration of how exposure data supports loss estimation for insurance applications using an application from the World Bank. Uses Tunisia to illustrate how assets are characterized and losses estimated to inform pricing, underwriting, and risk transfer.",
      ],
    },
    { type: "video", src: "" },
    {
      type: "text",
      heading: "3.2 Infrastructure mitigation from coastal hazards: Antigua and Barbuda",
      headingLevel: "h3",
      paragraphs: [
        "A demonstration of how exposure data supports planning for coastal risk. Uses Antigua and Barbuda to illustrate how infrastructure exposure informs mitigation decisions and investment. Application for in-country risk managers.",
      ],
    },
    { type: "video", src: "" },
  ],
};
