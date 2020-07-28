import React from "react";
import Rules from "./game-of-life/Rules";
import PlayGrid from "./game-of-life/PlayGrid";
import Presets from "./game-of-life/Presets";

export default class GameOfLife extends React.Component {
  constructor(props) {
    super(props);
    let { side = 25, color = "#000000" } = props;
    this.state = { side, color, grid: [] };
  }
  componentDidMount() {
    this.resetGrid();
  }
  resetGrid = () => {
    let newGrid = [];
    let innerGrid = [];
    for (let i = 0; i < this.state.side; i++) {
      innerGrid.push(0);
    }
    for (let i = 0; i < this.state.side; i++) {
      newGrid.push([...innerGrid]);
    }
    this.setState({ grid: newGrid });
  };
  toggleCell = (x, y) => {
    let { grid } = this.state;
    grid[x][y] = grid[x][y] ? 0 : 1;
    this.setState({ grid });
  };
  progressGame = (n = 1) => {
    let startTime = Date.now();
    let changes = {};
    let { grid, side } = this.state;
    for (let i = 0; i < side; i++) {
      const left = i === 0 ? side - 1 : i - 1;
      const right = i === side - 1 ? 0 : i + 1;
      for (let j = 0; j < side; j++) {
        const alive = grid[i][j];
        const above = j === 0 ? side - 1 : j - 1;
        const below = j === side - 1 ? 0 : j + 1;
        const neighborSum =
          grid[left][above] +
          grid[left][below] +
          grid[right][above] +
          grid[right][below] +
          grid[left][j] +
          grid[right][j] +
          grid[i][above] +
          grid[i][below];
        if (!alive && neighborSum === 3) {
          changes[`${i},${j}`] = 1;
        }
        if (alive && (neighborSum < 2 || neighborSum > 3)) {
          changes[`${i},${j}`] = 0;
        }
      }
    }
    for(let item in changes){
      console.log(item)
    }
    console.log("Finished in", Date.now() - startTime, "milliseconds");
  };
  loadPreset = preset => {
    console.log(preset);
  };
  render() {
    return (
      <div className='GameOfLife'>
        <PlayGrid
          grid={this.state.grid}
          toggleCell={this.toggleCell}
          resetGrid={this.resetGrid}
          progressGame={this.progressGame}
        />
        <Presets loadPreset={this.loadPreset} />
        <Rules />
      </div>
    );
  }
}
