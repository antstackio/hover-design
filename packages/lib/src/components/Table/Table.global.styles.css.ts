import { globalStyle } from "@vanilla-extract/css";
import { tableDefaults, tableThemeVars } from "./Table.css";

globalStyle(`${tableDefaults} tr`, {
  lineHeight: tableThemeVars.customRowHeight
});

globalStyle(`${tableDefaults} td, ${tableDefaults} thead th`, {
  padding: tableThemeVars.customCellPadding
});

globalStyle(`${tableDefaults} thead th`, {
  textAlign: tableThemeVars.headerAlignment as "left" | "right" | "center"
});

globalStyle(`${tableDefaults} td`, {
  textAlign: tableThemeVars.contentAlignment as "left" | "right" | "center"
});

globalStyle(`${tableDefaults}.striped tr:nth-child(even)`, {
  backgroundColor: tableThemeVars.customStripeColor
});

globalStyle(`${tableDefaults} thead th, ${tableDefaults} tbody td`, {
  paddingRight: tableThemeVars.customHorizontalSpacing
});

globalStyle(
  `${tableDefaults} thead th:last-child, ${tableDefaults} tbody td:last-child`,
  {
    paddingRight: tableThemeVars.customCellPadding
  }
);
