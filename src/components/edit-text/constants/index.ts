import { Colors } from "../../../colors";

export enum EdiTextVariant {
  Filled = "filled",
  Standard = "standard",
  Outlined = "outlined",
  ExternalLabel = "ExternalLabel",
}

export enum EditTextType {
  Password = "password",
  Text = "text",
}

export const EdiTextBgColor = (
  variant: EdiTextVariant,
  isFilledVariantWhite?: boolean
) => {
  switch (variant) {
    case EdiTextVariant.Filled:
      return isFilledVariantWhite ? Colors.White : Colors.LightGrey;
    case EdiTextVariant.Standard:
      return Colors.Transparent;
    case EdiTextVariant.Outlined:
      return Colors.LightGrey;
    case EdiTextVariant.ExternalLabel:
      return Colors.Transparent;
    default:
      return Colors.LightGrey;
  }
};

export const EdiTextBorderFieldset = {
  [EdiTextVariant.Filled]: {},
  [EdiTextVariant.Standard]: {},
  [EdiTextVariant.Outlined]: {},
  [EdiTextVariant.ExternalLabel]: { border: "none" },
};

export const EdiTextInputLabelStyle = {
  [EdiTextVariant.Filled]: {
    style: { color: Colors.DarkGrey, fontFamily: "EncodeSans-Regular" },
  },
  [EdiTextVariant.Standard]: {
    style: { color: Colors.DarkGrey, fontFamily: "EncodeSans-Regular" },
  },
  [EdiTextVariant.Outlined]: {
    style: { color: Colors.DarkGrey, fontFamily: "EncodeSans-Regular" },
  },
  [EdiTextVariant.ExternalLabel]: { shrink: false },
};

export const EditTextStyle = {
  [EdiTextVariant.Filled]: {
    "& .MuiFilledInput-root": {
      borderBottomRightRadius: 4,
      borderBottomLeftRadius: 4,
      "&.MuiFilledInput-underline:after": {
        borderBottom: `none`,
      },
      "&.MuiFilledInput-underline": {
        borderBottom: `1px solid ${Colors.UnderlinedGrey}`,
        borderBottomRightRadius: 4,
        borderBottomLeftRadius: 4,
      },
      "&.MuiFilledInput-underline:before": {
        borderBottom: "none",
      },
      "&.Mui-focused": {
        borderBottomRightRadius: 4,
        borderBottomLeftRadius: 4,
        borderBottom: `1px solid ${Colors.Primary}`,
      },
    },
    "& .MuiFilledInput-root:hover:not(.Mui-disabled, .Mui-error):before": {
      borderBottom: "none",
    },
  },
  [EdiTextVariant.Standard]: {
    "& .MuiInput-root": {
      "&.MuiInput-underline:after": {
        borderBottom: `none`,
      },
      "&.MuiInput-underline:before": {
        borderBottom: `none`,
      },
      "&.MuiInput-underline": {
        borderBottom: `1px solid ${Colors.UnderlinedGrey}`,
      },
      "&.Mui-focused": {
        borderBottom: `1px solid ${Colors.Primary}`,
      },
    },
    "& .MuiInput-root:hover:not(.Mui-disabled, .Mui-error):before": {
      borderBottom: `none`,
    },
  },
  [EdiTextVariant.Outlined]: {
    "& .MuiOutlinedInput-root": {
      "&.Mui-focused fieldset": {
        border: `1px solid ${Colors.UnderlinedGrey}`,
      },
      ".& fieldset": {
        border: `1px solid ${Colors.UnderlinedGrey}`,
        padding: 0,
      },
      "&:hover fieldset": {
        border: `1px solid ${Colors.Primary}`,
      },
    },
    "& .MuiOutlinedInput-input": {
      paddingLeft: "14px",
      paddingRight: "14px",
    },
  },
  [EdiTextVariant.ExternalLabel]: {
    "& .MuiOutlinedInput-root": {
      "&.Mui-focused fieldset": {
        border: "none",
      },
      ".& fieldset": {
        border: `1px solid ${Colors.UnderlinedGrey}`,
        padding: 0,
      },
      "&:hover fieldset": {
        border: "none",
      },
    },
    "& .MuiOutlinedInput-input": {
      paddingLeft: "0px",
      paddingRight: "0px",
    },
  },
};
