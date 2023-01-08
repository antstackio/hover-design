import React, { ForwardRefRenderFunction } from "react";
import { TBodyProps } from "./Tbody.types";

const Tbody: ForwardRefRenderFunction<HTMLTableSectionElement, TBodyProps> = (
  { className, children, ...nativeProps },
  ref
) => {
  return (
    <tbody ref={ref} className={className} {...nativeProps}>
      {children}
    </tbody>
  );
};

const TBodyWithRef = React.forwardRef(Tbody);
export { TBodyWithRef as Tbody };
