import React, { ForwardRefRenderFunction } from "react";
import { accordionGroupClass } from "@hover-design/core";

const AccordionGroup: ForwardRefRenderFunction<
  HTMLDivElement,
  JSX.IntrinsicElements["div"]
> = ({ children, className, ...nativeProps }, ref) => {
  return (
    <div
      ref={ref}
      className={`${accordionGroupClass} ${className}`}
      {...nativeProps}
    >
      {children}
    </div>
  );
};

const AccordionGroupWithRef = React.forwardRef(AccordionGroup);
export { AccordionGroupWithRef as AccordionGroup };
