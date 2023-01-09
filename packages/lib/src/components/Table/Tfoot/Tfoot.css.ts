import { createTheme, style } from "@vanilla-extract/css";
import { ITfootThemeVars } from "./Tfoot.types";

export const [tfootThemeClass, tfootThemeVars]: ITfootThemeVars = createTheme({
  customBackgroundColor: "#ddd",
});

export const footerDefaults = style({});
