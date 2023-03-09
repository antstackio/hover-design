import {
  IStepperProps,
  IStepperStepProps,
  Stepper,
  StepperStep
} from "@hover-design/react";

import React, { useState } from "react";

const StepperExample = ({
  StepperProps,
  StepperStepProps
}: {
  StepperProps?: Omit<IStepperProps, "ref">;
  StepperStepProps?: Omit<IStepperStepProps, "ref">;
}) => {
  const [active, setActive] = useState(1);

  return (
    <div>
      <Stepper activeStep={active} onStepClick={setActive} {...StepperProps}>
        <StepperStep {...StepperStepProps}>Step 1</StepperStep>
        <StepperStep {...StepperStepProps}>Step 2</StepperStep>
        <StepperStep {...StepperStepProps}>Step 3</StepperStep>
      </Stepper>
    </div>
  );
};

export { StepperExample };
