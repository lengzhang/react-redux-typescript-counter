import { createReducer } from "../utils/createReducer";
import { INCREASE, DECREASE, SET_COUNTER } from "../constants";

import {
  State,
  Types,
  Actions,
  IncreaseAction,
  DecreaseAction,
  SetCounterAction
} from "./types";

const initialState: State = {
  counter: 0
};

const increase = (state: State, action: IncreaseAction): State => {
  return { ...state, counter: state.counter + 1 };
};
const decrease = (state: State, action: DecreaseAction): State => {
  if (state.counter <= 0) return state;
  return { ...state, counter: state.counter - 1 };
};
const setCounter = (state: State, action: SetCounterAction): State => {
  return { ...state, counter: action.payload.counter };
};

const reducer = createReducer<State, Actions>(initialState, {
  [INCREASE]: increase,
  [DECREASE]: decrease,
  [SET_COUNTER]: setCounter
});

export default reducer;
