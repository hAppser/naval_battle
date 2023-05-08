import Square from "../Square/Square";
import "./FieldRow.scss";

export default function FieldRow({ row }) {
  return (
    <div className="FieldRow">
      {row.map((square, index) => {
        return <Square key={index} x={square.x} y={square.y} />;
      })}
    </div>
  );
}
