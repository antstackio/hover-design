import React, { ForwardRefRenderFunction } from "react";
import { FlexProps } from "./flex.types";
import { assignInlineVars } from "@vanilla-extract/dynamic";

export const FlexComponent: ForwardRefRenderFunction<
  HTMLDivElement,
  FlexProps
> = (
  {
    alignContent = "normal",
    alignItems = "flex-start",
    flexDirection = "row",
    flexWrap = "nowrap",
    justifyContent = "normal",
    flexShrink = "1",
    flexGrow = "0",
    flexBasis = "auto",
    gap = "normal",
    children,
    style,
    display = "flex",
    ...nativeProps
  },
  ref
) => {
  const flexStyles = assignInlineVars({
    display,
    alignContent,
    alignItems,
    flexDirection,
    flexWrap,
    justifyContent,
    flexShrink: flexShrink.toString(),
    flexGrow: flexGrow.toString(),
    flexBasis: flexBasis.toString(),
    gap: gap.toString()
  });
  /**
   * If user passes style object it will merge with current style
   */
  Object.assign(flexStyles, style);

  return (
    <div style={flexStyles} {...nativeProps} ref={ref}>
      {children}
    </div>
  );
};

const FlexWithRef = React.forwardRef(FlexComponent);
export { FlexWithRef as Flex };
