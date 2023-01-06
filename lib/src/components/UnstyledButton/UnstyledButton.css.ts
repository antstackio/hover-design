import { style } from "@vanilla-extract/css";

export const unstyledButtonClass = style({
  cursor: "pointer",
  border: 0,
  padding: 0,
  appearance: "none",
  backgroundColor: "transparent",
  textAlign: "left",
  textDecoration: "none",
  boxSizing: "border-box"
});
