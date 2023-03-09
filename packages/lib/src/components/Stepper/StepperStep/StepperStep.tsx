import { assignInlineVars } from "@vanilla-extract/dynamic";
import React, {
  ForwardedRef,
  ForwardRefRenderFunction,
  ReactNode
} from "react";
import { Divider } from "../../Divider";
import { Flex } from "../../Flex";
import { eliminateUndefinedKeys, accessDefinedValues } from "../../../utils";
import {
  StepperBorderRadius,
  StepperChildrenClass,
  StepperDividerWrapperClass,
  StepperSizes,
  StepperStepIconClass,
  stepperThemeClass,
  stepperThemeVars
} from "../stepper.styles.css";
import { IStepperStepProps } from "../stepper.types";
import { CheckIcon } from "../../_internal/Icons";

const RenderDivider = ({
  isLastChild,
  StepperDividerWrapperStyle,
  stepState,
  dividerProps,
  orientation
}: Pick<
  IStepperStepProps,
  "isLastChild" | "stepState" | "dividerProps" | "orientation"
> & { StepperDividerWrapperStyle: string }) => {
  if (isLastChild) return <></>;
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

const RenderIcon = ({
  StepperStepIconStyle,
  _Icon,
  ref
}: {
  StepperStepIconStyle: string;
  _Icon: () => ReactNode;
  ref: ForwardedRef<HTMLDivElement>;
}) => {
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
    size,
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
      [stepperThemeVars.stepperStyleBorderRadius]: accessDefinedValues(
        borderRadius,
        StepperBorderRadius
      ),
      [stepperThemeVars.stepperStyleSize]: accessDefinedValues(
        size,
        StepperSizes
      ),
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
          <RenderIcon
            StepperStepIconStyle={StepperStepIconStyle}
            _Icon={_Icon}
            ref={ref}
          />
          <Flex
            display="flex"
            alignItems="center"
            alignSelf="stretch"
            flexDirection={labelOrientation === "vertical" ? "column" : "row"}
          >
            <div className={StepperChildrenClass}>{children}</div>
            <RenderDivider
              isLastChild={isLastChild}
              StepperDividerWrapperStyle={StepperDividerWrapperStyle}
              stepState={stepState}
              dividerProps={dividerProps}
              orientation={orientation}
            />
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
            <RenderIcon
              StepperStepIconStyle={StepperStepIconStyle}
              _Icon={_Icon}
              ref={ref}
            />
            <RenderDivider
              isLastChild={isLastChild}
              StepperDividerWrapperStyle={StepperDividerWrapperStyle}
              stepState={stepState}
              dividerProps={dividerProps}
              orientation={orientation}
            />
          </Flex>
          <div className={StepperChildrenClass}>{children}</div>
        </>
      )}
    </Flex>
  );
};

const StepperStepWithRef = React.forwardRef(StepperStepComponent);
export { StepperStepWithRef as StepperStep };
