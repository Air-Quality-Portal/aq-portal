export const getGridColumnClass = (itemCount: number, maxColumns: 1 | 2 | 3 | 4 = 4) => {
  if (maxColumns >= 4 && itemCount % 4 === 0)
    return "grid-col-12 tablet:grid-col-6 desktop:grid-col-3";
  if (maxColumns >= 3 && itemCount % 3 === 0) return "grid-col-12 tablet:grid-col-4";
  if (maxColumns >= 2 && itemCount % 2 === 0) return "grid-col-12 tablet:grid-col-6";
  return "grid-col-12";
};

/**
 * Alternates 8/4 and 4/8 spans by row using a two-card row rhythm.
 */
export const getAlternatingGridClasses = (cardIndex: number) => {
  const rowIndex = Math.floor(cardIndex / 2);
  const positionInRow = cardIndex % 2;
  const isEvenRow = rowIndex % 2 === 0;
  const isWide = (isEvenRow && positionInRow === 0) || (!isEvenRow && positionInRow === 1);

  return isWide
    ? "grid-col-12 tablet:grid-col-8 desktop:grid-col-8"
    : "grid-col-12 tablet:grid-col-4 desktop:grid-col-4";
};
