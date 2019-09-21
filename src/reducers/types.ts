import { INCREASE, DECREASE, SET_COUNTER } from "../constants";

export interface State {
  readonly counter: number;
}
export type Types = typeof INCREASE | typeof DECREASE | typeof SET_COUNTER;

export interface IncreaseAction {
  type: typeof INCREASE;
}
export interface DecreaseAction {
  type: typeof DECREASE;
}

export interface SetCounterAction {
  type: typeof SET_COUNTER;
  payload: { counter: number };
}

export type Actions = IncreaseAction | DecreaseAction | SetCounterAction;
