import React, { ForwardRefRenderFunction } from "react";
import { InputProps } from "./input.types";
import {
  inputClass,
  inputThemeClass,
  inputThemeVars,
  inputWrapperClass,
  iconWrapper,
  leftIconWrapper,
  rightIconWrapper,
} from "./input.styles.css";
import { Flex } from "../Flex";
import { assignInlineVars } from "@vanilla-extract/dynamic";
import { lightColors } from "src/styles/tokens";

const Input: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  {
    className,
    style,
    statusBorder = lightColors.brand[400],
    Icon,
    iconPosition = "right",
    ...props
  },
  ref
) => {
  const paddingForIcon = {
    left: iconPosition === "left" && Icon ? "38px" : "14px",
    right: iconPosition === "right" && Icon ? "38px" : "14px",
  };

  return (
    <div className={inputWrapperClass}>
      {Icon && iconPosition === "left" && (
        <Flex
          className={`${iconWrapper} ${leftIconWrapper}`}
          alignItems={"center"}
          justifyContent="center"
        >
          {Icon}
        </Flex>
      )}
      <input
        ref={ref}
        style={{
          ...assignInlineVars({
            [inputThemeVars.borderColor]: statusBorder,
            [inputThemeVars.padding.left]: paddingForIcon.left,
            [inputThemeVars.padding.right]: paddingForIcon.right,
          }),
          ...style,
        }}
        className={`${inputClass} ${inputThemeClass} ${className}`}
        {...props}
      />
      {Icon && iconPosition === "right" && (
        <Flex
          className={`${iconWrapper} ${rightIconWrapper}`}
          alignItems={"center"}
          justifyContent="center"
        >
          {Icon}
        </Flex>
      )}
    </div>
  );
};
const InputWithRef = React.forwardRef(Input);
export { InputWithRef as Input };
