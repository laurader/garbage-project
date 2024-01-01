import * as yup from "yup";
import Form from "../../components/shared/form/form";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/app.store";
import { useEffect, useState } from "react";
import LoginForm from "../../components/login-form/login-form";
import { LoginFormType } from "../../store/login-form/login-form.store";

const schema = yup.object({
  username: yup.string().required(""), //inserire messaggio di errore
  password: yup.string().required(""),
});

export default function LoginFormPage() {
  const [formData, setFormData] = useState<LoginFormType | null>(null);
  const dispatch = useDispatch();

  // function handleChangeName(value: string) {
  //   dispatch(registrationFormActions.updateByKey({ key: "name", value }));
  // }

  const onSubmit = (data: any) => {
    console.log("onSubmit");
    console.log("data = ", data);
    setFormData(data as LoginFormType);
  };

  //todo : dati che arrivano dagli input deel form e vanno dispacciati a saga attraverso un'azione con redux

  return (
    <div>
      <Form schema={schema}>
        <LoginForm onSubmit={onSubmit} />
      </Form>
    </div>
  );
}
