//nome, cognome, residenza, mail, telefono, ecc...),
// (ragione sociale, sede legale e operativa, p. IVA, ruolo all'interno dell'azienda
// e il tipo di utente che desidera impersonare
// (produttore del rifiuto, detentore del rifiuto o trasportatore, intermediario).
// (un utente può impersonare un solo tipo)

import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type LoginFormType = {
  // tipo dello stato della slice e dell'initialState
  [key: string]: string | number;
  id: number;
  username: string;
  password: string;
  confirmPassword: string;
};

const initialState: LoginFormType = {
  id: 0,
  username: "",
  password: "",
  confirmPassword: "",
};
// createSlice ha come argomento l'oggetto di configurazione: come si chiama la slice? qual'è lo stato iniziale? quali sono le sue azioni(modificano lo stato della slice) ?
const loginFormSlice = createSlice({
  name: "loginForm",
  initialState: initialState,
  reducers: {
    updateForm: (state, { payload }: PayloadAction<LoginFormType>) => {
      //alla proprietà payload del parametro action arriverà un oggetto di tipo RegistrationFormType
      state = payload;
    },
    updateUserame: (state, action) => {
      state.name = action.payload;
    },

    //Mdetodo dinamico per modificare i parametri dello stato della slice
    updateByKey: (
      state,
      action: PayloadAction<{
        key: string;
        value: string | number;
      }>
    ) => {
      const { key, value } = action.payload;
      state[key] = value;
    },
  },
});

export const loginFormActions = loginFormSlice.actions; // Accedere alle azioni dai componenti

export const loginFormReducer = loginFormSlice.reducer;
