import { assignInlineVars } from "@vanilla-extract/dynamic";
import {
  dividerContainerHorizontal,
  dividerContainerVertical,
  dividerHorizontal,
  dividerThemeVar,
  dividerVertical,
  labelHorizontal,
  labelVertical
} from "./divider.styles.css";
import { DividerProps } from "./divider.types";

export const Divider = ({
  type = "solid",
  label,
  labelPosition = "center",
  color = "grey",
  labelColor = "#000",
  labelBackground = "#fff",
  orientation = "horizontal",
  className,
  style,
  size = "1px",
  minHeight = "40px",
  minWidth = "40px",
  ...nativeProps
}: DividerProps) => {
  const dividerClass =
    orientation === "horizontal"
      ? dividerHorizontal({
          type
        })
      : dividerVertical({
          type
        });
  const labelClass =
    orientation === "horizontal"
      ? labelHorizontal({
          labelPosition
        })
      : labelVertical({
          labelPosition
        });
  const dividerStyles = assignInlineVars({
    [dividerThemeVar.dividerColor]: color,
    [dividerThemeVar.dividerSize]: size,
    [dividerThemeVar.dividerStyleMinHeight]: minHeight,
    [dividerThemeVar.dividerStyleMinWidth]: minWidth
  });

  Object.assign(dividerStyles, style);

  return (
    <div
      className={`${
        orientation === "horizontal"
          ? dividerContainerHorizontal
          : dividerContainerVertical
      }`}
    >
      <hr
        className={`${dividerClass} ${className}`}
        style={dividerStyles}
        {...nativeProps}
      />
      {label && (
        <span
          style={assignInlineVars({
            [dividerThemeVar.labelColor]: labelColor,
            [dividerThemeVar.labelBackground]:
              typeof label === "string" ? labelBackground : "transparent"
          })}
          className={`${labelClass}`} //If label has to be customized then user is supposed to add JSX element
        >
          {label}
        </span>
      )}
    </div>
  );
};
