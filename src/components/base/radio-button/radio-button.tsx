import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { FormHelperText } from '@mui/material';
import { SvgImage, SvgType } from '../svg/svg';
import { Colors } from '../../../colors';
import { RadioButtonStyled } from './radio-button.styled';
import CustomTooltip from '../../shared/tooltip/tooltip';
import {
  RadioButtonColor,
  RadioButtonStyleLabel,
  RadioButtonVariant,
} from './constants';

interface RadiosInterface {
  id: string;
  name: string;
}

interface IconRightInterface {
  icon: SvgType;
}

export interface RadioButtonProps {
  radios: RadiosInterface[];
  onChange: (value: string) => void;
  error?: string;
  defaultValue?: string;
  iconRight?: IconRightInterface;
  selectedRadio?: string;
  variant?: RadioButtonVariant;
  disabled?: boolean;
}

const RadioButton = (props: RadioButtonProps) => {
  const { variant = RadioButtonVariant.Default } = props;
  return (
    <FormControl
      sx={{
        width: '100%',
        paddingLeft: variant === RadioButtonVariant.Default ? '20px' : 0,
      }}
      error={!!props.error}
    >
      <RadioGroup
        row
        defaultValue={props.defaultValue}
        name="radio-buttons-group"
        onChange={event => props.onChange(event.target.value)}
      >
        {props.radios.map((radio: any, index: number) => {
          return (
            <RadioButtonStyled.ContainerRadios key={index}>
              <FormControlLabel
                disabled={props.disabled}
                key={radio.id}
                value={radio.id}
                label={radio.name}
                componentsProps={{
                  typography: {
                    ...RadioButtonStyleLabel[variant],
                    color:
                      radio.id !== props.selectedRadio &&
                      variant === RadioButtonVariant.IntoCalendarForm
                        ? Colors.Unavailability
                        : Colors.Black,
                  },
                }}
                control={
                  <Radio
                    sx={{ paddingTop: 0, paddingBottom: 0 }}
                    checkedIcon={
                      <SvgImage
                        type={SvgType.RadioChecked}
                        options={{ color: RadioButtonColor[variant] }}
                      />
                    }
                    icon={
                      <SvgImage
                        type={SvgType.RadioUnchecked}
                        options={{ color: RadioButtonColor[variant] }}
                      />
                    }
                  />
                }
              />
              {props.iconRight && (
                <CustomTooltip
                  placement={'right'}
                  title={radio.name}
                  description={[radio.description]}
                  arrow
                >
                  <RadioButtonStyled.ContainerIconRight>
                    <SvgImage type={props.iconRight.icon} />{' '}
                  </RadioButtonStyled.ContainerIconRight>
                </CustomTooltip>
              )}
            </RadioButtonStyled.ContainerRadios>
          );
        })}
      </RadioGroup>
      <FormHelperText
        sx={{ fontFamily: 'EncodeSans-Light', fontSize: 13, marginLeft: 0 }}
      >
        {props.error}
      </FormHelperText>
    </FormControl>
  );
};

export default RadioButton;
