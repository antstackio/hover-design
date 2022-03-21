import { createTheme, createThemeContract } from "@vanilla-extract/css";
import { lightColors, darkColors } from "./constants/colors";

export const themeVars = createThemeContract({
  colors: {
    brand: {
      100: null,
      200: null,
      300: null,
    },
    typography: {
      200: null,
      500: null,
      900: null,
    },
  },
});
export const lightTheme = createTheme(themeVars, {
  colors: lightColors,
});
export const darkTheme = createTheme(themeVars, {
  colors: darkColors,
});
