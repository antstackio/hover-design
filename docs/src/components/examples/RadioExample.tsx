import {
  Radio,
  RadioGroup,
  TRadioGroupProps,
  IRadioProps
} from "@hover-design/react";

import React, { useState } from "react";

const RadioExample = (radioProps: Omit<IRadioProps, "ref">) => {
  return <Radio {...radioProps}></Radio>;
};
const RadioGroupExample = ({
  radioGroupProps,
  radioProps
}: {
  radioGroupProps: Omit<TRadioGroupProps, "ref">;
  radioProps: Omit<IRadioProps, "ref">;
}) => {
  const [radioVal, setRadioVal] = useState("apple");

  console.log("radioGroupProps", radioGroupProps);

  return (
    <RadioGroup {...radioGroupProps}>
      <label>
        <RadioExample
          name="fruits"
          value="apple"
          checked={radioVal == "apple"}
          onChange={(e) => setRadioVal(e.target.value)}
          {...radioProps}
        ></RadioExample>
        Apple
      </label>
      <label>
        <RadioExample
          name="fruits"
          value="bannana"
          checked={radioVal == "bannana"}
          onChange={(e) => setRadioVal(e.target.value)}
          {...radioProps}
        ></RadioExample>
        Bannana
      </label>
      <label>
        <RadioExample
          name="fruits"
          value="orange"
          checked={radioVal == "orange"}
          isDisabled
          onChange={(e) => setRadioVal(e.target.value)}
          {...radioProps}
        ></RadioExample>
        Orange
      </label>
    </RadioGroup>
  );
};

export { RadioExample, RadioGroupExample };
