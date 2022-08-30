import { assignInlineVars } from "@vanilla-extract/dynamic";
import React, { ForwardRefRenderFunction } from "react";
import {
  tableContainerDefaults,
  tableDefaults,
  tableContainerThemeVars,
  tableThemeVars,
} from "./Table.css";
import { InitialTableProps } from "./Table.types";

const Table: ForwardRefRenderFunction<HTMLTableElement, InitialTableProps> = (
  {
    addBorder = false,
    borderRadius = "4px",
    borderColor = "black",
    rowHeight = "1",
    alignContent = "left",
    alignHeading = "left",
    overrideTableContainerClass = "",
    overrideTableClass = "",
    cellPadding = "10px",
    striped = false,
    stripeColor = "#eee",
    children,
    ...nativeProps
  },
  ref
) => {
  const tableContainerInlineVars = assignInlineVars({
    [tableContainerThemeVars.customBorderRadius]: borderRadius,
    [tableContainerThemeVars.customBorderColor]: addBorder
      ? borderColor
      : "transparent",
  });

  const tableInlineVars = assignInlineVars({
    [tableThemeVars.customStripeColor]: striped ? stripeColor : "",
    [tableThemeVars.customRowHeight]: rowHeight,
    [tableThemeVars.contentAlignment]: alignContent,
    [tableThemeVars.headerAlignment]: alignHeading,
    [tableThemeVars.customCellPadding]: cellPadding,
  });

  return (
    <div
      style={{ ...tableContainerInlineVars }}
      className={`${tableContainerDefaults} ${overrideTableContainerClass}`}
    >
      <table
        ref={ref}
        style={{ ...tableInlineVars }}
        className={`${tableDefaults} ${
          striped && "striped"
        } ${overrideTableClass}`}
        {...nativeProps}
      >
        {children}
      </table>
    </div>
  );
};

const TableWithRef = React.forwardRef(Table);
export { TableWithRef as Table };
