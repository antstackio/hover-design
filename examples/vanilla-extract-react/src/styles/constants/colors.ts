import { Tokens } from "@vanilla-extract/css/dist/declarations/src/types";

export const lightColors: IThemeColors = {
  brand: {
    100: "hsla(51,10%,91%,1)",
    200: "hsla(51,33%,91%,1)",
    300: "hsla(51,76%,91%,1)",
  },
  typography: {
    200: "hsla(0, 0%, 25%,1)",
    500: "hsla(0, 0%, 10%,1)",
    900: "hsla(0, 0%, 0%,1)",
  },
};
export const darkColors: IThemeColors = {
  brand: {
    100: "hsla(0,0%,25%,1)",
    200: "hsla(0,0%,10%,1)",
    300: "hsla(0,0%,0%,1)",
  },
  typography: {
    200: "hsla(0, 0%, 70%,1)",
    500: "hsla(0, 0%, 80%,1)",
    900: "hsla(0, 100%, 100%,1)",
  },
};

export interface IThemeColors {
  [key: string]: string | Tokens;
  brand: {
    100: string;
    200: string;
    300: string;
  };
  typography: {
    200: string;
    500: string;
    900: string;
  };
}
