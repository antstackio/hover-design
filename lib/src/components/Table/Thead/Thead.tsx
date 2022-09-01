import { assignInlineVars } from "@vanilla-extract/dynamic";
import React, { ForwardRefRenderFunction } from "react";
import { headerDefaults, theadThemeClass, theadThemeVars } from "./Thead.css";
import { TheadProps } from "./Thead.types";
import "./Thead.global.styles.css";

const Thead: ForwardRefRenderFunction<HTMLTableSectionElement, TheadProps> = (
  { children, backgroundColor = "#ddd", className, style, ...nativeProps },
  ref
) => {
  const assignVars = assignInlineVars({
    [theadThemeVars.customBackgroundColor]: backgroundColor,
  });

  return (
    <thead
      ref={ref}
      style={{ ...assignVars, ...(style || {}) }}
      className={`${headerDefaults} ${theadThemeClass} ${className || ""}`}
      {...nativeProps}
    >
      {children}
    </thead>
  );
};

const THeadWithRef = React.forwardRef(Thead);
export { THeadWithRef as Thead };
