import { Colors } from '../../../../colors';

export enum RadioButtonVariant {
  Default = 'Default',
  IntoCalendarForm = 'IntoCalendarForm'
}

export const RadioButtonStyleLabel = {
  [RadioButtonVariant.Default]:   {
    fontFamily: 'EncodeSans-Bold',
    fontSize: 14,
    marginLeft: '10px',
  },
  [RadioButtonVariant.IntoCalendarForm]: {
    fontFamily: 'EncodeSans-Bold',
    fontSize: 12,
    marginLeft: '5px',
  },
};

export const RadioButtonColor = {
  [RadioButtonVariant.Default]: Colors.Primary,
  [RadioButtonVariant.IntoCalendarForm]: Colors.Black,
};


