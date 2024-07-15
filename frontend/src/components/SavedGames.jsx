import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  listSavedGameItems,
  deleteSavedGameItem,
} from "../services/SavedGameService";

const ResumeGame = () => {
  const [savedGamesList, setSavedGamesList] = useState([]);
  useEffect(() => {
    listSavedGameItems()
      .then((response) => setSavedGamesList(response.data))
      .catch((error) => console.log(error));
  }, []);

  const navigator = useNavigate();

  const handleBackClick = () => {
    navigator("/");
  };

  const handleResumeClick = (gameId) => {
    navigator("/gameplay", {
      state: gameId,
    });
  };

  const handleDeleteClick = (gameId) => {
    deleteSavedGameItem(gameId)
      .then((response) => {
        console.log(response.data);
        window.location.reload();
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <button
        onClick={handleBackClick}
        className="translate-x-8 translate-y-8 rounded-xl bg-black px-4 py-2 text-center text-xl font-bold text-white"
      >
        <span className="text-2xl">&#x1F804;</span> Home
      </button>
      <div className="mx-auto h-full w-2/3">
        <header className="mx-auto max-w-fit border-separate rounded-xl bg-black p-4 text-center text-4xl font-bold text-white">
          Saved Games
        </header>
        <p className="my-8 text-center text-xl font-bold text-gray-100">
          The 10 most recent saved games are displayed below :
        </p>
        <table className="mx-auto mb-8 w-9/12 table-auto border-separate text-center text-xl font-bold text-white">
          <thead className="bg-black">
            <tr className="text-myGreen">
              <th>Player 1</th>
              <th>Player 2</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {savedGamesList.map((game) => (
              <tr key={game.gameId}>
                <td>{game.player1Name}</td>
                <td>{game.player2Name}</td>
                <td>
                  <button
                    onClick={() => handleResumeClick(game.gameId)}
                    className="rounded-xl bg-orange-500 px-3 py-1 text-black"
                  >
                    Resume
                  </button>
                  <button
                    onClick={() => handleDeleteClick(game.gameId)}
                    className="ml-4 rounded-xl bg-orange-500 px-3 py-1 text-black"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ResumeGame;
