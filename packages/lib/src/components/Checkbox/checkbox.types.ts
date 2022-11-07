import { MutableRefObject, ReactNode } from "react";

export type TCheckboxSizes = "xs" | "sm" | "md" | "lg" | "xl";

export type TCheckboxBorderRadius = "xs" | "sm" | "md" | "lg" | "xl";

export type TCheckboxSpacing = "xs" | "sm" | "md" | "lg" | "xl";

export type TCheckboxGroupTheme = [
  string,
  { checkboxGroupStyleSpacing: TCheckboxSpacing | string }
];

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

export type TCheckboxTheme = [
  string,
  {
    disabledStyles: {
      borderColor: string;
      backgroundColor: string;
    };
    baseStyles: {
      borderColor: string;
      backgroundColor: string;
    };
    selectedStyles: {
      color: string;
      borderColor: string;
      backgroundColor: string;
    };
    indeterminateStyles: {
      color: string;
      borderColor: string;
      backgroundColor: string;
    };
    checkboxStyleSize: TCheckboxSizes | string;
    checkboxStyleBorderRadius: TCheckboxBorderRadius | string;
  }
];
