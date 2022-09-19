import { forwardRef, ForwardRefRenderFunction } from "react";
import { buttonStyles } from "./button.styles.css";
import { ButtonProps } from "./button.types";

const Button: ForwardRefRenderFunction<HTMLButtonElement, ButtonProps> = (
  {
    variant = "default",
    padding = "small",
    fontSize = "small",
    margin = "default",
    isBlock = false,
    children,
    className,
    ...nativeProps
  },
  ref
) => {
  const buttonStyle = buttonStyles({
    variant,
    padding,
    fontSize,
    margin,
    isBlock,
  });

  return (
    <button
      ref={ref}
      className={`${buttonStyle} ${className || ""}`}
      {...nativeProps}
    >
      {children}
    </button>
  );
};

const ButtonWithRef = forwardRef(Button);

export { ButtonWithRef as Button };
