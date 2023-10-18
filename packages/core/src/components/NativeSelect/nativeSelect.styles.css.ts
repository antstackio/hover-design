import { createTheme, style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { NativeSelectThemeType } from "./nativeSelect.styles.types";

export const [nativeSelectThemeClass, nativeSelectVars]: NativeSelectThemeType =
  createTheme({
    height: "fit-content",
    borderRadius: "0",
    width: "fit-content"
  });

export const nativeSelectRecipe = recipe({
  base: {
    appearance: "none",
    height: "100%",
    padding: "8px 32px 8px 16px",
    width: "100%",
    borderRadius: nativeSelectVars.borderRadius
  },
  variants: {
    error: {
      true: {
        border: "1px solid #DA2C2C",
        color: "#DA2C2C"
      }
    },
    isMulti: {
      true: {
        padding: "8px 16px"
      }
    }
  }
});

export const nativeSelectContainerStyles = style({
  height: nativeSelectVars.height,
  width: nativeSelectVars.width,
  position: "relative"
});

export const nativeSelectIconStyle = style({
  pointerEvents: "none",
  position: "absolute",
  height: "100%",
  top: 0,
  right: "10px"
});

export const nativeSelectErrorMsg = style({
  fontSize: "12px",
  color: "#DA2C2C",
  margin: "4px 0"
});
