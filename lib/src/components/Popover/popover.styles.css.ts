import { createTheme, createVar, style } from "@vanilla-extract/css";
import { calc } from "@vanilla-extract/css-utils";
import { recipe } from "@vanilla-extract/recipes";

export const popOffset: string = createVar();
export const popRadius: string = createVar();
export const popWidth: string = createVar();
export const popArrowSize: string = createVar();
export const popArrowOffset: string = createVar();

export const popoverContainerStyles = style({
  position: "relative",
  height: "fit-content",
  width: "fit-content",
});

export const contentRecipe = recipe({
  base: {
    boxSizing: "border-box",
    position: "absolute",
    borderRadius: popRadius,
    border: "1px solid #eee",
    padding: "10px",
    backgroundColor: "white",
    width: popWidth,
    boxShadow: " rgba(0, 0, 0, 0.08) 0px 4px 12px",
  },
  variants: {
    position: {
      bottom: {
        top: calc.add("100%", popOffset),
        left: "50%",
        transform: "translateX(-50%)",
      },
      left: {
        top: "50%",
        right: calc.add("100%", popOffset),
        transform: "translateY(-50%)",
      },
      right: {
        top: "50%",
        left: calc.add("100%", popOffset),
        transform: "translateY(-50%)",
      },
      top: {
        bottom: calc.add("100%", popOffset),
        left: "50%",
        transform: "translateX(-50%)",
      },
      "bottom-end": {
        top: calc.add(popOffset, "100%"),
        right: 0,
      },
      "bottom-start": {
        top: calc.add("100%", popOffset),
        left: 0,
      },
      "left-end": {
        bottom: 0,
        right: calc.add("100%", popOffset),
      },
      "left-start": {
        top: 0,
        right: calc.add("100%", popOffset),
      },
      "right-end": {
        bottom: 0,
        left: calc.add("100%", popOffset),
      },
      "right-start": {
        top: 0,
        left: calc.add("100%", popOffset),
      },
      "top-end": {
        bottom: calc.add("100%", popOffset),
        right: 0,
      },
      "top-start": {
        bottom: calc.add("100%", popOffset),
        left: 0,
      },
    },
    withArrow: {
      true: {
        ":after": {
          content: "",
          position: "absolute",
          height: popArrowSize,
          width: popArrowSize,
          borderTop: "1px solid #eee",
          borderLeft: "1px solid #eee",

          backgroundColor: "inherit",
        },
      },
    },
  },
  compoundVariants: [
    {
      variants: { withArrow: true, position: "bottom" },
      style: {
        ":after": {
          left: calc.subtract("50%", calc.divide(popArrowSize, 2)),
          top: popArrowOffset,
          transform: "rotate(45deg)",
        },
      },
    },
    {
      variants: { withArrow: true, position: "bottom-start" },
      style: {
        ":after": {
          left: popRadius,
          top: popArrowOffset,
          transform: "rotate(45deg)",
        },
      },
    },
    {
      variants: { withArrow: true, position: "bottom-end" },
      style: {
        ":after": {
          right: popRadius,
          top: popArrowOffset,
          transform: "rotate(45deg)",
        },
      },
    },
    {
      variants: { withArrow: true, position: "left" },
      style: {
        ":after": {
          top: calc.subtract("50%", calc.divide(popArrowSize, 2)),
          right: popArrowOffset,
          transform: "rotate(135deg)",
        },
      },
    },
    {
      variants: { withArrow: true, position: "left-end" },
      style: {
        ":after": {
          bottom: popRadius,
          right: popArrowOffset,
          transform: "rotate(135deg)",
        },
      },
    },
    {
      variants: { withArrow: true, position: "left-start" },
      style: {
        ":after": {
          top: popRadius,
          right: popArrowOffset,
          transform: "rotate(135deg)",
        },
      },
    },
    {
      variants: { withArrow: true, position: "right" },
      style: {
        ":after": {
          top: calc.subtract("50%", calc.divide(popArrowSize, 2)),
          left: popArrowOffset,
          transform: "rotate(-45deg)",
        },
      },
    },
    {
      variants: { withArrow: true, position: "right-start" },
      style: {
        ":after": {
          top: popRadius,
          left: popArrowOffset,
          transform: "rotate(-45deg)",
        },
      },
    },
    {
      variants: { withArrow: true, position: "right-end" },
      style: {
        ":after": {
          bottom: popRadius,
          left: popArrowOffset,
          transform: "rotate(-45deg)",
        },
      },
    },
    {
      variants: { withArrow: true, position: "top" },
      style: {
        ":after": {
          left: calc.subtract("50%", calc.divide(popArrowSize, 2)),
          bottom: popArrowOffset,
          transform: "rotate(-135deg)",
        },
      },
    },
    {
      variants: { withArrow: true, position: "top-start" },
      style: {
        ":after": {
          left: popRadius,
          bottom: popArrowOffset,
          transform: "rotate(-135deg)",
        },
      },
    },
    {
      variants: { withArrow: true, position: "top-end" },
      style: {
        ":after": {
          right: popRadius,
          bottom: popArrowOffset,
          transform: "rotate(-135deg)",
        },
      },
    },
  ],
});
