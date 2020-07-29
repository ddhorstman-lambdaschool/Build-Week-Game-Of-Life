import { COLOR_ACTIONS } from "./colorActions";
import { GRID_ACTIONS } from "./gridActions";
export * from "./colorActions";
export * from "./gridActions";

export const ACTIONS = {
  ...COLOR_ACTIONS,
  ...GRID_ACTIONS,
};
