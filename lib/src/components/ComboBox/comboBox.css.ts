import { createTheme, style } from "@vanilla-extract/css";
import { calc } from "@vanilla-extract/css-utils";
import { recipe } from "@vanilla-extract/recipes";
import { ComboTheme } from "./comboBox.types";

export const [comboClass, comboVars]: ComboTheme = createTheme({
  roundness: "0",
  color: "#2F80ED",
  maxDropDownHeight: "auto",
});

export const comboContainerStyles = style({
  position: "relative",
  width: "100%",
});

export const comboInputRecipe = recipe({
  base: {
    background: "white",
    padding: "10px 16px",
    width: "100%",
    border: "1px solid #ced4da ",
    borderRadius: comboVars.roundness,
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

export const comboListContainerRecipe = recipe({
  base: {
    overflowX: "hidden",
    overflowY: "auto",
    position: "absolute",
    background: "white",
    marginTop: "8px",
    top: "35px",
    left: 0,
    width: "100%",
    maxHeight: comboVars.maxDropDownHeight,
    padding: "4px",
    display: "none !important",
    border: "1px solid #ced4da ",
    borderRadius: comboVars.roundness,
    boxShadow:
      "rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px",
    "::-webkit-scrollbar": {
      width: "10px",
    },
    "::-webkit-scrollbar-thumb": {
      background: "#ced4da",
      border: "4px solid rgba(0, 0, 0, 0)",
      borderLeft: "none",
      backgroundClip: "padding-box",
      //   borderRadius: "100px",
    },
  },
  variants: {
    active: {
      true: {
        display: "flex !important",
      },
    },
  },
});

export const comboListRecipe = recipe({
  base: {
    width: "100%",
    padding: "10px 16px",
    background: "white",
    cursor: "pointer",
    borderRadius: `${calc.subtract(comboVars.roundness, "4px")}`,
    ":hover": {
      background: "#ebe8e8",
      //   color: "white",
    },
  },
  variants: {
    disabled: {
      true: {
        color: "#eee",
        pointerEvents: "none",
      },
    },
    active: {
      true: {
        background: comboVars.color,
        color: "white",
      },
    },
  },
});

export const comboErrorMsg = style({
  fontSize: "12px",
  color: "#DA2C2C",
  margin: "4px 0",
});
