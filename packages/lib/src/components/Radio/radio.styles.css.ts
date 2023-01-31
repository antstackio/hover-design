import { createTheme, style } from "@vanilla-extract/css";
import { TRadioGroupTheme, TRadioTheme } from "./radio.types";
import { calc } from "@vanilla-extract/css-utils";

export const radioGroupChildClass = style({});

export const radioGroupSpacing: Record<
  TRadioGroupTheme[1]["radioGroupStyleSpacing"],
  string
> = {
  xs: "2px",
  sm: "4px",
  md: "6px",
  lg: "8px",
  xl: "10px"
};

export const radioSizes: Record<TRadioTheme[1]["radioStyleSize"], string> = {
  xs: "16px",
  sm: "24px",
  md: "32px",
  lg: "40px",
  xl: "48px"
};

//Radio Default Values
export const [radioThemeClass, radioThemeVars]: TRadioTheme = createTheme({
  radioStyleSize: radioSizes.xs,
  baseStyles: {
    borderColor: "rgb(204, 204, 204)",
    backgroundColor: "rgb(250, 250, 250)"
  },
  disabledStyles: {
    borderColor: "rgb(204, 204, 204)",
    backgroundColor: "rgb(227, 227, 227)"
  },
  selectedStyles: {
    color: "rgb(250, 250, 250)",
    borderColor: "rgb(174, 68, 10)",
    backgroundColor: "rgb(250, 128, 5)"
  }
});

export const radioWrapperClass = style({
  display: "inline-block",
  position: "relative",
  width: radioThemeVars.radioStyleSize,
  height: radioThemeVars.radioStyleSize,
  margin: "0px 5px",
  verticalAlign: "middle"
});

export const radioCheckMarkClass = style({
  width: radioThemeVars.radioStyleSize,
  height: radioThemeVars.radioStyleSize,
  backgroundColor: radioThemeVars.baseStyles.backgroundColor,
  borderColor: radioThemeVars.baseStyles.borderColor,
  borderWidth: "1px",
  borderStyle: "solid",
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: calc.divide(radioThemeVars.radioStyleSize, 4)
});
