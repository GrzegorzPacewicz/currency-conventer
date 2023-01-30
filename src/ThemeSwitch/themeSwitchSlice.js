import { createSlice } from "@reduxjs/toolkit";

const themeSwitchSlice = createSlice({
  name: "themeButton",
  initialState: {
    darkTheme: false,
  },
  reducers: {
    toggleDarkTheme: (state) => {
      state.darkTheme = !state.darkTheme;
    },
  },
});

export const { toggleDarkTheme } = themeSwitchSlice.actions;

export const selectDarkTheme = (state) => state.themeButton.darkTheme;

export default themeSwitchSlice.reducer;
