import React from "react";
import { IProgressProps } from "./progress.types";
import {
  progressContainerStyle,
  progressRadiusMap,
  progressSizes,
  progressStyle,
  progressThemeClass,
  progressThemeVars,
} from "./progress.styles.css";
import { assignInlineVars } from "@vanilla-extract/dynamic";
import { eliminateUndefinedKeys } from "src/utils/object-utils";
const Progress = ({
  value,
  progressBaseStyles,
  progressBaseClassName,
  radius,
  size,
  progressColor,
  className,
  style,
}: IProgressProps) => {
  const assignVariables = assignInlineVars(
    eliminateUndefinedKeys({
      [progressThemeVars.progressStyleSize]: size
        ? progressSizes[size]
          ? progressSizes[size]
          : size
        : undefined,
      [progressThemeVars.radius]: radius
        ? progressRadiusMap[radius]
          ? progressRadiusMap[radius]
          : radius
        : undefined,
      [progressThemeVars.progressColor]: progressColor,
      [progressThemeVars.progressValue]: `${value}%`,
    })
  );
  return (
    <div
      style={{ ...assignVariables, ...(progressBaseStyles || {}) }}
      className={`${progressThemeClass} ${progressContainerStyle} ${
        progressBaseClassName || ""
      }`}
    >
      <div
        role="progressbar"
        className={`${progressStyle} ${className}`}
        style={{ ...assignVariables, ...(style || {}) }}
      ></div>
    </div>
  );
};

export { Progress };
