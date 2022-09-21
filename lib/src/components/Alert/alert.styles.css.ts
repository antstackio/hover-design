import { createTheme, createVar, style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { AlertTheme } from "./alert.types";

export const [alertInfoTheme, alertVars]: any = createTheme({
  color: "#2F80ED",
  backgroundColor: "#DEEBFF",
});

export const alertSuccessTheme: any = createTheme(alertVars, {
  color: "#23A047",
  backgroundColor: "#EEFFF3",
});

export const alertWarningTheme: any = createTheme(alertVars, {
  color: "#FCA004",
  backgroundColor: "#FFFBED",
});
export const alertDangerTheme: any = createTheme(alertVars, {
  color: "#F44336",
  backgroundColor: "#FFF6F8",
});

export const alertRecipe = recipe({
  base: {
    position: "relative",
    width: "100%",
    padding: "12px 16px",
  },
  variants: {
    variant: {
      light: {
        border: `1px solid ${alertVars.color}`,
        backgroundColor: alertVars.backgroundColor,
      },
      outline: {
        border: `1px solid ${alertVars.color}`,
        backgroundColor: "transparent",
      },
      filled: {
        color: "white",
        backgroundColor: alertVars.color,
      },
    },
  },
});

export const alertTitleStyles = style({
  fontWeight: "700",
  marginBottom: "7px",
});

export const alertTitleRecipe = recipe({
  base: {
    marginBottom: "7px",
    color: alertVars.color,
  },
  variants: {
    isFilled: {
      true: { color: "white" },
    },
  },
});

export const alertIconContainerStyles = style({
  marginRight: "10px",
});

export const alertIconRecipe = recipe({
  base: {
    color: alertVars.color,
  },
  variants: {
    isFilled: {
      true: {
        color: "white",
      },
    },
  },
});

export const alertCloseIconStyles = style({
  cursor: "pointer",
  position: "absolute",
  right: "10px",
  top: "10px",
  border: "none",
  display: "flex",
  padding: 0,
  justifyContent: "center",
  alignItems: "center",
  background: "transparent",
});
