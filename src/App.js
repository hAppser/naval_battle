import VersusArea from "./components/VersusArea/VersusArea";
import "./App.scss";
import { useEffect, useState } from "react";
import setBoard from "./hooks/useCreateBoards";
//TO DO

// 1) Интеллект бота
// 2) Стрельба
// 3) Передача хода
// 4) Конец игры

function App() {
  const [playerBoard, setPlayerBoard] = useState(setBoard());
  const [enemyBoard, setEnemyBoard] = useState(setBoard());

  useEffect(() => {
    setPlayerBoard(setBoard());
    setEnemyBoard(setBoard());
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
