import { Checkbox } from "./Checkbox";
import type { Story } from "@ladle/react";
import { ICheckboxProps } from "./checkbox.types";
export const CheckboxStory: Story<Omit<ICheckboxProps, "ref">> = ({
  name,
  ...nativeProps
}) => {
  return (
    <>
      <label htmlFor={name}>
        <Checkbox name={name} {...nativeProps} />
        Checkbox
      </label>
    </>
  );
};

CheckboxStory.args = {
  isDisabled: false,
  indeterminate: false,
  checked: false,
  checkboxSize: "xs",
  borderRadius: "sm"
};
CheckboxStory.argTypes = {};
