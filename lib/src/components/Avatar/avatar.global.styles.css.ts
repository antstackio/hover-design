import { globalStyle } from "@vanilla-extract/css";
import { avatarChildClass, avatarGroupThemeVars } from "./avatar.styles.css";

globalStyle(`${avatarChildClass} > div:not(:first-child)`, {
  marginLeft: avatarGroupThemeVars.avatarStyleGap
});
