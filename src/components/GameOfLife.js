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
      newGrid.push(innerGrid);
    }
    this.setState({ grid: newGrid });
  };
  toggleCell = (x, y) => {
    console.log("called"+Date.now())
    let { grid } = this.state;
    console.log(x,y)
    grid[x][y] = !grid[x][y];
    this.setState({ grid });
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
        />
        <Presets loadPreset={this.loadPreset} />
        <Rules />
      </div>
    );
  }
}
