import { createSlice } from "@reduxjs/toolkit";

const initialState = { counter: 0, showCounter: true };

// Create a slice for each of the state required and the reducers needed.
// Write the logic for each reducer here
const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state) {
      state.counter = state.counter + 1;
    },
    decrement(state) {
      state.counter = state.counter - 1;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggleShow(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

export default counterSlice;
