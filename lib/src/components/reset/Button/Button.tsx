import { RecipeVariants } from "@vanilla-extract/recipes";
import { FC, RefObject } from "react";
import { button } from "./button.css";

type ButtonProps = RecipeVariants<typeof button> &
  JSX.IntrinsicElements["button"];

const Button: FC<ButtonProps> = ({
  variant = "default",
  padding = "small",
  fontSize = "small",
  margin = "default",
  isBlock = false,
  children,
  ...nativeProps
}) => {
  const buttonStyle = button({
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
