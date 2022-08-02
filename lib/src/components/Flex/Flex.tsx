import React from "react";
import { FlexProps } from "./flex.types";
import { assignInlineVars } from "@vanilla-extract/dynamic";

export const Flex: React.FC<FlexProps> = ({
    alignContent = 'normal',
    alignItems = 'flex-start',
    flexDirection = 'row',
    flexWrap = 'nowrap',
    justifyContent = 'normal',
    flexShrink = 1,
    flexGrow = 1,
    flexBasis = 'auto',
    children,
    style,
    ...nativeProps
}) => {
  const flexStyles = assignInlineVars({
    display: 'flex',
    alignContent,
    alignItems,
    flexDirection,
    flexWrap,
    justifyContent,
    flexShrink: flexShrink.toString(),
    flexGrow: flexGrow.toString(),
    flexBasis
  });
  /**
   * If user passes style object it will merge with current style,
   * TODO: Not able to show the autocomplete on Flex Component for style,
   */
  Object.assign(flexStyles, style); 
  
  return (
    <div style={flexStyles} {...nativeProps} > {children} </div>
    )
}