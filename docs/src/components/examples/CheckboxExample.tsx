import React, { useState } from "react";

import {
  Checkbox,
  ICheckboxProps,
  TCheckboxGroupProps,
  CheckboxGroup
} from "@hover-design/react";

const CheckboxExample = (checkboxProps: Omit<ICheckboxProps, "ref">) => {
  return <Checkbox {...checkboxProps} />;
};

const CheckboxGroupExample = ({
  checkboxGroupProps,
  checkboxProps
}: {
  checkboxGroupProps: Omit<TCheckboxGroupProps, "ref">;
  checkboxProps: Omit<ICheckboxProps, "ref">;
}) => {
  const [checkboxVal, setCheckboxVal] = useState({
    honeypot: false,
    rover: false,
    weaver: false
  });

  console.log("checkboxGroupProps", checkboxGroupProps);

  return (
    <CheckboxGroup {...checkboxGroupProps}>
      <label>
        <CheckboxExample
          name="antColony"
          value="honeypot"
          checked={checkboxVal.honeypot}
          onChange={() =>
            setCheckboxVal({
              ...checkboxVal,
              honeypot: !checkboxVal.honeypot
            })
          }
          {...checkboxProps}
        />
        Honeypot
      </label>
      <label>
        <CheckboxExample
          name="antColony"
          value="rover"
          checked={checkboxVal.rover}
          onChange={() =>
            setCheckboxVal({
              ...checkboxVal,
              rover: !checkboxVal.rover
            })
          }
          {...checkboxProps}
        />
        Rover
      </label>
      <label>
        <CheckboxExample
          name="antColony"
          value="weaver"
          isDisabled
          checked={checkboxVal.weaver}
          onChange={() =>
            setCheckboxVal({
              ...checkboxVal,
              weaver: !checkboxVal.weaver
            })
          }
          {...checkboxProps}
        />
        Weaver
      </label>
    </CheckboxGroup>
  );
};

export { CheckboxExample, CheckboxGroupExample };
