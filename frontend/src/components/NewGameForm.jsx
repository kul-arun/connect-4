import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import PlayerName from "./PlayerNameFormItem";
import PlayerColor from "./PlayerColorFormItem";

import { createSavedGameItem } from "../services/SavedGameService";

const NewGameForm = () => {
  const [player1Name, setPlayer1Name] = useState("");
  const [player1Color, setPlayer1Color] = useState("");
  const [player2Name, setPlayer2Name] = useState("");
  const [player2Color, setPlayer2Color] = useState("");

  const [errors, setErrors] = useState({
    namesErrorMsg: "",
    colorsErrorMsg: "",
  });

  const validateForm = () => {
    let isFormValid = true;
    const errorsTemp = { ...errors };

    if (player1Name.trim() && player2Name.trim()) errorsTemp.namesErrorMsg = "";
    else {
      errorsTemp.namesErrorMsg = "* Player names are required !";
      isFormValid = false;
    }

    if (player1Color.trim() && player2Color.trim())
      errorsTemp.colorsErrorMsg = "";
    else {
      errorsTemp.colorsErrorMsg = "* Player colours are required !";
      isFormValid = false;
    }

    setErrors(errorsTemp);

    return isFormValid;
  };

  const navigator = useNavigate();

  const number = Math.floor(Math.random() * 1000) + 1;
  const chosenPlayer = useRef(number > 500 ? 1 : 2);
  const currentPlayer = chosenPlayer.current;

  const [ROWS, COLS] = [6, 7];
  const gameBoard = Array.from({ length: ROWS }, () => Array(COLS).fill(0));

  const handleNameChange = (id, value) => {
    id === 1 ? setPlayer1Name(value) : setPlayer2Name(value);
  };

  const handleColorChange = (id, value) => {
    id === 1 ? setPlayer1Color(value) : setPlayer2Color(value);
  };

  const handleBackClick = () => {
    navigator("/");
  };

  const startGame = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const gameData = {
        player1Name,
        player1Color,
        player2Name,
        player2Color,
        currentPlayer,
        gameBoard,
      };
      createSavedGameItem(gameData).then((response) => {
        navigator("/gameplay", {
          state: response.data.gameId,
        });
      });
    }
  };

  return (
    <div>
      <button
        onClick={handleBackClick}
        className="translate-x-8 translate-y-8 rounded-xl bg-black px-4 py-2 text-center text-xl font-bold text-white"
      >
        <span className="text-2xl">&#x1F804;</span> Home
      </button>
      <div className="mt-16 flex h-full select-none flex-col items-center">
        <header className="my-10 rounded-xl bg-slate-950 px-4 py-2 text-center text-4xl text-white">
          Game Information
        </header>
        <form className="flex min-w-fit flex-col items-center rounded-xl border-4 border-amber-500 bg-purple-900 px-5 py-8 text-center">
          <PlayerName id={1} name={player1Name} onChange={handleNameChange} />
          <PlayerName id={2} name={player2Name} onChange={handleNameChange} />
          <p className="text-myYellow">{errors.namesErrorMsg}</p>

          <div className="mt-6">
            <p className="pb-2 text-xl font-bold text-white">
              Select the disk colours :
            </p>
            <PlayerColor
              id={1}
              color={player1Color}
              onChange={handleColorChange}
            />
            <PlayerColor
              id={2}
              color={player2Color}
              onChange={handleColorChange}
            />
          </div>
          <p className="text-myYellow">{errors.colorsErrorMsg}</p>
          <div className="m-6">
            <p className="text-xl font-bold text-white">
              The randomly selected player who gets to make the first move is :
            </p>
            <p className="mt-4 text-xl font-bold text-white">
              Player {chosenPlayer.current}
            </p>
          </div>
          <button
            onClick={startGame}
            className="max-w-fit rounded-lg bg-black px-2 py-1 text-lg font-bold text-white outline-none"
          >
            Start Game
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewGameForm;
