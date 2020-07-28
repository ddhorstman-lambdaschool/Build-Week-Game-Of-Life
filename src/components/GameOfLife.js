import React from "react";
import Rules from "./game-of-life/Rules";
import PlayGrid from "./game-of-life/PlayGrid";
import Presets from "./game-of-life/Presets";

export default class GameOfLife extends React.Component {
  state = {
    side: 25,
    grid: [[0]],
    color: "#000000",
  };
  resetGrid = () => {
    let newGrid = [];
    let innerGrid = [];
    for (let i = 0; i < this.state.side; i++) {
      innerGrid.push(0);
    }
    for (let i = 0; i < this.state.side; i++) {
      newGrid.push(innerGrid);
    }
    this.setState({ grid: newGrid });
  };
  toggleCell = (x, y) => {
    let { grid } = this.state;
    grid[x][y] = !grid[x][y];
    this.setState({ grid });
  };
  componentDidMount() {
    this.resetGrid();
  }
  render() {
    return (
      <div className='game'>
        <PlayGrid />
        <Presets />
        <Rules />
      </div>
    );
  }
}
