import { style } from "@vanilla-extract/css";

export const cardBox = style({
  width: "300px",
  height: "209px",
  color: "white",
  backdropFilter: "blur(3px)"
});

export const cardTitle = style({
  margin: 0,
  display: "flex",
  alignItems: "center"
});
