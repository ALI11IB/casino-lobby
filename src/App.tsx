import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home, Game } from "./pages";

function App() {
  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="fit">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:gameId" element={<Game />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
