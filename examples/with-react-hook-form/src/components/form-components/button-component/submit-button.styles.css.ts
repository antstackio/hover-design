import { style } from "@vanilla-extract/css";

export const submitButtonStyles = style({
  background: "transparent",
  margin: "10px 0",
  width: "fit-content",
  padding: "10px 60px",
  cursor: "pointer",
  transition: "all 200ms ease-in-out",
  border: "1px solid",
  borderImageSlice: 1,
  borderImageSource: "linear-gradient(to right, #fff, #fff)",
  ":hover": {
    border: "1px solid",
    borderImageSlice: 1,
    borderImageSource: "linear-gradient(to right, #a0e8f4, #0643c9)",
    color: "#a0e8f4"
  }
});
