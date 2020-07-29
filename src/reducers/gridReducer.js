import { ACTIONS } from "../actions";
const initialState = {
  side: 25,
  grid: [],
};
const createGrid = (random, { side }) => {
  let newGrid = [];
  let innerGrid = [];
  if (random) {
    for (let i = 0; i < side; i++) {
      innerGrid = [];
      for (let j = 0; j < side; j++) {
        innerGrid.push(Math.round(Math.random()));
      }
      newGrid.push(innerGrid);
    }
  } else {
    for (let i = 0; i < side; i++) {
      innerGrid.push(0);
    }
    for (let i = 0; i < side; i++) {
      newGrid.push([...innerGrid]);
    }
  }
  return newGrid;
};
const createPresetGrid = (preset, state) => {
  let grid = createGrid(null, state);
  const startX = Math.floor((grid.length - preset.length) / 2);
  const startY = Math.floor((grid[0].length - preset[0].length) / 2);
  for (let i = 0; i < preset.length; i++) {
    for (let j = 0; j < preset[0].length; j++) {
      grid[i + startX][j + startY] = preset[i][j];
    }
  }
  return grid;
};
const toggleCell = ({ x, y }, { grid }) => {
  grid[x][y] = grid[x][y] ? 0 : 1;
  return grid;
};

const progressGame = (n = 1, { grid, side }) => {
  //let startTime = Date.now();
  let changes = {};
  for (let cycles = 0; cycles < n; cycles++) {
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
    for (let coords in changes) {
      let [x, y] = coords.split(",");
      grid[x][y] = changes[coords];
    }
  }
  return grid;
  //console.log("Finished in", Date.now() - startTime, "milliseconds");
};

export default function gridReducer(state = initialState, action) {
  switch (action.type) {
    case ACTIONS.RANDOMIZE_GRID:
      return { ...state, grid: createGrid("random", state) };
    case ACTIONS.RESET_GRID:
      return { ...state, grid: createGrid(null, state) };
    case ACTIONS.LOAD_PRESET:
      return { ...state, grid: createPresetGrid(action.payload.preset, state) };
    case ACTIONS.TOGGLE_CELL:
      return {
        ...state,
        grid: toggleCell(action.payload.coordinates, state),
      };
    case ACTIONS.PROGRESS_GAME:
      return {
        ...state,
        grid: progressGame(action.payload.cycles, state),
      };
    default:
      return state;
  }
}
