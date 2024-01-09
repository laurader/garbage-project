import { Controller, useFormContext } from "react-hook-form";
import { EditText } from "../edit-text/edit-text";
import { LoginFormStyled } from "./login-form.styled";
import i18n from "../../translations/strings";
import Button from "../base/button/button";
import { ButtonVariant } from "../base/button/constants";

export default function LoginForm(props: any) {
  const { handleSubmit, control } = useFormContext();

  return (
    <LoginFormStyled.Container>
      <LoginFormStyled.Separator />
      <Controller
        control={control}
        name={"username"}
        render={({ field: { onChange, value } }) => {
          return (
            <EditText
              onChange={onChange}
              placeholder={i18n.t("login.username") + "*"}
              label={i18n.t("login.username") + "*"}
            />
          );
        }}
      />
      <LoginFormStyled.Separator />
      <Controller
        control={control}
        name={"password"}
        render={({ field: { onChange, value } }) => {
          return (
            <EditText
              onChange={onChange}
              placeholder={i18n.t("login.password") + "*"}
              label={i18n.t("login.password") + "*"}
            />
          );
        }}
      />
      <LoginFormStyled.ContainerButton>
        <Button
          variant={ButtonVariant.Primary}
          onClick={handleSubmit(props.onSubmit, (e) => {
            console.log(e);
          })}
          disabled={props.loading}
          label={i18n.t("login.login")}
        />
      </LoginFormStyled.ContainerButton>
    </LoginFormStyled.Container>
  );
}
