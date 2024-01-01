import { IconButton, InputAdornment, TextField } from "@mui/material";
import { forwardRef, useState } from "react";
import {
  EdiTextVariant,
  EditTextStyle,
  EdiTextInputLabelStyle,
  EdiTextBgColor,
  EdiTextBorderFieldset,
} from "./constants";

interface SelectType {
  options: { id: string; name: string }[];
  uncontrolledSelect?: boolean;
}
export interface EdiTextProps {
  placeholder?: string;
  variant?: EdiTextVariant;
  error?: string;
  multiline?: boolean;
  select?: SelectType;
  onChange: (value: any) => void;
  defaultValue?: string;
  label?: string;
  fullWidth?: boolean;
  isPassword?: boolean;
  isNumeric?: boolean;
  disabled?: boolean;
  isFilledVariantWhite?: boolean;
  readOnly?: boolean;
  minHeight?: number;
}

export const EditText = forwardRef((props: EdiTextProps, ref: any) => {
  const { variant = EdiTextVariant.Filled, fullWidth = true } = props;

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);

  return (
    <div>
      <TextField
        ref={ref}
        disabled={props.disabled}
        sx={EditTextStyle[variant]}
        fullWidth={fullWidth}
        InputLabelProps={{
          ...EdiTextInputLabelStyle[variant],
          shrink: props.defaultValue ? true : undefined,
        }}
        InputProps={{
          readOnly: props.readOnly,
          sx: {
            backgroundColor: EdiTextBgColor(
              variant,
              props.isFilledVariantWhite
            ),
            "& fieldset": EdiTextBorderFieldset[variant],
            fontFamily: "EncodeSans-Regular",
            "& .Mui-disabled": {
              borderBottomRightRadius: 4,
              borderBottomLeftRadius: 4,
              backgroundColor: props.isFilledVariantWhite
                ? "rgba(255,255,255,0.85)"
                : "rgba(239, 239, 239, 0.3)",
            },
            "&  .MuiNativeSelect-filled": {
              padding: "10px 32px 8px 12px",
              minHeight: props.minHeight ? props.minHeight : 38,
            },
          },
          endAdornment: props.isPassword && (
            <InputAdornment position="end">
              <IconButton onClick={handleClickShowPassword}>
                {/*showPassword ? <VisibilityOff /> : <Visibility />*/}
              </IconButton>
            </InputAdornment>
          ),
        }}
        //variant={typeInput}
        FormHelperTextProps={{
          style: {
            color: "red",
            fontFamily: "EncodeSans-Regular",
            fontSize: 10,
            marginLeft: 0,
          },
        }}
        type="text"
        label={props?.label ?? ""}
        placeholder={props.placeholder}
        helperText={props.error}
        multiline={props.multiline}
        defaultValue={props.defaultValue}
        select={props.select ? true : false}
        SelectProps={{
          native: true,
          value: props.select?.uncontrolledSelect
            ? props.defaultValue
            : undefined,
        }}
        onChange={props.onChange}
      >
        {props.select &&
          props.select.options.map((option) => (
            <option
              //style={{ color: Colors.DarkGrey }}
              key={option.id}
              value={option.id}
            >
              {option.name}
            </option>
          ))}
      </TextField>
    </div>
  );
});
