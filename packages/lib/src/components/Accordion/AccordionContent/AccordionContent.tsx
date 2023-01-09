import React, { ForwardRefRenderFunction } from "react";
import { accordionContentClass } from "../accordion.styles.css";

const AccordionContent: ForwardRefRenderFunction<
  HTMLDivElement,
  JSX.IntrinsicElements["div"]
> = ({ children, className, ...nativeProps }) => {
  return (
    <div className={`${accordionContentClass} ${className}`} {...nativeProps}>
      {children}
    </div>
  );
};

const AccordionContentWithRef = React.forwardRef(AccordionContent);

export { AccordionContentWithRef as AccordionContent };
