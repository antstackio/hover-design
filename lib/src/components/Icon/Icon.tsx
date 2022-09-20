import React, { ForwardRefRenderFunction } from "react";
import { IIconProps } from "./icon.type";

const Icon: ForwardRefRenderFunction<SVGSVGElement, IIconProps> = ({
  children,
  xmlns = "http://www.w3.org/2000/svg",

  ...nativeProps
}) => {
  return (
    <svg xmlns={xmlns} {...nativeProps}>
      {children}
    </svg>
  );
};

export { Icon };
