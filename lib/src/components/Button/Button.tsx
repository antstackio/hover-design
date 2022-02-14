import { RecipeVariants } from "@vanilla-extract/recipes";
import React, { FC } from "react";
import { button } from "./button.css";

type ButtonProps = RecipeVariants<typeof button> &
  JSX.IntrinsicElements["button"];

const Button: FC<ButtonProps> = ({
  variant = "default",
  padding = "small",
  fontSize = "small",
  margin = "small",
  children,
  className,
  ...nativeProps
}) => {
  const buttonStyle = button({
    variant,
    padding,
    fontSize,
    margin,
  });

  return (
    <button className={`${buttonStyle} ${className || ""}`} {...nativeProps}>
      {children}
    </button>
  );
};

export { Button };
