import { recipe } from "@vanilla-extract/recipes";
import { style, createTheme } from "@vanilla-extract/css";

export type IBadgeTheme = [
  string,
  { badgeStyleColor: string; badgeStyleTextColor: string }
];

export const [badgeThemeClass, badgeThemeVars]: IBadgeTheme = createTheme({
  badgeStyleColor: "none",
  badgeStyleTextColor: "inherit"
});

export const badgeWrapper = style({
  position: "relative",
  display: "inline-block",
  minWidth: "24px",
  height: " 24px"
});

export const badges = recipe({
  base: {
    backgroundColor: badgeThemeVars.badgeStyleColor,
    color: badgeThemeVars.badgeStyleTextColor,
    position: "absolute",
    minWidth: "24px",
    height: " 24px",
    textAlign: "center",
    padding: "4px 8px",
    lineHeight: "1.3",
    fontSize: "13px",
    top: "0",
    left: "0",
    transform: " translate(-50%, -50%)"
  },

  variants: {
    shape: {
      rounded: { borderRadius: "50px" },
      ["rounded-circle"]: { borderRadius: "4px" }
    }
  }
});

// top: 0;
// right: 0;
// transform: translate(-50%, -50%);
// transform: translate(50%, -50%);
// /* transform: translate(50%, 50%); */
// /* transform: translate(-50%, 50%);

// React Node - className: with position
// just a string - className: without position
