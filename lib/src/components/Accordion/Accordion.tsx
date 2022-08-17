import React from "react";

import {
  accordionThemeClass,
  detailsClass,
  summaryOpenClass,
} from "./accordion.styles.css";
import "./accordion.global.styles.css";
import { IAccordionProps } from "./accordion.types";

const Accordion: React.FC<IAccordionProps> = ({
  children,
  onToggle,
  className,
  ...nativeProps
}) => {
  return (
    <details
      onToggle={onToggle}
      className={`${detailsClass} ${accordionThemeClass} ${className}`}
      {...nativeProps}
    >
      {children}
    </details>
  );
};

export { Accordion };
