import { createTheme, style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { SelectThemeType } from "./nativeSelect.types";

export const [selectThemeClass, selectVars]: SelectThemeType = createTheme({
  height: "fit-content",
  roundness: "0",
  width: "fit-content",
});

export const selectRecipe = recipe({
  base: {
    appearance: "none",
    padding: "8px 24px 8px 16px",
    height: "100%",
    width: "100%",
    borderRadius: selectVars.roundness,
  },
  variants: {
    error: {
      true: {
        border: "1px solid #DA2C2C",
        color: "#DA2C2C",
      },
    },
  },
});

export const selectContainerStyles = style({
  height: selectVars.height,
  width: selectVars.width,
  position: "relative",
});

export const selectIconStyle = style({
  pointerEvents: "none",
  position: "absolute",
  height: "100%",
  top: 0,
  right: "10px",
});

export const selectErrorMsg = style({
  fontSize: "12px",
  color: "#DA2C2C",
  margin: "4px 0",
});
