export const getBattleshipsGrid = () => {
  const battleshipsPositions = {
    cruiser: [
      { x: 1, y: 1 },
      { x: 1, y: 2 },
      { x: 1, y: 3 },
      { x: 1, y: 4 }
    ],

    destroyer: [
      { x: 2, y: 1 },
      { x: 2, y: 2 },
      { x: 2, y: 3 }
    ]
  };

  // TODO: Isolate this 11
  const battleshipsGrid: boolean[][] = Array(11)
    .fill(0)
    .map(() => Array(11).fill(false));

  Object.values(battleshipsPositions).forEach((battleShip) => {
    battleShip.forEach((square) => {
      battleshipsGrid[square.x][square.y] = true;
    });
  });

  return battleshipsGrid;
};
