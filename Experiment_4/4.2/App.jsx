import React from "react";
import { createRoot } from "react-dom/client";
import { Provider, useDispatch, useSelector } from "react-redux";
import store, { increment, decrement } from "./store";
import "./index.css";

function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="redux-root">
      <div className="counter-card">
        <h1 className="title">Redux Counter</h1>
        <div className="value">{count}</div>
        <div className="controls">
          <button className="btn increment" onClick={() => dispatch(increment())}>
            +
          </button>
          <button className="btn decrement" onClick={() => dispatch(decrement())}>
            -
          </button>
          <button className="btn reset" onClick={() => dispatch({ type: 'counter/reset' })}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

// Add a simple reset reducer handler by patching store when action.type === 'counter/reset'
// (keeps store.js simple for beginners)

function AppWrapper() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}

createRoot(document.getElementById("root")).render(<AppWrapper />);
