import { Controller, useFormContext } from "react-hook-form";
import { EditText } from "../edit-text/edit-text";
import Button from "../base/button/button";
import { QuoteFormStyled } from "./quote-form.styled";
import i18n from "../../translations/strings";
import { ButtonVariant } from "../base/button/constants";
import { useSelector } from "react-redux";
import Checkbox from "../base/checkbox/checkbox";
import ClickableTextProps from "../base/clickable-text copy/clickable-text";
import { Colors } from "../../colors";

export default function QuoteForm(props: any) {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useFormContext();
  console.log(props.user);
  return (
    <QuoteFormStyled.Container>
      <QuoteFormStyled.ContainerofContainer>
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
                defaultValue={props.user.nome} //popolo il form con i value dell'utente presi dallo store utente
              />
            );
          }}
        />
        <QuoteFormStyled.Separator />
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
      </QuoteFormStyled.ContainerofContainer>
      <QuoteFormStyled.ContainerofContainer>
        <QuoteFormStyled.Separator />
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
        <QuoteFormStyled.Separator />
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
        <QuoteFormStyled.Separator />
      </QuoteFormStyled.ContainerofContainer>
      <QuoteFormStyled.ContainerofContainer>
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
        <QuoteFormStyled.Separator />
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
        <QuoteFormStyled.Separator />
      </QuoteFormStyled.ContainerofContainer>
      <QuoteFormStyled.ContainerofContainer>
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
        <QuoteFormStyled.Separator />
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
        <QuoteFormStyled.Separator />
      </QuoteFormStyled.ContainerofContainer>
      <QuoteFormStyled.ContainerofContainer>
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
        <QuoteFormStyled.Separator />
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
        <QuoteFormStyled.Separator />
      </QuoteFormStyled.ContainerofContainer>
      <Controller
        control={control}
        name={"conferimento"}
        render={({ field: { onChange, value } }) => {
          return (
            <div>
              <p style={{ fontFamily: "EncodeSans-Regular" }}>
                Tipo di Conferimento
              </p>
              <Checkbox
                error={errors?.privacy?.message?.toString()}
                checked={value}
                onValueChange={(event) => onChange(event.target.checked)}
                label={{
                  labelComponent: (
                    <ClickableTextProps
                      colorText={Colors.Primary}
                      text={"rifiutoA"}
                      clickableText={""}
                      href={""}
                    />
                  ),
                }}
              />
              <Checkbox
                error={errors?.privacy?.message?.toString()}
                checked={value}
                onValueChange={(event) => onChange(event.target.checked)}
                label={{
                  labelComponent: (
                    <ClickableTextProps
                      colorText={Colors.Primary}
                      text={"rifiutoB"}
                      clickableText={""}
                      href={""}
                    />
                  ),
                }}
              />
              <Checkbox
                error={errors?.privacy?.message?.toString()}
                checked={value}
                onValueChange={(event) => onChange(event.target.checked)}
                label={{
                  labelComponent: (
                    <ClickableTextProps
                      colorText={Colors.Primary}
                      text={"rifiuto C"}
                      clickableText={""}
                      href={""}
                    />
                  ),
                }}
              />
              <Checkbox
                error={errors?.privacy?.message?.toString()}
                checked={value}
                onValueChange={(event) => onChange(event.target.checked)}
                label={{
                  labelComponent: (
                    <ClickableTextProps
                      colorText={Colors.Primary}
                      text={"rifiuto D"}
                      clickableText={""}
                      href={""}
                    />
                  ),
                }}
              />
            </div>
          );
        }}
      />
      <QuoteFormStyled.Separator />
      <QuoteFormStyled.ContainerButton>
        <Button
          variant={ButtonVariant.Primary}
          onClick={handleSubmit(props.onSubmit, (e) => {
            console.log(e);
          })}
          label={i18n.t("Richiedi preventivo")}
        />
      </QuoteFormStyled.ContainerButton>
    </QuoteFormStyled.Container>
  );
}
