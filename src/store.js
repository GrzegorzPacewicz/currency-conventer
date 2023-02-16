import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    theme: themeReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export default store;
