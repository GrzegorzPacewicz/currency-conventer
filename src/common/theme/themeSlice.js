import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    isDarkTheme: getThemeLocalStorage(false),
  },
  reducers: {
    toggleIsDarkTheme: (state) => {
      state.isDarkTheme = !isDarkTheme;
    },
  },
});

export const { toggleIsDarkTheme } = themeSlice.actions;

export const selectIsDarkTheme = (state) => state.theme.isDarkTheme;

export default themeSlice.reducer;
