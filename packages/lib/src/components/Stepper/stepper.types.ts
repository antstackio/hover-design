import { MutableRefObject, ReactNode } from "react";
import { DividerProps } from "../Divider";

export type TStepperSizes = "xs" | "sm" | "md" | "lg" | "xl";

export type TStepperBorderRadius = "xs" | "sm" | "md" | "lg" | "xl";

export interface IStepperProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  activeStep: number;
  children: ReactNode;
  onStepClick?: (stepIndex: number) => void;
  orientation?: "horizontal" | "vertical";
  labelOrientation?: "horizontal" | "vertical";
  size?: Partial<TStepperTheme[1]["stepperStyleSize"]>;
  borderRadius?: Partial<TStepperTheme[1]["stepperStyleBorderRadius"]>;
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
}

export interface IStepperStepProps
  extends React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLDivElement>,
      HTMLDivElement
    >,
    Omit<IStepperProps, "activeStep" | "children" | "onStepClick"> {
  children?: ReactNode;
  ref?: MutableRefObject<HTMLDivElement | null>;
  dividerProps?: DividerProps;
}

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
