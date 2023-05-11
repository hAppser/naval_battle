import Square from "../Square/Square";
import fireHandler from "../../lib/fireHandler";
import "./Field.scss";
export default function Field({ data, friendly }) {
  return (
    <div className="board">
      {data[0].map((row, rowIndex) => {
        return (
          <div key={`${rowIndex}`} className="row">
            {row.map((cell, colIndex) => {
              return (
                <Square
                  key={`${row[rowIndex]}-${rowIndex}-${colIndex}`}
                  value={cell}
                  friendly={friendly}
                  onClick={() => fireHandler(data[0], rowIndex, colIndex)}
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
