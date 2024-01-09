import { createSlice } from "@reduxjs/toolkit";

export enum UserTypeVariant {
  Customer = "Customer",
  Admin = "Admin",
}

const initialState = {
  user: {
    nome: "Maria",
    cognome: "Rossi",
    inQualitaDi: "CEO",
    ragioneSociale: "Abinsula",
    sedeLegale: "Sassari",
    sedeOperativa: "Sassari",
    partitaIva: "12345678912",
    indirizzoEmail: "maria.rossi@abinsula.com",
    telefonoSede: "1024563987",
    richiedente: "produttore del rifiuto",
    conferimento: "a",
  },
  userType: null,
  error: null,
  loading: false,
};

const slice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    userSetDataAction: (state, action) => {
      let userType: any =
        action.payload.user_type === "Admin"
          ? UserTypeVariant.Admin
          : UserTypeVariant.Customer;
      state.user = action.payload;
      state.userType = userType;
    },

    errorUserAction: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    partialUserResetAction: (state) => {
      state.loading = false;
      state.error = null;
    },
    userResetState: () => initialState,
  },
});

export const {
  userSetDataAction,
  userResetState,
  errorUserAction,
  partialUserResetAction,
} = slice.actions;

export default slice.reducer;
