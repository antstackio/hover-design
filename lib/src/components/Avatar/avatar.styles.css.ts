import { style, createTheme } from "@vanilla-extract/css";
import { IAvatarGroupTheme, IAvatarTheme } from "./avatar.types";

export const avatarGaps: Record<
  IAvatarGroupTheme[1]["avatarStyleGap"],
  string
> = {
  xs: "-16px",
  sm: "-14px",
  md: "-12px",
  lg: "-10px",
  xl: "-8px"
};

export const avatarChildClass = style({});

export const [avatarGroupThemeClass, avatarGroupThemeVars]: IAvatarGroupTheme =
  createTheme({ avatarStyleGap: "0" });

export const [avatarThemeClass, avatarThemeVars]: IAvatarTheme = createTheme({
  avatarStyleColor: "none",
  avatarStyleTextColor: "inherit",
  avatarStyleBorderRadius: "0",
  avatarStyleSize: "0"
});

export const avatarImg = style({
  objectFit: "cover",
  width: "100%",
  height: "100%"
});

export const avatarSizes: Record<IAvatarTheme[1]["avatarStyleSize"], string> = {
  xs: "16px",
  sm: "24px",
  md: "32px",
  lg: "40px",
  xl: "48px"
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

export const avatarWrapper = style({
  fontWeight: "700",
  verticalAlign: "middle",
  overflow: "hidden",
  width: avatarThemeVars.avatarStyleSize,
  height: avatarThemeVars.avatarStyleSize,
  backgroundColor: avatarThemeVars.avatarStyleColor,
  color: avatarThemeVars.avatarStyleTextColor,
  borderRadius: avatarThemeVars.avatarStyleBorderRadius
});
