import { assignInlineVars } from "@vanilla-extract/dynamic";
import React, { ForwardRefRenderFunction } from "react";
import { headerDefaults, theadThemeVars } from "./Thead.css";
import { TheadProps } from "./Thead.types";

const Thead: ForwardRefRenderFunction<HTMLTableSectionElement, TheadProps> = (
  { children, backgroundColor = "#ddd", className, ...nativeProps },
  ref
) => {
  return (
    <thead
      ref={ref}
      style={assignInlineVars({
        [theadThemeVars.customBackgroundColor]: backgroundColor,
      })}
      className={`${headerDefaults} ${className}`}
      {...nativeProps}
    >
      {children}
    </thead>
  );
};

const THeadWithRef = React.forwardRef(Thead);
export { THeadWithRef as Thead };
