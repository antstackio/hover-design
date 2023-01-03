import { Button } from ".";
import type { Story } from "@ladle/react";
import { ButtonProps } from "./button.types";

export const buttonControls: Story<ButtonProps> = ({
  variant,
  padding,
  fontSize,
  margin,
  isBlock,
  children,
}) => (
  <>
    <Button
      variant={variant}
      padding={padding}
      fontSize={fontSize}
      margin={margin}
      isBlock={isBlock}
    >
      {children}
    </Button>
  </>
);

buttonControls.args = {
  children: <>This is a Button</>,
  disabled: false,
  variant: "default",
};
buttonControls.argTypes = {
  variant: {
    options: ["default", "light", "ghost", "hallow"],
    control: { type: "radio" },
    defaultValue: "default",
  },
};
