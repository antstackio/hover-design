import { Control, Path } from "react-hook-form";

export type ITextInputProps<T extends Record<string, any>> = {
  name: Path<T>;
  control?: Control<T>;
  className?: string;
  placeholder?: string;
  label?: string;
  isDisabled?: boolean;
  viewMode?: boolean;
} & JSX.IntrinsicElements["input"];
