const letterIndexes = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];

export const buildBattleAreaGrid = () => {
  const playArea = 10;
  const indexesColumn = 1;
  const gridSize = playArea + indexesColumn;
  const battleAreaGrid: { x: number; y: number }[] = [];

  for (let x = 0; x < gridSize; x++) {
    for (let y = 0; y < gridSize; y++) {
      battleAreaGrid.push({ x, y });
    }
  }

  return battleAreaGrid;
};

export const isPlayArea = (x: number, y: number) => {
  return x > 0 && y > 0;
};

export const getRowAndColumnLabels = (x: number, y: number) => {
  if (isPlayArea(x, y) || (x === 0 && y === 0)) return null;
  if (x === 0) return letterIndexes[y - 1];
  if (y === 0) return x;
};
