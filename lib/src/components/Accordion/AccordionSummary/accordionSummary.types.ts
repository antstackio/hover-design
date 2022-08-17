import React from "react";

export interface IAccordionSummaryCustomProps {
  iconPosition?: "left" | "right";
  Icon?: React.ReactNode;
  iconTransform?: string;
  iconTransition?: string;
}

export type IAccordionSummaryProps = JSX.IntrinsicElements["summary"] &
  IAccordionSummaryCustomProps;
