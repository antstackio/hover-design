import { recipe } from "@vanilla-extract/recipes";
import { style, createTheme } from "@vanilla-extract/css";
import { IBadgeTheme } from "./badge.types";

export const [badgeThemeClass, badgeThemeVars]: IBadgeTheme = createTheme({
  badgeStyleColor: "none",
  badgeStyleTextColor: "inherit"
});

export const badgeWrapper = style({
  position: "relative",
  minWidth: "24px",
  height: " 24px"
});

export const badges = recipe({
  base: {
    backgroundColor: badgeThemeVars.badgeStyleColor,
    color: badgeThemeVars.badgeStyleTextColor,
    minWidth: "24px",
    height: " 24px",
    textAlign: "center",
    padding: "4px 8px",
    lineHeight: "1.3",
    fontSize: "13px",
    fontWeight: "700"
  },

  variants: {
    shape: {
      rounded: { borderRadius: "50px" },
      ["rounded-circle"]: { borderRadius: "4px" }
    },
    visible: {
      show: { display: "inline-block" },
      hide: { display: "none" }
    },
    position: {
      default: { position: "static", top: "0px", left: "0px" },
      ["top-start"]: { position: "absolute", top: "-20px", left: "-15px" },
      ["top-end"]: { position: "absolute", top: "-20px", right: "-15px" },
      ["bottom-start"]: {
        position: "absolute",
        bottom: "-20px",
        left: "-15px"
      },
      ["bottom-end"]: { position: "absolute", bottom: "-20px", right: "-15px" }
    }
  }
});
