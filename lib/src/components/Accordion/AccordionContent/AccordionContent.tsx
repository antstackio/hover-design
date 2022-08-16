import { accordionContentClass } from "../accordion.styles.css";

export const AccordionContent: React.FC<JSX.IntrinsicElements["div"]> = ({
  children,
  className,
  ...nativeProps
}) => {
  return (
    <div className={`${accordionContentClass} ${className}`} {...nativeProps}>
      {children}
    </div>
  );
};
