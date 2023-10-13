import { globalStyle } from "@vanilla-extract/css";
import { selectListContainerStyle } from "./select.css";

globalStyle(`${selectListContainerStyle} [data-hover="true"]`, {
  background: "#ebe8e8",
  color: "black",
  outline: "none"
});
