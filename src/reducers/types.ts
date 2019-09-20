import { Action as ReduxAction } from "redux";
import { INCREASE, DECREASE } from "../constants";
export interface State {
  counter: number;
}
export type Type = typeof INCREASE | typeof DECREASE;
export type Action = ReduxAction<Type>;
