import { RecipeVariants } from "@vanilla-extract/recipes";
import { FC, RefObject } from "react";
import { buttonStyles } from "./button.css";

type ButtonProps = RecipeVariants<typeof buttonStyles> &
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
