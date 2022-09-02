import React, { ForwardRefRenderFunction } from "react";
import { IRadioProps } from "./radio.types";
import {
  radioWrapperClass,
  radioCheckMarkClass,
  radioThemeVars,
  radioSizes,
  radioThemeClass
} from "./radio.styles.css";
import "./radio.global.styles.css";
import { assignInlineVars } from "@vanilla-extract/dynamic";

const SvgDot = () => {
  return (
    <svg viewBox="0 0 6 6">
      <circle fill="currentColor" cx="3" cy="3" r="3"></circle>
    </svg>
  );
};

const Radio: ForwardRefRenderFunction<HTMLInputElement, IRadioProps> = (
  {
    className,
    style,
    value,
    name,
    checked,
    radioSize = "xs",
    isDisabled = false,
    ...nativeProps
  },
  ref
) => {
  const assignVariables = assignInlineVars({
    [radioThemeVars.radioStyleSize]: radioSizes[radioSize]
      ? radioSizes[radioSize]
      : radioSize
  });

  return (
    <div
      className={`${radioWrapperClass} ${radioThemeClass} ${className || ""}`}
      style={{ ...assignVariables, ...(style || {}) }}
    >
      <input
        ref={ref}
        {...nativeProps}
        type="radio"
        value={value}
        name={name}
        checked={checked}
        disabled={isDisabled}
      />
      <div
        aria-hidden="true"
        className={`${radioCheckMarkClass}`}
        data-checked={checked ? "true" : "false"}
        data-disabled={isDisabled ? "true" : "false"}
        data-test
      >
        {checked ? <SvgDot /> : null}
      </div>
    </div>
  );
};

const RadioWithRef = React.forwardRef(Radio);
export { RadioWithRef as Radio };
