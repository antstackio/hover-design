import React from "react";
import { Radio } from "./Radio";
import type { Story } from "@ladle/react";
import { IRadioProps } from "./radio.types";

export const RadioStory: Story<Omit<IRadioProps, "ref">> = ({
  name,
  ...nativeProps
}) => {
  return (
    <>
      <label htmlFor={name}>
        <Radio name={name} {...nativeProps} />
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
