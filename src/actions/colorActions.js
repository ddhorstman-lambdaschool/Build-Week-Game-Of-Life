export const COLOR_ACTIONS = {
  UPDATE_COLOR: "UPDATE_COLOR",
};

export const updateColor = color => ({
  type: COLOR_ACTIONS.UPDATE_COLOR,
  payload: { color },
});
