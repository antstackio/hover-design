import React, { ForwardRefRenderFunction } from "react";
import {
  badges,
  badgeWrapper,
  badgeThemeClass,
  badgeThemeVars
} from "./badge.css";
import { assignInlineVars } from "@vanilla-extract/dynamic";
import { IBadgesProps } from "./badge.types";

const BadgeComponent: ForwardRefRenderFunction<
  HTMLSpanElement,
  IBadgesProps
> = (
  {
    color = "red",
    textColor = "#fff",
    hide = false,
    shape = "rounded-circle",
    position = "default",
    label,
    children,
    ...props
  },
  ref
) => {
  const badgeStyle = badges({
    shape,
    visible: hide ? "hide" : "show",
    position
  });

  const badgeWrapperStyle = badgeWrapper({});

  return (
    <span className={`${badgeWrapperStyle}`}>
      <small
        style={assignInlineVars({
          [badgeThemeVars.badgeStyleColor]: color,
          [badgeThemeVars.badgeStyleTextColor]: textColor
        })}
        className={`${badgeStyle}  ${badgeThemeClass}`}
      >
        {label}
      </small>
      {children}
    </span>
  );
};

const BadgeWithRef = React.forwardRef(BadgeComponent);
export { BadgeComponent as Badge };
