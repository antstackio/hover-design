import React, { ForwardRefRenderFunction } from "react";
import { labelClass } from "@hover-design/core";
import { ILabelProps } from "./label.types";

const Label: ForwardRefRenderFunction<HTMLLabelElement, ILabelProps> = (
  { children, ...props },
  ref
) => {
  return (
    <label className={labelClass} ref={ref} {...props}>
      {children}
    </label>
  );
};
const LabelWithRef = React.forwardRef(Label);
export { LabelWithRef as Label };
