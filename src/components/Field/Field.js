import Square from "../Square/Square";
import "./Field.scss";

export default function Field({ board, friendly, onClick }) {
  return (
    <div className="board">
      {board[0].map((row, rowIndex) => {
        return (
          <div key={`${rowIndex}`} className="row">
            {row.map((cell, colIndex) => {
              return (
                <Square
                  key={`${row[rowIndex]}-${rowIndex}-${colIndex}`}
                  rowIndex={rowIndex}
                  colIndex={colIndex}
                  value={cell}
                  friendly={friendly}
                  onClick={(value, rowIndex, colIndex) =>
                    onClick(cell, rowIndex, colIndex)
                  }
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
