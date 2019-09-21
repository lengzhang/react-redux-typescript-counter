import { ThunkResult } from "../types/redux";

export const increase = (): ThunkResult<void> => (dispatch, getState) => {
  dispatch({ type: "INCREASE" });
};
export const decrease = (): ThunkResult<void> => (dispatch, getState) => {
  dispatch({ type: "DECREASE" });
};
export const setCounter = (counter: number): ThunkResult<void> => (
  dispatch,
  getState
) => {
  dispatch({ type: "SET_COUNTER", payload: { counter } });
};
