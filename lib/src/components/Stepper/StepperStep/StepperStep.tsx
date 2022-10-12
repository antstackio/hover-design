import { assignInlineVars } from "@vanilla-extract/dynamic";
import React, { ForwardRefRenderFunction } from "react";
import { Divider } from "src/components/Divider";
import { Flex } from "src/components/Flex";
import { eliminateUndefinedKeys } from "src/utils/object-utils";
import {
  StepperStepIconClass,
  stepperThemeClass,
  stepperThemeVars
} from "../stepper.styles.css";
import { TStepperStepProps } from "../stepper.types";
import { CheckIcon } from "../../_internal/Icons";

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

  const renderIcon = () => {
    if (stepState === "stepCompleted") {
      return completedIcon || <CheckIcon />;
    }
    if (stepState === "stepProgress") {
      return progressIcon || icon;
    }
    return icon;
  };

  return (
    <Flex
      display="inline-flex"
      flexGrow={1}
      alignItems={orientation === labelOrientation ? "center" : "flex-start"}
      flexDirection={labelOrientation === "vertical" ? "column" : "row"}
      style={{ ...assignVariables, ...(style || {}) }}
      className={`${stepperThemeClass} ${className || ""}`}
    >
      {labelOrientation === orientation ? (
        <>
          <Flex
            display="inline-flex"
            justifyContent="center"
            alignItems="center"
            className={StepperStepIconStyle}
            ref={ref}
            {...nativeProps}
          >
            {renderIcon()}
          </Flex>
          <div
            style={{
              flexDirection: labelOrientation === "vertical" ? "column" : "row",
              display: "flex",
              alignItems: "center",
              flexGrow: orientation === "vertical" ? 0 : 1
            }}
          >
            <div>{children}</div>
            {!isLastChild ? (
              <div
                style={{
                  flexGrow: 1,
                  margin: orientation === "vertical" ? "5px 0 0" : " 0 0 0 5px"
                }}
              >
                <Divider
                  orientation={orientation}
                  size="2px"
                  color={
                    stepState === "stepCompleted"
                      ? stepperThemeVars.completedStyles.backgroundColor
                      : stepperThemeVars.baseStyles.backgroundColor
                  }
                />
              </div>
            ) : null}
          </div>
        </>
      ) : (
        <>
          <div
            style={{
              display: "flex",
              flexDirection: labelOrientation === "vertical" ? "row" : "column",
              alignItems: "center",
              alignSelf: orientation === "vertical" ? "stretch" : "stretch"
            }}
          >
            <Flex
              display="inline-flex"
              justifyContent="center"
              alignItems="center"
              className={StepperStepIconStyle}
              ref={ref}
              {...nativeProps}
            >
              {renderIcon()}
            </Flex>
            {!isLastChild ? (
              <div
                style={{
                  flexGrow: 1,
                  margin: orientation === "vertical" ? "5px 0 0" : " 0 0 0 5px"
                }}
              >
                <Divider
                  orientation={orientation}
                  size="2px"
                  color={
                    stepState === "stepCompleted"
                      ? stepperThemeVars.completedStyles.backgroundColor
                      : stepperThemeVars.baseStyles.backgroundColor
                  }
                />
              </div>
            ) : null}
          </div>
          <div>{children}</div>
        </>
      )}
    </Flex>
  );
};

const StepperStepWithRef = React.forwardRef(StepperStepComponent);
export { StepperStepWithRef as StepperStep };
