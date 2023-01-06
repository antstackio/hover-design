export type NativeSelectPropsType = JSX.IntrinsicElements["select"] & {
  height?: string;
  width?: string;
  borderRadius?: string;
  options: nativeSelectOptionsType[];
  error?: boolean | string;
};

export type nativeSelectOptionsType = {
  label: string;
  value: string | number;
  disabled?: boolean;
};

export type NativeSelectThemeType = [
  string,
  {
    height: string;
    width: string;
    borderRadius: string;
  }
];
