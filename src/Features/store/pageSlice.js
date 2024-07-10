import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activePage: 1,
};

export const pageSlice = createSlice({
  name: "page",
  initialState,

  reducers: {
    nextPage: (state) => {
      state.activePage = 1;
    },
    previousPage: (state) => {
      state.activePage = 0;
    },
  },
});

export const { nextPage, previousPage } = pageSlice.actions;

export const selectPage = (state) => state.page.activePage;

export default pageSlice.reducer;
