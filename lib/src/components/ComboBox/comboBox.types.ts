import { MouseEvent } from "react";

export type ComboPropsType = {
  placeholder?: string;
  options: OptionsType[];
  value: string | number;
  onChange?: (
    value: string | number,
    event: MouseEvent<HTMLSpanElement>
  ) => void;
  isSearchable?: boolean;
};

export type OptionsType = {
  label: string;
  value: string | number;
};
