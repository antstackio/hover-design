import { assignInlineVars } from "@vanilla-extract/dynamic";
import { FC } from "react";
import { Flex } from "../Flex";
import {
  selectContainerStyles,
  selectErrorMsg,
  selectIconStyle,
  selectRecipe,
  selectVars,
} from "./nativeSelect.css";
import { NativeSelectPropsType, OptionsType } from "./nativeSelect.types";

export const NativeSelect: FC<NativeSelectPropsType> = ({
  height = "fit-content",
  width = "fit-content",
  roundness = "0",
  options,
  error = false,
  className,
  style,
  ...nativeProps
}) => {
  const selectClass = selectRecipe({
    error: error ? true : false,
  });

  return (
    <Flex flexDirection="column">
      <div
        className={selectContainerStyles}
        style={assignInlineVars({
          [selectVars.height]: height,
          [selectVars.width]: width,
          [selectVars.roundness]: roundness,
        })}
      >
        <select
          style={style}
          className={`${selectClass} ${className}`}
          {...nativeProps}
        >
          {options.map((option) => (
            <option disabled={option.disabled} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <Flex className={selectIconStyle} alignItems="center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={18}
            height={18}
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <line x1={12} y1={5} x2={12} y2={19}></line>
            <line x1={18} y1={13} x2={12} y2={19}></line>
            <line x1={6} y1={13} x2={12} y2={19}></line>
          </svg>
        </Flex>
      </div>
      {error && typeof error !== "boolean" && (
        <span className={selectErrorMsg}>{error}</span>
      )}
    </Flex>
  );
};
