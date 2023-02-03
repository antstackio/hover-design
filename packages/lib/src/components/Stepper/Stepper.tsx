import React, { Children, cloneElement, ForwardRefRenderFunction } from "react";
import { Flex } from "../Flex";

import { IStepperProps } from "./stepper.types";

const StepperComponent: ForwardRefRenderFunction<
  HTMLDivElement,
  IStepperProps
> = (
  {
    activeStep,
    onStepClick,
    size,
    borderRadius,
    orientation = "horizontal",
    labelOrientation = "horizontal",
    icon,
    completedIcon,
    progressIcon,
    baseStyles,
    completedStyles,
    progressStyles,
    dividerProps,
    children,
    className,
    style,
    ...nativeProps
  },
  ref
) => {
  const _children = Children.toArray(children) as React.ReactElement[];

  const items = _children.reduce<React.ReactElement[]>((acc, item, index) => {
    const allowClick =
      typeof item.props.isStepClickable === "boolean"
        ? item.props.isStepClickable
        : typeof onStepClick === "function";

    const getStepState = () => {
      if (activeStep === index) return "stepProgress";
      if (activeStep > index) return "stepCompleted";
      return "stepInactive";
    };

    acc.push(
      cloneElement(item, {
        icon: item.props.icon || icon || index + 1,
        completedIcon: item.props.completedIcon || completedIcon,
        progressIcon: item.props.progressIcon || progressIcon,
        key: index,
        isLastChild: _children.length === index + 1,
        stepState: getStepState(),
        borderRadius: item.props.borderRadius || borderRadius,
        baseStyles: item.props.baseStyles || baseStyles,
        completedStyles: item.props.completedStyles || completedStyles,
        progressStyles: item.props.progressStyles || progressStyles,
        dividerProps: item.props.dividerProps || dividerProps,
        className: item.props.className || className,
        style: item.props.style || style,
        size: item.props.size || size,
        orientation,
        labelOrientation,
        onClick: () =>
          allowClick && typeof onStepClick === "function" && onStepClick(index)
      })
    );
    return acc;
  }, []);

  return (
    <Flex
      display="inline-flex"
      flexDirection={orientation === "vertical" ? "column" : "row"}
      alignItems={orientation === labelOrientation ? "center" : "normal"}
      gap="5px"
      style={{ ...(style || {}) }}
      className={className || ""}
      ref={ref}
      {...nativeProps}
    >
      {items}
    </Flex>
  );
};

const StepperWithRef = React.forwardRef(StepperComponent);
export { StepperWithRef as Stepper };
