import { assignInlineVars } from "@vanilla-extract/dynamic";
import React, { ForwardRefRenderFunction } from "react";
import { Divider } from "src/components/Divider";
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
    orientation,
    ...nativeProps
  },
  ref
) => {
  const assignVariables = assignInlineVars(eliminateUndefinedKeys({}));

  const _icon = icon;

  return (
    <Flex display="inline-flex">
      <div
        data-wrapper
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}
      >
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
        {orientation === "vertical" && (
          <Divider orientation={orientation} size="2px" color="green" />
        )}
      </div>
      <div data-child>{children}</div>
    </Flex>
  );
};

const StepperStepWithRef = React.forwardRef(StepperStepComponent);
export { StepperStepWithRef as StepperStep };
