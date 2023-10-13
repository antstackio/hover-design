import React, { ForwardRefRenderFunction } from "react";
import { unstyledButtonClass } from "@hover-design/core";
import { TUnstyledButtonProps } from "./UnstyledButton.types";

const UnstyledButtonComponent: ForwardRefRenderFunction<
  HTMLButtonElement,
  TUnstyledButtonProps
> = ({ children, className, ...nativeProps }, ref) => {
  return (
    <button
      className={`${unstyledButtonClass} ${className || ""}`}
      ref={ref}
      {...nativeProps}
    >
      {children}
    </button>
  );
};

const UnstyledButtonWithRef = React.forwardRef(UnstyledButtonComponent);
export { UnstyledButtonWithRef as UnstyledButton };
