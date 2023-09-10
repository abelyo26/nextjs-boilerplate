import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { InitialState, selectedTheme } from "./types";

const initialState: InitialState = {
  selectedTheme: undefined,
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    changeTheme: (state, action: PayloadAction<selectedTheme>) => {
      return { selectedTheme: action.payload };
    },
  },
});

export const themeSliceActions = themeSlice.actions;

export const themeReducer = themeSlice.reducer;
