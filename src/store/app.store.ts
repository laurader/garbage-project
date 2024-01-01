import createSagaMiddleware from "@redux-saga/core";
import { configureStore } from "@reduxjs/toolkit";
import { registrationFormReducer } from "./registration-form/registration-form.store";
import { loginFormReducer } from "./login-form/login-form.store";
import { all } from "redux-saga/effects";
import { registrationSaga } from "../sagas/shared/registration-form.saga";

const rootReducer = {
  registrationForm: registrationFormReducer,
  loginForm: loginFormReducer,
};

function* rootSaga() {
  yield all([registrationSaga()]);
}

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export type RootState = {
  [K in keyof typeof rootReducer]: ReturnType<(typeof rootReducer)[K]>;
};
