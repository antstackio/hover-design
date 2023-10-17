import { createTheme, style } from "@vanilla-extract/css";
import { ITheadThemeVars } from "./table.styles.types";

export const [theadThemeClass, theadThemeVars]: ITheadThemeVars = createTheme({
  customBackgroundColor: "#ddd"
});

export const headerDefaults = style({});
