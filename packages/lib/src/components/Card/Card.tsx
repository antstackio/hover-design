import { forwardRef, ForwardRefRenderFunction } from "react";
import { cardStyles } from "./card.styles.css";
import { CardProps } from "./card.types";

const Card: ForwardRefRenderFunction<HTMLDivElement, CardProps> = (
  {
    children,
    padding = "small",
    fontSize = "small",
    margin = "default",
    variant = "plain",
    className,
    ...nativeDivProps
  },
  ref
) => {
  const cardStyle = cardStyles({
    variant,
    padding,
    fontSize,
    margin,
  });

  return (
    <div
      ref={ref}
      className={`${cardStyle} ${className || ""}`}
      {...nativeDivProps}
    >
      {children}
    </div>
  );
};
const CardWithRef = forwardRef(Card);
export { CardWithRef as Card };
