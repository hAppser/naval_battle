import "./App.scss";
import ShipPlacement from "./components/ShipPlacement/ShipPlacement";

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
      <h1>naval battle</h1>
      <main>
        <ShipPlacement row={row} />
      </main>
    </div>
  );
}

export default App;
