import { assignInlineVars } from "@vanilla-extract/dynamic";
import React, { ForwardRefRenderFunction } from "react";
import { Flex } from "src/components/Flex";
import { eliminateUndefinedKeys } from "src/utils/object-utils";
import { StepperStepIconClass } from "../stepper.styles.css";
import { TStepperStepProps } from "../stepper.types";

const StepperStepComponent: ForwardRefRenderFunction<
  HTMLDivElement,
  TStepperStepProps
> = (
  {
    isStepClickable = false,
    isLoading = false,
    showIcon,
    children,
    className,
    style,
    icon,
    completedIcon,
    progressIcon,
    baseStyles,
    completedStyles,
    progressStyles,
    borderRadius,
    iconPosition,
    ...nativeProps
  },
  ref
) => {
  const assignVariables = assignInlineVars(eliminateUndefinedKeys({}));

  const _icon = icon;

  return (
    <Flex display="inline-flex" alignItems="center">
      <Flex
        display="inline-flex"
        justifyContent="center"
        alignItems="center"
        className={` ${StepperStepIconClass} ${className || ""}`}
        style={{ ...assignVariables, ...(style || {}) }}
        ref={ref}
        {...nativeProps}
      >
        {_icon}
      </Flex>
      <div data-child>{children}</div>
    </Flex>
  );
};

const StepperStepWithRef = React.forwardRef(StepperStepComponent);
export { StepperStepWithRef as StepperStep };
