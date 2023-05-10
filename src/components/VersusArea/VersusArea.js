import Field from "../Field/Field";

import "./VersusArea.scss";

export default function VersusArea({ player, bot }) {
  return (
    <div className="VersusArea">
      <Field data={bot} />
      <Field data={player} friendly={"player"} />
    </div>
  );
}
