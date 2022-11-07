import { globalStyle } from "@vanilla-extract/css";
import { headerDefaults, theadThemeVars } from "./Thead.css";

globalStyle(`${headerDefaults} tr th`, {
  backgroundColor: theadThemeVars.customBackgroundColor,
});
