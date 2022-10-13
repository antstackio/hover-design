import { globalStyle } from "@vanilla-extract/css";
import { selectContainerStyles } from "./select.css";

globalStyle(`${selectContainerStyles} [data-hover="true"]`, {
  background: "#ebe8e8",
  color: "black",
  outline: "none",
});
