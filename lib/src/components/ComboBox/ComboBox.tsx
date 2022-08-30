import { FC, MouseEvent, useEffect, useState } from "react";
import { ComboPropsType, OptionsType } from "./comboBox.types";

export const ComboBox: FC<ComboPropsType> = ({
  placeholder = "Pick Anything",
  options,
  value,
  onChange = () => {},
  isSearchable = false,
}) => {
  const [comboValue, setComboValue] = useState(value);

  useEffect(() => {
    value && setComboValue(value);
  }, [value]);

  const internalClickHandler = (
    option: OptionsType,
    event: MouseEvent<HTMLSpanElement>
  ) => {
    onChange(option.value, event);
    !value && setComboValue(option.value);
  };

  return (
    <div>
      {isSearchable ? (
        <input /> // @raalz to make combobox
      ) : (
        <div>
          {options.find((option) => option.value === comboValue)?.label || (
            <span>{placeholder}</span>
          )}
        </div>
      )}
      <div>
        {options.map((option) => (
          <span onClick={(event) => internalClickHandler(option, event)}>
            {option.label}
          </span>
        ))}
      </div>
    </div>
  );
};
