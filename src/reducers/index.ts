import { createReducer } from "../utils/createReducer";
import { INCREASE, DECREASE } from "../constants";

import { State, Type, Action } from "./types";

const initialState: State = {
  counter: 0
};

const increase = (state: State, action: Action): State => {
  return { ...state, counter: state.counter + 1 };
};
const decrease = (state: State, action: Action): State => {
  if (state.counter <= 0) return state;
  return { ...state, counter: state.counter - 1 };
};

const reducer = createReducer<State, Type, Action>(initialState, {
  [INCREASE]: increase,
  [DECREASE]: decrease
});

export default reducer;
