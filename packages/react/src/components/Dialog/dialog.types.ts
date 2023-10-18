import { TDialogTheme } from "@hover-design/core";

export type IDialogProps = JSX.IntrinsicElements["div"] & {
  children: React.ReactNode;
  closeOnClickOutside?: boolean;
  isCloseIconVisible?: boolean;
  styles?: Partial<TDialogTheme[1]>;
  isOpen: boolean;
  onClose: () => void;
};
