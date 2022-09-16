import { FC } from "react";

type divType = Omit<JSX.IntrinsicElements["div"], "onChange">;

export type PopoverType = divType & {
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
  content: JSX.Element;
  offset?: string;
  borderRadius?: string;
  width?: string;
  withArrow?: boolean;
  arrowSize?: string;
  isOpened?: boolean;
  onChange?: (isOpened: boolean) => void;
  zIndex?: string;
  trapFocus?: boolean;
};

export type PopoverSubComponentTypes = {
  Target: FC<JSX.IntrinsicElements["div"]>;
  Content: FC<JSX.IntrinsicElements["div"]>;
};
