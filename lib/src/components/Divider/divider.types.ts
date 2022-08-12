export type DividerProps = JSX.IntrinsicElements["div"] & {
  orientation?: "vertical" | "horizontal";
  type?: "dashed" | "dotted" | "solid";
  size?: string;
  label?: string | JSX.Element;
  color?: string;
  labelColor?: string;
  labelBackground?: string;
  labelPosition?: "start" | "end" | "center";
};

export type DividerTheme = [
  string,
  {
    dividerColor: string;
    labelColor: string;
    labelBackground: string;
    dividerSize: string;
  }
];
