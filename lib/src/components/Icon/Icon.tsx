import React, { ForwardRefRenderFunction } from "react";
import { IIconProps } from "./icon.type";

const Icon: ForwardRefRenderFunction<SVGSVGElement, IIconProps> = ({
  children,
  xmlns = "http://www.w3.org/2000/svg",
  width = "24",
  height = "24",
  viewBox = "0 0 24 24",
  strokeWidth = "2",
  stroke = "currentColor",
  fill = "none",
  strokeLinecap = "round",
  strokeLinejoin = "round",
  ...nativeProps
}) => {
  return (
    <svg
      xmlns={xmlns}
      width={width}
      height={height}
      viewBox={viewBox}
      strokeWidth={strokeWidth}
      stroke={stroke}
      fill={fill}
      strokeLinecap={strokeLinecap}
      strokeLinejoin={strokeLinejoin}
      {...nativeProps}
    >
      {children}
    </svg>
  );
};

export { Icon };
