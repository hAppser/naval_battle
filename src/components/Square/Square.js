import "./Square.scss";
export default function Square({ x, y }) {
  const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
  const letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];

  const leftLine = x === 0 ? true : false;
  const topLine = y === 0 ? true : false;
  console.log("x:", x);
  console.log("y:", y);
  return (
    <button className="square">
      {/* <div className="marker">{marker}</div> */}

      {leftLine ? <span className="leftLine">{numbers[y]}</span> : ""}
      {topLine ? <span className="topLine">{letters[x]}</span> : ""}
    </button>
  );
}
