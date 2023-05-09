import FieldRow from "../FieldRow/FieldRow";
import "./Field.scss";

export default function Field(fieldRow) {
  // console.log(fieldRow);
  return (
    <div className="Field">
      {fieldRow.row.row.map((row, index) => {
        return <FieldRow key={index} row={row} />;
      })}
    </div>
  );
}
