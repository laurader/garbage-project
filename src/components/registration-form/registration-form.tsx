import { Controller, useFormContext } from "react-hook-form";
import { EditText } from "../edit-text/edit-text";
import Button from "../base/button/button";
import { RegistrationFormStyled } from "./registration-form.styled";
import i18n from "../../translations/strings";
import { ButtonVariant } from "../base/button/constants";

export default function RegistrationForm(props: any) {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useFormContext();
  console.log(errors);
  return (
    <RegistrationFormStyled.Container>
      <Controller
        control={control}
        name={"nome"}
        render={({ field: { onChange, value } }) => {
          return (
            <EditText
              onChange={onChange}
              placeholder={i18n.t("registration.firstName") + "*"}
              label={i18n.t("registration.firstName") + "*"}
              error={errors?.nome?.message?.toString()}
            />
          );
        }}
      />
      <RegistrationFormStyled.Separator />
      <Controller
        control={control}
        name={"cognome"}
        render={({ field: { onChange, value } }) => {
          return (
            <EditText
              onChange={onChange}
              placeholder={i18n.t("registration.lastName") + "*"}
              label={i18n.t("registration.lastName") + "*"}
            />
          );
        }}
      />
      <RegistrationFormStyled.Separator />
      <Controller
        control={control}
        name={"residenza"}
        render={({ field: { onChange, value } }) => {
          return (
            <EditText
              onChange={onChange}
              placeholder={i18n.t("registration.address") + "*"}
              label={i18n.t("registration.address") + "*"}
            />
          );
        }}
      />
      <RegistrationFormStyled.Separator />
      <Controller
        control={control}
        name={"inQualitaDi"}
        render={({ field: { onChange, value } }) => {
          return (
            <EditText
              onChange={onChange}
              placeholder={i18n.t("registration.inCapacityOf") + "*"}
              label={i18n.t("registration.inCapacityOf") + "*"}
            />
          );
        }}
      />
      <RegistrationFormStyled.Separator />
      <Controller
        control={control}
        name={"ragioneSociale"}
        render={({ field: { onChange, value } }) => {
          return (
            <EditText
              onChange={onChange}
              placeholder={i18n.t("registration.businessName") + "*"}
              label={i18n.t("registration.businessName") + "*"}
            />
          );
        }}
      />
      <RegistrationFormStyled.Separator />
      <Controller
        control={control}
        name={"sedeLegale"}
        render={({ field: { onChange, value } }) => {
          return (
            <EditText
              onChange={onChange}
              placeholder={i18n.t("registration.legalAddress") + "*"}
              label={i18n.t("registration.legalAddress") + "*"}
            />
          );
        }}
      />
      <RegistrationFormStyled.Separator />
      <Controller
        control={control}
        name={"sedeOperativa"}
        render={({ field: { onChange, value } }) => {
          return (
            <EditText
              onChange={onChange}
              placeholder={i18n.t("registration.operationalAddress") + "*"}
              label={i18n.t("registration.operationalAddress") + "*"}
            />
          );
        }}
      />
      <RegistrationFormStyled.Separator />
      <Controller
        control={control}
        name={"partitaIva"}
        render={({ field: { onChange, value } }) => {
          return (
            <EditText
              onChange={onChange}
              placeholder={i18n.t("registration.vatNumber") + "*"}
              label={i18n.t("registration.vatNumber") + "*"}
            />
          );
        }}
      />
      <RegistrationFormStyled.Separator />
      <Controller
        control={control}
        name={"indirizzoEmail"}
        render={({ field: { onChange, value } }) => {
          return (
            <EditText
              onChange={onChange}
              placeholder={i18n.t("registration.officePhone") + "*"}
              label={i18n.t("registration.inCapacityOf") + "*"}
            />
          );
        }}
      />
      <RegistrationFormStyled.Separator />
      <Controller
        control={control}
        name={"telefonoSede"}
        render={({ field: { onChange, value } }) => {
          return (
            <EditText
              onChange={onChange}
              placeholder={i18n.t("registration.officePhone") + "*"}
              label={i18n.t("registration.officePhone") + "*"}
            />
          );
        }}
      />
      <RegistrationFormStyled.Separator />
      <Controller
        control={control}
        name={"telefonoMobile"}
        render={({ field: { onChange, value } }) => {
          return (
            <EditText
              onChange={onChange}
              label={i18n.t("registration.mobilePhone") + "*"}
            />
          );
        }}
      />
      <RegistrationFormStyled.Separator />
      <Controller
        control={control}
        name={"password"}
        render={({ field: { onChange, value } }) => {
          return (
            <EditText
              onChange={onChange}
              placeholder={i18n.t("registration.password") + "*"}
              label={i18n.t("registration.password") + "*"}
            />
          );
        }}
      />
      <RegistrationFormStyled.Separator />
      <Controller
        control={control}
        name={"confirmPassword"}
        render={({ field: { onChange, value } }) => {
          return (
            <EditText
              onChange={onChange}
              placeholder={i18n.t("registration.confirmPassword") + "*"}
              label={i18n.t("registration.confirmPassword") + "*"}
            />
          );
        }}
      />
      <RegistrationFormStyled.Separator />
      <Controller
        control={control}
        name={"richiedente"}
        render={({ field: { onChange, value } }) => {
          return (
            <EditText
              select={{
                options: [
                  { id: "a", name: "produttore del rifiuto" },
                  { id: "b", name: "detentore del rifiuto" },
                  { id: "c", name: "intermediario" },
                  { id: "d", name: "trasportatore" },
                ],
              }}
              onChange={onChange}
              placeholder={i18n.t("registration.applicant") + "*"}
              label={i18n.t("registration.applicant") + "*"}
            />
          );
        }}
      />
      <RegistrationFormStyled.Separator />
      <RegistrationFormStyled.ContainerButton>
        <Button
          variant={ButtonVariant.Primary}
          onClick={handleSubmit(props.onSubmit, (e) => {
            console.log(e);
          })}
          label={i18n.t("registration.signUp")}
        />
      </RegistrationFormStyled.ContainerButton>
    </RegistrationFormStyled.Container>
  );
}
