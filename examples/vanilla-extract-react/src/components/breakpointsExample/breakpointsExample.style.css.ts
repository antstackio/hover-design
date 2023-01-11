import { style } from "@vanilla-extract/css";
import { breakpoints } from "styles/index.css";

export const laptopText = style({
  display: "none",
  "@media": {
    [breakpoints.laptop]: {
      display: "block"
    }
  }
});

export const tabletText = style({
  display: "none",
  "@media": {
    [breakpoints.tablet]: {
      display: "block"
    }
  }
});
