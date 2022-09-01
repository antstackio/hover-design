import { assignInlineVars } from "@vanilla-extract/dynamic";
import React, { ForwardRefRenderFunction } from "react";
import { footerDefaults, tfootThemeClass, tfootThemeVars } from "./Tfoot.css";
import { TfootProps } from "./Tfoot.types";
import "./Tfoot.global.styles.css";

const Tfoot: ForwardRefRenderFunction<HTMLTableSectionElement, TfootProps> = (
  { children, backgroundColor = "#ddd", className, style, ...nativeProps },
  ref
) => {
  const assignVars = assignInlineVars({
    [tfootThemeVars.customBackgroundColor]: backgroundColor,
  });

  return (
    <tfoot
      ref={ref}
      style={{ ...assignVars, ...(style || {}) }}
      className={`${footerDefaults} ${tfootThemeClass} ${className || ""}`}
      {...nativeProps}
    >
      {children}
    </tfoot>
  );
};

const TFootWithRef = React.forwardRef(Tfoot);
export { TFootWithRef as Tfoot };
