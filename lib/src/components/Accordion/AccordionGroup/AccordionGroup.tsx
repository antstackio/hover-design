import React from "react";
import { accordionGroupClass } from "../accordion.styles.css";

const AccordionGroup: React.FC<JSX.IntrinsicElements["div"]> = ({
  children,
  className,
  ...nativeProps
}) => {
  return (
    <div className={`${accordionGroupClass} ${className}`} {...nativeProps}>
      {children}
    </div>
  );
};

export { AccordionGroup };
