import { globalStyle, style, createTheme } from "@vanilla-extract/css";
import { ITableContainerThemeVars, ITableThemeVars } from "./Table.types";

export const [, tableContainerThemeVars]: ITableContainerThemeVars =
  createTheme({
    customBorderRadius: "4px",
    customBorderColor: "black",
  });

export const [, tableThemeVars]: ITableThemeVars = createTheme({
  customRowHeight: "1",
  headerAlignment: "left",
  contentAlignment: "left",
  customCellPadding: "10px",
  customStripeColor: "#eee",
});

export const tableContainerDefaults = style({
  border: `1px solid ${tableContainerThemeVars.customBorderColor}`,
  borderRadius: tableContainerThemeVars.customBorderRadius,
  display: "inline-block",
  overflow: "auto",
  paddingBottom: "10px",
});

export const tableDefaults = style({
  borderCollapse: "collapse",
});

globalStyle(`${tableDefaults} tr`, {
  lineHeight: tableThemeVars.customRowHeight,
});

globalStyle(`${tableDefaults} td, ${tableDefaults} thead th`, {
  padding: tableThemeVars.customCellPadding,
});

globalStyle(`${tableDefaults} thead th`, {
  textAlign: tableThemeVars.headerAlignment as "left" | "right" | "center",
});

globalStyle(`${tableDefaults} td`, {
  textAlign: tableThemeVars.contentAlignment as "left" | "right" | "center",
});

globalStyle(`${tableDefaults}.striped tr:nth-child(even)`, {
  backgroundColor: tableThemeVars.customStripeColor,
});
