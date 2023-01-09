import { style } from "@vanilla-extract/css";
import { themeVars, fontSizes, fonts } from "styles/index.css";

export const headerStyle = style({
  position: "sticky",
  top: "0px",
  background: themeVars.colors.brand[100],
  color: themeVars.colors.typography[900]
});

export const headerContentStyle = style({
  display: "flex",
  justifyContent: "space-between",
  padding: "25px"
});

export const headerLegend = style({
  fontSize: fontSizes["2x"],
  fontFamily: fonts.primary
});

export const themeToggleButton = style({
  cursor: "pointer",
  background: "transparent",
  border: "none"
});
