import "./Square.scss";
import fire from "../../utils/fire";

export default function Square({ x, y, className }) {
  return (
    <button
      onClick={(e, board, x, y) => fire(e)}
      className={`square ${className}`}
    ></button>
  );
}
