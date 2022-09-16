import React, { ForwardRefRenderFunction } from "react";

import "./checkbox.global.styles.css";
import { assignInlineVars } from "@vanilla-extract/dynamic";
import { eliminateUndefinedKeys } from "src/utils/object-utils";
import { ICheckboxProps } from "./checkbox.types";
import {
  checkboxBorderRadius,
  checkboxCheckMarkClass,
  checkboxSizes,
  checkboxThemeClass,
  checkboxThemeVars,
  checkboxWrapperClass
} from "./checkbox.styles.css";
import { CheckIcon, DashIcon } from "../_internal/Icons";

const Checkbox: ForwardRefRenderFunction<HTMLInputElement, ICheckboxProps> = (
  {
    className,
    style,
    value,
    name,
    checked,
    indeterminate,
    borderRadius = "sm",
    checkboxSize = "xs",
    isDisabled = false,
    baseStyles,
    disabledStyles,
    selectedStyles,
    indeterminateStyles,
    ...nativeProps
  },
  ref
) => {
  const assignVariables = assignInlineVars(
    eliminateUndefinedKeys({
      [checkboxThemeVars.checkboxStyleSize]: checkboxSizes[checkboxSize]
        ? checkboxSizes[checkboxSize]
        : undefined,
      [checkboxThemeVars.checkboxStyleBorderRadius]: checkboxBorderRadius[
        borderRadius
      ]
        ? checkboxBorderRadius[borderRadius]
        : borderRadius,
      [checkboxThemeVars.baseStyles.backgroundColor]:
        baseStyles?.backgroundColor,
      [checkboxThemeVars.baseStyles.borderColor]: baseStyles?.borderColor,
      [checkboxThemeVars.selectedStyles.backgroundColor]:
        selectedStyles?.backgroundColor,
      [checkboxThemeVars.selectedStyles.borderColor]:
        selectedStyles?.borderColor,
      [checkboxThemeVars.selectedStyles.color]: selectedStyles?.color,
      [checkboxThemeVars.disabledStyles.backgroundColor]:
        disabledStyles?.backgroundColor,
      [checkboxThemeVars.disabledStyles.borderColor]:
        disabledStyles?.borderColor,
      [checkboxThemeVars.indeterminateStyles.backgroundColor]:
        indeterminateStyles?.backgroundColor,
      [checkboxThemeVars.indeterminateStyles.borderColor]:
        indeterminateStyles?.borderColor,
      [checkboxThemeVars.indeterminateStyles.color]: indeterminateStyles?.color
    })
  );

  return (
    <div
      className={`${checkboxWrapperClass} ${checkboxThemeClass} ${
        className || ""
      }`}
      style={{ ...assignVariables, ...(style || {}) }}
    >
      <input
        ref={ref}
        {...nativeProps}
        type="checkbox"
        value={value}
        name={name}
        checked={checked}
        disabled={isDisabled}
      />
      <div
        aria-hidden="true"
        className={`${checkboxCheckMarkClass}`}
        data-checked={checked ? "true" : "false"}
        data-indeterminate={indeterminate ? "true" : "false"}
        data-disabled={isDisabled ? "true" : "false"}
      >
        {checked && !indeterminate ? <CheckIcon /> : null}
        {!checked && indeterminate ? <DashIcon /> : null}
      </div>
    </div>
  );
};

const CheckboxWithRef = React.forwardRef(Checkbox);
export { CheckboxWithRef as Checkbox };
