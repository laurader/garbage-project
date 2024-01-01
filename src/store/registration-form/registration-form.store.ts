//nome, cognome, residenza, mail, telefono, ecc...),
// (ragione sociale, sede legale e operativa, p. IVA, ruolo all'interno dell'azienda
// e il tipo di utente che desidera impersonare
// (produttore del rifiuto, detentore del rifiuto o trasportatore, intermediario).
// (un utente può impersonare un solo tipo)

import { PayloadAction, createAction, createSlice } from "@reduxjs/toolkit";

export type RegistrationFormType = {
  form: {
    // tipo dello stato della slice e dell'initialState
    [key: string]: string | number | boolean;
    id: number;
    nome: string;
    cognome: string;
    residenza: string;
    inQualitaDi: string;
    ragioneSociale: string;
    sedeLegale: string;
    sedeOperativa: string;
    partitaIva: string;
    indirizzoEmail: string;
    telefonoSede: string;
    telefonoMobile: string;
    password: string;
    confirmPassword: string;
    richiedente:
      | "produttore del rifiuto"
      | ("detentore del rifiuto" | "trasportatore")
      | "intermediario";
  };
  isFormSuccess: boolean;
};

const initialState: RegistrationFormType = {
  form: {
    id: 0,
    nome: "",
    cognome: "",
    residenza: "",
    inQualitaDi: "",
    ragioneSociale: "",
    sedeLegale: "",
    sedeOperativa: "",
    partitaIva: "",
    indirizzoEmail: "",
    telefonoSede: "",
    telefonoMobile: "",
    password: "",
    confirmPassword: "",
    richiedente: "produttore del rifiuto",
  },
  isFormSuccess: false,
};
// createSlice ha come argomento l'oggetto di configurazione: come si chiama la slice? qual'è lo stato iniziale? quali sono le sue azioni(modificano lo stato della slice) ?
const registrationFormSlice = createSlice({
  name: "registrationForm",
  initialState: initialState,
  reducers: {
    updateForm: (state, { payload }: PayloadAction<RegistrationFormType>) => {
      //alla proprietà payload del parametro action arriverà un oggetto di tipo RegistrationFormType
      state = payload;
    },
    updateName: (state, action) => {
      state.form.name = action.payload;
    },
    updateSurname: (state, action) => {
      state.form.surname = action.payload;
    },
    updateStreet: (state, action) => {
      state.form.street = action.payload;
    },
    //Mdetodo dinamico per modificare i parametri dello stato della slice
    updateByKey: (
      state,
      action: PayloadAction<{
        key: string;
        value:
          | string
          | number
          | "produttore del rifiuto"
          | ("detentore del rifiuto" | "trasportatore")
          | "intermediario";
      }>
    ) => {
      const { key, value } = action.payload;
      state.form[key] = value;
    },
    registrationFormSuccess: (state) => {
      state.isFormSuccess = true;
    },
  },
});

export const registrationFormActions = {
  ...registrationFormSlice.actions,
  registrationFormRequested: createAction(
    "registrationForm/registrationFormRequested"
  ),
}; // Accedere alle azioni dai componenti

export const registrationFormReducer = registrationFormSlice.reducer;
