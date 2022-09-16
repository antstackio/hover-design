import { assignInlineVars } from "@vanilla-extract/dynamic";
import React, { Children, ForwardRefRenderFunction } from "react";
import { eliminateUndefinedKeys } from "src/utils/object-utils";
import { Flex } from "src/components/Flex";

import { TStepperProps } from "./stepper.types";

const StepperComponent: ForwardRefRenderFunction<
  HTMLDivElement,
  TStepperProps
> = (
  {
    activeStep,
    onStepClick,
    size,
    iconPosition = "left",
    borderRadius,
    orientation = "horizontal",
    baseStyles,
    completedStyles,
    progressStyles,
    children,
    className,
    style,
    ...nativeProps
  },
  ref
) => {
  const _children = Children.toArray(children) as React.ReactElement[];

  const assignVariables = assignInlineVars(eliminateUndefinedKeys({}));

  return (
    <Flex
      alignItems="center"
      className={` ${className || ""}`}
      style={{ ...assignVariables, ...(style || {}) }}
      ref={ref}
      {...nativeProps}
    >
      <div>{children}</div>
    </Flex>
  );
};

const StepperWithRef = React.forwardRef(StepperComponent);
export { StepperWithRef as Stepper };
