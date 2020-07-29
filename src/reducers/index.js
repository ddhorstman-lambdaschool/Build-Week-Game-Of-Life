import { combineReducers } from "redux";
import gridReducer from "./gridReducer";
import colorReducer from "./colorReducer";

export default combineReducers({ color: colorReducer, grid: gridReducer });
