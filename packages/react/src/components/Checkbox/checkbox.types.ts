import { MutableRefObject, ReactNode } from "react";
import { TCheckboxSpacing, TCheckboxTheme } from "@hover-design/core";

export type TCheckboxGroupProps = JSX.IntrinsicElements["div"] & {
  ref?: MutableRefObject<HTMLDivElement | null>;
  spacing?: TCheckboxSpacing;
  children?: ReactNode;
  orientation?: "horizontal" | "vertical";
};

export interface ICheckboxProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  value: string;
  name: string;
  indeterminate?: boolean;
  isDisabled?: boolean;
  checkboxSize?: string;
  borderRadius?: string;
  baseStyles?: Partial<TCheckboxTheme[1]["baseStyles"]>;
  disabledStyles?: Partial<TCheckboxTheme[1]["disabledStyles"]>;
  selectedStyles?: Partial<TCheckboxTheme[1]["selectedStyles"]>;
  indeterminateStyles?: Partial<TCheckboxTheme[1]["indeterminateStyles"]>;
}
