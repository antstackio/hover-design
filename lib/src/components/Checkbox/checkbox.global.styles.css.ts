import { globalStyle } from "@vanilla-extract/css";
import { checkboxThemeVars, checkboxWrapperClass } from "./checkbox.styles.css";

globalStyle(`${checkboxWrapperClass} > svg`, {
  display: "inline-block",
  verticalAlign: "middle"
});

globalStyle(`${checkboxWrapperClass} > input[type="checkbox"]`, {
  opacity: "0.0001",
  position: "absolute",
  width: "100%",
  height: "100%",
  top: "-2px",
  left: "-4px",
  cursor: "default"
});

globalStyle(`${checkboxWrapperClass} >  [data-checked="true"]`, {
  color: checkboxThemeVars.selectedStyles.color,
  borderColor: checkboxThemeVars.selectedStyles.borderColor,
  backgroundColor: checkboxThemeVars.selectedStyles.backgroundColor
});

globalStyle(`${checkboxWrapperClass} >  [data-indeterminate="true"]`, {
  color: checkboxThemeVars.indeterminateStyles.color,
  borderColor: checkboxThemeVars.indeterminateStyles.borderColor,
  backgroundColor: checkboxThemeVars.indeterminateStyles.backgroundColor
});

globalStyle(`${checkboxWrapperClass} >  [data-disabled="true"]`, {
  borderColor: checkboxThemeVars.disabledStyles.borderColor,
  backgroundColor: checkboxThemeVars.disabledStyles.backgroundColor
});
