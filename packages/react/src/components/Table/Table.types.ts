import React from "react";

export interface InitialTableProps
  extends React.DetailedHTMLProps<
    React.TableHTMLAttributes<HTMLTableElement>,
    HTMLTableElement
  > {
  children: React.ReactNode;
  addBorder?: boolean;
  borderRadius?: string;
  borderColor?: string;
  rowHeight?: string;
  alignContent?: string;
  alignHeading?: string;
  cellPadding?: string;
  striped?: boolean;
  stripeColor?: string;
  overrideTableContainerClass?: string;
  overrideTableClass?: string;
  className?: string;
  horizontalSpacing?: string;
}

export type ITableThemeVars = [
  string,
  {
    customRowHeight: string;
    headerAlignment: string;
    contentAlignment: string;
    customCellPadding: string;
    customStripeColor: string;
    customHorizontalSpacing: string;
  }
];

export type ITableContainerThemeVars = [
  string,
  {
    customBorderRadius: string;
    customBorderColor: string;
  }
];
