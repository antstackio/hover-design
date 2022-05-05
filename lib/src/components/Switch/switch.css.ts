import { style } from "@vanilla-extract/css";

export const switchLayout = style({
  position: "relative",
  display: "inline-block",
  width: "52px",
  height: "28px",
});

export const switchInputStyle = style({
  width: 0,
  height: 0,
  opacity: 0,
});

export const slider = style({
  position: "absolute",
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  border: `1px solid #DDD`,
  borderRadius: "34px",
  transition: "0.3s",
  cursor: "pointer",
  selectors: {
    "&:before": {
      content: "",
      borderRadius: "50%",
      position: "absolute",
      height: "24px",
      width: "24px",
      left: "1px",
      bottom: "1px",
      transition: "0.3s",
      backgroundColor: "#DDD",
    },
  },
});
