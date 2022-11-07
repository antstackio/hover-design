import { Checkbox } from "./Checkbox";
import type { Story } from "@ladle/react";
import { ICheckboxProps } from "./checkbox.types";

export const CheckboxStory: Story<Omit<ICheckboxProps, "ref">> = ({
  ...nativeProps
}) => {
  return (
    <>
      <label>
        <Checkbox {...nativeProps} />
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
