export type IDialogProps = JSX.IntrinsicElements["div"] & {
  children: React.ReactNode;
  closeOnClickOutside?: boolean;
  isCloseIconVisible?: boolean;
  styles?: Partial<IDialogTheme[1]>;
  isOpen: boolean;
  onClose: () => void;
};

export type IDialogTheme = [
  string,
  {
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
    height: string;
    width: string;
  }
];
