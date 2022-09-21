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
import { eliminateUndefinedKeys } from "src/utils/object-utils";
import { SvgDot } from "../_internal/Icons/SvgDot";

const Radio: ForwardRefRenderFunction<HTMLInputElement, IRadioProps> = (
  {
    className,
    style,
    value,
    name,
    checked,
    radioSize = "xs",
    isDisabled = false,
    baseStyles,
    disabledStyles,
    selectedStyles,
    ...nativeProps
  },
  ref
) => {
  const assignVariables = assignInlineVars(
    eliminateUndefinedKeys({
      [radioThemeVars.radioStyleSize]: radioSizes[radioSize]
        ? radioSizes[radioSize]
        : undefined,
      [radioThemeVars.baseStyles.backgroundColor]: baseStyles?.backgroundColor,
      [radioThemeVars.baseStyles.borderColor]: baseStyles?.borderColor,
      [radioThemeVars.selectedStyles.backgroundColor]:
        selectedStyles?.backgroundColor,
      [radioThemeVars.selectedStyles.borderColor]: selectedStyles?.borderColor,
      [radioThemeVars.selectedStyles.color]: selectedStyles?.color,
      [radioThemeVars.disabledStyles.backgroundColor]:
        disabledStyles?.backgroundColor,
      [radioThemeVars.disabledStyles.borderColor]: disabledStyles?.borderColor
    })
  );

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
      >
        {checked ? <SvgDot /> : null}
      </div>
    </div>
  );
};

const RadioWithRef = React.forwardRef(Radio);
export { RadioWithRef as Radio };
