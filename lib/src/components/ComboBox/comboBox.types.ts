import { MouseEvent } from "react";

export type ComboPropsType = JSX.IntrinsicElements["div"] & {
  placeholder?: string;
  options: OptionsType[];
  value: string | number;
  onChange?: (
    value: string | number,
    event: MouseEvent<HTMLSpanElement>
  ) => void;
  isSearchable?: boolean;
  maxDropDownHeight?: string;
  isMulti?: boolean;
  roundness?: string;
  color?: string;
  error?: boolean | string;
};

export type OptionsType = {
  label: string;
  value: string | number;
  disabled?: boolean | undefined;
};

export type ComboTheme = [
  string,
  {
    roundness: string;
    color: string;
    maxDropDownHeight: string;
  }
];
