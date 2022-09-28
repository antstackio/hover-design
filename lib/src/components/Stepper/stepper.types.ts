import { MutableRefObject, ReactNode } from "react";

export type TStepperSizes = "xs" | "sm" | "md" | "lg" | "xl";

export type TStepperBorderRadius = "xs" | "sm" | "md" | "lg" | "xl";

export type TStepperProps = JSX.IntrinsicElements["div"] & {
  activeStep: number;
  children: ReactNode;
  onStepClick?: (stepIndex: number) => void;
  orientation?: "horizontal" | "vertical";
  size?: string;
  iconPosition?: "left" | "right";
  borderRadius?: string;
  baseStyles?: Partial<IStepperTheme[1]["baseStyles"]>;
  completedStyles?: Partial<IStepperTheme[1]["completedStyles"]>;
  progressStyles?: Partial<IStepperTheme[1]["progressStyles"]>;
  ref?: MutableRefObject<HTMLDivElement | null>;
  icon?: ReactNode;
  completedIcon?: ReactNode;
  progressIcon?: ReactNode;
};

export type TStepperStepProps = JSX.IntrinsicElements["div"] &
  Omit<TStepperProps, "activeStep"> & {
    isStepClickable?: boolean;
    isLoading?: boolean;
    showIcon?: boolean;
    children?: ReactNode;
    ref?: MutableRefObject<HTMLDivElement | null>;
  };

export type IStepperTheme = [
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
