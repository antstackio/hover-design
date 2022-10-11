import { createTheme, createVar, style } from "@vanilla-extract/css";
import { calc } from "@vanilla-extract/css-utils";
import { recipe } from "@vanilla-extract/recipes";

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

export const alertIconTitleSpace: string = createVar();

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

export const alertHeaderStyles = style({
  width: "fit-content",
});

export const alertTitleRecipe = recipe({
  base: {
    fontWeight: "700",
    color: alertVars.color,
  },
  variants: {
    isFilled: {
      true: { color: "white" },
    },
  },
});
export const alertDescriptionStyle = style({
  marginTop: "7px",
  marginLeft: alertIconTitleSpace,
});

export const alertIconRecipe = recipe({
  base: {
    color: alertVars.color,
    marginRight: "8px",
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
  margin: 0,
  padding: 0,
  justifyContent: "center",
  alignItems: "center",
  background: "transparent",
});
