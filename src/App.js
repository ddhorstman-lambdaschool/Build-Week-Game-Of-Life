import React from "react";
import Header from "./components/Header";
import AlgorithmInfo from "./components/AlgorithmInfo";
import GameOfLife from "./components/GameOfLife";
function App() {
  const [color, setColor] = React.useState("#000000");
  function updateColor({ target: { value } }) {
    setColor(value);
    console.log(value);
  }
  return (
    <div className='App'>
      <Header color={color} updateColor={updateColor} />
      <GameOfLife color={color} />
      <AlgorithmInfo color={color} />
    </div>
  );
}

export default App;
