import { assignInlineVars } from "@vanilla-extract/dynamic";
import {
  ChangeEvent,
  forwardRef,
  ForwardRefRenderFunction,
  KeyboardEvent,
  MouseEvent,
  MutableRefObject,
  useEffect,
  useRef,
  useState,
} from "react";
import { useClickOutside } from "src/hooks/useClickOutside";
import { Flex } from "../Flex";
import { ArrowDown } from "../_internal/Icons/ArrowDown";
import { Clear } from "../_internal/Icons/Clear";
import { Pill } from "./Pill/Pill";
import {
  selectContainerStyles,
  selectErrorMsg,
  selectIconRecipe,
  selectInputRecipe,
  selectListContainerStyle,
  selectListRecipe,
  selectVars,
  inputTextContainer,
  noDataFoundStyles,
  selectPlaceholderRecipe,
  inputRecipe,
} from "./select.css";
import { SelectPropsType, OptionsType } from "./select.types";

const SelectComponent: ForwardRefRenderFunction<
  HTMLDivElement,
  SelectPropsType
> = (
  {
    placeholder,
    options,
    value,
    width = "100%",
    borderRadius = "0",
    color = "#2F80ED",
    maxDropDownHeight = "auto",
    onChange = () => {},
    isSearchable = false,
    isClearable = false,
    isDisabled = false,
    isMulti = false,
    DropIcon,
    error = false,
    nothingFoundLabel,
    onDropDownClose = () => {},
    onDropDownOpen = () => {},
  },
  ref
) => {
  const [selectValue, setSelectValue] = useState<
    string | number | (string | number)[] | undefined
  >(value);
  const [isDropped, setIsDropped] = useState(false);
  const [internalOptions, setInternalOptions] = useState(options);
  const [searchText, setSearchText] = useState("");
  const selectRef = useRef() as MutableRefObject<HTMLDivElement>;
  const inputRef = useRef() as MutableRefObject<HTMLInputElement>;
  const optionsListRef = useRef() as MutableRefObject<HTMLDivElement>;
  const [cursor, setCursor] = useState(0);

  useEffect(() => {
    if (value !== undefined) {
      setSelectValue(value);
    }
  }, [value]);

  useEffect(() => {
    if (isMulti) {
      typeof selectValue === "object" &&
        setInternalOptions(
          options.filter((option) => !selectValue.includes(option.value))
        );
    } else {
      setInternalOptions(options);
      setSearchText(getLabel());
    }
  }, [selectValue, isMulti]);

  useEffect(() => {
    focusElement(cursor);
  }, [cursor]);

  useEffect(() => {
    if (optionsListRef.current && inputRef.current) {
      optionsListRef.current.style.top = `${
        inputRef.current.offsetHeight - 5
      }px`;
    }
  }, [inputRef, optionsListRef, isDropped, selectValue]);

  const getLabel = (extValue?: string | number) => {
    return (
      options.find((option) => option.value === (extValue || selectValue))
        ?.label || ""
    );
  };

  const focusElement = (pointer: number) => {
    if (optionsListRef.current) {
      const optionsList = [
        ...optionsListRef.current.childNodes,
      ] as HTMLElement[];
      optionsList[pointer].focus();
    }
  };

  const internalClickHandler = (
    option: OptionsType,
    event:
      | MouseEvent<HTMLDivElement>
      | KeyboardEvent<HTMLDivElement>
      | MouseEvent<SVGSVGElement>
  ) => {
    if (isMulti) {
      setSearchText("");
      const multiValue =
        typeof selectValue === "object" ? [...selectValue] : [];
      multiValue.push(option.value);
      if (value !== undefined) {
        onChange(multiValue, event);
      } else {
        setSelectValue(multiValue);
      }
    } else {
      if (value !== undefined) {
        isClearable && option.value === selectValue
          ? onChange("", event)
          : onChange(option.value, event);
      } else {
        isClearable && option.value === selectValue
          ? setSelectValue("")
          : setSelectValue(option.value);
      }
      setIsDropped(false);
      setInternalOptions(options);
      onDropDownClose();
    }
  };

  const internalChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    event.stopPropagation();
    const text = event.target.value;
    const mainOptions =
      isMulti && typeof selectValue === "object"
        ? options.filter((option) => !selectValue.includes(option.value))
        : options;
    setIsDropped(true);
    setSearchText(text);
    const filteredOptions = mainOptions.filter((option) => {
      return option.label.toLowerCase().includes(text.toLowerCase());
    });
    text === ""
      ? setInternalOptions(mainOptions)
      : setInternalOptions(filteredOptions);
  };

  const handleIconClick = (event: MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    if (isClearable) {
      if (value !== undefined) {
        isMulti ? onChange([], event) : onChange("", event);
      } else {
        isMulti ? setSelectValue([]) : setSelectValue("");
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

  const clearPill = (
    clearValue: string | number,
    event: MouseEvent<SVGSVGElement>
  ) => {
    let tempArr = typeof selectValue === "object" ? [...selectValue] : [];
    tempArr = tempArr.filter((arr) => arr !== clearValue);
    if (value !== undefined) {
      onChange(tempArr, event);
    } else {
      setSelectValue(tempArr);
    }
    setIsDropped(true);
  };

  const checkIfAllValuesSelected = () => {
    return (
      typeof selectValue === "object" &&
      selectValue.length === options.length &&
      options.every((el) => selectValue.includes(el.value))
    );
  };

  const handleInputKeyChange = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowDown") {
      setIsDropped(true);
      setTimeout(() => focusFirstOption());
    }
    if (event.key === "Enter" || event.code === "Space") {
      event.preventDefault();
      changeDrop();
    }
  };

  const focusNextOption = () => {
    let skipStep = 1;
    while (
      cursor + skipStep < internalOptions.length &&
      internalOptions[cursor + skipStep].disabled
    ) {
      skipStep++;
    }
    cursor + skipStep < internalOptions.length && setCursor(cursor + skipStep);
  };

  const focusPrevOption = () => {
    let skipStep = 1;
    while (
      cursor - skipStep >= 0 &&
      internalOptions[cursor - skipStep].disabled
    ) {
      skipStep++;
    }
    cursor - skipStep >= 0 && setCursor(cursor - skipStep);
  };

  const focusFirstOption = () => {
    let skipStep = 0;
    while (
      skipStep < internalOptions.length &&
      internalOptions[skipStep].disabled
    ) {
      skipStep++;
    }
    if (skipStep < internalOptions.length) {
      setCursor(skipStep);
      focusElement(skipStep);
    }
  };

  const focusLastOption = () => {
    let skipStep = 1;
    while (
      internalOptions.length - skipStep >= 0 &&
      internalOptions[internalOptions.length - skipStep].disabled
    ) {
      skipStep++;
    }
    internalOptions.length - skipStep >= 0 &&
      setCursor(internalOptions.length - skipStep);
  };

  const handleOptionKeyChange = (
    event: KeyboardEvent<HTMLDivElement>,
    option: OptionsType
  ) => {
    switch (event.key) {
      case "ArrowDown":
        focusNextOption();
        break;
      case "ArrowUp":
        focusPrevOption();
        break;
      case "Home":
        focusFirstOption();
        break;
      case "End":
        focusLastOption();
        break;
      default:
        break;
    }

    event.key !== "Tab" && event.preventDefault();
    (event.key === "Enter" || event.code === "Space") &&
      !option.disabled &&
      internalClickHandler(option, event);
  };
  const selectIconClass = selectIconRecipe({
    isDropped,
  });

  const selectInputStyles = selectInputRecipe({
    error: error ? true : false,
    disabled: isDisabled,
  });

  const selectPlaceholder = selectPlaceholderRecipe({
    error: error ? true : false,
  });
  const inputStyles = inputRecipe({
    error: error ? true : false,
    isMulti,
  });

  useClickOutside(
    selectRef,
    () => {
      isDropped && setIsDropped(false);
      onDropDownClose();
    },
    isDropped
  );

  return (
    <Flex
      ref={(node) => {
        selectRef.current = node as HTMLDivElement;
        if (typeof ref === "function") {
          ref(node);
        } else if (ref) {
          ref.current = node;
        }
      }}
      flexDirection="column"
      className={selectContainerStyles}
      style={assignInlineVars({
        [selectVars.borderRadius]: borderRadius,
        [selectVars.color]: color,
        [selectVars.width]: width,
        [selectVars.maxDropDownHeight]: maxDropDownHeight,
      })}
    >
      <Flex
        role="combobox"
        ref={inputRef}
        aria-expanded={isDropped}
        tabIndex={0}
        alignItems="center"
        justifyContent={"space-between"}
        className={`${selectInputStyles}`}
        onClick={changeDrop}
        onKeyDown={handleInputKeyChange}
      >
        <Flex
          className={inputTextContainer}
          gap="4px"
          flexWrap="wrap"
          alignItems="center"
        >
          {isMulti &&
            (typeof selectValue === "object" && selectValue.length !== 0
              ? selectValue?.map((arr) => {
                  return (
                    <Pill
                      value={getLabel(arr)}
                      clearValue={(event) => clearPill(arr, event)}
                    />
                  );
                })
              : !isSearchable && (
                  <div className={selectPlaceholder}>
                    {placeholder || "Pick anything!"}
                  </div>
                ))}
          {isSearchable && (
            <input
              disabled={isDisabled}
              className={inputStyles}
              value={searchText}
              placeholder={placeholder || "Search here"}
              onChange={internalChangeHandler}
              onKeyDown={(event) => event.stopPropagation()}
            />
          )}
          {!isMulti &&
            !isSearchable &&
            (getLabel() || (
              <div className={selectPlaceholder}>
                {placeholder || "Pick one"}
              </div>
            ))}
        </Flex>

        <Flex
          alignItems="center"
          className={selectIconClass}
          onClick={handleIconClick}
        >
          {DropIcon
            ? !isClearable && DropIcon
            : !isClearable && <ArrowDown width={18} height={18} />}
          {isClearable && <Clear width={18} height={18} />}
        </Flex>
      </Flex>

      {isDropped && (
        <Flex
          ref={optionsListRef}
          flexDirection="column"
          className={`${selectListContainerStyle}`}
          role={"listbox"}
          tabIndex={-1}
        >
          {internalOptions.length !== 0 ? (
            internalOptions.map((option, ind) => {
              const selectListClass = selectListRecipe({
                disabled: option.disabled,
                active: !isMulti && option.value === selectValue,
              });
              return (
                <div
                  key={ind}
                  ref={option.ref}
                  role="option"
                  tabIndex={-1}
                  aria-selected={option.value === selectValue}
                  className={selectListClass}
                  onClick={(event) =>
                    !option.disabled && internalClickHandler(option, event)
                  }
                  onKeyDown={(event) => handleOptionKeyChange(event, option)}
                >
                  <span>{option.label}</span>
                </div>
              );
            })
          ) : (
            <div className={noDataFoundStyles}>
              {checkIfAllValuesSelected()
                ? "No more Data!"
                : nothingFoundLabel || "Nothing Found!"}
            </div>
          )}
        </Flex>
      )}

      {error && typeof error !== "boolean" && (
        <span className={selectErrorMsg}>{error}</span>
      )}
    </Flex>
  );
};

export const Select = forwardRef(SelectComponent);
