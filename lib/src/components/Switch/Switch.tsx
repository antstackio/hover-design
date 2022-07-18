import { slider, switchInputStyle, switchLayout } from "./switch.css";
import { ISwitchProps } from "./switch.types";
import "./switch-global-styles.css";

type SwitchProps = ISwitchProps & JSX.IntrinsicElements["input"];

export const Switch = ({
  status,
  onChange,
  isDisabled = false,
  ...nativeProps
}: SwitchProps) => {
  return (
    <label className={switchLayout}>
      <input
        {...nativeProps}
        className={switchInputStyle}
        type="checkbox"
        checked={status}
        onChange={(e) => onChange(e.target.checked)}
        disabled={isDisabled}
      />
      <span className={slider} />
    </label>
  );
};
