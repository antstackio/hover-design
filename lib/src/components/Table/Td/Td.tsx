import React, { ForwardRefRenderFunction } from "react";
import { TdProps } from "./Td.types";

const Td: ForwardRefRenderFunction<
  HTMLTableCellElement,
  TdProps
> = ({ className, alignContent, children, ...nativeProps }, ref) => {
  return (
    <td
      ref={ref}
      style={{ textAlign: alignContent }}
      className={className}
      {...nativeProps}
    >
      {children}
    </td>
  );
};

const TdWithRef = React.forwardRef(Td);
export { TdWithRef as Td };
