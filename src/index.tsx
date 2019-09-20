import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import configureStore from "./config/store";

import Counter from "./components/Counter";

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
