import { createAction } from "@reduxjs/toolkit";
export const searchValue = createAction<string>("SEARCH_VALUE");
export const addItem = createAction<Array<any>>("ADD_ITEM");
export const deleteItem = createAction<number>("DELETE_ITEM");
