import React from "react";
import { accordionGroupClass } from "../accordion.styles.css";

type Props = {};

const AccordionGroup: React.FC = ({ children }) => {
  return <div className={accordionGroupClass}>{children}</div>;
};

export { AccordionGroup };
