import { MutableRefObject, ReactNode } from "react";
import { DividerProps } from "../Divider";
import { TStepperTheme } from "@hover-design/core";

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
