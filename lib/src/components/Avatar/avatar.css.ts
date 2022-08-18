import { recipe } from "@vanilla-extract/recipes";
import { style, createTheme } from "@vanilla-extract/css";
import { IAvatarProps, IAvatarSizes, IAvatarTheme } from "./avatar.types";

export const [avatarThemeClass, avatarThemeVars]: IAvatarTheme = createTheme({
  avatarStyleColor: "none",
  avatarStyleTextColor: "inherit",
  avatarStyleBorderRadius: "0",
  avatarStyleSize: "0"
});

export const avatarWrapperFlex = style({
  display: "inline-flex",
  justifyContent: "center",
  alignItems: "center"
});

export const avatarImg = style({
  objectFit: "cover",
  width: "100%",
  height: "100%"
});

export const avatarSizes: Record<IAvatarTheme[1]["avatarStyleSize"], string> = {
  sm: "16px",
  md: "32px",
  lg: "64px"
};

export const avatarShapes: Record<
  IAvatarTheme[1]["avatarStyleBorderRadius"],
  string
> = {
  xs: "2px",
  sm: "4px",
  md: "8px",
  lg: "16px",
  xl: "32px"
};

export const avatar = recipe({
  base: {
    verticalAlign: "middle",
    overflow: "hidden",
    width: avatarThemeVars.avatarStyleSize,
    height: avatarThemeVars.avatarStyleSize,
    backgroundColor: avatarThemeVars.avatarStyleColor,
    color: avatarThemeVars.avatarStyleTextColor,
    borderRadius: avatarThemeVars.avatarStyleBorderRadius
  }
});