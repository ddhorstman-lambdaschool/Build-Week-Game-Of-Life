import React from "react";
import Rules from "./game-of-life/Rules";
import PlayGrid from "./game-of-life/PlayGrid";
import Presets from "./game-of-life/Presets";

export default function GameOfLife() {
  return (
    <div className='GameOfLife'>
      <Presets />
      <PlayGrid />
      <Rules />
    </div>
  );
}
