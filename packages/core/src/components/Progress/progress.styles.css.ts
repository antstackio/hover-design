import { createTheme, style } from "@vanilla-extract/css";
import { TProgressTheme } from "./progress.styles.types";

export const progressRadiusMap: Record<TProgressTheme[1]["radius"], string> = {
  xs: "1px",
  sm: "2px",
  md: "4px",
  lg: "8px",
  xl: "16px"
};

export const progressSizes: Record<
  TProgressTheme[1]["progressStyleSize"],
  string
> = {
  xs: "3px",
  sm: "5px",
  md: "8px",
  lg: "12px",
  xl: "16px"
};

export const [progressThemeClass, progressThemeVars]: TProgressTheme =
  createTheme({
    radius: progressRadiusMap.md,
    progressStyleSize: progressSizes.md,
    progressColor: "#1AB5EB",
    progressValue: "0%"
  });
export const progressContainerStyle = style({
  width: "100%",
  height: progressThemeVars.progressStyleSize,
  borderRadius: progressThemeVars.radius,
  backgroundColor: "rgb(233, 236, 239)"
});

export const progressStyle = style({
  height: "100%",
  borderRadius: progressThemeVars.radius,
  transition: "width 100ms linear 0s",
  background: progressThemeVars.progressColor,
  width: progressThemeVars.progressValue
});
