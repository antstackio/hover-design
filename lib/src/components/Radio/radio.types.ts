import { MutableRefObject, ReactNode } from "react";

export type TRadioSizes = "xs" | "sm" | "md" | "lg" | "xl";

export type TRadioSpacing = "xs" | "sm" | "md" | "lg" | "xl";

export type TRadioGroupTheme = [
  string,
  { radioGroupStyleSpacing: TRadioSpacing | string }
];

export type TRadioGroupProps = JSX.IntrinsicElements["div"] & {
  ref?: MutableRefObject<HTMLDivElement | null>;
  spacing?: TRadioSpacing;
  children?: ReactNode;
  orientation?: "horizontal" | "vertical";
};

export interface IRadioProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  color?: string;
  value: string;
  name: string;
  radioSize?: string;
  isDisabled?: boolean;
  baseStyles?: Partial<TRadioTheme[1]["baseStyles"]>;
  disabledStyles?: Partial<TRadioTheme[1]["disabledStyles"]>;
  selectedStyles?: Partial<TRadioTheme[1]["selectedStyles"]>;
}

export type TRadioTheme = [
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
    radioStyleSize: TRadioSizes | string;
  }
];
