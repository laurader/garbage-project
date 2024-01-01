import { Colors } from '../../../colors';

export const sxDatePicker = {
  input: {
    fontFamily: 'EncodeSans-Regular',
    color: Colors.DarkGrey,
  },
  label: {
    fontFamily: 'EncodeSans-Regular',
    color: Colors.DarkGrey
  },
  '& .MuiFilledInput-root': {
    borderBottomRightRadius: 4,
    borderBottomLeftRadius: 4,
    backgroundColor: Colors.LightGrey,
    width: '100%',
    '&.MuiFilledInput-underline:after': {
      borderBottom: `none`,
    },
    '&.MuiFilledInput-underline': {
      borderBottom: `1px solid ${Colors.UnderlinedGrey}`,
      borderBottomRightRadius: 4,
      borderBottomLeftRadius: 4,
    },
    '&.MuiFilledInput-underline:before': {
      borderBottom: 'none',
    },
    '&.Mui-focused': {
      borderBottomRightRadius: 4,
      borderBottomLeftRadius: 4,
      borderBottom: `1px solid ${Colors.Primary}`,
    },
  },
  '& .MuiFilledInput-root:hover:not(.Mui-disabled, .Mui-error):before': {
    borderBottom: 'none',
  },
}
