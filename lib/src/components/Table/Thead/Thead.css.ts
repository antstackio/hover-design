import { createTheme, globalStyle, style } from "@vanilla-extract/css";
import { ITheadThemeVars } from "./Thead.types";

export const [, theadThemeVars]: ITheadThemeVars = createTheme({
  customBackgroundColor: "#ddd",
});

export const headerDefaults = style({});

globalStyle(`${headerDefaults} tr th`, {
  backgroundColor: theadThemeVars.customBackgroundColor,
});
