import { createSlice } from "@reduxjs/toolkit";
import { format, evaluate } from "mathjs";

const operators = ["+", "-", "*", "/", "."];

const isTheLastCharacterAnOperator: Function = (str: string) => {
  const lastChar = str[str.length - 1];
  return operators.includes(lastChar);
};

export const calculatorSlice = createSlice({
  name: "calculator",
  initialState: {
    value: "",
  },
  reducers: {
    append: (state, action) => {
      if (isNaN(action.payload)) {
        if (state.value !== "") {
          if (isTheLastCharacterAnOperator(state.value)) {
            state.value = `${state.value.slice(0, -1)}${action.payload}`;
          } else {
            /**
             * This "if" block prevents the user 
             * from adding more than 
             * one comma to the number.
             *
             * Wtihout it, it's possible to
             * input an abomination like "0.0.0".
             * */
            if (action.payload === "." && state.value.includes(".")) {
              let lastPositionsOfOperators: number[] = [];
              operators.forEach((operator) => {
                lastPositionsOfOperators.push(
                  state.value.lastIndexOf(operator)
                );
              });
              if (
                Math.max(...lastPositionsOfOperators) ===
                lastPositionsOfOperators[operators.indexOf(".")]
              ) {
                return;
              }
            }
            state.value += action.payload;
          }
        }
      } else {
        state.value += action.payload;
      }
    },
    clear: (state) => {
      state.value = "";
    },
    calculate: (state) => {
      state.value = format(evaluate(state.value), { precision: 14 });
    },
    negative: (state) => {
      if (state.value !== "") {
        if (state.value[0] === "-") {
          state.value = state.value.slice(1);
        } else {
          if (isTheLastCharacterAnOperator(state.value)) {
            state.value = state.value.slice(0, -1);
          }
          state.value = `(-${state.value})`;
        }
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { append, clear, calculate, negative } = calculatorSlice.actions;

export default calculatorSlice.reducer;
