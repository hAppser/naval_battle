const fireHandler = (board, row, col) => {
  console.log(board[row][col]);
  if (board[row][col] === 0) {
    console.log("Miss !");
    const newBoard = [...board];
    return (newBoard[row][col] = 3);
  }
  if (board[row][col] === 1) {
    console.log("Hit !");
    const newBoard = [...board];
    return (newBoard[row][col] = 2);
  }
};
export default fireHandler;
