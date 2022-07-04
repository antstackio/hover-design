import React, { ForwardRefRenderFunction } from "react";
import { InputProps } from "./input.types";
import { InputStyles } from "./input.styles.css";

const Input: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { className, status, ...props },
  ref
) => {
  const inputStyle = InputStyles({ status });
  return (
    <input ref={ref} className={`${inputStyle} ${className}`} {...props} />
  );
};
const InputWithRef = React.forwardRef(Input);
export { InputWithRef as Input };
