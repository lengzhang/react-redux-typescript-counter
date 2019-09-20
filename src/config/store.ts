import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import rootReducer from "../reducers";

import { ReduxState } from "../types/redux";

const configureStore = (preloadedState?: ReduxState) => {
  const middlewares = [thunkMiddleware];
  const middleWareEnhancer = applyMiddleware(...middlewares);

  const store = createStore(
    rootReducer,
    preloadedState,
    composeWithDevTools(middleWareEnhancer)
  );

  return store;
};

export default configureStore;
