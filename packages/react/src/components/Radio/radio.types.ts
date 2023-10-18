import { MutableRefObject, ReactNode } from "react";

import { TRadioSpacing, TRadioTheme } from "@hover-design/core";

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
  value?: string;
  name?: string;
  radioSize?: Partial<TRadioTheme[1]["radioStyleSize"]>;
  isDisabled?: boolean;
  baseStyles?: Partial<TRadioTheme[1]["baseStyles"]>;
  disabledStyles?: Partial<TRadioTheme[1]["disabledStyles"]>;
  selectedStyles?: Partial<TRadioTheme[1]["selectedStyles"]>;
}
