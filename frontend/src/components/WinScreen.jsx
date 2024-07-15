import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Draggable from "react-draggable";

import {
  deleteSavedGameItem,
  getSavedGameItem,
  updateSavedGameItem,
} from "../services/SavedGameService";

import { createScoreboardItem } from "../services/ScoreboardService";

const WinScreen = ({ gameId, winner }) => {
  const navigator = useNavigate();

  const [player1Name, setPlayer1Name] = useState("");
  const [player1Color, setPlayer1Color] = useState("");
  const [player2Name, setPlayer2Name] = useState("");
  const [player2Color, setPlayer2Color] = useState("");

  useEffect(() => {
    getSavedGameItem(gameId)
      .then((response) => {
        setPlayer1Name(response.data.player1Name);
        setPlayer1Color(response.data.player1Color);
        setPlayer2Name(response.data.player2Name);
        setPlayer2Color(response.data.player2Color);
      })
      .catch((error) => console.log(error));
  }, [gameId]);

  const addGameInfoToScoreboard = () => {
    const scoreboardItem = { player1Name, player2Name, winner };
    createScoreboardItem(scoreboardItem).then((response) => {
      console.log("Saving scoreboarditem....");
      console.log(response.data);
    });
  };

  const handleRematchClick = () => {
    addGameInfoToScoreboard();

    const number = Math.floor(Math.random() * 1000) + 1;
    const currentPlayer = number > 500 ? 1 : 2;

    const [ROWS, COLS] = [6, 7];
    const gameBoard = Array.from({ length: ROWS }, () => Array(COLS).fill(0));

    const newGameInfo = {
      player1Name,
      player1Color,
      player2Name,
      player2Color,
      currentPlayer,
      gameBoard,
    };

    updateSavedGameItem(gameId, newGameInfo)
      .then((response) => {
        console.log(response.data);
        navigator("/gameplay", {
          state: gameId,
        });
        window.location.reload();
      })
      .catch((error) => console.error(error));
  };

  const handleQuitClick = () => {
    addGameInfoToScoreboard();
    deleteSavedGameItem(gameId)
      .then((response) => console.log(response.data))
      .catch((error) => console.error(error));
    navigator("/");
  };

  const nodeRef = useRef(null);

  return (
    <Draggable nodeRef={nodeRef}>
      <div
        ref={nodeRef}
        className="absolute z-10 flex h-1/4 min-w-fit flex-col items-center justify-evenly rounded-3xl border-4 border-amber-500 bg-black px-16 font-bold text-white opacity-95"
      >
        {winner === "Game resulted in a draw" ? (
          <div>
            <p className="mb-4 font-[SourceSans] text-3xl text-myGreen">Draw</p>
            <p className="text-xl">The game resulted in a draw!</p>
          </div>
        ) : (
          <div>
            <p className="mb-4 font-[SourceSans] text-3xl text-myGreen">
              Winner
            </p>
            <p className="text-xl">{winner}</p>
          </div>
        )}
        <div className="flex gap-20 text-lg">
          <button
            onClick={handleRematchClick}
            className="rounded-lg bg-purple-900 px-2 py-1"
          >
            Rematch
          </button>
          <button
            onClick={handleQuitClick}
            className="rounded-lg bg-purple-900 px-2 py-1"
          >
            Quit
          </button>
        </div>
      </div>
    </Draggable>
  );
};

export default WinScreen;
