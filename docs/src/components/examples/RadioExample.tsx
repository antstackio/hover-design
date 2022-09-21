import React, { useState } from "react";

import {
  Radio,
  RadioGroup,
  TRadioGroupProps,
  IRadioProps
} from "@hover-design/react";

const RadioExample = (radioProps: Omit<IRadioProps, "ref">) => {
  return <Radio {...radioProps} />;
};
const RadioGroupExample = ({
  radioGroupProps,
  radioProps
}: {
  radioGroupProps: Omit<TRadioGroupProps, "ref">;
  radioProps: Omit<IRadioProps, "ref">;
}) => {
  const [radioVal, setRadioVal] = useState("honeypot");

  return (
    <RadioGroup {...radioGroupProps}>
      <label>
        <RadioExample
          name="antColony"
          value="honeypot"
          checked={radioVal == "honeypot"}
          onChange={(e) => setRadioVal(e.target.value)}
          {...radioProps}
        />
        Honeypot
      </label>
      <label>
        <RadioExample
          name="antColony"
          value="rover"
          checked={radioVal == "rover"}
          onChange={(e) => setRadioVal(e.target.value)}
          {...radioProps}
        />
        Rover
      </label>
      <label>
        <RadioExample
          name="antColony"
          value="weaver"
          checked={radioVal == "weaver"}
          isDisabled
          onChange={(e) => setRadioVal(e.target.value)}
          {...radioProps}
        />
        Weaver
      </label>
    </RadioGroup>
  );
};

export { RadioExample, RadioGroupExample };
