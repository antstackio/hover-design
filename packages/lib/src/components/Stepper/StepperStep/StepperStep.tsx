import { assignInlineVars } from "@vanilla-extract/dynamic";
import React, { ForwardRefRenderFunction } from "react";
import { Divider } from "../../Divider";
import { Flex } from "../../Flex";
import { eliminateUndefinedKeys } from "../../../utils/object-utils";
import {
  StepperDividerWrapperClass,
  StepperStepIconClass,
  stepperThemeClass,
  stepperThemeVars
} from "../stepper.styles.css";
import { IStepperStepProps } from "../stepper.types";
import { CheckIcon } from "../../_internal/Icons";

const StepperStepComponent: ForwardRefRenderFunction<
  HTMLDivElement,
  IStepperStepProps
> = (
  {
    children,
    className,
    style,
    icon,
    completedIcon,
    progressIcon,
    baseStyles,
    completedStyles,
    progressStyles,
    dividerProps,
    borderRadius,
    orientation,
    labelOrientation,
    stepState,
    isLastChild,
    ...nativeProps
  },
  ref
) => {
  const assignVariables = assignInlineVars(
    eliminateUndefinedKeys({
      [stepperThemeVars.baseStyles.backgroundColor]:
        baseStyles?.backgroundColor,
      [stepperThemeVars.baseStyles.color]: baseStyles?.color,
      [stepperThemeVars.baseStyles.border]: baseStyles?.border,
      [stepperThemeVars.completedStyles.backgroundColor]:
        completedStyles?.backgroundColor,
      [stepperThemeVars.completedStyles.color]: completedStyles?.color,
      [stepperThemeVars.completedStyles.border]: completedStyles?.border,
      [stepperThemeVars.progressStyles.backgroundColor]:
        progressStyles?.backgroundColor,
      [stepperThemeVars.progressStyles.color]: progressStyles?.color,
      [stepperThemeVars.progressStyles.border]: progressStyles?.border
    })
  );

  const StepperStepIconStyle = StepperStepIconClass({ stepState });

  const StepperDividerWrapperStyle = StepperDividerWrapperClass({
    orientation
  });

  const _Icon = () => {
    if (stepState === "stepCompleted") {
      return completedIcon || <CheckIcon />;
    }
    if (stepState === "stepProgress") {
      return progressIcon || icon;
    }
    return icon;
  };

  const renderIcon = () => {
    return (
      <Flex
        display="inline-flex"
        alignItems="center"
        justifyContent="center"
        className={StepperStepIconStyle}
        ref={ref}
      >
        {_Icon()}
      </Flex>
    );
  };

  const renderDivider = () => {
    if (isLastChild) return null;
    return (
      <div className={StepperDividerWrapperStyle}>
        <Divider
          size="2px"
          color={
            stepState === "stepCompleted"
              ? stepperThemeVars.completedStyles.backgroundColor
              : stepperThemeVars.baseStyles.backgroundColor
          }
          {...dividerProps}
          orientation={orientation}
        />
      </div>
    );
  };

  return (
    <Flex
      display="inline-flex"
      flexDirection={labelOrientation === "vertical" ? "column" : "row"}
      alignItems={orientation === labelOrientation ? "center" : "flex-start"}
      flexGrow={1}
      style={{ ...assignVariables, ...(style || {}) }}
      className={`${stepperThemeClass} ${className || ""}`}
      {...nativeProps}
    >
      {orientation === labelOrientation ? (
        <>
          {renderIcon()}
          <Flex
            display="flex"
            alignItems="center"
            alignSelf="stretch"
            flexDirection={labelOrientation === "vertical" ? "column" : "row"}
          >
            <div>{children}</div>
            {renderDivider()}
          </Flex>
        </>
      ) : (
        <>
          <Flex
            display="flex"
            alignItems="center"
            alignSelf="stretch"
            flexDirection={labelOrientation === "vertical" ? "row" : "column"}
          >
            {renderIcon()}
            {renderDivider()}
          </Flex>
          <div>{children}</div>
        </>
      )}
    </Flex>
  );
};

const StepperStepWithRef = React.forwardRef(StepperStepComponent);
export { StepperStepWithRef as StepperStep };
