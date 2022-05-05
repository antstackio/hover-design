import { globalStyle } from "@vanilla-extract/css";
import { switchInputStyle, slider } from "src/components/Switch";

globalStyle(`${switchInputStyle}:checked + ${slider}`, {
  background: "#1AB5EB",
  border: `1px solid #1AB5EB`
});

globalStyle(`${switchInputStyle}:checked + ${slider}:before`, {
  backgroundColor: "white",
  transform: "translateX(24px)"
});