import styled from '@emotion/styled'
import {
  ButtonBgColors,
  ButtonBorderColor,
  ButtonBorderStyle,
  ButtonBorderWidth,
  ButtonTextColors, ButtonTextMargin,
  ButtonVariant
} from "./constants";

export const ButtonStyled = {
  Container: styled.button<any>`
    width: 100%;
    height: 50px;
    background-color:  ${(props: any) => {
      const variant: ButtonVariant = props.variant;
      return ButtonBgColors[variant];
    }};
    border-width: ${(props: any) => {
      const variant: ButtonVariant = props.variant;
      return ButtonBorderWidth[variant];
    }};
    border-color: ${(props: any) => {
      const variant: ButtonVariant = props.variant;
      return ButtonBorderColor[variant]
    }};

    border-style: ${(props: any) => {
      const variant: ButtonVariant = props.variant;
      return ButtonBorderStyle[variant]
    }};

    border-radius: 5px;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    display: flex;
    padding: 15px 0px 15px 0px;
    cursor: ${(props: any) => (props.disabled ? 'auto' : 'pointer')};
    &:hover {
      opacity: ${(props: any) => (props.disabled ? '1' : '0.9')};
    } 
  `,
  Text: styled.span<any>`
    color: ${(props: any) => {
      const variant: ButtonVariant = props.variant;
      return ButtonTextColors[variant]
    }};
    font-family: EncodeSans-Medium;
    font-size: 16px;
    margin-left: ${(props: any) => {
      const variant: ButtonVariant = props.variant;
      if (props.leftIcon) {
        return '12px'
      }
      return ButtonTextMargin[variant]
    }};
  `,
};

