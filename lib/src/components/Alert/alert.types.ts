import { ReactNode } from "react";

export type AlertProps = JSX.IntrinsicElements["div"] & {
  color?: string;
  backgroundColor?: string;
  icon?: ReactNode;
  title?: ReactNode;
  variant?: "outline" | "filled" | "light";
  type?: "info" | "success" | "warning" | "danger";
  borderRadius?: string;
  closeButtonLabel?: string;
  onClose?: () => void;
  withCloseButton?: boolean;
};

export type AlertTheme = [string, { color: string; backgroundColor: string }];
