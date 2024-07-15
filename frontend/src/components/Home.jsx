import { Link } from "react-router-dom";

import GameTitle from "./GameTitle";

const Home = () => {
  return (
    <div className="container mx-auto mt-36 flex h-full select-none flex-col items-center overscroll-none">
      <GameTitle />
      <ul className="mb-10 mt-36 flex flex-col items-center justify-center gap-8 text-3xl text-white">
        <li className="start-menu-item mb-2">
          <Link to="/new-game-form/">New Game</Link>
        </li>
        <li className="start-menu-item mb-2">
          <Link to="/saved-games/">Resume Game</Link>
        </li>
        <li className="start-menu-item mb-2">
          <Link to="/scoreboard/">Scoreboard</Link>
        </li>
        <li className="start-menu-item mb-2">
          <Link to="/game-rules/">Game Rules</Link>
        </li>
      </ul>
      <footer className="text-md mt-40 text-center font-bold text-white">
        &copy; 2024 Arun Kulathingal. All rights reserved.
      </footer>
    </div>
  );
};

export default Home;
