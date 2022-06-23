import { combineReducers, configureStore } from "@reduxjs/toolkit";
import calculatorReducer from "../features/calculator/calculatorSlice";

// redux-undo higher-order reducer
import undoable from "redux-undo";

export default configureStore({
  reducer: combineReducers({
    calculator: undoable(calculatorReducer),
  }),
});
