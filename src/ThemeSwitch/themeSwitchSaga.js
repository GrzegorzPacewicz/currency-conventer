import { put, takeLatest } from "redux-saga/effects";
import { toggleDarkTheme } from "./themeSwitchSlice";

function* toggleDarkThemeHandler() {
  yield put(toggleBackgroundColor());
  yield put(toggleColor());
}

export function* themeSwitchSaga() {
  yield takeLatest(toggleDarkTheme.type, toggleDarkThemeHandler);
}
