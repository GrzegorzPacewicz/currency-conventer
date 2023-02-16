const localStorageKey = "isDarkTheme";

export const saveThemeInLocalStorage = (isDarkTheme) =>
  localStorage.setItem(localStorageKey, isDarkTheme);

export const getThemeFromLocalStorage = () =>
  JSON.parse(localStorage.getItem(localStorageKey)) || [];
