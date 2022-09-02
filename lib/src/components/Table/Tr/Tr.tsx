import React, { ForwardRefRenderFunction } from "react";
import { TrProps } from "./Tr.types";

const Tr: ForwardRefRenderFunction<HTMLTableRowElement, TrProps> = (
  { className, children, ...nativeProps },
  ref
) => {
  return (
    <tr ref={ref} className={className} {...nativeProps}>
      {children}
    </tr>
  );
};

const TrWithRef = React.forwardRef(Tr);
export { TrWithRef as Tr };
