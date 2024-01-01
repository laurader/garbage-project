import React, { forwardRef, useState } from 'react';
import TextField from '@mui/material/TextField';
import {
  EdiTextBgColor,
  EdiTextBorderFieldset,
  EdiTextInputLabelStyle,
  EdiTextVariant,
  EditTextStyle,
  EditTextType,
} from './constants';
import { IconButton, InputAdornment, InputLabel } from '@mui/material';
import { Colors } from '../../../colors';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

interface SelectionProps {
  selections: { id: string; name: string }[];
  uncontrolledSelect?: boolean
}

export interface EdiTextProps {
  placeholder?: string;
  variant?: EdiTextVariant;
  error?: string;
  multiline?: boolean;
  select?: SelectionProps;
  onChange: (value: any) => void;
  defaultValue?: string;
  label?: string;
  fullWidth?: boolean;
  isPassword?: boolean;
  isNumeric?: boolean;
  disabled?: boolean;
  isFilledVariantWhite?: boolean
  readOnly?: boolean;
  minHeight?: number;
}
const EditText = forwardRef((props: EdiTextProps, ref: any) => {
  const {
    variant =  EdiTextVariant.Filled,
    fullWidth = true,
  } = props;

  if (props.label && props.select) {
    throw new Error('cannot declare label with select options');
  }

  if (props.isFilledVariantWhite && variant !== EdiTextVariant.Filled) {
    throw new Error('cannot declare props isFilledVariantWhite without filled variant');
  }

  const [showPassword, setShowPassword] = useState(false);

  const label = variant !== EdiTextVariant.ExternalLabel ? props.label : undefined;
  const typeInput = variant === EdiTextVariant.ExternalLabel ? undefined : variant;
  const password =
    props.isPassword && !showPassword
      ? EditTextType.Password
      : EditTextType.Text;

  const handleClickShowPassword = () => setShowPassword(!showPassword);

  return (
    <div style={{minHeight: props.minHeight ? props.minHeight : 80}}>
      {variant === EdiTextVariant.ExternalLabel && (
        <InputLabel
          sx={{
            fontFamily: 'EncodeSans-Regular',
            fontSize: 20,
            color: Colors.Black,
          }}
        >
          {props.label}
        </InputLabel>
      )}
      <TextField
        ref={ref}
        disabled={props.disabled}
        sx={EditTextStyle[variant]}
        fullWidth={fullWidth}
        InputLabelProps={{...EdiTextInputLabelStyle[ variant ], shrink: props.defaultValue ? true : undefined}}
        InputProps={{
          readOnly: props.readOnly,
          sx: {
            backgroundColor: EdiTextBgColor(variant, props.isFilledVariantWhite
            ),
            '& fieldset': EdiTextBorderFieldset[variant],
            fontFamily: 'EncodeSans-Regular',
            '& .Mui-disabled': {
              borderBottomRightRadius: 4,
              borderBottomLeftRadius: 4,
              backgroundColor: props.isFilledVariantWhite ? 'rgba(255,255,255,0.85)' : 'rgba(239, 239, 239, 0.3)',
            },
            '&  .MuiNativeSelect-filled': {
              padding: '10px 32px 8px 12px',
              minHeight: props.minHeight ? props.minHeight : 38
            },
          },
          endAdornment: props.isPassword && (
            <InputAdornment position="end">
              <IconButton
                onClick={handleClickShowPassword}
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          )
        }}
        variant={typeInput}
        FormHelperTextProps={{
          style: {
            color: 'red',
            fontFamily: 'EncodeSans-Regular',
            fontSize: 10,
            marginLeft: 0,
          },
        }}
        type={password}
        label={label}
        placeholder={props.placeholder}
        helperText={props.error}
        multiline={props.multiline}
        defaultValue={props.defaultValue}
        select={props.select ? true : false}
        SelectProps={{
          native: true,
          value: props.select?.uncontrolledSelect ? props.defaultValue : undefined
        }}
        onChange={props.onChange}
      >
        {props.select &&
          props.select.selections.map(selection => (
            <option style={{color: Colors.DarkGrey}} key={selection.id} value={selection.id}>
              {selection.name}
            </option>
          ))}
      </TextField>
    </div>
  );
});

export default EditText;

