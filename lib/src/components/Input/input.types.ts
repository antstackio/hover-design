export interface InputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  statusBorder?: string;
  iconPosition?: "left" | "right";
  Icon?: React.ReactNode;
}
export type IInputTheme = [
  string,
  {
    borderColor: string;
    padding: {
      top: string;
      right: string;
      bottom: string;
      left: string;
    };
  }
];
