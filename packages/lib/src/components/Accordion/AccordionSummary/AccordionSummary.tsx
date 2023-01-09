import { assignInlineVars } from "@vanilla-extract/dynamic";
import React, { ForwardRefRenderFunction } from "react";
import { Flex } from "../../Flex";
import ChevronIcon from "../../_internal/Icons/Chevron";
import {
  accordionIconClass,
  accordionThemeVars,
  summaryClass
} from "../accordion.styles.css";
import { IAccordionSummaryProps } from "./accordionSummary.types";

const DefaultAccordionSummaryIcon: React.FC<{
  iconPosition: IAccordionSummaryProps["iconPosition"];
}> = () => {
  return <ChevronIcon height={"18"} width={"18"} />;
};
const AccordionSummary: ForwardRefRenderFunction<
  HTMLElement,
  IAccordionSummaryProps
> = (
  {
    children,
    Icon,
    iconPosition = "right",
    iconTransform = "rotate(180deg)",
    iconTransition = "transform 0.2s ease-in-out",
    className,
    style,
    ...nativeProps
  },
  ref
) => {
  const summaryStyle = Object.assign(
    assignInlineVars({
      [accordionThemeVars.accordionTransition]: iconTransition,
      [accordionThemeVars.accordionTransform]: iconTransform
    }),
    style
  );
  const SummaryIcon = () => {
    const accordionIconStyle = accordionIconClass({ position: iconPosition });

    return (
      <Flex
        data-attribute="chevron"
        justifyContent={"center"}
        alignItems={"center"}
        className={accordionIconStyle}
      >
        {Icon || <DefaultAccordionSummaryIcon iconPosition={iconPosition} />}
      </Flex>
    );
  };

  return (
    <summary
      ref={ref}
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

const AccordionSummaryWithRef = React.forwardRef(AccordionSummary);

export { AccordionSummaryWithRef as AccordionSummary };
