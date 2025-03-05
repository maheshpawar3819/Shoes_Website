import { createSlice } from "@reduxjs/toolkit";

const newarraivals = createSlice({
  name: "newarrivals",
  initialState: {
    newArrivals: [],
    newMens: [],
    newWomensshoes: [],
    newKidsshoes: [],
    newSandels: [],
  },
  reducers: {
    addNewarrivals: (state, action) => {
      state.newArrivals = action.payload;
    },
    addMens: (state, action) => {
      state.newMens = action.payload;
    },
    addwomensshoes: (state, action) => {
      state.newWomensshoes = action.payload;
    },
    addkidsshoes: (state, action) => {
      state.newKidsshoes = action.payload;
    },
    addSandels: (state, action) => {
      state.newSandels = action.payload;
    },
  },
});

export const {
  addNewarrivals,
  addMens,
  addwomensshoes,
  addkidsshoes,
  addSandels,
} = newarraivals.actions;
export default newarraivals.reducer;
