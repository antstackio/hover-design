import { ReactNode } from "react";
type divType = Omit<JSX.IntrinsicElements["div"], "ref">;

export type AlertProps = divType & {
  color?: string;
  backgroundColor?: string;
  icon?: ReactNode;
  title?: ReactNode;
  variant?: "outline" | "filled" | "light";
  type?: "info" | "success" | "warning" | "danger";
  borderRadius?: string;
  closeButtonLabel?: string;
  onClose?: () => void;
  showIcon?: boolean;
  withCloseButton?: boolean;
};

export type AlertTheme = [string, { color: string; backgroundColor: string }];
