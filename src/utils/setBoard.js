const emptyBoard = [];
function setBoard() {
  for (let i = 0; i < 10; i++) {
    emptyBoard.push([]);
  }
  for (let x = 0; x < 10; x++) {
    for (let y = 0; y < 10; y++) {
      emptyBoard[x].push({
        x: x,
        y: y,
        containShip: false,
      });
    }
  }
  return emptyBoard;
}
setBoard();
export default emptyBoard;
