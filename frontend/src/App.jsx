import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import NewGameForm from "./components/NewGameForm";
import SavedGames from "./components/SavedGames";
import Scoreboard from "./components/Scoreboard";
import GameRules from "./components/GameRules";
import Gameplay from "./components/Gameplay";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/new-game-form" element={<NewGameForm />} />
      <Route path="/saved-games" element={<SavedGames />} />
      <Route path="/scoreboard" element={<Scoreboard />} />
      <Route path="/game-rules" element={<GameRules />} />
      <Route path="/gameplay" element={<Gameplay />} />
    </Routes>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
