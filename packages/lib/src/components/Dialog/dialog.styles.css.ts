import { createTheme, style } from "@vanilla-extract/css";
import { IDialogTheme } from "./dialog.types";

export const [dialogThemeClass, dialogThemeVars]: IDialogTheme = createTheme({
  backgroundColor: "unset",
  borderRadius: "4px",
  boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
  position: "fixed",
  top: "unset",
  transform: "scale(1)",
  bottom: "24px",
  left: "unset",
  right: "24px",
  padding: "16px",
  zIndex: "10",
  height: "auto",
  width: "auto",
});
export const dialogStyleClass = style({
  backgroundColor: dialogThemeVars.backgroundColor,
  transitionProperty: "transform, opacity",
  transitionDuration: "250ms",
  transitionTimingFunction: "ease",
  transformOrigin: "center center",
  opacity: 1,
  borderRadius: dialogThemeVars.borderRadius,
  boxShadow: dialogThemeVars.boxShadow,
  position: dialogThemeVars.position as
    | "static"
    | "relative"
    | "absolute"
    | "sticky"
    | "fixed",
  transform: dialogThemeVars.transform,
  top: dialogThemeVars.top,
  bottom: dialogThemeVars.bottom,
  left: dialogThemeVars.left,
  right: dialogThemeVars.right,
  padding: dialogThemeVars.padding,
  zIndex: dialogThemeVars.zIndex,
  width: dialogThemeVars.width,
  height: dialogThemeVars.height,
});
export const dialogCloseStyleClass = style({
  background: "none",
  border: "none",
  cursor: "pointer",
  padding: "0",
  position: "absolute",
  right: "8px",
  top: "8px",
});

export const dialogContentContainer = style({
  minWidth: "220px",
});
