export type NativeSelectPropsType = JSX.IntrinsicElements["select"] & {
  height?: string;
  width?: string;
  roundness?: string;
  options: OptionsType[];
  error?: boolean | string;
};

export type OptionsType = {
  label: string;
  value: string | number;
  disabled?: boolean | undefined;
};

export type SelectThemeType = [
  string,
  {
    height: string;
    width: string;
    roundness: string;
  }
];
