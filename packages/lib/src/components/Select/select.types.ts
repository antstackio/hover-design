import { KeyboardEvent, MouseEvent, MutableRefObject, ReactNode } from "react";
type divType = Omit<JSX.IntrinsicElements["div"], "onChange">;
export type SelectPropsType = divType & {
  placeholder?: string;
  options: OptionsType[];
  value?: SelectValueType;
  width?: string;
  onChange?: (
    value: SelectValueType,
    event?:
      | MouseEvent<HTMLDivElement>
      | KeyboardEvent<HTMLDivElement>
      | MouseEvent<SVGElement>
  ) => void;
  isSearchable?: boolean;
  maxDropDownHeight?: string;
  minHeight?: string;
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
  isLoading?: boolean;
  loadingOptions?: {
    loadingContent?: ReactNode;
    loader?: ReactNode;
  };
  zIndex?: string;
  useDropdownPortal?: boolean;
  closeDropdownPortalOnScroll?: boolean;
  useSerialSearch?: boolean;
};

export type SelectValueType = OptionsType | OptionsType[] | null; //TODO: add in Hover

export type OptionsType = {
  label: string;
  value: string | number;
  disabled?: boolean;
  ref?: MutableRefObject<HTMLDivElement>;
};

export type SelectTheme = [
  string,
  {
    borderRadius: string;
    color: string;
    maxDropDownHeight: string;
    width: string;
    minHeight: string;
    zIndex: string;
  }
];
