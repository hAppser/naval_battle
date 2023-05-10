import Square from "../Square/Square";
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
                  // onClick={() => (rowIndex, colIndex)}
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
