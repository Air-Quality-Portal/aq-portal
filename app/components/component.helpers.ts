export const getGridColumnClass = (cardCount: number, maxColumns: 1 | 2 | 3 | 4 = 4) => {
  if (maxColumns >= 4 && cardCount % 4 === 0)
    return "grid-col-12 tablet:grid-col-6 desktop:grid-col-3";
  if (maxColumns >= 3 && cardCount % 3 === 0) return "grid-col-12 tablet:grid-col-4";
  if (maxColumns >= 2 && cardCount % 2 === 0) return "grid-col-12 tablet:grid-col-6";
  return "grid-col-12";
};
