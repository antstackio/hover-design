import { Radio } from ".";
import type { Story } from "@ladle/react";
import { IRadioProps } from "./radio.types";
import { useRef } from "react";

export const Controls: Story<Omit<IRadioProps, "ref">> = ({
  ...nativeProps
}) => {
  return (
    <>
      <Radio {...nativeProps} />
    </>
  );
};

Controls.args = {
  disabled: false
};
Controls.argTypes = {};
