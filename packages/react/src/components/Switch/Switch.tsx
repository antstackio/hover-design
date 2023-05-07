import { slider, switchInputStyle, switchLayout } from "./switch.css";
import { ISwitchProps } from "./switch.types";

type SwitchProps = ISwitchProps & JSX.IntrinsicElements["input"];

export const Switch = ({
  status,
  onChange,
  isDisabled = false,
  className = "",
  ...nativeProps
}: SwitchProps) => {
  return (
    <label className={switchLayout}>
      <input
        {...nativeProps}
        className={`${switchInputStyle} ${className}`}
        type="checkbox"
        checked={status}
        onChange={(e) => onChange(e.target.checked)}
        disabled={isDisabled}
      />
      <span className={slider} />
    </label>
  );
};
