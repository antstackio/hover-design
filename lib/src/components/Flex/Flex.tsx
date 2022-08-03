import React, { ForwardRefRenderFunction } from "react";
import { FlexProps } from "./flex.types";
import { assignInlineVars } from "@vanilla-extract/dynamic";

export const FlexComponent:ForwardRefRenderFunction<HTMLUListElement, FlexProps> = ({
    alignContent = 'normal',
    alignItems = 'flex-start',
    flexDirection = 'row',
    flexWrap = 'nowrap',
    justifyContent = 'normal',
    flexShrink = 1,
    flexGrow = 1,
    flexBasis = 'auto',
    gap = 'normal',
    children,
    style,
    ...nativeProps
}, ref) => {
  const flexStyles = assignInlineVars({
    display: 'flex',
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
   * If user passes style object it will merge with current style,
   * TODO: Not able to show the autocomplete on Flex Component for style, and I am not able to make use of ref
   */
  Object.assign(flexStyles, style); 
  
  return (
    <div style={flexStyles} {...nativeProps} > {children} </div>
    )
};

const FlexWithRef = React.forwardRef(FlexComponent);
export { FlexWithRef as Flex };