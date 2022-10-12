import { MutableRefObject, ReactNode } from "react";
import { DividerProps } from "../Divider";

export type TStepperSizes = "xs" | "sm" | "md" | "lg" | "xl";

export type TStepperBorderRadius = "xs" | "sm" | "md" | "lg" | "xl";

export type TStepperProps = JSX.IntrinsicElements["div"] & {
  activeStep: number;
  children: ReactNode;
  onStepClick?: (stepIndex: number) => void;
  orientation?: "horizontal" | "vertical";
  labelOrientation?: "horizontal" | "vertical";
  size?: string;
  borderRadius?: string;
  baseStyles?: Partial<TStepperTheme[1]["baseStyles"]>;
  completedStyles?: Partial<TStepperTheme[1]["completedStyles"]>;
  progressStyles?: Partial<TStepperTheme[1]["progressStyles"]>;
  ref?: MutableRefObject<HTMLDivElement | null>;
  icon?: ReactNode;
  completedIcon?: ReactNode;
  progressIcon?: ReactNode;
  isLastChild?: boolean;
  stepState?: "stepProgress" | "stepCompleted" | "stepInactive";
  dividerProps?: DividerProps;
};

export type TStepperStepProps = JSX.IntrinsicElements["div"] &
  Omit<TStepperProps, "activeStep" | "children"> & {
    children?: ReactNode;
    ref?: MutableRefObject<HTMLDivElement | null>;
  };

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
