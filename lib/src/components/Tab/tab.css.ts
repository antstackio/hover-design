import { createTheme, style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { TabTheme } from "./tab.types";

export const [tabTheme, tabVars]: TabTheme = createTheme({
  color: "#2F80ED",
  background: "#BDDBFF60",
  height: "50px",
});

export const tabHeaderContainerStyles = style({
  height: tabVars.height,
  position: "relative",
  borderBottom: "2px solid #EBECF0",
});

export const tabRecipe = recipe({
  base: {
    cursor: "pointer",
    height: "100%",
    position: "relative",
    zIndex: 1,
    padding: "8px 10px",
    borderRadius: "4px 4px 0px 0px",
    ":hover": {
      background: tabVars.background,
      color: tabVars.color,
    },
  },
  variants: {
    active: {
      true: {
        color: tabVars.color,
        ":after": {
          content: "",
          background: tabVars.color,
          position: "absolute",
          bottom: "-2px",
          left: 0,
          borderRadius: "20px",
          height: "2px",
          width: "100%",
          zIndex: 0,
        },
      },
    },
    disabled: {
      true: {
        color: "#a0a8b7",
        pointerEvents: "none",
      },
    },
  },
});

export const contentStyles = style({
  padding: "8px 0",
});

export const iconStyles = style({
  marginRight: "6px",
});

export const badgeStyles = style({
  marginLeft: "6px",
});
