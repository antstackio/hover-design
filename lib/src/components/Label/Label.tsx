import React, { ForwardRefRenderFunction } from "react";
import { LabelProps } from "./label.types";

const Label: ForwardRefRenderFunction<HTMLLabelElement, LabelProps> = (
  { children, ...props },
  ref
) => {
  return (
    <label ref={ref} {...props}>
      {children}
    </label>
  );
};
const LabelWithRef = React.forwardRef(Label);
export { LabelWithRef as Label };
