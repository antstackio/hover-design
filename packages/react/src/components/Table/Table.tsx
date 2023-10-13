import { assignInlineVars } from "@vanilla-extract/dynamic";
import React, { ForwardRefRenderFunction } from "react";
import {
  tableContainerDefaults,
  tableDefaults,
  tableContainerThemeVars,
  tableThemeVars,
  tableContainerThemeClass,
  tableThemeClass
} from "./Table.css";
import "./Table.global.styles.css";
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
    className,
    style,
    wrapperStyle,
    wrapperClassName,
    horizontalSpacing = "0",
    ...nativeProps
  },
  ref
) => {
  const tableContainerInlineVars = assignInlineVars({
    [tableContainerThemeVars.customBorderRadius]: borderRadius,
    [tableContainerThemeVars.customBorderColor]: addBorder
      ? borderColor
      : "transparent"
  });

  const tableInlineVars = assignInlineVars({
    [tableThemeVars.customStripeColor]: striped ? stripeColor : "",
    [tableThemeVars.customRowHeight]: rowHeight,
    [tableThemeVars.contentAlignment]: alignContent,
    [tableThemeVars.headerAlignment]: alignHeading,
    [tableThemeVars.customCellPadding]: cellPadding,
    [tableThemeVars.customHorizontalSpacing]: horizontalSpacing
  });

  return (
    <div
      style={{ ...tableContainerInlineVars, ...(wrapperStyle || {}) }}
      className={`${tableContainerDefaults} ${tableContainerThemeClass} ${overrideTableContainerClass} ${
        wrapperClassName || ""
      }`}
    >
      <table
        ref={ref}
        style={{ ...tableInlineVars, ...(style || {}) }}
        className={`${tableDefaults} ${
          striped && "striped"
        } ${tableThemeClass} ${overrideTableClass} ${className || ""}`}
        {...nativeProps}
      >
        {children}
      </table>
    </div>
  );
};

const TableWithRef = React.forwardRef(Table);
export { TableWithRef as Table };
