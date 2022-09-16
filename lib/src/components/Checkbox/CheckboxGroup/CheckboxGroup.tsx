import React, { ForwardRefRenderFunction } from "react";

import { Flex } from "src/components/Flex";
import { assignInlineVars } from "@vanilla-extract/dynamic";
import { eliminateUndefinedKeys } from "src/utils/object-utils";
import {
  checkboxGroupChildClass,
  checkboxGroupSpacing
} from "../checkbox.styles.css";
import { TCheckboxGroupProps } from "../checkbox.types";

const CheckboxGroup: ForwardRefRenderFunction<
  HTMLDivElement,
  TCheckboxGroupProps
> = (
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
      gap={checkboxGroupSpacing[spacing]}
      className={` ${
        orientation === "vertical" ? checkboxGroupChildClass : ""
      } ${className || ""}`}
      style={{ ...assignVariables, ...(style || {}) }}
      {...nativeProps}
    >
      {children}
    </Flex>
  );
};

const CheckboxGroupWithRef = React.forwardRef(CheckboxGroup);
export { CheckboxGroupWithRef as CheckboxGroup };
