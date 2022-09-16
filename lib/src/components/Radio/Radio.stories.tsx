import { Radio } from "./Radio";
import type { Story } from "@ladle/react";
import { IRadioProps } from "./radio.types";

export const RadioStory: Story<Omit<IRadioProps, "ref">> = ({
  ...nativeProps
}) => {
  return (
    <>
      <label>
        <Radio {...nativeProps} />
        Radio button
      </label>
    </>
  );
};

RadioStory.args = {
  isDisabled: false,
  checked: false,
  radioSize: "xs"
};
RadioStory.argTypes = {};
