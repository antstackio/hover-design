import { createGlobalTheme } from "@vanilla-extract/css";
import { fontSizeVars, fontVars } from "./constants/typography";

export const { fontSizes, fonts } = createGlobalTheme(":root", {
  fontSizes: fontSizeVars,
  fonts: fontVars
});

export * from "./themes.css";
export * from "./constants/breakpoints";
