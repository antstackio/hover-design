import { TModalTheme } from "@hover-design/core";

export type IModalProps = JSX.IntrinsicElements["div"] & {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  size?: "sm" | "md" | "lg" | "xl" | "full";
  width?: string;
  height?: string;
  closeOnClickOutside?: boolean;
  isCloseIconVisible?: boolean;
  baseStyles?: Partial<TModalTheme[1]["base"]>;
  overlayStyles?: Partial<TModalTheme[1]["overlay"]>;
  showOverlay?: boolean;
};
