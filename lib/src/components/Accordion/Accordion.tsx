import React, { ForwardRefRenderFunction, LegacyRef } from "react";

import { accordionThemeClass, detailsClass } from "./accordion.styles.css";
import "./accordion.global.styles.css";
import { IAccordionProps } from "./accordion.types";

const Accordion: ForwardRefRenderFunction<
  HTMLDetailsElement,
  IAccordionProps
> = ({ children, onToggle, className, ...nativeProps }, ref) => {
  return (
    <details
      ref={ref as LegacyRef<HTMLElement> | undefined}
      onToggle={onToggle}
      className={`${detailsClass} ${accordionThemeClass} ${className}`}
      {...nativeProps}
    >
      {children}
    </details>
  );
};
const AccordionWithRef = React.forwardRef(Accordion);
export { AccordionWithRef as Accordion };
