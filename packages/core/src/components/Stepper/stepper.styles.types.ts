export type TStepperSizes = "xs" | "sm" | "md" | "lg" | "xl";

export type TStepperBorderRadius = "xs" | "sm" | "md" | "lg" | "xl";

export type TStepperTheme = [
  string,
  {
    stepperStyleSize: TStepperSizes | string;
    stepperStyleBorderRadius: TStepperBorderRadius | string;
    baseStyles: {
      color: string;
      backgroundColor: string;
      border: string;
    };
    completedStyles: {
      color: string;
      backgroundColor: string;
      border: string;
    };
    progressStyles: {
      color: string;
      backgroundColor: string;
      border: string;
    };
  }
];
