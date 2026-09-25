import { isValidElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import { formatPollutants, formatPollutantsIn } from "./pollutants.helpers";

/** Renders the formatter's output so assertions read as the markup users get. */
const markup = (text: string) => renderToStaticMarkup(formatPollutants(text));

describe("formatPollutants", () => {
  it("subscripts the decimal figure in PM2.5", () => {
    expect(markup("PM2.5")).toBe("<span>PM<sub>2.5</sub></span>");
  });

  it("subscripts PM10", () => {
    expect(markup("PM10")).toBe("<span>PM<sub>10</sub></span>");
  });

  it("subscripts NO2", () => {
    expect(markup("NO2")).toBe("<span>NO<sub>2</sub></span>");
  });

  it("subscripts O3", () => {
    expect(markup("O3")).toBe("<span>O<sub>3</sub></span>");
  });

  it("subscripts SO2", () => {
    expect(markup("SO2")).toBe("<span>SO<sub>2</sub></span>");
  });

  it("subscripts CO2", () => {
    expect(markup("CO2")).toBe("<span>CO<sub>2</sub></span>");
  });

  it("leaves symbols that carry no figure alone", () => {
    expect(markup("CO and HCHO")).toBe("CO and HCHO");
  });

  it("keeps the surrounding prose intact", () => {
    expect(markup("Surface Ozone (O3) Concentration")).toBe(
      "<span>Surface Ozone (O<sub>3</sub>) Concentration</span>",
    );
  });

  it("subscripts every occurrence in a sentence", () => {
    expect(markup("PM10, PM2.5, O3, CO, NO2, and SO2 were added")).toBe(
      "<span>PM<sub>10</sub>, PM<sub>2.5</sub>, O<sub>3</sub>, CO, NO<sub>2</sub>, and SO<sub>2</sub> were added</span>",
    );
  });

  it("does not touch a symbol embedded in a DOI", () => {
    expect(markup("https://doi.org/10.5067/IS-40E/TEMPO/NO2_L3.004")).toBe(
      "https://doi.org/10.5067/IS-40E/TEMPO/NO2_L3.004",
    );
  });

  it("does not touch a symbol embedded in a filename", () => {
    expect(markup("GCHP_C720_O3_Frame.png")).toBe("GCHP_C720_O3_Frame.png");
  });

  it("does not touch a lowercase symbol inside a query parameter", () => {
    expect(markup("?field=no2sfc")).toBe("?field=no2sfc");
  });

  it("does not split a longer figure that merely starts with a known one", () => {
    expect(markup("PM2.55")).toBe("PM2.55");
  });

  describe("content already written with Unicode subscripts", () => {
    it("re-renders PM₂.₅ as markup", () => {
      expect(markup("PM₂.₅")).toBe("<span>PM<sub>2.5</sub></span>");
    });

    it("re-renders NO₂ as markup", () => {
      expect(markup("NO₂")).toBe("<span>NO<sub>2</sub></span>");
    });

    it("re-renders O₃ and PM₁₀ in a heading", () => {
      expect(markup("AQM O₃ and PM₁₀ Forecasts")).toBe(
        "<span>AQM O<sub>3</sub> and PM<sub>10</sub> Forecasts</span>",
      );
    });

    it("leaves subscripts belonging to other formulae as they were", () => {
      expect(markup("dissolved in H₂O")).toBe("dissolved in H₂O");
    });
  });
});

describe("layout safety", () => {
  /*
   * Titles render inside `.blocks-link` (inline-flex, gap) and `.blocks-card__content`
   * (flex column). A bare array would make every text run its own flex item, so the
   * words scatter. One element keeps the whole title as a single item.
   */
  it("returns a single element rather than a list of nodes", () => {
    const result = formatPollutants("AQM O3 and PM2.5 Forecasts");
    expect(Array.isArray(result)).toBe(false);
    expect(isValidElement(result)).toBe(true);
  });

  it("still returns a bare string when there is nothing to format", () => {
    expect(formatPollutants("Air Quality System")).toBe("Air Quality System");
  });
});

describe("formatPollutantsIn", () => {
  /*
   * Several content fields are typed `ReactNode` so an author can reach for JSX.
   * Only the plain-string case can be formatted; anything already built as nodes
   * passes through so its markup survives.
   */
  it("formats a plain string child", () => {
    expect(renderToStaticMarkup(formatPollutantsIn("Surface NO2"))).toBe(
      "<span>Surface NO<sub>2</sub></span>",
    );
  });

  it("passes an authored node through untouched", () => {
    const authored = <em>Surface NO2</em>;
    expect(formatPollutantsIn(authored)).toBe(authored);
  });

  it("leaves nullish content alone", () => {
    expect(formatPollutantsIn(undefined)).toBeUndefined();
  });
});
