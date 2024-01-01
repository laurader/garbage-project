import { FormProvider, useForm } from "react-hook-form";
//import { ButtonVariant } from "../../base/button/constants";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormStyled } from "./form.styled";

export interface FormProps {
  schema?: any;
  children: JSX.Element;
  //buttonVariant?: ButtonVariant;
  defaultValues?: any;
}
const Form = (props: FormProps) => {
  const methods = useForm({
    // resolver: yupResolver(props.schema),
    // defaultValues: props.defaultValues,
  });

  return (
    <FormProvider {...methods}>
      <FormStyled.Form>{props.children}</FormStyled.Form>
    </FormProvider>
  );
};

export default Form;
