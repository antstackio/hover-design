import { createVar, keyframes, style } from "@vanilla-extract/css";

const spinAnimation = keyframes({
  to: {
    transform: "rotate(360deg)",
  },
});
export const spinnerStyle = style({
  transformOrigin: "center",
  animation: `${spinAnimation} 1s linear infinite`,
});
