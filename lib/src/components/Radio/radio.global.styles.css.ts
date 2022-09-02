import { globalStyle } from "@vanilla-extract/css";
import {
  radioGroupChildClass,
  radioGroupThemeVars,
  radioThemeVars,
  radioWrapperClass
} from "./radio.styles.css";

globalStyle(`${radioGroupChildClass} > :not(:last-child)`, {
  marginBottom: radioGroupThemeVars.radioGroupStyleSpacing
});

globalStyle(`${radioWrapperClass} > svg`, {
  display: "inline-block",
  verticalAlign: "middle"
});

globalStyle(`${radioWrapperClass} > input[type="radio"]`, {
  opacity: "0.0001",
  position: "absolute",
  width: "100%",
  height: "100%",
  top: "-2px",
  left: "-4px",
  cursor: "default"
});

globalStyle(`${radioWrapperClass} >  [data-checked="true"]`, {
  color: radioThemeVars.selectedStyles.color,
  borderColor: radioThemeVars.selectedStyles.borderColor,
  backgroundColor: radioThemeVars.selectedStyles.backgroundColor
});

globalStyle(`${radioWrapperClass} >  [data-disabled="true"]`, {
  borderColor: radioThemeVars.disabledStyles.borderColor,
  backgroundColor: radioThemeVars.disabledStyles.backgroundColor
});
