import { assignInlineVars } from "@vanilla-extract/dynamic";
import { FC, useEffect } from "react";
import { Flex } from "../Flex";
import { ArrowDown } from "../_internal/Icons/ArrowDown";
import {
  nativeSelectContainerStyles,
  nativeSelectErrorMsg,
  nativeSelectIconStyle,
  nativeSelectRecipe,
  nativeSelectVars,
} from "./nativeSelect.css";
import { NativeSelectPropsType } from "./nativeSelect.types";

export const NativeSelect: FC<NativeSelectPropsType> = ({
  height = "fit-content",
  width = "fit-content",
  borderRadius = "0",
  options,
  error = false,
  className,
  style = {},
  multiple,
  ...nativeProps
}) => {
  const nativeSelectClass = nativeSelectRecipe({
    error: error ? true : false,
    isMulti: multiple ? true : false,
  });

  return (
    <Flex flexDirection="column">
      <div
        className={nativeSelectContainerStyles}
        style={assignInlineVars({
          [nativeSelectVars.height]: height,
          [nativeSelectVars.width]: width,
          [nativeSelectVars.borderRadius]: borderRadius,
        })}
      >
        <select
          style={style}
          className={`${nativeSelectClass} ${className}`}
          multiple={multiple}
          {...nativeProps}
        >
          {options.map((option) => (
            <option disabled={option.disabled} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {!multiple && (
          <Flex className={nativeSelectIconStyle} alignItems="center">
            <ArrowDown width={18} height={18} />
          </Flex>
        )}
      </div>
      {error && typeof error !== "boolean" && (
        <span className={nativeSelectErrorMsg}>{error}</span>
      )}
    </Flex>
  );
};
