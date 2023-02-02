import { rem } from "polished";
import { IFontSizes } from "./typography.types";

export const rootFontSize = "16px";

export const fontFamily = {
  primary: '"niveau-grotesk", sans-serif'
};

export const fontSizes: IFontSizes = {
  xxs: `${rem(10)}`,
  xs: `${rem(12)}`,
  sm: `${rem(14)}`,
  md: `${rem(16)}`,
  lg: `${rem(18)}`,
  xl: `${rem(20)}`,
  "2xl": `${rem(24)}`,
  "3xl": `${rem(30)}`,
  "4xl": `${rem(36)}`,
  "5xl": `${rem(48)}`
};
