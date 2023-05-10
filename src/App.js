import { useEffect, useState } from "react";
import emptyBoard from "./utils/setBoard";
import placeShips from "./utils/placeShips";
import VersusArea from "./components/VersusArea/VersusArea";
import "./App.scss";

//TO DO

// 1) Интеллект бота
// 1.1) Стрельба
// 1.2) Передача хода
// 2) Конец игры

function App() {
  const [playerBoard, setPlayerBoard] = useState([]);
  const [enemyBoard, setEnemyBoard] = useState([]);
  useEffect(() => {
    setEnemyBoard(placeShips(emptyBoard, "enemy"));
    setPlayerBoard(placeShips(emptyBoard, "player"));
  }, []);

  return (
    <div className="App">
      <h1>real naval battle</h1>
      <main>
        <VersusArea player={playerBoard} bot={enemyBoard} />
      </main>
    </div>
  );
}

export default App;
