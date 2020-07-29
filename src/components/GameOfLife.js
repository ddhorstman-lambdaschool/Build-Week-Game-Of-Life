import React from "react";
import Rules from "./game-of-life/Rules";
import PlayGrid from "./game-of-life/PlayGrid";
import Presets from "./game-of-life/Presets";

export default function GameOfLife() {
  // toggleCell = (x, y) => {
  //   let { grid } = this.state;
  //   grid[x][y] = grid[x][y] ? 0 : 1;
  //   this.setState({ grid });
  // };
  // progressGame = (n = 1) => {
  //   //let startTime = Date.now();
  //   let changes = {};
  //   let { grid, side } = this.state;
  //   for (let cycles = 0; cycles < n; cycles++) {
  //     for (let i = 0; i < side; i++) {
  //       const left = i === 0 ? side - 1 : i - 1;
  //       const right = i === side - 1 ? 0 : i + 1;
  //       for (let j = 0; j < side; j++) {
  //         const alive = grid[i][j];
  //         const above = j === 0 ? side - 1 : j - 1;
  //         const below = j === side - 1 ? 0 : j + 1;
  //         const neighborSum =
  //           grid[left][above] +
  //           grid[left][below] +
  //           grid[right][above] +
  //           grid[right][below] +
  //           grid[left][j] +
  //           grid[right][j] +
  //           grid[i][above] +
  //           grid[i][below];
  //         if (!alive && neighborSum === 3) {
  //           changes[`${i},${j}`] = 1;
  //         }
  //         if (alive && (neighborSum < 2 || neighborSum > 3)) {
  //           changes[`${i},${j}`] = 0;
  //         }
  //       }
  //     }
  //     for (let coords in changes) {
  //       let [x, y] = coords.split(",");
  //       grid[x][y] = changes[coords];
  //     }
  //   }
  //   this.setState({ grid });
  //   //console.log("Finished in", Date.now() - startTime, "milliseconds");
  // };

  return (
    <div className='GameOfLife'>
      <Presets /*loadPreset={this.loadPreset}*/ />
      <PlayGrid
      // color={this.props.color}
      // grid={this.state.grid}
      // toggleCell={this.toggleCell}
      // resetGrid={this.resetGrid}
      // progressGame={this.progressGame}
      />
      <Rules />
    </div>
  );
}
