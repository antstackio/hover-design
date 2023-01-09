import { style } from "@vanilla-extract/css";
import { fonts, themeVars } from "styles/index.css";

export const styleWrapperStyles = style({
  fontFamily: fonts.primary,
  color: themeVars.colors.typography[900],
  transition: "0.7s"
});
