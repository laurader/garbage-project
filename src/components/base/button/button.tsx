import { ButtonStyled } from "./button.styled";
import { ButtonCircularLoading, ButtonSvg, ButtonVariant } from "./constants";
import { SvgImage, SvgType } from "../svg/svg";
import CircularLoading from "../loading/circular-loading/circular-loading";

export interface ButtonProps {
  disabled?: boolean;
  onClick: (data: any) => void;
  label: string;
  leftIcon?: SvgType;
  variant?: ButtonVariant;
  loading?: boolean;
}

const Button = (props: ButtonProps) => {
  const {
    variant = props.disabled ? ButtonVariant.Disabled : ButtonVariant.Primary,
  } = props;

  return (
    <ButtonStyled.Container
      disabled={props.disabled || props.loading}
      onClick={props.onClick}
      variant={variant}
    >
      {props.leftIcon ? <SvgImage type={props.leftIcon} /> : ButtonSvg[variant]}
      <ButtonStyled.Text leftIcon={props.leftIcon} variant={variant}>
        {props.label}
      </ButtonStyled.Text>
      {props.loading && (
        <CircularLoading
          color={ButtonCircularLoading[variant]}
          loading={props.loading}
        />
      )}
    </ButtonStyled.Container>
  );
};

export default Button;
