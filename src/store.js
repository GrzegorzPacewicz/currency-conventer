import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./rootSaga";
import themeReducer from "./common/theme/themeSlice";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    theme: themeReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export default store;
