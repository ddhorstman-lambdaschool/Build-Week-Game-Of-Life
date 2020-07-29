export const ACTIONS = {
  UPDATE_COLOR: "UPDATE_COLOR",
  UPDATE_CELL: "UPDATE_CELL",
  LOAD_PRESET: "LOAD_PRESET",
  RESET_GRID: "RESET_GRID",
};


export const updateColor = color => ({
  type: ACTIONS.UPDATE_COLOR,
  payload: { color },
});
export const updateCell = () => {};
export const loadPreset = () => {};
export const resetGrid = () => {};
