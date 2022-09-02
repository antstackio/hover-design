import { MutableRefObject, ReactNode } from "react";

export type TRadioSizes = "xs" | "sm" | "md" | "lg" | "xl";

export type TRadioSpacing = "xs" | "sm" | "md" | "lg" | "xl";

export type TRadioGroupTheme = [
  string,
  { radioGroupStyleSpacing: TRadioSpacing | string }
];

export type TRadioGroupProps = JSX.IntrinsicElements["div"] & {
  ref?: MutableRefObject<HTMLDivElement | null>;
  Spacing?: TRadioSpacing;
  children?: ReactNode;
  orientation?: "horizontal" | "verticle";
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
