import { IColors } from "../constants/colors/colors.types";
import {
  IFontFamily,
  IFontSizes
} from "../constants/typography/typography.types";

export interface ITheme {
  [key: string]: string | any;
  colors: IColors;
  fontFamily: IFontFamily;
  fontSizes: IFontSizes;
}
