import { FC } from "react";

type divType = Omit<JSX.IntrinsicElements["div"], "onChange">;

export type TooltipType = divType & {
  position?:
    | "bottom"
    | "left"
    | "right"
    | "top"
    | "bottom-end"
    | "bottom-start"
    | "left-end"
    | "left-start"
    | "right-end"
    | "right-start"
    | "top-end"
    | "top-start";
  label: string | number;
  offset?: string;
  borderRadius?: string;
  width?: string;
  withArrow?: boolean;
  arrowSize?: string;
  isOpened?: boolean;
  onChange?: (isOpened: boolean) => void;
  zIndex?: string;
  color?: string;
  labelColor?: string;
  multiLine?: boolean;
};
