export interface IModalProps {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  size?: "sm" | "md" | "lg" | "xl" | "full";
  width?: string;
  height?: string;
  closeOnClickOutside?: boolean;
  isCloseIconVisible?: boolean;
  baseStyles?: Partial<IModalTheme[1]["base"]>;
  overlayStyles?: Partial<IModalTheme[1]["overlay"]>;
  showOverlay?: boolean;
}

export type IModalTheme = [
  string,
  {
    base: {
      backgroundColor: string;
      borderRadius: string;
      boxShadow: string;
      position: string;
      transform: string;
      top: string;
      bottom: string;
      left: string;
      right: string;
      padding: string;
      zIndex: string;
      width: string;
      height: string;
    };
    overlay: {
      backgroundColor: string;
      zIndex: string;
      position: string;
      top: string;
      left: string;
      right: string;
      bottom: string;
      opacity: string;
      filter: string;
    };
  }
];
