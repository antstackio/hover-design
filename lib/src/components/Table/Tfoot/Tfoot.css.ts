import { createTheme, globalStyle, style } from "@vanilla-extract/css";
import { ITfootThemeVars } from "./Tfoot.types";

export const [, tfootThemeVars]: ITfootThemeVars = createTheme({
  customBackgroundColor: "#ddd",
});

export const footerDefaults = style({});

globalStyle(`${footerDefaults} tr th, ${footerDefaults} tr td`, {
  backgroundColor: tfootThemeVars.customBackgroundColor,
});
