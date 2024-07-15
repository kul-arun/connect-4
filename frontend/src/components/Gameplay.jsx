import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import GameTitle from "./GameTitle";
import { checkWin } from "./checkWin";
import WinScreen from "./WinScreen";
import ExitGameplayScreen from "./ExitGameplayScreen";

import {
  getSavedGameItem,
  updateSavedGameItem,
} from "../services/SavedGameService";

const [ROWS, COLS] = [6, 7];

const Gameplay = () => {
  const [player1Name, setPlayer1Name] = useState("");
  const [player1Color, setPlayer1Color] = useState("");
  const [player2Name, setPlayer2Name] = useState("");
  const [player2Color, setPlayer2Color] = useState("");
  const [currentPlayer, setCurrentPlayer] = useState(0);
  const [gameBoard, setGameBoard] = useState(
    Array.from({ length: ROWS }, () => Array(COLS).fill(0)),
  );

  const [winner, setWinner] = useState("");
  const [exitGameplay, setExitGameplay] = useState(false);
  const location = useLocation();

  const gameId = location.state;

  useEffect(() => {
    getSavedGameItem(gameId)
      .then((response) => {
        setPlayer1Name(response.data.player1Name);
        setPlayer1Color(response.data.player1Color);
        setPlayer2Name(response.data.player2Name);
        setPlayer2Color(response.data.player2Color);
        setCurrentPlayer(response.data.currentPlayer);
        setGameBoard(response.data.gameBoard);
      })
      .catch((error) => console.log(error));
  }, [gameId]);

  let disksLeft = gameBoard.flat().filter((val) => val == 0).length;

  const handleExitGameplayClick = () => {
    const updatedGameData = {
      player1Name,
      player1Color,
      player2Name,
      player2Color,
      currentPlayer,
      gameBoard,
    };

    updateSavedGameItem(gameId, updatedGameData)
      .then((response) => console.log(response.data))
      .catch((error) => console.error(error));

    setExitGameplay(true);
  };

  const handleClick = (col) => {
    if (winner) {
      return;
    }

    const newGameBoard = [...gameBoard];
    for (let row = ROWS - 1; row >= 0; --row) {
      if (newGameBoard[row][col] === 0) {
        newGameBoard[row][col] = currentPlayer;
        --disksLeft;
        setCurrentPlayer(currentPlayer === 1 ? 2 : 1);
        break;
      }
    }
    setGameBoard(newGameBoard);
    if (checkWin(newGameBoard, currentPlayer, ROWS, COLS)) {
      setWinner(currentPlayer === 1 ? player1Name : player2Name);
    } else if (disksLeft === 0) {
      setWinner("Game resulted in a draw");
    }
  };

  const getDiskColor = (disk) => {
    if (disk) {
      return "bg-my" + (disk === 1 ? player1Color : player2Color);
    }
    return "bg-white";
  };

  return (
    <div>
      <button
        onClick={handleExitGameplayClick}
        className="relative z-10 translate-x-8 translate-y-8 rounded-xl bg-black px-4 py-2 text-center text-xl font-bold text-white"
      >
        <span className="text-2xl">&#x1F804;</span> Home
      </button>
      <div className="mx-auto flex h-full -translate-y-6 select-none flex-col items-center justify-evenly text-center">
        {exitGameplay && <ExitGameplayScreen gameId={gameId} />}
        {winner && <WinScreen gameId={gameId} winner={winner} />}
        <GameTitle />
        <div
          className={`m-5 rounded-xl ${"bg-my" + (currentPlayer === 1 ? player1Color : player2Color)}`}
        >
          <div
            className={`m-1 min-w-fit rounded-xl bg-black px-5 py-3 text-lg font-bold text-white`}
          >
            <p>
              Current Turn : &nbsp;
              <span>{currentPlayer === 1 ? player1Name : player2Name}</span>
            </p>
            <p className="mt-2">Disks Left : {disksLeft}</p>
          </div>
        </div>
        <div className="h-[600px] w-[700px] rounded-3xl border-4 border-black bg-myBlue p-2">
          {gameBoard.map((row, rowIdx) => (
            <div key={rowIdx} className="flex h-[100px] justify-evenly">
              {row.map((disk, colIdx) => (
                <div
                  key={colIdx}
                  onClick={() => handleClick(colIdx)}
                  className="m-auto cursor-pointer"
                >
                  <div
                    className={`${getDiskColor(disk)} h-10 w-10 rounded-full border-4 border-black`}
                  ></div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gameplay;
