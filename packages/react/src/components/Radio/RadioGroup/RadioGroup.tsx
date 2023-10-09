import React, { ForwardRefRenderFunction } from "react";
import { TRadioGroupProps } from "../radio.types";
import { Flex } from "../../Flex";
import { radioGroupChildClass, radioGroupSpacing } from "../radio.styles.css";

const RadioGroup: ForwardRefRenderFunction<HTMLDivElement, TRadioGroupProps> = (
  {
    children,
    className,
    style,
    spacing = "xs",
    orientation = "horizontal",
    ...nativeProps
  },
  ref
) => {
  return (
    <Flex
      flexDirection={orientation === "horizontal" ? "row" : "column"}
      ref={ref}
      gap={radioGroupSpacing[spacing]}
      className={` ${orientation === "vertical" ? radioGroupChildClass : ""} ${
        className || ""
      }`}
      style={{ ...(style || {}) }}
      {...nativeProps}
    >
      {children}
    </Flex>
  );
};

const RadioGroupWithRef = React.forwardRef(RadioGroup);
export { RadioGroupWithRef as RadioGroup };
