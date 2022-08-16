import React from "react";

import {
  accordionThemeClass,
  detailsClass,
  summaryOpenClass,
} from "./accordion.styles.css";
import { IAccordionProps } from "./accordion.types";

const Accordion: React.FC<IAccordionProps> = ({
  children,
  open,
  onToggle,
  className,
  ...nativeProps
}) => {
  const [isOpen, setIsOpen] = React.useState(open);
  const onToggleInternal = React.useCallback(
    (e) => {
      setIsOpen((prevState) => !prevState);
      onToggle && onToggle(e);
    },
    [onToggle]
  );

  return (
    <details
      open={isOpen}
      onToggle={onToggleInternal}
      className={`${detailsClass} ${
        isOpen ? summaryOpenClass : ""
      } ${accordionThemeClass} ${className}`}
      {...nativeProps}
    >
      {children}
    </details>
  );
};

export { Accordion };
