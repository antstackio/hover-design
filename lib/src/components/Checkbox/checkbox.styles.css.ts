import { createTheme, style } from "@vanilla-extract/css";
import { TCheckboxGroupTheme, TCheckboxTheme } from "./checkbox.types";

export const checkboxGroupChildClass = style({});

export const checkboxGroupSpacing: Record<
  TCheckboxGroupTheme[1]["checkboxGroupStyleSpacing"],
  string
> = {
  xs: "2px",
  sm: "4px",
  md: "6px",
  lg: "8px",
  xl: "10px"
};

export const checkboxSizes: Record<
  TCheckboxTheme[1]["checkboxStyleSize"],
  string
> = {
  xs: "16px",
  sm: "24px",
  md: "32px",
  lg: "40px",
  xl: "48px"
};

export const checkboxBorderRadius: Record<
  TCheckboxTheme[1]["checkboxStyleBorderRadius"],
  string
> = {
  xs: "2px",
  sm: "4px",
  md: "8px",
  lg: "16px",
  xl: "32px"
};

export const [checkboxThemeClass, checkboxThemeVars]: TCheckboxTheme =
  createTheme({
    checkboxStyleSize: checkboxSizes.xs,
    checkboxStyleBorderRadius: checkboxBorderRadius.xs,
    baseStyles: {
      borderColor: "rgb(204, 204, 204)",
      backgroundColor: "rgb(250, 250, 250)"
    },
    disabledStyles: {
      borderColor: "rgb(204, 204, 204)",
      backgroundColor: "rgb(227, 227, 227)"
    },
    selectedStyles: {
      color: "rgb(250, 250, 250)",
      borderColor: "rgb(25, 113, 194)",
      backgroundColor: "rgb(25, 113, 194)"
    },
    indeterminateStyles: {
      color: "rgb(250, 250, 250)",
      borderColor: "rgb(25, 113, 194)",
      backgroundColor: "rgb(25, 113, 194)"
    }
  });

export const checkboxWrapperClass = style({
  display: "inline-block",
  position: "relative",
  width: checkboxThemeVars.checkboxStyleSize,
  height: checkboxThemeVars.checkboxStyleSize,
  margin: "0px 5px",
  verticalAlign: "middle"
});

export const checkboxCheckMarkClass = style({
  width: checkboxThemeVars.checkboxStyleSize,
  height: checkboxThemeVars.checkboxStyleSize,
  backgroundColor: checkboxThemeVars.baseStyles.backgroundColor,
  borderColor: checkboxThemeVars.baseStyles.borderColor,
  borderWidth: "1px",
  borderStyle: "solid",
  borderRadius: checkboxThemeVars.checkboxStyleBorderRadius,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "1px"
});
