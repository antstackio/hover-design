import React from "react";

interface IAccordionSummaryCustomProps {
  iconPosition?: "left" | "right";
  Icon?: React.ReactNode;
  iconTransform?: string;
  iconTransition?: string;
}

export type IAccordionSummaryProps = JSX.IntrinsicElements["summary"] &
  IAccordionSummaryCustomProps;
