import { style } from "@vanilla-extract/css";
import { themeVars } from "styles/index.css";

export const containerStyles = style({
  maxWidth: "1100px",
  minWidth: "320px",
  backgroundColor: themeVars.colors.brand[300],
  margin: "0 auto",
  padding: "30px"
});
