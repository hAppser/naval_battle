const emptyBoard = [];
function setBoard() {
  for (let i = 0; i < 10; i++) {
    emptyBoard.push([]);
  }
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      emptyBoard[i].push({
        x: j,
        y: i,
        containShip: false,
        isHit: false,
      });
    }
  }
  return emptyBoard;
}
setBoard();
export default emptyBoard;
