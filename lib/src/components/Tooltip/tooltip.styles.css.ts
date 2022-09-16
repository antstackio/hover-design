import { createTheme, createVar, style } from "@vanilla-extract/css";
import { calc } from "@vanilla-extract/css-utils";
import { recipe } from "@vanilla-extract/recipes";

export const toolOffset: string = createVar();
export const toolRadius: string = createVar();
export const toolWidth: string = createVar();
export const toolArrowSize: string = createVar();
export const toolArrowOffset: string = createVar();

export const tooltipContainerStyles = style({
  position: "relative",
  height: "fit-content",
  width: "fit-content",
});

export const labelRecipe = recipe({
  base: {
    boxSizing: "border-box",
    position: "absolute",
    borderRadius: toolRadius,
    padding: "6px 10px",
    color: "white",
    width: toolWidth,
    boxShadow: " rgba(0, 0, 0, 0.08) 0px 4px 12px",
  },
  variants: {
    position: {
      bottom: {
        top: calc.add("100%", toolOffset),
        left: "50%",
        transform: "translateX(-50%)",
      },
      left: {
        top: "50%",
        right: calc.add("100%", toolOffset),
        transform: "translateY(-50%)",
      },
      right: {
        top: "50%",
        left: calc.add("100%", toolOffset),
        transform: "translateY(-50%)",
      },
      top: {
        bottom: calc.add("100%", toolOffset),
        left: "50%",
        transform: "translateX(-50%)",
      },
      "bottom-end": {
        top: calc.add(toolOffset, "100%"),
        right: 0,
      },
      "bottom-start": {
        top: calc.add("100%", toolOffset),
        left: 0,
      },
      "left-end": {
        bottom: 0,
        right: calc.add("100%", toolOffset),
      },
      "left-start": {
        top: 0,
        right: calc.add("100%", toolOffset),
      },
      "right-end": {
        bottom: 0,
        left: calc.add("100%", toolOffset),
      },
      "right-start": {
        top: 0,
        left: calc.add("100%", toolOffset),
      },
      "top-end": {
        bottom: calc.add("100%", toolOffset),
        right: 0,
      },
      "top-start": {
        bottom: calc.add("100%", toolOffset),
        left: 0,
      },
    },
    withArrow: {
      true: {
        ":after": {
          content: "",
          position: "absolute",
          height: toolArrowSize,
          width: toolArrowSize,
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
          left: calc.subtract("50%", calc.divide(toolArrowSize, 2)),
          top: toolArrowOffset,
          transform: "rotate(45deg)",
        },
      },
    },
    {
      variants: { withArrow: true, position: "bottom-start" },
      style: {
        ":after": {
          left: toolRadius,
          top: toolArrowOffset,
          transform: "rotate(45deg)",
        },
      },
    },
    {
      variants: { withArrow: true, position: "bottom-end" },
      style: {
        ":after": {
          right: toolRadius,
          top: toolArrowOffset,
          transform: "rotate(45deg)",
        },
      },
    },
    {
      variants: { withArrow: true, position: "left" },
      style: {
        ":after": {
          top: calc.subtract("50%", calc.divide(toolArrowSize, 2)),
          right: toolArrowOffset,
          transform: "rotate(135deg)",
        },
      },
    },
    {
      variants: { withArrow: true, position: "left-end" },
      style: {
        ":after": {
          bottom: toolRadius,
          right: toolArrowOffset,
          transform: "rotate(135deg)",
        },
      },
    },
    {
      variants: { withArrow: true, position: "left-start" },
      style: {
        ":after": {
          top: toolRadius,
          right: toolArrowOffset,
          transform: "rotate(135deg)",
        },
      },
    },
    {
      variants: { withArrow: true, position: "right" },
      style: {
        ":after": {
          top: calc.subtract("50%", calc.divide(toolArrowSize, 2)),
          left: toolArrowOffset,
          transform: "rotate(-45deg)",
        },
      },
    },
    {
      variants: { withArrow: true, position: "right-start" },
      style: {
        ":after": {
          top: toolRadius,
          left: toolArrowOffset,
          transform: "rotate(-45deg)",
        },
      },
    },
    {
      variants: { withArrow: true, position: "right-end" },
      style: {
        ":after": {
          bottom: toolRadius,
          left: toolArrowOffset,
          transform: "rotate(-45deg)",
        },
      },
    },
    {
      variants: { withArrow: true, position: "top" },
      style: {
        ":after": {
          left: calc.subtract("50%", calc.divide(toolArrowSize, 2)),
          bottom: toolArrowOffset,
          transform: "rotate(-135deg)",
        },
      },
    },
    {
      variants: { withArrow: true, position: "top-start" },
      style: {
        ":after": {
          left: toolRadius,
          bottom: toolArrowOffset,
          transform: "rotate(-135deg)",
        },
      },
    },
    {
      variants: { withArrow: true, position: "top-end" },
      style: {
        ":after": {
          right: toolRadius,
          bottom: toolArrowOffset,
          transform: "rotate(-135deg)",
        },
      },
    },
  ],
});
