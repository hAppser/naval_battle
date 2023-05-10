import "./Square.scss";

export default function Square({ value, onClick, friendly }) {
  return (
    <button
      className={`square ${value !== 0 && friendly === "player" ? "ship" : ""}`}
    ></button>
  );
}
