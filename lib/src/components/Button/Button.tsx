import { FC } from "react";
import { buttonStyles } from "./button.css";
import { ButtonProps } from "./button.types";

const Button: FC<ButtonProps> = ({
  variant = "default",
  padding = "small",
  fontSize = "small",
  margin = "default",
  isBlock = false,
  children,
  ...nativeProps
}) => {
  const buttonStyle = buttonStyles({
    variant,
    padding,
    fontSize,
    margin,
    isBlock,
  });

  return (
    <button className={`${buttonStyle}`} {...nativeProps}>
      {children}
    </button>
  );
};

export { Button };
