import { Action, AnyAction } from "redux";

type Reducer<S, A> = (state: S, action: A) => S;
type Handlers<S, A extends Action = AnyAction> = {
  [T in A["type"]]: Reducer<S, A>
};
export const createReducer = <S, A extends Action<A["type"]> = AnyAction>(
  initialState: S,
  handlers: Handlers<S, A>
) => (state: S | undefined, action: A) => {
  if (state === undefined) state = initialState;
  if (handlers.hasOwnProperty(action.type)) {
    return handlers[action.type](state, action);
  } else {
    return state;
  }
};
