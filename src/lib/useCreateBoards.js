export default function setBoard() {
  const isShipOverlapping = (row, col, size, isHorizontal, board) => {
    if (isHorizontal) {
      for (let i = col; i < col + size; i++) {
        if (board[row][i] !== 0) {
          return true;
        }
      }
    } else {
      for (let i = row; i < row + size; i++) {
        if (board[i][col] !== 0) {
          return true;
        }
      }
    }
    return false;
  };
  const BOARD_SIZE = 10;

  const board = Array(BOARD_SIZE)
    .fill()
    .map(() => Array(BOARD_SIZE).fill(0));

  const shipSizes = [4, 3, 3, 2, 2, 2, 1, 1, 1, 1];

  shipSizes.forEach((size) => {
    let shipPlaced = false;
    while (!shipPlaced) {
      const row = Math.floor(Math.random() * BOARD_SIZE);
      const col = Math.floor(Math.random() * BOARD_SIZE);
      const isHorizontal = Math.random() < 0.5;

      if (isHorizontal) {
        if (col + size > BOARD_SIZE) {
          continue;
        }
      } else {
        if (row + size > BOARD_SIZE) {
          continue;
        }
      }

      if (isShipOverlapping(row, col, size, isHorizontal, board)) {
        continue;
      }

      for (let i = 0; i < size; i++) {
        if (isHorizontal) {
          board[row][col + i] = 1;
        } else {
          board[row + i][col] = 1;
        }
      }

      shipPlaced = true;
    }
  });
  return [board];
}
