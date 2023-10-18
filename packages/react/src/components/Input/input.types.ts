export interface InputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  statusBorder?: string;
  iconPosition?: "left" | "right";
  Icon?: React.ReactNode;
}
