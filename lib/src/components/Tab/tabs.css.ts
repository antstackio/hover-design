import { createTheme, style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { TabTheme } from "./tabs.types";

export const [tabsTheme, tabsVars]: TabTheme = createTheme({
  color: "#2F80ED",
  background: "#BDDBFF60",
  height: "50px",
});

export const tabsHeaderContainerStyles = style({
  height: tabsVars.height,
  position: "relative",
  borderBottom: "2px solid #EBECF0",
});

export const tabsRecipe = recipe({
  base: {
    cursor: "pointer",
    height: "100%",
    position: "relative",
    zIndex: 1,
    padding: "8px 10px",
    borderRadius: "4px 4px 0px 0px",
    ":hover": {
      background: tabsVars.background,
      color: tabsVars.color,
    },
  },
  variants: {
    active: {
      true: {
        color: tabsVars.color,
        ":after": {
          content: "",
          background: tabsVars.color,
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
