import { Controller, useFormContext } from "react-hook-form";
import { EditText } from "../edit-text/edit-text";

// interface RegistrationFormProps {
//   onSubmit: SubmitHandler<FieldValues>;
// }

export default function RegistrationForm(props: any) {
  const { handleSubmit, control } = useFormContext();
  return (
    <div>
      <Controller
        control={control}
        name={"nome"}
        render={({ field: { onChange, value } }) => {
          return <EditText onChange={onChange} />;
        }}
      />
      <Controller
        control={control}
        name={"cognome"}
        render={({ field: { onChange, value } }) => {
          return <EditText onChange={onChange} />;
        }}
      />
      <Controller
        control={control}
        name={"residenza"}
        render={({ field: { onChange, value } }) => {
          return <EditText onChange={onChange} />;
        }}
      />
      <Controller
        control={control}
        name={"inQualitaDi"}
        render={({ field: { onChange, value } }) => {
          return <EditText onChange={onChange} />;
        }}
      />
      <Controller
        control={control}
        name={"ragioneSociale"}
        render={({ field: { onChange, value } }) => {
          return <EditText onChange={onChange} />;
        }}
      />
      <Controller
        control={control}
        name={"sedeLegale"}
        render={({ field: { onChange, value } }) => {
          return <EditText onChange={onChange} />;
        }}
      />
      <Controller
        control={control}
        name={"sedeOperativa"}
        render={({ field: { onChange, value } }) => {
          return <EditText onChange={onChange} />;
        }}
      />
      <Controller
        control={control}
        name={"partitaIva"}
        render={({ field: { onChange, value } }) => {
          return <EditText onChange={onChange} />;
        }}
      />
      <Controller
        control={control}
        name={"indirizzoEmail"}
        render={({ field: { onChange, value } }) => {
          return <EditText onChange={onChange} />;
        }}
      />
      <Controller
        control={control}
        name={"telefonoSede"}
        render={({ field: { onChange, value } }) => {
          return <EditText onChange={onChange} />;
        }}
      />
      <Controller
        control={control}
        name={"telefonoMobile"}
        render={({ field: { onChange, value } }) => {
          return <EditText onChange={onChange} />;
        }}
      />
      <Controller
        control={control}
        name={"password"}
        render={({ field: { onChange, value } }) => {
          return <EditText onChange={onChange} />;
        }}
      />
      <Controller
        control={control}
        name={"confirmPassword"}
        render={({ field: { onChange, value } }) => {
          return <EditText onChange={onChange} />;
        }}
      />
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
            />
          );
        }}
      />
      <button
        onClick={handleSubmit(props.onSubmit, (e) => {
          console.log(e);
        })}
      >
        Click
      </button>
    </div>
  );
}
