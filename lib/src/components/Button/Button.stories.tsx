import { Button } from ".";
import type { Story } from "@ladle/react";
import { ButtonProps } from "./button.types";

export const Controls: Story<ButtonProps> = ({
  variant,
  padding,
  fontSize,
  margin,
  isBlock,
  children,
  ...nativeProps
}) => (
  <>
    <Button
      variant={variant}
      padding={padding}
      fontSize={fontSize}
      margin={margin}
      isBlock={isBlock}
      {...nativeProps}
    >
      {children}
    </Button>
  </>
);

Controls.args = {
  children: <>This is a Button</>,
  disabled: false,
  variant: "default",
};
Controls.argTypes = {
  variant: {
    options: ["default", "light", "ghost", "hallow"],
    control: { type: "radio" },
    defaultValue: "default",
  },
};
