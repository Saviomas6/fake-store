import { createReducer } from "@reduxjs/toolkit";
import { themeToggle } from "../actions/themeAction";

export interface CounterState {
  themeValue: string;
}

export const initialValue: CounterState = {
  themeValue: "light",
};

export default createReducer(initialValue, (builder) => {
  builder.addCase(themeToggle, (state, action) => {
    state.themeValue = action.payload;
  });
});
