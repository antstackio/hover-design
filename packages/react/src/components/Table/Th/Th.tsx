import React, { ForwardRefRenderFunction } from "react";
import { ThProps } from "./Th.types";

const Th: ForwardRefRenderFunction<HTMLTableCellElement, ThProps> = (
  { className, alignHeading, children, ...nativeProps },
  ref
) => {
  return (
    <th
      ref={ref}
      style={{ textAlign: alignHeading }}
      className={className}
      {...nativeProps}
    >
      {children}
    </th>
  );
};

const ThWithRef = React.forwardRef(Th);
export { ThWithRef as Th };
