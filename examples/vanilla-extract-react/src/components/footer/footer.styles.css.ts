import { style } from "@vanilla-extract/css";
import { themeVars } from "styles/themes.css";

export const footerStyles = style({
  background: themeVars.colors.brand[100],
  color: themeVars.colors.typography[900],
  padding: "30px",
});
