import { ACTIONS } from "../actions";

const initialState = {
  color: "#000000",
};

export default function colorReducer(state = initialState, action) {
  switch (action.type) {
    case ACTIONS.UPDATE_COLOR:
      return { ...state, color: action.payload.color };
    default:
      return state;
  }
}
