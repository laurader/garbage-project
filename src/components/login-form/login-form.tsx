import { Controller, useFormContext } from "react-hook-form";
import { EditText } from "../edit-text/edit-text";

export default function LoginForm(props: any) {
  const { handleSubmit, control } = useFormContext();

  return (
    <div>
      <Controller
        control={control}
        name={"username"}
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
    </div>
  );
}
