import { ReactNode } from "react";

export interface IDrawerProps {
  isOpen: boolean;
  children: ReactNode;
  onClose: () => void;
  position?: "left" | "right" | "top" | "bottom";
  className?: string;
}
