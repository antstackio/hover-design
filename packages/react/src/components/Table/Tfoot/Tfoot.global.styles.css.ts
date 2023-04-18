import { globalStyle } from "@vanilla-extract/css";
import { footerDefaults, tfootThemeVars } from "./Tfoot.css";

globalStyle(`${footerDefaults} tr th, ${footerDefaults} tr td`, {
  backgroundColor: tfootThemeVars.customBackgroundColor
});
