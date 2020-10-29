import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import rootReducer from "../reducers";

const initialState = {};

export default configureStore({
  reducer: {
    counter: counterReducer,
    rootReducer,
    initialState,
  },
});
