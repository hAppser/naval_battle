function placeShips(board, player) {
  const newBoard = board.map((row) => [...row]);

  const shipLengths = [4, 3, 3, 2, 2, 2, 1, 1, 1, 1];

  shipLengths.forEach((length) => {
    let placed = false;
    while (!placed) {
      const horizontal = Math.random() < 0.5;
      const x = Math.floor(Math.random() * (10 - (horizontal ? length : 0)));
      const y = Math.floor(Math.random() * (10 - (horizontal ? 0 : length)));

      let conflict = false;
      for (let i = 0; i < length; i++) {
        const squareValue =
          newBoard[horizontal ? x + i : x][horizontal ? y : y + i];
        if (squareValue.containShip !== false) {
          conflict = true;
          break;
        }
      }

      if (!conflict) {
        for (let i = 0; i < length; i++) {
          let className = `square ${player}ship ${length} ${
            horizontal ? "vertical" : "horizontal"
          }`;
          newBoard[horizontal ? x + i : x][horizontal ? y : y + i] = {
            y: y,
            x: x,
            className,
          };
        }
      }
      placed = true;
    }
  });

  return newBoard;
}
export default placeShips;
