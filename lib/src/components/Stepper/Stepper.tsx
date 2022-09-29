import { assignInlineVars } from "@vanilla-extract/dynamic";
import React, { Children, cloneElement, ForwardRefRenderFunction } from "react";
import { eliminateUndefinedKeys } from "src/utils/object-utils";
import { Flex } from "src/components/Flex";

import { TStepperProps } from "./stepper.types";
import { Divider } from "src/components/Divider";

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
    icon,
    completedIcon,
    progressIcon,
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

  const items = _children.reduce<React.ReactElement[]>((acc, item, index) => {
    const allowClick =
      typeof item.props.isStepClickable === "boolean"
        ? item.props.isStepClickable
        : typeof onStepClick === "function";

    // const assignDividerToChildren = () => {
    //   return (
    //     <div style={{ minHeight: "100px" }}>
    //       <Divider size="2px" orientation={orientation} color="green" />
    //     </div>
    //   );
    // };

    acc.push(
      cloneElement(item, {
        icon: item.props.icon || icon || index + 1,
        completedIcon: item.props.completedIcon || completedIcon,
        progressIcon: item.props.progressIcon || progressIcon,
        key: index,
        state:
          activeStep === index
            ? "stepProgress"
            : activeStep > index
            ? "stepCompleted"
            : "stepInactive",
        borderRadius: item.props.borderRadius || borderRadius,
        baseStyles: item.props.baseStyles || baseStyles,
        completedStyles: item.props.completedStyles || completedStyles,
        progressStyles: item.props.progressStyles || progressStyles,
        iconPosition: item.props.iconPosition || iconPosition,
        className: item.props.className || className,
        style: item.props.style || style,
        orientation,
        // children:
        //   index !== _children.length - 1
        //     ? [item.props.children, assignDividerToChildren()]
        //     : item.props.children,
        onClick: () =>
          allowClick && typeof onStepClick === "function" && onStepClick(index),
        size
      })
    );

    if (orientation === "horizontal" && index !== _children.length - 1) {
      acc.push(<Divider orientation={orientation} size="2px" color="green" />);
    }

    return acc;
  }, []);

  const assignVariables = assignInlineVars(eliminateUndefinedKeys({}));

  console.log("items", items);

  return (
    <Flex
      display="inline-flex"
      alignItems={orientation === "horizontal" ? "center" : "normal"}
      // alignItems="center" ==> should depend on orientation
      flexDirection={orientation === "horizontal" ? "row" : "column"}
      style={{ border: "2px solid red" }}
      className={` ${className || ""}`}
      ref={ref}
      {...nativeProps}
      data-Stepper
    >
      {items}
    </Flex>
  );
};

const StepperWithRef = React.forwardRef(StepperComponent);
export { StepperWithRef as Stepper };
