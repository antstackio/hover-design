import { createTheme, style } from "@vanilla-extract/css";
import { ITfootThemeVars } from "./table.styles.types";

export const [tfootThemeClass, tfootThemeVars]: ITfootThemeVars = createTheme({
  customBackgroundColor: "#ddd"
});

export const footerDefaults = style({});
