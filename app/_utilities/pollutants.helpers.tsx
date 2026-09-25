import { Fragment, type ReactNode } from "react";

/**
 * Pollutant symbols written in plain ASCII, the form stored in site config so
 * that search, filtering and `alt` attributes keep working on ordinary text.
 * Longest first, so `PM2.5` wins before a shorter symbol can match its prefix.
 */
const SYMBOLS = ["PM2.5", "PM10", "NO2", "SO2", "CO2", "O3"];

/**
 * `\b` keeps a symbol from matching inside an identifier, so `NO2_L3.004` and
 * `GCHP_C720_O3_Frame.png` pass through untouched.
 */
const POLLUTANT = new RegExp(`\\b(${SYMBOLS.join("|").replace(/\./g, "\\.")})\\b`, "g");

/** Letters stay on the baseline; the trailing figure drops. */
const SYMBOL_PARTS = /^([A-Za-z]+)(.+)$/;

const SUBSCRIPT_DIGITS = /[₀-₉]/g;

/**
 * Folds U+2080-U+2089 back to ASCII so content authored with Unicode subscripts
 * still matches. Both notations reach the same markup, which keeps a stray
 * `PM₂.₅` pasted into the CMS from rendering in a fallback face.
 */
const toAsciiFigures = (text: string) =>
  text.replace(SUBSCRIPT_DIGITS, (digit) => String(digit.charCodeAt(0) - 0x2080));

/**
 * Renders pollutant symbols with their figures in `<sub>`, so the digits and any
 * decimal point drop together in the surrounding font. Unicode subscripts cannot
 * do this: neither Public Sans nor Merriweather carries a U+2080-U+2089 glyph, so
 * those characters come from a fallback face, and no subscript period exists at all.
 *
 * Returns the input unchanged when it holds no pollutant, keeping plain strings plain.
 */
export function formatPollutants(source: string): ReactNode {
  const text = toAsciiFigures(source);
  const parts: ReactNode[] = [];
  let cursor = 0;

  for (const match of text.matchAll(POLLUTANT)) {
    const [symbol] = match;
    const [, stem, figure] = SYMBOL_PARTS.exec(symbol) ?? [];
    if (!stem) continue;

    parts.push(text.slice(cursor, match.index));
    parts.push(
      <Fragment key={match.index}>
        {stem}
        <sub>{figure}</sub>
      </Fragment>,
    );
    cursor = match.index + symbol.length;
  }

  // Hand back the original, not the folded copy, so subscripts belonging to
  // formulae outside the table survive untouched.
  if (parts.length === 0) return source;

  parts.push(text.slice(cursor));

  /*
   * One element, never a bare list: titles sit inside flex containers such as
   * `.blocks-link` (inline-flex with a gap) and `.blocks-card__content` (a flex
   * column), where each node of a list would become its own flex item and the
   * words would scatter down the card.
   */
  return <span>{parts}</span>;
}

/**
 * Formats content typed as `ReactNode`, where an author may supply either a
 * plain string or JSX. Only a string can be scanned for symbols; anything
 * already built as nodes passes through with its markup intact.
 */
export function formatPollutantsIn(content: ReactNode): ReactNode {
  return typeof content === "string" ? formatPollutants(content) : content;
}
