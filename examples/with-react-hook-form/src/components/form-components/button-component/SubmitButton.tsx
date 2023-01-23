import { Button, ButtonProps } from "@hover-design/react";
import React from "react";
import { submitButtonStyles } from "./submit-button.styles.css";

const SubmitButton: React.FC<ButtonProps> = ({
  children,
  className,
  ref,
  ...props
}) => {
  return (
    <Button className={`${submitButtonStyles} ${className}`} {...props}>
      {children}
    </Button>
  );
};

export { SubmitButton };
