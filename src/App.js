import { useState } from "react";
import setBoard from "./lib/setBoard";
import Field from "./components/Field/Field";
import "./App.scss";

//TO DO

// 1) Стрельба (done)
// 1.1) Регистрация попаданий (done)
// 1.2) Смена стилей после стрельбы (done)

// 2) Интеллект бота (done, примитивной интеллект добавлен)

// 3) Передача хода

// 4) Конец игры (done, но в примитивной форме)

function App() {
  const [playerBoard, setPlayerBoard] = useState(setBoard());
  const [computerBoard, setComputerBoard] = useState(setBoard());
  const [playerHits, setPlayerHits] = useState(19);
  const [computerHits, setComputerHits] = useState(19);
  const [winner, setWinner] = useState(" ");

  const handleFire = (value, rowIndex, colIndex) => {
    if (value === 2 || value === 3) {
      return;
    }
    if (value === 1) {
      const newBoard = [...computerBoard];
      newBoard[0][rowIndex][colIndex] = 2;
      setComputerBoard(newBoard);
      setPlayerHits(playerHits - 1);
      if (playerHits === 0) {
        setWinner("player");
      }
    } else if (value === 0) {
      const computerFire = () => {
        let newBoard = [...computerBoard];
        newBoard[0][rowIndex][colIndex] = 3;
        setComputerBoard(newBoard);
        newBoard = [...playerBoard];
        let row = Math.floor(Math.random() * 10);
        let col = Math.floor(Math.random() * 10);
        if (newBoard[0][row][col] === 2 || newBoard[0][row][col] === 3) {
          return;
        }

        if (newBoard[0][row][col] === 1) {
          setComputerHits(computerHits - 1);
          newBoard[0][row][col] = 2;
          setPlayerBoard(newBoard);
          if (computerHits === 0) {
            setWinner("computer");
          }
          computerFire();
        } else {
          newBoard[0][row][col] = 3;
          setPlayerBoard(newBoard);
          return;
        }
      };
      computerFire();
    }
  };
  return (
    <div className="App">
      <h1>real naval battle</h1>
      <main>
        <Field
          board={computerBoard}
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
        {winner === "player" ? (
          <h1>Победа игрока!</h1>
        ) : winner === "computer" ? (
          <h1>Победа компьютера!</h1>
        ) : null}
      </main>
    </div>
  );
}

export default App;
