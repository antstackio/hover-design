export type DividerProps = JSX.IntrinsicElements["hr"] & {
  orientation?: "vertical" | "horizontal";
  type?: "dashed" | "dotted" | "solid";
  size?: string;
  label?: string | JSX.Element;
  color?: string;
  labelColor?: string;
  labelBackground?: string;
  labelPosition?: "start" | "end" | "center";
  minHeight?: string;
  minWidth?: string;
};
