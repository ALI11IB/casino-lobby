import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home, Game } from "./pages";

function App() {
  return (
    <div className="bg-black min-h-screen pb-8 ">
      <div className="fit max-w-7xl mx-auto ">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:gameId" element={<Game />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
