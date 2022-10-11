import { createVar, style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

export const bannerContainerStyles = style({
  position: "relative",
  width: "100%",
  display: "flex",
});

export const bannerCtaIconRecipe = recipe({
  base: {
    background: "transparent",
    color: "#464555",
    padding: 0,
    position: "absolute",
    right: "10px",
    top: "50%",
    cursor: "pointer",
    transform: "translateY(-50%) rotate(-90deg)",
  },
  variants: {
    alignment: {
      left: {},
      center: {},
      right: {
        right: "auto",
        left: "10px",
        transform: "translateY(-50%) rotate(90deg)",
      },
    },
  },
});
