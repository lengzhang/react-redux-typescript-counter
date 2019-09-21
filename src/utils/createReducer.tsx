import { Action, AnyAction } from "redux";

type Reducer<S, A> = (state: S, action: A) => S;
type Handlers<S, A extends Action = AnyAction> = {
  [T in A["type"]]: Reducer<S, A extends Action<T> ? A : never>;
};
export const createReducer = <
  S,
  T extends string,
  A extends Action<T> = AnyAction
>(
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

// type Handlers<State, Types extends string, Actions extends Action<Types>> = {
//   readonly [Type in Types]: (state: State, action: Actions) => State;
// };
// export const createReducer = <
//   State,
//   Types extends string,
//   Actions extends Action<Types>
// >(
//   initialState: State,
//   handlers: Handlers<State, Types, Actions>
// ) => (state = initialState, action: Actions) => {
//   return handlers.hasOwnProperty(action.type)
//     ? handlers[action.type as Types](state, action)
//     : state;
// };
