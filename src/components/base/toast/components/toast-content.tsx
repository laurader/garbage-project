import React, { forwardRef } from 'react';
import { AlertStyled } from "./toast-content.styled";
import { ToastContentVariant } from "./constants";
import { SvgImage, SvgType } from "../../svg/svg";

export interface CustomToastProps {
  backgroundColor?: string;
  color?: string;
  icon?: boolean,
  svg?: SvgType
}

export interface ToastContentProps {
  messageText: string;
  onClose?: () => void;
  severity?: ToastContentVariant,
  isCustom?: CustomToastProps;
  action?: any
}

const ToastContent = forwardRef((props: ToastContentProps, ref: any) => {

  return (
    <AlertStyled.Container
      icon={props.isCustom?.icon && props.isCustom.svg && <SvgImage type={props.isCustom.svg} /> }
      severity={props.severity} elevation={6}
      onClose={props.onClose}
      sx={{backgroundColor: props.isCustom?.backgroundColor, color: props.isCustom?.color}}
      action={props.action}
    >
      {props.messageText}
    </AlertStyled.Container>
  );
});

export default ToastContent;
