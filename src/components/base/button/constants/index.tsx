import { Colors } from '../../../../colors';
import { SvgImage, SvgType } from '../../svg/svg';
import React from 'react';

export enum ButtonVariant {
  Primary = 'Primary',
  Facebook = 'Facebook',
  Google = 'Google',
  Disabled = 'Disabled',
  Warning = 'Warning',
  Outlined = 'Outlined',
  Dark = 'Dark',
}
export const ButtonBgColors = {
  [ButtonVariant.Primary]: Colors.Primary,
  [ButtonVariant.Facebook]: Colors.Blue,
  [ButtonVariant.Google]: Colors.White,
  [ButtonVariant.Disabled]: Colors.UnderlinedGrey,
  [ButtonVariant.Warning]: Colors.Red,
  [ButtonVariant.Outlined]: Colors.White,
  [ButtonVariant.Dark]: Colors.Black,
};

export const ButtonTextColors = {
  [ButtonVariant.Primary]: Colors.White,
  [ButtonVariant.Facebook]: Colors.White,
  [ButtonVariant.Google]: Colors.Black,
  [ButtonVariant.Disabled]: Colors.White,
  [ButtonVariant.Warning]: Colors.White,
  [ButtonVariant.Outlined]: Colors.Primary,
  [ButtonVariant.Dark]: Colors.White,
};
export const ButtonCircularLoading = {
  [ButtonVariant.Primary]: Colors.White,
  [ButtonVariant.Facebook]: Colors.White,
  [ButtonVariant.Google]: Colors.Black,
  [ButtonVariant.Disabled]: Colors.White,
  [ButtonVariant.Warning]: Colors.White,
  [ButtonVariant.Outlined]: Colors.Primary,
  [ButtonVariant.Dark]: Colors.White,
};

export const ButtonBorderStyle = {
  [ButtonVariant.Primary]: 'none',
  [ButtonVariant.Facebook]: 'none',
  [ButtonVariant.Google]: 'solid',
  [ButtonVariant.Disabled]: 'none',
  [ButtonVariant.Warning]: 'none',
  [ButtonVariant.Outlined]: 'solid',
  [ButtonVariant.Dark]: 'none',
};

export const ButtonBorderWidth = {
  [ButtonVariant.Primary]: '0px',
  [ButtonVariant.Facebook]: '0px',
  [ButtonVariant.Google]: '1px',
  [ButtonVariant.Disabled]: '0px',
  [ButtonVariant.Warning]: '0px',
  [ButtonVariant.Outlined]: '2px',
  [ButtonVariant.Dark]: '0px',
};
export const ButtonBorderColor = {
  [ButtonVariant.Primary]: Colors.Transparent,
  [ButtonVariant.Facebook]: Colors.Transparent,
  [ButtonVariant.Google]: Colors.Grey,
  [ButtonVariant.Disabled]: Colors.Transparent,
  [ButtonVariant.Warning]: Colors.Transparent,
  [ButtonVariant.Outlined]: Colors.Primary,
  [ButtonVariant.Dark]: Colors.Transparent,
};
export const ButtonSvg = {
  [ButtonVariant.Primary]: null,
  [ButtonVariant.Facebook]: <SvgImage type={SvgType.Facebook} />,
  [ButtonVariant.Google]: <SvgImage type={SvgType.Google} />,
  [ButtonVariant.Disabled]: null,
  [ButtonVariant.Warning]: null,
  [ButtonVariant.Outlined]: null,
  [ButtonVariant.Dark]: null,
};
export const ButtonTextMargin = {
  [ButtonVariant.Primary]: '0px',
  [ButtonVariant.Facebook]: '12px',
  [ButtonVariant.Google]: '12px',
  [ButtonVariant.Disabled]: '0px',
  [ButtonVariant.Warning]: '0px',
  [ButtonVariant.Outlined]: '0px',
  [ButtonVariant.Dark]: '0px',
};
