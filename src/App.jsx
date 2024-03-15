import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { createSlice } from "@reduxjs/toolkit";
import { counterActions } from "./store";

function App() {
  // useDispatch handles sending dispatch events with action type
  const dispatch = useDispatch();
  // useSelector creates a small slice of the state -  so that we can work with a small portion of state
  const counter = useSelector((state) => state.counter);
  const show = useSelector((state) => state.showCounter);

  // Use from counter actions
  const incrementCounter = () => {
    dispatch(counterActions.increment());
  };
  const decrementCounter = () => {
    dispatch(counterActions.decrement());
  };
  // The value sent here will be parsed via payload
  const increaseCounter = () => {
    dispatch(counterActions.increase(10));
  };
  const toggleCounter = () => {
    dispatch(counterActions.toggleShow());
  };
  return (
    <div className="app">
      <button onClick={decrementCounter}>Decrement</button>
      {show && <div className="counter">{counter}</div>}
      <button onClick={incrementCounter}>Increment</button>
      <button onClick={increaseCounter}>Increase by 10</button>
      <button onClick={toggleCounter}>Show / Hide</button>
    </div>
  );
}

export default App;
