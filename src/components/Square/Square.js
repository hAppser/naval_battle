import "./Square.scss";

const Square = ({ value, friendly, rowIndex, colIndex, onClick }) => {
  return (
    <button
      onClick={() => onClick(value, rowIndex, colIndex)}
      className={`square ${
        value === 1 && friendly === "player"
          ? "player ship"
          : value === 2
          ? " hit"
          : value === 3
          ? " miss"
          : friendly === "player"
          ? "player"
          : ""
      }`}
    ></button>
  );
};
export default Square;
