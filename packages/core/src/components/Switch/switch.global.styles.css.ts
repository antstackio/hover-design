import { globalStyle } from "@vanilla-extract/css";
import { switchInputStyle, slider } from "./switch.styles.css";

globalStyle(`${switchInputStyle}:checked + ${slider}`, {
  background: "#1AB5EB",
  border: `1px solid #1AB5EB`
});

globalStyle(`${switchInputStyle}:checked + ${slider}:before`, {
  backgroundColor: "white",
  transform: "translateX(24px)"
});

globalStyle(`${switchInputStyle}:disabled + ${slider}`, {
  backgroundColor: "#eee",
  border: `1px solid #ddd`
});

globalStyle(`${switchInputStyle}:disabled + ${slider}:before`, {
  backgroundColor: "#ddd"
});
