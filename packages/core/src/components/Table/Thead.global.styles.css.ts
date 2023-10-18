import { globalStyle } from "@vanilla-extract/css";
import { headerDefaults, theadThemeVars } from "./Thead.styles.css";

globalStyle(`${headerDefaults} tr th`, {
  backgroundColor: theadThemeVars.customBackgroundColor
});
