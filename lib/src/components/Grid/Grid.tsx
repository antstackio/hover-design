import React, { ForwardRefRenderFunction } from "react";
import { GridProps } from "./grid.types";
import { assignInlineVars } from "@vanilla-extract/dynamic";
import { eliminateUndefinedKeys } from "src/utils/object-utils";

export const GridComponent: ForwardRefRenderFunction<
  HTMLDivElement,
  GridProps
> = (
  {
    gap,
    columnGap,
    rowGap,
    gridTemplateColumns,
    gridTemplateRows,
    gridTemplateAreas,
    gridAutoColumns,
    gridAutoRows,
    gridAutoFlow,
    grid,
    gridArea,
    gridColumn,
    gridColumnStart,
    gridColumnEnd,
    gridRow,
    gridRowStart,
    gridRowEnd,
    gridTemplate,
    justifyItems,
    alignItems,
    placeItems,
    justifyContent,
    alignContent,
    display = "grid",
    children,
    style,
    ...nativeProps
  },
  ref
) => {
  const gridStyles = assignInlineVars(
    eliminateUndefinedKeys({
      gap,
      columnGap,
      rowGap,
      gridTemplateColumns,
      gridTemplateRows,
      gridTemplateAreas,
      gridAutoColumns,
      gridAutoRows,
      gridAutoFlow,
      grid,
      gridArea,
      gridColumn,
      gridColumnStart,
      gridColumnEnd,
      gridRow,
      gridRowStart,
      gridRowEnd,
      gridTemplate,
      justifyItems,
      alignItems,
      placeItems,
      justifyContent,
      alignContent,
      display,
    })
  );
  /**
   * If user passes style object it will merge with current style
   */
  Object.assign(gridStyles, style);

  return (
    <div style={gridStyles} {...nativeProps} ref={ref}>
      {children}
    </div>
  );
};

const GridWithRef = React.forwardRef(GridComponent);
export { GridWithRef as Grid };
