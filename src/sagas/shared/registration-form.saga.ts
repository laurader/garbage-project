import { call, put, takeLatest } from "redux-saga/effects";
import { registrationRequestAPI } from "../../api/provider/registration/registration-request.form";
import { registrationFormActions } from "../../store/registration-form/registration-form.store";
import { ApiResponse } from "../../api/request";

export function* registrationPostRequest(action: any) {
  const formData = action.payload;
  if (formData) {
    const postData = {
      user: {
        email: formData.indirizzoEmail,
        password: formData.password,
        first_name: formData.nome,
        last_name: formData.cognome,
      },
      password_confirmation: formData.confirmPassword,
      user_type: formData.richiedente,
      address: formData.residenza,
      business_role: formData.inQualitaDi,
      company: {
        business_name: formData.ragioneSociale,
        registered_office_address: formData.sedeOperativa,
        operational_hq: formData.sedeLegale,
        vat_number: formData.partitaIva,
        office_number: formData.telefonoSede,
      },
      phone_number: formData.telefonoMobile,
    };
    try {
      const response: ApiResponse = yield call(
        registrationRequestAPI,
        postData
      );

      if (response.status === 201) {
        yield put(registrationFormActions.registrationFormSuccess());
      }
    } catch (e) {
      console.log(e);
    }
  }
}

export function* registrationSaga() {
  yield takeLatest(
    registrationFormActions.registrationFormRequested.type,
    registrationPostRequest
  );
}
