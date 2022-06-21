import { createSlice } from "@reduxjs/toolkit";
import { format } from "mathjs";

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
      state.value = format(eval(state.value), {
        precision: 14,
      });
    },
    removeLastCharacter: (state) => {
      if (state.value !== "") {
        state.value = state.value.slice(0, -1);
      }
    },
    negative: (state) => {
      if (state.value !== "") {
        if (state.value[0] === "-") {
          state.value = state.value.slice(1);
        } else {
          state.value = `(-${state.value})`;
        }
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { append, clear, calculate, removeLastCharacter, negative } =
  calculatorSlice.actions;

export default calculatorSlice.reducer;
