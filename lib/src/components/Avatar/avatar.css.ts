import { recipe } from "@vanilla-extract/recipes";
import { style, createTheme } from "@vanilla-extract/css";
import { IAvatarProps, IAvatarTheme } from "./avatar.types";

export const [avatarThemeClass, avatarThemeVars]: IAvatarTheme = createTheme({
  avatarStyleColor: "none",
  avatarStyleTextColor: "inherit"
});

// xs sm md lg xl

export const avatarWrapper = style({
  position: "relative",
  display: "inline-flex",
  overflow: "hidden",
  width: "64px", // 16,32,64,128
  height: "64px", // 16,32,64,128
  borderRadius: "16px", // 2,4,8,16,32
  border: "0px",
  backgroundColor: "transparent",
  padding: "0px"
});

export const avatar = recipe({
  base: {
    objectFit: "cover",
    width: "100%",
    height: "100%",
    display: "block"
  }
});
