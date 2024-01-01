import React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { mediaQueryMobileLimit } from '../../../utils/constants';
import dayjs from 'dayjs';
import { sxDatePicker } from './date-picker.constants';
import { useMediaQuery } from '@mui/material';
import { DatePickerStyled } from './date-picker.styled';
import { DesktopDatePicker } from '@mui/x-date-pickers';

export interface DatePickerProps {
  onValueChange?: (time: any, status: any) => void;
  defaultValue?: any;
  disabled?: boolean;
  label: string;
  error?: string;
}

const DatePicker = (props: DatePickerProps) => {
  const desktopMode = useMediaQuery(`(min-width:${mediaQueryMobileLimit}px)`);

  return (
    <DatePickerStyled.Container>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DesktopDatePicker
            format={'DD-MM-YYYY'}
            label={props.label}
            disabled={props.disabled}
            sx={sxDatePicker}
            slotProps={{ textField: { variant: 'filled', fullWidth: true} }}
            value={props.defaultValue ? dayjs(props.defaultValue) : null}
            onChange={props.onValueChange}
          />
      </LocalizationProvider>

      {props.error &&
        <DatePickerStyled.ErrorValidation>
          {props.error}
        </DatePickerStyled.ErrorValidation>
      }
    </DatePickerStyled.Container>
  );
};

export default DatePicker;
