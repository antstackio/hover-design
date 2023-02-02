import { createTheme } from "@vanilla-extract/css";
import { theme } from "./theme";
import { ITheme } from "./theme.types";

export const [primaryThemeClassName, themeVars] = createTheme<ITheme>(theme);
