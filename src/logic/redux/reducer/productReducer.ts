import { createReducer, current } from "@reduxjs/toolkit";
import { addItem, deleteItem, searchValue } from "../actions/productAction";

export interface CounterState {
  searchInputValue: string;
  cart: any;
}

export const initialValue: CounterState = {
  searchInputValue: "",
  cart: [],
};

export default createReducer(initialValue, (builder) => {
  builder.addCase(searchValue, (state, action) => {
    state.searchInputValue = action.payload;
  });

  builder.addCase(addItem, (state, action) => {
    const product: any = action.payload;
    if (product && current(state.cart).length === 0) {
      state.cart.push(product);
    } else {
      const exist = state?.cart?.find((x: any) => x?.id === product?.id);
      if (exist) {
        alert("Already Added In Cart");
      } else {
        state.cart.push(product);
      }
    }
  });

  builder.addCase(deleteItem, (state, action) => {
    const product: any = action.payload;
    const result = state?.cart?.filter((x: any) => Number(x.id) !== product);
    state.cart = result;
  });
});
