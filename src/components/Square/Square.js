import "./Square.scss";

export default function Square({ value, friendly, onClick }) {
  return (
    <button
      className={`square ${
        value === 1 && friendly === "player"
          ? "ship"
          : value === 2
          ? " hit"
          : ""
      }`}
      onClick={() => onClick()}
    ></button>
  );
}
