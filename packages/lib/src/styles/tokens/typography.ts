import { modularScale } from "polished";

const baseFontSizeInPx = 16;
const fontEnlargementScale = 1.3;
const createScale = (ratio: number, base: number) => (steps: number) =>
  `${modularScale(steps, base, ratio)}px`;

const fontSizeScale = createScale(fontEnlargementScale, baseFontSizeInPx);

export const fontSizeVars = {
  "100": fontSizeScale(0),
  "200": fontSizeScale(1),
  "300": fontSizeScale(2),
  "400": fontSizeScale(3),
  "500": fontSizeScale(4),
  "600": fontSizeScale(5)
};

export const fontVars = {
  primary: "'Poppins', system-ui",
  secondary: "'Overpass', system-ui"
};
