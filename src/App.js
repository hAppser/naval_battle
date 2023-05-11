import { useState } from "react";
import setBoard from "./lib/useCreateBoards";
import "./App.scss";
import Field from "./components/Field/Field";

//TO DO

// 1) Стрельба (done)
// 1.1) Регистрация попаданий (done)
// 1.2) Смена стилей после стрельбы (done)

// 2) Интеллект бота

// 3) Передача хода

// 4) Конец игры

function App() {
  const [playerBoard, setPlayerBoard] = useState(setBoard());
  const [enemyBoard, setEnemyBoard] = useState(setBoard());
  const [playerHits, setPlayerHits] = useState(1);
  const [computerHits, setComputerHits] = useState(0);
  const [winner, setWinner] = useState(" ");

  const handleFire = (value, rowIndex, colIndex) => {
    if (value === 2 || value === 3) {
      return;
    }
    if (value === 1) {
      const newBoard = [...enemyBoard];
      newBoard[0][rowIndex][colIndex] = 2;
      setEnemyBoard(newBoard);
      setPlayerHits(playerHits + 1);
      if (playerHits + 1 === 20) {
        setWinner("player");
      }
    } else if (value === 0) {
      const newBoard = [...enemyBoard];
      newBoard[0][rowIndex][colIndex] = 3;
      setEnemyBoard(newBoard);
      if (value === 1) {
        setComputerHits(computerHits + 1);
        if (computerHits === 20) {
          setWinner("computer");
        }
      }
    }
  };
  return (
    <div className="App">
      <h1>real naval battle</h1>
      <main>
        <Field
          board={enemyBoard}
          onClick={(value, rowIndex, colIndex) =>
            handleFire(value, rowIndex, colIndex)
          }
        />
        <Field
          board={playerBoard}
          friendly={"player"}
          onClick={(value, rowIndex, colIndex) =>
            handleFire(value, rowIndex, colIndex)
          }
        />
      </main>
    </div>
  );
}

export default App;
