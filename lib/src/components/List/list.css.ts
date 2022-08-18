import { createTheme } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { IListTheme } from "./list.types";
export const [listThemeClass, listThemeVars]: IListTheme = createTheme({
  listStyles: {
    listStyleType: "none",
  },
});
export const listStyles = recipe({
  base: {
    listStyleType: listThemeVars.listStyles.listStyleType,
    padding: 0,
    margin: 0,
  },
  variants: {
    variant: {
      horizontal: {
        display: "inline-flex",
        gap: "24px",
      },
      vertical: {
        display: "block",
      },
    },
  },
});
