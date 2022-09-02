import React, { ForwardRefRenderFunction } from "react";

import { TRadioGroupProps } from "../radio.types";
import { Flex } from "src/components/Flex";
import { assignInlineVars } from "@vanilla-extract/dynamic";
import {
  radioGroupChildClass,
  radioGroupSpacing,
  radioGroupThemeClass,
  radioGroupThemeVars
} from "../radio.styles.css";

const RadioGroup: ForwardRefRenderFunction<HTMLDivElement, TRadioGroupProps> = (
  {
    children,
    className,
    style,
    orientation = "horizontal",
    Spacing = "xs",
    ...nativeProps
  },
  ref
) => {
  const assignVariables = assignInlineVars({
    [radioGroupThemeVars.radioGroupStyleSpacing]: radioGroupSpacing[Spacing]
      ? radioGroupSpacing[Spacing]
      : Spacing
  });

  return (
    <Flex
      flexDirection={orientation === "horizontal" ? "row" : "column"}
      ref={ref}
      className={`${radioGroupThemeClass} ${
        orientation === "verticle" ? radioGroupChildClass : ""
      } ${className || ""}`}
      style={{ ...assignVariables, ...(style || {}) }}
      {...nativeProps}
    >
      {children}
    </Flex>
  );
};

const RadioGroupWithRef = React.forwardRef(RadioGroup);
export { RadioGroupWithRef as RadioGroup };
