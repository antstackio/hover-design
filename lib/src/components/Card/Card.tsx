import { FC } from "react";
import { RecipeVariants } from "@vanilla-extract/recipes";
import { card } from "./card.css";

type CardProps = RecipeVariants<typeof card> & JSX.IntrinsicElements["div"];

const Card: FC<CardProps> = ({
  children,
  padding = "small",
  fontSize = "small",
  margin = "default",
  variant = "plain",
  className,
  ...nativeDivProps
}) => {
  const cardStyle = card({
    variant,
    padding,
    fontSize,
    margin,
  });

  return (
    <div className={`${cardStyle} ${className || ""}`} {...nativeDivProps}>
      {children}
    </div>
  );
};

export { Card };
