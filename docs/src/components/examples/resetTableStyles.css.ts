import { globalStyle, style } from "@vanilla-extract/css";

export const resetTableStyles = style({});

// reset table styles
globalStyle(
  `${resetTableStyles} td, ${resetTableStyles} th,  ${resetTableStyles} tr`,
  {
    border: "none",
  }
);

globalStyle(
  `${resetTableStyles} tr:nth-child(even), ${resetTableStyles} thead`,
  {
    backgroundColor: "transparent",
  }
);

globalStyle(`${resetTableStyles} table`, {
  marginBottom: 0,
});
