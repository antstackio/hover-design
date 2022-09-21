import { positionType } from "../_internal/Types/types";

type divType = Omit<JSX.IntrinsicElements["div"], "onChange">;

export type PopoverType = divType & {
  position?: positionType;
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
