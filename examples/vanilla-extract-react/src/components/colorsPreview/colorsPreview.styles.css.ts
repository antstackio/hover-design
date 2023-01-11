import { style } from "@vanilla-extract/css";
import { themeVars } from "styles/themes.css";

export const colorsPreviewWrapper = style({
  display: "flex",
  flexDirection: "column",
  padding: "12px",
  margin: "0 30px"
});

export const colorsPreviewItem = style({
  display: "flex",
  gap: "15px",
  justifyContent: "space-between",
  alignItems: "center"
});
export const colorsPreviewTile = style({
  height: "25px",
  width: "45px",
  border: `1px solid ${themeVars.colors.typography[200]}`
});
export const colorName = style({
  color: themeVars.colors.typography[200]
});
