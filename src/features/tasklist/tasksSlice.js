import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sortBy: "input",
  items: [],
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    //newItem
    addItem(state, action) {
      state.items = [...state.items, action.payload];
    },
    clearList(state) {
      state.items = [];
    },
    //itemId
    checkItem(state, action) {
      state.items.map((item) =>
        item.id === action.payload ? (item.checked = !item.checked) : item,
      );
    },
    //itemId
    deleteItem(state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    //sortBy
    sortItems(state, action) {
      state.sortBy = action.payload;
    },
  },
});

export const { addItem, clearList, checkItem, deleteItem, sortItems } =
  tasksSlice.actions;
export default tasksSlice.reducer;
