import { createSlice } from "@reduxjs/toolkit";
import {
  getThemeFromLocalStorage,
  saveThemeInLocalStorage,
} from "./themeLocalStorage";

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    isDarkTheme: getThemeFromLocalStorage(),
  },
  reducers: {
    toggleIsDarkTheme: (state) => {
      state.isDarkTheme = !state.isDarkTheme;
      saveThemeInLocalStorage(state.isDarkTheme);
    },
  },
});

export const { toggleIsDarkTheme } = themeSlice.actions;

export const selectIsDarkTheme = (state) => state.theme.isDarkTheme;

export default themeSlice.reducer;
