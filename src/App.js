import React from "react";
import Header from "./components/Header";
import AlgorithmInfo from "./components/AlgorithmInfo";
import GameOfLife from "./components/GameOfLife";
function App() {
  return (
    <div className='App'>
      <Header />
      <GameOfLife />
      <AlgorithmInfo />
    </div>
  );
}

export default App;
