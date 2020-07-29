export const GRID_ACTIONS = {
  PROGRESS_GAME: "PROGRESS_GAME",
  TOGGLE_CELL: "TOGGLE_CELL",
  LOAD_PRESET: "LOAD_PRESET",
  RESET_GRID: "RESET_GRID",
  RANDOMIZE_GRID: "RANDOMIZE_GRID",
  RESIZE_GRID: "RESIZE_GRID",
};

export const loadPreset = preset => ({
  type: GRID_ACTIONS.LOAD_PRESET,
  payload: {
    preset,
  },
});
export const resetGrid = () => ({
  type: GRID_ACTIONS.RESET_GRID,
});
export const randomizeGrid = () => ({
  type: GRID_ACTIONS.RANDOMIZE_GRID,
});

export const toggleCell = coordinates => ({
  type: GRID_ACTIONS.TOGGLE_CELL,
  payload: { coordinates },
});
export const progressGame = cycles => ({
  type: GRID_ACTIONS.PROGRESS_GAME,
  payload: { cycles },
});
export const resizeGrid = side => ({
  type: GRID_ACTIONS.RESIZE_GRID,
  payload: { side },
});
