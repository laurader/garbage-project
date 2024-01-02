import * as yup from "yup";
import Form from "../../components/shared/form/form";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/app.store";
import { useEffect, useState } from "react";
import LoginForm from "../../components/login-form/login-form";
import { LoginFormType } from "../../store/login-form/login-form.store";
import { LoginFormPageStyled } from "./login-form.page.styled";
import i18n from "../../translations/strings";
import { ClickableTextStyled } from "../../components/base/clickable-text copy/clickable-text.styled";
import ClickableTextProps from "../../components/base/clickable-text copy/clickable-text";

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
    <LoginFormPageStyled.Container container>
      <LoginFormPageStyled.ItemGrid item xs={12} md={4}>
        <LoginFormPageStyled.Title>
          {i18n.t("login.loginIntoYourAccount")}
        </LoginFormPageStyled.Title>
        <LoginFormPageStyled.Separator />
        <Form schema={schema}>
          <LoginForm onSubmit={onSubmit} />
        </Form>
        <ClickableTextProps
          text={i18n.t("login.notSignUp")}
          clickableText={i18n.t("login.signUp")}
          href={"/registration"}
        />
        <LoginFormPageStyled.Separator />
        <ClickableTextProps
          text={i18n.t("login.forgotPassword")}
          clickableText={i18n.t("login.forgotPasswordClick")}
          href={"/reset-password"}
        />
      </LoginFormPageStyled.ItemGrid>
    </LoginFormPageStyled.Container>
  );
}
