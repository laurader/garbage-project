import React, { useState } from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopTimePicker } from '@mui/x-date-pickers/DesktopTimePicker';
import { MobileTimePicker } from '@mui/x-date-pickers/MobileTimePicker';
import { mediaQueryMobileLimit } from '../../../utils/constants';
import dayjs from 'dayjs';
import { sxTimePicker } from './time-picker.constants';
import { useMediaQuery } from '@mui/material';
import { TimePickerStyled } from './time-picker.styled';
import { TimeValidationError } from '@mui/x-date-pickers';
import i18n from '../../../translations/strings';

export interface TimeClockProps {
  onValueChange?: (time: any, status: any) => void;
  defaultValue?: any;
  disabled?: boolean;
  label: string
}

const TimePicker = (props: TimeClockProps) => {

  const desktopMode = useMediaQuery(`(min-width:${mediaQueryMobileLimit}px)`);
  const [error, setError] = useState<any>(null)

  const onError = (error: TimeValidationError) => {
    if (error) {
      setError(i18n.t('timePicker.invalidHour'))
    } else {
      setError(null)
    }
  }

  return (
    <TimePickerStyled.Container>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        {desktopMode
          ? <DesktopTimePicker
            label={props.label}
            disabled={props.disabled}
            sx={sxTimePicker}
            slotProps={{textField: { variant: 'filled' } }}
            ampm={false}
            value={props.defaultValue ? dayjs(props.defaultValue) : null}
            onChange={props.onValueChange}
            onError={onError}
          />
          : <MobileTimePicker
            label={props.label}
            disabled={props.disabled}
            sx={sxTimePicker}
            slotProps={{textField: { variant: 'filled', fullWidth: true} }}
            ampm={false}
            value={props.defaultValue ? dayjs(props.defaultValue) : null}
            onChange={props.onValueChange}
            onError={onError}
          />
        }
      </LocalizationProvider>
      <TimePickerStyled.ErrorValidation>{error}</TimePickerStyled.ErrorValidation>
    </TimePickerStyled.Container>

  );
};

export default TimePicker;
