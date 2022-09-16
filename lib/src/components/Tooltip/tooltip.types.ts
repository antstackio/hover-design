import { FC } from "react";
import { positionType } from "../_internal/Types/types";

type divType = Omit<JSX.IntrinsicElements["div"], "onChange">;

export type TooltipType = divType & {
  position?: positionType;
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
