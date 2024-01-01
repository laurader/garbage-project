import styled from '@emotion/styled';
import { Colors } from '../../../colors';

export const TimePickerStyled = {
  Container: styled.div<any>`
  `,
  ErrorValidation: styled.p<any>`
    color: ${Colors.Red};
    font-family: EncodeSans-Regular;
    font-size: 10px;
    height: 10px;
    margin-top: 3px;
  `,
};