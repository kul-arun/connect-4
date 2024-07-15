import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import Draggable from "react-draggable";

import { deleteSavedGameItem } from "../services/SavedGameService";

const ExitGameplayScreen = ({ gameId }) => {
  const navigator = useNavigate();

  const saveGameAndExit = () => {
    navigator("/");
  };

  const deleteGameAndExit = () => {
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
        className="fixed z-50 flex h-1/4 min-w-fit flex-col items-center justify-evenly rounded-3xl border-4 border-amber-500 bg-black px-16 font-bold text-white opacity-95"
      >
        <p className="mb-4 font-[SourceSans] text-3xl text-myGreen">
          Exit Gameplay
        </p>
        <p className="text-xl">Do you wish to save the game ?</p>

        <div className="flex gap-20 text-lg">
          <button
            onClick={saveGameAndExit}
            className="rounded-lg bg-purple-900 px-2 py-1"
          >
            Yes
          </button>
          <button
            onClick={deleteGameAndExit}
            className="rounded-lg bg-purple-900 px-2 py-1"
          >
            No
          </button>
        </div>
      </div>
    </Draggable>
  );
};

export default ExitGameplayScreen;
