import { ThunkAction } from "redux-thunk";
import { ReduxState } from "../types/redux";

import rootReducer from "../reducers";
import { Actions } from "../reducers/types";

export type ReduxState = ReturnType<typeof rootReducer>;

export type ThunkResult<Result> = ThunkAction<
  Result,
  ReduxState,
  undefined,
  Actions
>;
