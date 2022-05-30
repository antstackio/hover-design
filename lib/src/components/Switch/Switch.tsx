import { slider, switchInputStyle, switchLayout } from "./switch.css";
import { ISwitchProps } from "./switch.types";
import "./switch-global-styles.css";

export const Switch = ({
  status,
  onChange,
  isDisabled = false,
}: ISwitchProps) => {
  return (
    <label className={switchLayout}>
      <input
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
