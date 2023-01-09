import React, { ForwardRefRenderFunction } from "react";
import { IIconProps } from "./icon.type";

const Icon: ForwardRefRenderFunction<SVGSVGElement, IIconProps> = ({
  children,
  xmlns = "http://www.w3.org/2000/svg",
  style,
  ...nativeProps
}) => {
  return (
    <svg xmlns={xmlns} style={{ display: "block", ...style }} {...nativeProps}>
      {children}
    </svg>
  );
};

export { Icon };
