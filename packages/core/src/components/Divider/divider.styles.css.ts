import { createTheme, style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { TDividerTheme } from "./divider.styles.types";
import { calc } from "@vanilla-extract/css-utils";

export const [dividerThemeClass, dividerThemeVar]: TDividerTheme = createTheme({
  dividerColor: "#000",
  labelColor: "#000",
  labelBackground: "#fff",
  dividerSize: "1px",
  dividerStyleMinHeight: "40px",
  dividerStyleMinWidth: "40px"
});

export const dividerContainerHorizontal = style({
  position: "relative",
  width: "100%",
  height: "fit-content"
});

export const dividerContainerVertical = style({
  position: "relative",
  height: "100%",
  width: "fit-content"
});

const dividerBaseStyles = style({
  position: "relative",
  background: "none",
  backgroundPosition: "center"
});

export const dividerHorizontal = recipe({
  base: [
    dividerBaseStyles,
    {
      backgroundRepeat: "repeat-x",
      height: `${dividerThemeVar.dividerSize}`,
      width: "100%",
      minWidth: dividerThemeVar.dividerStyleMinWidth
    }
  ],

  variants: {
    type: {
      dashed: {
        backgroundImage: `linear-gradient(
          to right,
          ${dividerThemeVar.dividerColor} 60%,
          rgba(255, 255, 255, 0) 0%
        )`,
        backgroundSize: `${calc.multiply(dividerThemeVar.dividerSize, 5)} ${
          dividerThemeVar.dividerSize
        }`
      },
      dotted: {
        backgroundImage: `linear-gradient(
          to right,
          ${dividerThemeVar.dividerColor} 40%,
          rgba(255, 255, 255, 0) 0%
        )`,
        backgroundSize: `${calc.multiply(dividerThemeVar.dividerSize, 3)} ${
          dividerThemeVar.dividerSize
        }`
      },
      solid: {
        background: dividerThemeVar.dividerColor
      }
    }
  }
});

export const dividerVertical = recipe({
  base: [
    dividerBaseStyles,
    {
      backgroundRepeat: "repeat-y",
      height: "100%",
      width: `${dividerThemeVar.dividerSize}`,
      minHeight: dividerThemeVar.dividerStyleMinHeight
    }
  ],

  variants: {
    type: {
      dashed: {
        backgroundImage: `linear-gradient(
          to bottom,
          ${dividerThemeVar.dividerColor} 60%,
          rgba(255, 255, 255, 0) 0%
        )`,
        backgroundSize: `${dividerThemeVar.dividerSize} ${calc.multiply(
          dividerThemeVar.dividerSize,
          5
        )}`
      },
      dotted: {
        backgroundImage: `linear-gradient(
          to bottom,
          ${dividerThemeVar.dividerColor} 40%,
          rgba(255, 255, 255, 0) 0%
        )`,
        backgroundSize: `${dividerThemeVar.dividerSize} ${calc.multiply(
          dividerThemeVar.dividerSize,
          3
        )}`
      },
      solid: {
        background: dividerThemeVar.dividerColor
      }
    }
  }
});

const labelBaseStyles = style({
  background: dividerThemeVar.labelBackground,
  color: dividerThemeVar.labelColor,
  padding: "4px 8px",
  position: "absolute"
});

export const labelHorizontal = recipe({
  base: [labelBaseStyles, { top: "50%", transform: "translateY(-50%)" }],
  variants: {
    labelPosition: {
      start: {
        left: 0,
        right: "auto"
      },
      center: {
        left: "50%",
        transform: "translate(-50%,-50%)"
      },
      end: {
        left: "auto",
        right: 0
      }
    }
  }
});

export const labelVertical = recipe({
  base: [labelBaseStyles, { left: "50%", transform: "translateX(-50%)" }],
  variants: {
    labelPosition: {
      start: {
        top: 0,
        bottom: "auto"
      },
      center: {
        top: "50%",
        transform: "translate(-50%,-50%)"
      },
      end: {
        top: "auto",
        bottom: 0
      }
    }
  }
});
