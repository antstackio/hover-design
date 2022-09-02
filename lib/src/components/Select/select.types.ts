import { KeyboardEvent, MouseEvent, MutableRefObject } from "react";
type divType = Omit<JSX.IntrinsicElements["div"], "onChange">;
export type SelectPropsType = divType & {
  placeholder?: string;
  options: OptionsType[];
  value?: string | number;
  height?: string;
  width?: string;
  onChange?: (
    value: string | number,
    event?: MouseEvent<HTMLSpanElement> | KeyboardEvent<HTMLSpanElement>
  ) => void;
  isSearchable?: boolean;
  maxDropDownHeight?: string;
  isDisabled?: boolean;
  isClearable?: boolean;
  nothingFoundLabel?: string | JSX.Element;
  DropIcon?: JSX.Element;
  isMulti?: boolean;
  borderRadius?: string;
  color?: string;
  error?: boolean | string;
  onDropDownClose?: () => void;
  onDropDownOpen?: () => void;
};

export type OptionsType = {
  label: string;
  value: string | number;
  disabled?: boolean | undefined;
  ref?: MutableRefObject<HTMLSpanElement>;
};

export type SelectTheme = [
  string,
  {
    borderRadius: string;
    color: string;
    maxDropDownHeight: string;
    height: string;
    width: string;
  }
];
