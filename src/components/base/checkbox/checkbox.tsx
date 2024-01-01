import React from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Checkbox as NativeCheckbox, FormHelperText } from '@mui/material';
import { sxCheckbox } from './checkbox.styled';
import { Colors } from '../../../colors';
import FormControl from '@mui/material/FormControl';

interface CheckboxLabelProps {
  labelText?: string;
  labelComponent?: JSX.Element;
}
export interface CheckboxProps {
  label?: CheckboxLabelProps;
  labelColor?: string;
  checked: boolean;
  onValueChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}

const Checkbox = (props: CheckboxProps) => {
  return (
    <FormControl sx={sxCheckbox.container} error={props.error ? true : false}>
      <FormControlLabel
        control={
          <>
            <NativeCheckbox
              checked={props.checked}
              onChange={props.onValueChange}
              sx={sxCheckbox.checkboxColor}
            />
            {props.label?.labelComponent && props.label.labelComponent}
          </>
        }
        label={props.label?.labelText && props.label.labelText}
        sx={{
          ...sxCheckbox.label,
          color: props.labelColor ? props.labelColor : Colors.Primary,
        }}
      />
      <FormHelperText sx={sxCheckbox.error}>{props.error}</FormHelperText>
    </FormControl>
  );
};

export default Checkbox;
