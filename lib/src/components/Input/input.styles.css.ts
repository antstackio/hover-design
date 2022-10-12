import { createTheme, style } from "@vanilla-extract/css";

import { lightColors } from "src/styles/tokens";
import { IInputTheme } from "./input.types";

export const inputWrapperClass = style({
  position: "relative",
  display: "inline-block",
});

export const [inputThemeClass, inputThemeVars]: IInputTheme = createTheme({
  borderColor: `${lightColors.brand[400]}`,
  padding: {
    left: "14px",
    right: "14px",
    top: "10px",
    bottom: "10px",
  },
});
export const inputClass = style({
  fontSize: "16px",
  borderRadius: "8px",
  paddingTop: inputThemeVars.padding.top,
  paddingRight: inputThemeVars.padding.right,
  paddingBottom: inputThemeVars.padding.bottom,
  paddingLeft: inputThemeVars.padding.left,
  border: `1px solid ${inputThemeVars.borderColor}`,
});

export const rightIconWrapper = style({
  right: "14px",
});

export const leftIconWrapper = style({
  left: "14px",
});

export const iconWrapper = style({
  position: "absolute",
  height: "100%",
  top: "0",
});
