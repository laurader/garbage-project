import * as yup from "yup";
import RegistrationForm from "../../components/registration-form/registration-form";
import Form from "../../components/shared/form/form";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/app.store";
import { registrationFormActions } from "../../store/registration-form/registration-form.store";
import { QuoteFormPageStyled } from "./quote-form.page.styled";
import i18n from "../../translations/strings";
import QuoteForm from "../../components/quote-form/quote-form";

export default function QuoteFormPage() {
  const { user } = useSelector((state: any) => {
    return state.user; //state.user user è il nome della slice utente denominata user
  });
  // const [formData, setFormData] = useState<RegistrationFormType | null>(null);
  const dispatch = useDispatch();

  const onSubmit = (data: any) => {
    console.log("onSubmit");
    //dati che arrivano dagli input del form e vanno dispacciati a saga attraverso un'azione con redux
    // dispatch(registrationFormActions.registrationFormRequested(data));
    // console.log("data = ", data);
    // setFormData(data as RegistrationFormType);
  };
  //Sto passando a QuoteForm la props user passandogli l'oggetto user.
  return (
    <QuoteFormPageStyled.Container container>
      <QuoteFormPageStyled.ContainerForm>
        <QuoteFormPageStyled.TextSocial>
          {"Richiedi preventivo"}
        </QuoteFormPageStyled.TextSocial>
        <Form>
          <QuoteForm user={user} onSubmit={onSubmit} />
        </Form>
      </QuoteFormPageStyled.ContainerForm>
    </QuoteFormPageStyled.Container>
  );
}
