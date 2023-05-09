import { useEffect, useState } from "react";
import ShipPlacement from "./components/ShipPlacement/ShipPlacement";
import emptyBoard from "./utils/setBoard";
import placeShips from "./utils/placeShips";
import "./App.scss";

function App() {
  const [playerBoard, setPlayerBoard] = useState([]);
  const [board, setBoard] = useState([]);

  useEffect(() => {
    setBoard(emptyBoard);
    setPlayerBoard(emptyBoard);
  }, []);

  useEffect(() => {
    setBoard(placeShips(emptyBoard, "enemy"));
    setPlayerBoard(placeShips(emptyBoard, "player"));
  }, []);
  console.log(playerBoard);
  return (
    <div className="App">
      <h1>naval battle</h1>
      <main>
        <ShipPlacement row={playerBoard} />
      </main>
    </div>
  );
}

export default App;
