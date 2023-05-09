import Field from "../Field/Field";
import StartMenu from "../startMenu/StartMenu";

import "./ShipPlacement.scss";

export default function ShipPlacement(row) {
  console.log(row);
  return (
    <div className="ShipPlacement">
      <Field row={row} />
      <StartMenu />
    </div>
  );
}
