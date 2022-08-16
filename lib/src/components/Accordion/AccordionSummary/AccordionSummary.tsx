import { assignInlineVars } from "@vanilla-extract/dynamic";
import React from "react";
import { Flex } from "src/components/Flex";
import ChevronIcon from "src/components/_internal/Icons/Chevron";
import {
  accordionIconClass,
  accordionThemeVars,
  summaryClass,
} from "../accordion.styles.css";
import { IAccordionSummaryProps } from "./accordionSummary.types";

const DefaultAccordionSummaryIcon: React.FC<{
  iconPosition: IAccordionSummaryProps["iconPosition"];
}> = ({ iconPosition }) => {
  const accordionIconStyle = accordionIconClass({ position: iconPosition });
  return (
    <Flex
      data-attribute="chevron"
      justifyContent={"center"}
      alignItems={"center"}
      className={accordionIconStyle}
    >
      <ChevronIcon height={"18"} width={"18"} />
    </Flex>
  );
};
export const AccordionSummary: React.FC<IAccordionSummaryProps> = ({
  children,
  Icon,
  iconPosition = "right",
  iconTransform = "rotate(180deg)",
  iconTransition = "transform 0.2s ease-in-out",
  className,
  style,
  ...nativeProps
}) => {
  const summaryStyle = Object.assign(
    assignInlineVars({
      [accordionThemeVars.accordionTransition]: iconTransition,
      [accordionThemeVars.accordionTransform]: iconTransform,
    }),
    style
  );
  const SummaryIcon = () =>
    Icon || <DefaultAccordionSummaryIcon iconPosition={iconPosition} />;

  return (
    <summary
      style={summaryStyle}
      className={`${summaryClass} ${className}`}
      {...nativeProps}
    >
      {iconPosition === "left" && SummaryIcon()}
      {children}
      {iconPosition === "right" && SummaryIcon()}
    </summary>
  );
};
