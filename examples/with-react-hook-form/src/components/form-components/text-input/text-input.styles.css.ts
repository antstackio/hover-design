import { globalStyle, style } from "@vanilla-extract/css";

export const inputStyles = style({
  position: "relative",
  padding: "12px 0px 5px 10px",
  width: "100%",
  outline: "0px",
  borderWidth: "0px 0px 2px",
  borderBottomStyle: "solid",
  borderBottomColor: "rgb(255, 255, 255)",
  background: "transparent",
  transition: "all 150ms ease-out 0s",
  fontSize: "20px",
  borderRadius: "0px",
  ":focus": {
    borderBottom: "2px solid",
    borderImageSlice: 1,
    borderImageSource: "linear-gradient(to right, #a0e8f4, #0643c9)"
  }
});

export const inputErrorStyles = style({
  borderBottomColor: "rgb(255, 0, 0)"
});
export const FieldLabel = style({
  position: "absolute",
  left: "10px",
  top: "10px",
  color: "#999",
  transition: "transform 150ms ease-out, font-size 150ms ease-out"
});

export const FieldLabelFilled = style({
  transform: "translateY(-125%)",
  fontSize: "0.75em",
  color: "#a0e8f4",
  opacity: "0.6"
});
