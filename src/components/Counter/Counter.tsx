import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { ReduxState } from "../../types/redux";
import { increase, decrease } from "../../actions";

const selector = (state: ReduxState) => {
  return state.counter;
};

const Counter: React.FC = () => {
  const counter = useSelector(selector);
  const dispatch = useDispatch();

  const onIncrease = () => {
    dispatch(increase());
  };
  const onDecrease = () => {
    dispatch(decrease());
  };

  return (
    <div>
      <p>Counter: {counter}</p>
      <button type="button" onClick={onIncrease}>
        +
      </button>
      <button type="button" onClick={onDecrease}>
        -
      </button>
    </div>
  );
};

export default Counter;
