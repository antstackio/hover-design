import React, { ForwardRefRenderFunction } from "react";

import { TRadioGroupProps } from "../radio.types";
import { Flex } from "src/components/Flex";
import { assignInlineVars } from "@vanilla-extract/dynamic";
import { radioGroupChildClass, radioGroupSpacing } from "../radio.styles.css";
import { eliminateUndefinedKeys } from "src/utils/object-utils";

const RadioGroup: ForwardRefRenderFunction<HTMLDivElement, TRadioGroupProps> = (
  {
    children,
    className,
    style,
    orientation = "horizontal",
    spacing = "xs",
    ...nativeProps
  },
  ref
) => {
  const assignVariables = assignInlineVars(eliminateUndefinedKeys({}));

  return (
    <Flex
      flexDirection={orientation === "horizontal" ? "row" : "column"}
      ref={ref}
      gap={radioGroupSpacing[spacing]}
      className={` ${orientation === "vertical" ? radioGroupChildClass : ""} ${
        className || ""
      }`}
      style={{ ...assignVariables, ...(style || {}) }}
      {...nativeProps}
    >
      {children}
    </Flex>
  );
};

const RadioGroupWithRef = React.forwardRef(RadioGroup);
export { RadioGroupWithRef as RadioGroup };
