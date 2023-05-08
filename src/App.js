import "./App.scss";
import Field from "./components/Field/Field";

function App() {
  const row = [];
  for (let i = 0; i < 10; i++) {
    row.push([]);
  }
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      row[i].push({
        x: j,
        y: i,
      });
    }
  }
  return (
    <div className="App">
      <Field row={row} />
    </div>
  );
}

export default App;
