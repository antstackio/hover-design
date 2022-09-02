import { assignInlineVars } from "@vanilla-extract/dynamic";
import {
  ChangeEvent,
  FC,
  KeyboardEvent,
  MouseEvent,
  MutableRefObject,
  useEffect,
  useRef,
  useState,
} from "react";
import { Flex } from "../Flex";
import {
  comboContainerStyles,
  comboErrorMsg,
  comboIconRecipe,
  comboInputRecipe,
  comboListContainerStyle,
  comboListRecipe,
  comboPlaceholder,
  comboVars,
  inputStyles,
  inputTextContainer,
  noDataFoundStyles,
} from "./comboBox.css";
import { ComboPropsType, OptionsType } from "./comboBox.types";
import { ArrowDown, Clear } from "./components/SelectIcons";
import { useOutsideClickHandler } from "./helpers";

export const ComboBox: FC<ComboPropsType> = ({
  placeholder = "Pick one",
  options,
  value,
  roundness = "0",
  color = "#2F80ED",
  maxDropDownHeight = "auto",
  onChange = () => {},
  isSearchable = false,
  isClearable = false,
  isDisabled = false,
  isMulti = false,
  DropIcon,
  error = false,
  nothingFoundLabel = "Nothing Found!",
  onDropDownClose = () => {},
  onDropDownOpen = () => {},
}) => {
  const [comboValue, setComboValue] = useState(value);
  const [isDropped, setIsDropped] = useState(false);
  const [internalOptions, setInternalOptions] = useState(options);
  const [searchText, setSearchText] = useState("");
  const comboRef = useRef() as MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    if (value !== undefined) {
      setComboValue(value);
    }
  }, [value]);

  useEffect(() => {
    setSearchText(
      options.find((option) => option.value === comboValue)?.label || ""
    );
    setInternalOptions(options);
  }, [comboValue]);

  const internalClickHandler = (
    option: OptionsType,
    event: MouseEvent<HTMLSpanElement> | KeyboardEvent<HTMLSpanElement>
  ) => {
    if (value !== undefined) {
      isClearable && option.value === comboValue
        ? onChange("", event)
        : onChange(option.value, event);
    } else {
      isClearable && option.value === comboValue
        ? setComboValue("")
        : setComboValue(option.value);
    }
    setInternalOptions(options);
    setIsDropped(false);
    onDropDownClose();
  };

  const internalChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const text = event.target.value;
    setSearchText(text);
    const filteredOptions = options.filter((option) =>
      option.label.toLowerCase().includes(text.toLowerCase())
    );
    text === ""
      ? setInternalOptions(options)
      : setInternalOptions(filteredOptions);
  };

  const handleIconClick = (event: MouseEvent<HTMLSpanElement>) => {
    event.stopPropagation();
    if (isClearable) {
      if (value !== undefined) {
        onChange("", event);
      } else {
        setComboValue("");
      }
    } else {
      setIsDropped(!isDropped);
      isDropped ? onDropDownClose() : onDropDownOpen();
    }
  };

  const changeDrop = () => {
    setIsDropped(!isDropped);
    isDropped ? onDropDownClose() : onDropDownOpen();
  };

  const comboIconClass = comboIconRecipe({
    isDropped,
  });

  const comboInputStyles = comboInputRecipe({
    error: error ? true : false,
    disabled: isDisabled,
  });

  useOutsideClickHandler(comboRef, isDropped, () => {
    setIsDropped(false);
    onDropDownClose();
  });

  return (
    <Flex
      ref={comboRef}
      flexDirection="column"
      className={comboContainerStyles}
      style={assignInlineVars({
        [comboVars.roundness]: roundness,
        [comboVars.color]: color,
        [comboVars.maxDropDownHeight]: maxDropDownHeight,
      })}
    >
      <Flex
        role="combobox"
        aria-expanded={isDropped}
        tabIndex={0}
        alignItems="center"
        justifyContent={"space-between"}
        className={`${comboInputStyles}`}
        onClick={changeDrop}
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            changeDrop();
          }
        }}
      >
        <div className={inputTextContainer}>
          {isMulti && <div></div>} {/*pill container */}
          {isSearchable && (
            <input
              disabled={isDisabled}
              className={inputStyles}
              value={searchText}
              placeholder={placeholder}
              onChange={internalChangeHandler}
            />
          )}
          {!isMulti && !isSearchable && (
            <div>
              {options.find((option) => option.value === comboValue)?.label || (
                <div className={comboPlaceholder}>{placeholder}</div>
              )}
            </div>
          )}
        </div>

        <Flex
          alignItems="center"
          className={comboIconClass}
          onClick={handleIconClick}
        >
          {DropIcon ? !isClearable && DropIcon : !isClearable && <ArrowDown />}
          {isClearable && <Clear />}
        </Flex>
      </Flex>

      {isDropped && (
        <Flex
          flexDirection="column"
          className={`${comboListContainerStyle}`}
          role={"listbox"}
          tabIndex={-1}
        >
          {internalOptions.length !== 0 ? (
            internalOptions.map((option) => {
              const comboListClass = comboListRecipe({
                disabled: option.disabled,
                active: option.value === comboValue,
              });
              return (
                <span
                  role="option"
                  tabIndex={option.disabled ? 1 : 0}
                  aria-selected={option.value === comboValue}
                  className={comboListClass}
                  onClick={(event) =>
                    !option.disabled && internalClickHandler(option, event)
                  }
                  onKeyDown={(event) =>
                    event.key === "Enter" &&
                    !option.disabled &&
                    internalClickHandler(option, event)
                  }
                >
                  {option.label}
                </span>
              );
            })
          ) : (
            <div className={noDataFoundStyles}>{nothingFoundLabel}</div>
          )}
        </Flex>
      )}

      {error && typeof error !== "boolean" && (
        <span className={comboErrorMsg}>{error}</span>
      )}
    </Flex>
  );
};
