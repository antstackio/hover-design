import React, { ForwardRefRenderFunction } from "react";
import { InputProps } from "./input.types";

const Input: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  props,
  ref
) => {
  return <input ref={ref} {...props} />;
};
const InputWithRef = React.forwardRef(Input);
export { InputWithRef as Input };
