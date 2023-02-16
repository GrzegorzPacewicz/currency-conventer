import { all } from "redux-saga/effects";
import { themeSaga } from "./common/theme/themeSaga";

export default function* rootSaga() {
  yield all([themeSaga()]);
}
