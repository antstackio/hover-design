import { assignInlineVars } from "@vanilla-extract/dynamic";
import {
  dividerContainerHorizontal,
  dividerContainerVertical,
  dividerHorizontal,
  dividerThemeVar,
  dividerVertical,
  labelHorizontal,
  labelVertical,
} from "./divider.css";
import { DividerProps } from "./divider.types";

export const Divider = ({
  type = "solid",
  label,
  labelPosition = "center",
  color = "#000",
  labelColor = "#000",
  labelBackground = "#fff",
  orientation = "horizontal",
  size = "1px",
  ...nativeProps
}: DividerProps) => {
  const dividerClass =
    orientation === "horizontal"
      ? dividerHorizontal({
          type,
        })
      : dividerVertical({
          type,
        });
  const labelClass =
    orientation === "horizontal"
      ? labelHorizontal({
          labelPosition,
        })
      : labelVertical({
          labelPosition,
        });

  return (
    <div
      className={`divider-container ${
        orientation === "horizontal"
          ? dividerContainerHorizontal
          : ` ${dividerContainerVertical}`
      }`}
    >
      <div
        className={`divider ${dividerClass} `}
        style={assignInlineVars({
          [dividerThemeVar.dividerColor]: color,
          [dividerThemeVar.dividerSize]: size,
        })}
        {...nativeProps}
      ></div>
      {label && (
        <span
          style={assignInlineVars({
            [dividerThemeVar.labelColor]: labelColor,
            [dividerThemeVar.labelBackground]: labelBackground,
            [dividerThemeVar.dividerSize]: size,
          })}
          className={`label ${labelClass} `}
        >
          {label}
        </span>
      )}
    </div>
  );
};
