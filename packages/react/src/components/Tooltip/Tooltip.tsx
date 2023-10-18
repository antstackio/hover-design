import { assignInlineVars } from "@vanilla-extract/dynamic";
import { forwardRef, ForwardRefRenderFunction } from "react";
import { tooltipContainerStyles } from "@hover-design/core";
import { Popover } from "../Popover";

import { TooltipType } from "./tooltip.types";

const TooltipComponent: ForwardRefRenderFunction<
  HTMLDivElement,
  TooltipType
> = (
  {
    children,
    label,
    color = "#2C2E33",
    labelColor = "white",
    multiLine = false,
    className,
    style,
    ...props
  },
  ref
) => {
  return (
    <Popover
      ref={ref}
      style={{
        ...assignInlineVars({
          backgroundColor: color,
          color: labelColor,
          whiteSpace: multiLine ? "wrap" : "nowrap"
        }),
        ...style
      }}
      content={label.toString()}
      className={`${tooltipContainerStyles} ${className}`}
      {...props}
    >
      {children}
    </Popover>
  );
};

export const Tooltip = forwardRef(TooltipComponent);
