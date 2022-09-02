import { createTheme, style } from "@vanilla-extract/css";
import { sizes } from "./modal.constants";
import { IModalTheme } from "./modal.types";

export const [modalThemeClass, modalThemeVars]: IModalTheme = createTheme({
  base: {
    backgroundColor: "#fff",
    borderRadius: "4px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
    position: "fixed",
    transform: "translate(-50%, -50%)",
    top: "50%",
    bottom: "unset",
    left: "unset",
    right: "unset",
    padding: "12px",
    zIndex: "10",
    width: sizes.md.width,
    height: "auto",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0)",
    zIndex: "1",
    position: "fixed",
    top: "0",
    left: "0",
    right: "0",
    bottom: "0",
    filter: "unset",
    opacity: "0.5",
  },
});
export const overlayStyleClass = style({
  position: modalThemeVars.overlay.position as
    | "static"
    | "relative"
    | "absolute"
    | "sticky"
    | "fixed",
  top: modalThemeVars.overlay.top,
  left: modalThemeVars.overlay.left,
  right: modalThemeVars.overlay.right,
  bottom: modalThemeVars.overlay.bottom,
  backgroundColor: modalThemeVars.overlay.backgroundColor,
  zIndex: modalThemeVars.overlay.zIndex,
  filter: modalThemeVars.overlay.filter,
  opacity: modalThemeVars.overlay.opacity,
});

export const modalStyleClass = style({
  transitionProperty: "transform, opacity",
  transitionDuration: "250ms",
  transitionTimingFunction: "ease",
  transformOrigin: "center center",
  opacity: 1,

  background: modalThemeVars.base.backgroundColor,
  borderRadius: modalThemeVars.base.borderRadius,
  boxShadow: modalThemeVars.base.boxShadow,
  position: modalThemeVars.base.position as
    | "static"
    | "relative"
    | "absolute"
    | "sticky"
    | "fixed",
  transform: modalThemeVars.base.transform,
  top: modalThemeVars.base.top,
  bottom: modalThemeVars.base.bottom,
  left: modalThemeVars.base.left,
  right: modalThemeVars.base.right,
  padding: modalThemeVars.base.padding,
  zIndex: modalThemeVars.base.zIndex,
  width: modalThemeVars.base.width,
  height: modalThemeVars.base.height,
});

export const modalHeaderStyleClass = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

export const modalTitleStyleClass = style({
  fontSize: "inherit",
  textDecoration: "none",
  marginRight: "16px",
  textOverflow: "ellipsis",
  display: "block",
  wordBreak: "break-word",
});

export const modalCloseStyleClass = style({
  background: "none",
  border: "none",
  cursor: "pointer",
  padding: "0",
  marginLeft: "auto",
});
