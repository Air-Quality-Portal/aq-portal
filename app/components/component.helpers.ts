export const getGridColumnClass = (itemCount: number, maxColumns: 1 | 2 | 3 | 4 = 4) => {
  if (maxColumns >= 4 && itemCount % 4 === 0)
    return "grid-col-12 tablet:grid-col-6 desktop:grid-col-3";
  if (maxColumns >= 3 && itemCount % 3 === 0) return "grid-col-12 tablet:grid-col-4";
  if (maxColumns >= 2 && itemCount % 2 === 0) return "grid-col-12 tablet:grid-col-6";
  return "grid-col-12";
};
