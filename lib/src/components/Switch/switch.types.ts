export interface ISwitchProps {
  status: boolean;
  onChange: React.Dispatch<React.SetStateAction<boolean>>;
  isDisabled?: boolean;
  className?: string;
}