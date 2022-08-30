import { assignInlineVars } from "@vanilla-extract/dynamic";
import React, { ForwardRefRenderFunction } from "react";
import { footerDefaults, tfootThemeVars } from "./Tfoot.css";
import { TfootProps } from "./Tfoot.types";

const Tfoot: ForwardRefRenderFunction<HTMLTableSectionElement, TfootProps> = (
  { children, backgroundColor = "#ddd", className, ...nativeProps },
  ref
) => {
  return (
    <tfoot
      ref={ref}
      style={assignInlineVars({
        [tfootThemeVars.customBackgroundColor]: backgroundColor,
      })}
      className={`${footerDefaults} ${className}`}
      {...nativeProps}
    >
      {children}
    </tfoot>
  );
};

const TFootWithRef = React.forwardRef(Tfoot);
export { TFootWithRef as Tfoot };
