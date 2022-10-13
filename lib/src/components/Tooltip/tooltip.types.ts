
import { PopoverType } from "../Popover/popover.types";


type divType = Omit<JSX.IntrinsicElements["div"], "ref"> &
  Omit<PopoverType, "content" | "ref">;

export type TooltipType = divType & {
  label: string | number;
  color?: string;
  labelColor?: string;
  multiLine?: boolean;
};
