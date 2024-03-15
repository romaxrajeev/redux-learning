import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../reducers";

// This just defines the store - to store the state you need
// Use combineReducers if you have multiple reducers and create one root reducer
const store = configureStore({ reducer: counterReducer.reducer });

// This will export all the actions
export const counterActions = counterReducer.actions;

export default store;
