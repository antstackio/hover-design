import { createTheme, style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { TabTheme } from "./tabs.types";

export const [tabsTheme, tabsVars]: TabTheme = createTheme({
  color: "#2F80ED",
  backgroundColor: "#BDDBFF60",
  outlineColor: "#EBECF0",
  tabSize: "40px",
  roundness: "4px",
});

export const tabsHeaderContainerRecipe = recipe({
  base: {
    position: "relative",
  },
  variants: {
    orientation: {
      vertical: {
        width: tabsVars.tabSize,
      },
      horizontal: {
        width: "100%",
        height: tabsVars.tabSize,
      },
    },
  },
});

export const extendingBorderStyle = style({
  height: "100%",
  borderBottom: `2px solid ${tabsVars.outlineColor}`,
});

export const tabsRecipe = recipe({
  base: {
    cursor: "pointer",
    height: "100%",
    position: "relative",
    zIndex: 1,
    padding: "8px 10px",
    ":hover": {
      background: tabsVars.backgroundColor,
      color: tabsVars.color,
    },
  },
  variants: {
    orientation: {
      horizontal: {
        borderBottom: `2px solid ${tabsVars.outlineColor}`,
        borderRadius: `${tabsVars.roundness} ${tabsVars.roundness}  0 0`,
      },
      vertical: {
        borderRight: `2px solid ${tabsVars.outlineColor}`,
        borderRadius: `${tabsVars.roundness}0 0 ${tabsVars.roundness}`,
        minHeight: "40px",
        width: "100%",
      },
    },
    variant: {
      default: {},
      outline: {
        border: "2px solid transparent",
      },
      pill: {
        border: "none",
        borderRadius: tabsVars.roundness,
      },
    },
    active: {
      true: {},
    },
    disabled: {
      true: {
        color: "#a0a8b7",
        cursor: "not-allowed",
        ":hover": {
          background: "none",
          color: "#a0a8b7",
        },
      },
    },
  },
  compoundVariants: [
    {
      variants: {
        variant: "default",
        orientation: "horizontal",
        active: true,
      },
      style: {
        color: tabsVars.color,
        ":after": {
          content: "",
          background: tabsVars.color,
          position: "absolute",
          bottom: 0,
          left: 0,
          borderRadius: "20px",
          height: "2px",
          width: "100%",
          zIndex: 0,
        },
      },
    },
    {
      variants: {
        variant: "default",
        orientation: "vertical",
        active: true,
      },
      style: {
        color: tabsVars.color,
        ":after": {
          content: "",
          background: tabsVars.color,
          position: "absolute",
          right: "-2px",
          bottom: 0,
          borderRadius: "20px",
          width: "2px",
          height: "100%",
          zIndex: 0,
        },
      },
    },
    {
      variants: {
        variant: "outline",
        orientation: "horizontal",
        active: true,
      },
      style: {
        color: tabsVars.color,
        borderInline: `2px solid ${tabsVars.outlineColor}`,
        borderTop: `2px solid ${tabsVars.outlineColor}`,
        borderBottom: "none",
      },
    },
    {
      variants: {
        variant: "outline",
        orientation: "horizontal",
        active: false,
      },
      style: {
        borderBottom: "none",
        ":after": {
          content: "",
          position: "absolute",
          height: "2px",
          width: "calc(100% + 4px)",
          bottom: 0,
          left: "-2px",
          background: tabsVars.outlineColor,
        },
      },
    },
    {
      variants: {
        variant: "outline",
        orientation: "vertical",
        active: true,
      },
      style: {
        color: tabsVars.color,
        border: `2px solid ${tabsVars.outlineColor}`,
        borderRight: "none",
      },
    },
    {
      variants: {
        variant: "outline",
        orientation: "vertical",
        active: false,
      },
      style: {
        borderRight: "none",
        ":after": {
          content: "",
          position: "absolute",
          width: "2px",
          height: "calc(100% + 4px)",
          right: 0,
          top: "-2px",
          background: tabsVars.outlineColor,
        },
      },
    },
    {
      variants: {
        variant: "pill",
        active: true,
      },
      style: {
        color: tabsVars.color,
        background: tabsVars.backgroundColor,
      },
    },
  ],
});

export const contentStyles = style({
  padding: "10px",
});

export const iconStyles = style({
  marginRight: "6px",
});

export const badgeStyles = style({
  marginLeft: "6px",
});
