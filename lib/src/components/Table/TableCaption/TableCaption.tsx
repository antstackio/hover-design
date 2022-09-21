import React, { ForwardRefRenderFunction } from "react";
import { TableCaptionProps } from "./TableCaption.types";

const TableCaption: ForwardRefRenderFunction<
  HTMLTableCaptionElement,
  TableCaptionProps
> = (
  { children, className, placement = "bottom", style, ...nativeProps },
  ref
) => {
  return (
    <caption
      ref={ref}
      style={{ captionSide: placement, paddingTop: "10px", ...(style || {}) }}
      className={className}
      {...nativeProps}
    >
      {children}
    </caption>
  );
};

const TableCaptionWithRef = React.forwardRef(TableCaption);
export { TableCaptionWithRef as TableCaption };
