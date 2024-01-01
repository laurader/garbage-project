import styled from '@emotion/styled';
import { Colors } from '../../../colors';

export const CheckboxStyled = {};

export const sxCheckbox = {
  container: {
    minHeight: 62,
  },
  checkboxColor: {
    color: '#000',
    '&.Mui-checked': {
      color: '#000',
    },
  },
  label: {
    fontFamily: ' EncodeSans-Regular',
    fontSize: 14,
  },
  error: {
    fontFamily: 'EncodeSans-Regular',
    fontSize: 10,
    marginLeft: 0,
  },
};
