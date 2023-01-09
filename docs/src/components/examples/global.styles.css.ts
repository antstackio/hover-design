import { globalStyle } from "@vanilla-extract/css";
import { resetTableStyles } from "./resetTableStyles.css";

globalStyle(
  `${resetTableStyles} td, ${resetTableStyles} th,  ${resetTableStyles} tr`,
  {
    border: "none"
  }
);

globalStyle(
  `${resetTableStyles} tr:nth-child(even), ${resetTableStyles} thead`,
  {
    backgroundColor: "transparent"
  }
);

globalStyle(`${resetTableStyles} table`, {
  marginBottom: 0
});
