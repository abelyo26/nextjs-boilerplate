import { RootState } from "appState";

export const selectTheme = (state: RootState) =>
  state.themeReducer.selectedTheme;
