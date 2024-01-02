import * as yup from "yup";
import RegistrationForm from "../../components/registration-form/registration-form";
import Form from "../../components/shared/form/form";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/app.store";
import { registrationFormActions } from "../../store/registration-form/registration-form.store";
import { RegistrationFormPageStyled } from "./registration-form.page.styled";
import i18n from "../../translations/strings";

const schema = yup.object({
  nome: yup.string().required(""), //inserire messaggio di errore
  cognome: yup.string().required(""),
  residenza: yup.string().required(""),
  indirizzoEmail: yup.string().required().email(),
  password: yup
    .string()
    .required()
    .min(8, "")
    .matches(/[a-zA-Z]/, ""),
  confirmPassword: yup
    .string()
    .required()
    .oneOf([yup.ref("password"), ""], ""),
  partitaIva: yup.string().required().min(11, "").max(11, ""),
});

export default function RegistrationFormPage() {
  // const [formData, setFormData] = useState<RegistrationFormType | null>(null);
  const dispatch = useDispatch();

  //Acquisisco dallo state, dalla slice registrationForm il valore di isFormSuccess
  const { isFormSuccess } = useSelector(
    (state: RootState) => state.registrationForm
  );

  // useEffect(() => {
  //   if (formData) {
  //     const postData = {
  //       user: {
  //         email: formData.indirizzoEmail,
  //         password: formData.password,
  //         first_name: formData.nome,
  //         last_name: formData.cognome,
  //       },
  //       password_confirmation: formData.confirmPassword,
  //       user_type: formData.richiedente,
  //       address: formData.residenza,
  //       business_role: formData.inQualitaDi,
  //       company: {
  //         business_name: formData.ragioneSociale,
  //         registered_office_address: formData.sedeOperativa,
  //         operational_hq: formData.sedeLegale,
  //         vat_number: formData.partitaIva,
  //         office_number: formData.telefonoSede,
  //       },
  //       phone_number: formData.telefonoMobile,
  //     };
  //     axios.post(URL, postData).then((res: AxiosResponse) => {
  //       console.log("Risposta dal server:", res.data);
  //       // Puoi fare altre azioni con la risposta qui se necessario
  //       console.log("RESPONSE");
  //     });
  //   }
  // }, [formData]);
  // function handleChangeName(value: string) {
  //   dispatch(registrationFormActions.updateByKey({ key: "name", value }));
  // }

  const onSubmit = (data: any) => {
    console.log("onSubmit");
    dispatch(registrationFormActions.registrationFormRequested(data));
    // console.log("data = ", data);
    // setFormData(data as RegistrationFormType);
  };

  //todo : dati che arrivano dagli input deel form e vanno dispacciati a saga attraverso un'azione con redux

  return (
    <RegistrationFormPageStyled.Container container>
      <RegistrationFormPageStyled.ContainerForm>
        <RegistrationFormPageStyled.TextSocial>
          {i18n.t("registration.signUp")}
        </RegistrationFormPageStyled.TextSocial>
        <Form schema={schema}>
          <RegistrationForm onSubmit={onSubmit} />
        </Form>
        {/* <p>{isFormSuccess && "Registrazione completata con successo"}</p> */}
        <p>{isFormSuccess && i18n.t("registration.registrationConfirmed")}</p>
      </RegistrationFormPageStyled.ContainerForm>
    </RegistrationFormPageStyled.Container>
  );
}
