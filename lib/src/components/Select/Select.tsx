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
  loadingContentContainer,
} from "./select.css";
import { SelectPropsType, OptionsType } from "./select.types";
import "./select.global.styles.css";
import { Loader } from "../Loader";
import { Portal } from "../Portal";

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
    maxDropDownHeight = "200px",
    minHeight = "40px",
    onChange = () => {},
    isSearchable = false,
    isClearable = false,
    isDisabled = false,
    isMulti = false,
    DropIcon,
    error = false,
    nothingFoundLabel,
    className,
    style,
    onDropDownClose = () => {},
    onDropDownOpen = () => {},
    isLoading = false,
    loadingOptions,
  },
  ref
) => {
  const [selectValue, setSelectValue] = useState<
    OptionsType | OptionsType[] | null
  >(null);
  const [isDropped, setIsDropped] = useState(false);
  const [internalOptions, setInternalOptions] = useState(options);
  const [searchText, setSearchText] = useState("");
  const selectRef = useRef() as MutableRefObject<HTMLDivElement>;
  const inputRef = useRef() as MutableRefObject<HTMLInputElement>;
  const optionsListRef = useRef() as MutableRefObject<HTMLDivElement>;
  const [cursor, setCursor] = useState(-1);

  useEffect(() => {
    if (value !== undefined) {
      setSelectValue(value);
    }
  }, [value]);

  useEffect(() => {
    if (isMulti) {
      Array.isArray(selectValue)
        ? setInternalOptions(
            options?.filter(
              (option) =>
                !selectValue.find((data) => data.value === option.value)
            )
          )
        : setInternalOptions(options);
    } else {
      setInternalOptions(options);
      selectValue
        ? !Array.isArray(selectValue) && setSearchText(selectValue?.label)
        : setSearchText("");
    }
  }, [selectValue, isMulti, options]);

  useEffect(() => {
    focusElement(cursor);
  }, [cursor]);

  useEffect(() => {
    if (Array.isArray(internalOptions)) {
      let skipCount = cursor;
      while (internalOptions[skipCount]?.disabled) {
        skipCount++;
      }
      skipCount < internalOptions.length &&
        !internalOptions[skipCount]?.disabled &&
        setCursor(skipCount);
      internalOptions.every((option) => option.disabled) && blurAllElements();
    }
  }, [internalOptions]);

  useEffect(() => {
    applyDropDownPosition();
  }, [inputRef, isDropped, selectValue]);

  useEffect(() => {
    if (!isDropped) {
      setCursor(-1);
    }
  }, [isDropped]);

  const applyDropDownPosition = () => {
    const selectPortal = document.getElementById("hover-select-portal");
    if (selectPortal && inputRef.current && window) {
      const scrollLeft =
        window.pageXOffset || document.documentElement.scrollLeft;
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const inputWidth = `${inputRef.current.getBoundingClientRect().width}px`;
      const inputHeight = inputRef.current.getBoundingClientRect().height;
      const inputPosition = {
        top: `${
          scrollTop +
          inputHeight +
          inputRef.current.getBoundingClientRect().top -
          3
        }px`,
        left: `${scrollLeft + inputRef.current.getBoundingClientRect().left}px`,
      };
      Object.assign(selectPortal.style, {
        width: inputWidth,
        top: inputPosition.top,
        left: inputPosition.left,
      });
    }
  };
  useEffect(() => {
    window.addEventListener("resize", applyDropDownPosition);
    return () => window.removeEventListener("resize", applyDropDownPosition);
  });

  useClickOutside(
    optionsListRef,
    () => {
      document.body.addEventListener("click", (event) => {
        if (!inputRef.current.contains(event.target as Node)) {
          isDropped && setIsDropped(false);
          onDropDownClose();
        }
      });
    },
    isDropped
  );

  const focusElement = (pointer: number) => {
    const optionsList = getOptionsRefAsArray();
    optionsList?.map((option, index) => {
      if (index === pointer) {
        option.setAttribute("data-hover", "true");
      } else option.setAttribute("data-hover", "false");
    });
  };

  const blurAllElements = () => {
    const optionsList = getOptionsRefAsArray();
    optionsList?.map((option) => option.setAttribute("data-hover", "false"));
  };

  const getOptionsRefAsArray = () => {
    if (optionsListRef.current) {
      const optionsList = [
        ...optionsListRef.current.childNodes,
      ] as HTMLElement[];
      return optionsList;
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
      const multiValue = Array.isArray(selectValue) ? [...selectValue] : [];
      multiValue.push(option);
      onChange(multiValue, event);
      setSelectValue(multiValue);
    } else {
      if (
        isClearable &&
        !Array.isArray(selectValue) &&
        option.value === selectValue?.value
      ) {
        setSelectValue(null);
        onChange(null, event);
      } else {
        setSelectValue(option);
        onChange(option, event);
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
      isMulti && Array.isArray(selectValue)
        ? options?.filter(
            (option) => !selectValue.find((data) => data.value === option.value)
          )
        : options;
    setIsDropped(true);
    setSearchText(text);
    const filteredOptions = mainOptions?.filter((option) => {
      return option.label
        .trim()
        .toLowerCase()
        .includes(text.trim().toLowerCase());
    });
    text === ""
      ? setInternalOptions(mainOptions)
      : setInternalOptions(filteredOptions);
  };

  const handleIconClick = (event: MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    if (isClearable) {
      if (isMulti) {
        onChange([], event);
        setSelectValue([]);
      } else {
        onChange(null, event);
        setSelectValue(null);
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
    event: MouseEvent<SVGSVGElement> | KeyboardEvent<HTMLDivElement>
  ) => {
    let tempArr = Array.isArray(selectValue) ? [...selectValue] : [];
    tempArr = tempArr.filter((arr) => arr.value !== clearValue);
    onChange(tempArr, event);
    setSelectValue(tempArr);
    setIsDropped(true);
  };

  const checkIfAllValuesSelected = () => {
    return (
      Array.isArray(selectValue) &&
      Array.isArray(options) &&
      selectValue.length === options.length &&
      options.every((el) => selectValue.find((data) => data.value === el.value))
    );
  };

  const handleInputKeyChange = (event: KeyboardEvent<HTMLDivElement>) => {
    const optionsList = getOptionsRefAsArray();
    switch (event.key) {
      case "ArrowDown":
        event.preventDefault();
        !isDropped && setIsDropped(true);
        setTimeout(() => {
          if (cursor === -1) {
            focusFirstOption();
          } else focusNextOption();
        });
        break;
      case "ArrowUp":
        event.preventDefault();
        focusPrevOption();
        break;
      case "Home":
        event.preventDefault();
        focusFirstOption();
        break;
      case "End":
        event.preventDefault();
        focusLastOption();
        break;
      default:
        break;
    }

    if (
      isMulti &&
      event.code === "Backspace" &&
      searchText === "" &&
      Array.isArray(selectValue)
    ) {
      let lastValue = selectValue[selectValue.length - 1];
      clearPill(lastValue?.value, event);
    }

    if (event.key === "Enter" || event.code === "Space") {
      if (event.currentTarget.tagName !== "INPUT") {
        event.preventDefault();
      } else {
        event.code !== "Space" && event.preventDefault();
      }
      if (isDropped) {
        optionsList?.map((option) => {
          if (option.getAttribute("data-hover") === "true") {
            const optionValue = internalOptions?.find(
              (arr) => String(arr.value) === option.getAttribute("data-value")
            ) as OptionsType;
            !optionValue?.disabled && internalClickHandler(optionValue, event);
          }
        });
      } else if (!isDropped) {
        setIsDropped(true);
      }
    }
  };

  const focusNextOption = () => {
    if (Array.isArray(internalOptions)) {
      let skipStep = 1;
      while (
        cursor + skipStep < internalOptions.length &&
        internalOptions[cursor + skipStep].disabled
      ) {
        skipStep++;
      }
      cursor + skipStep < internalOptions.length &&
        setCursor(cursor + skipStep);
    }
  };

  const focusPrevOption = () => {
    if (Array.isArray(internalOptions)) {
      let skipStep = 1;
      while (
        cursor - skipStep >= 0 &&
        internalOptions[cursor - skipStep].disabled
      ) {
        skipStep++;
      }
      cursor - skipStep >= 0 && setCursor(cursor - skipStep);
    }
  };

  const focusFirstOption = () => {
    if (Array.isArray(internalOptions)) {
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
    }
  };

  const focusLastOption = () => {
    if (Array.isArray(internalOptions)) {
      let skipStep = 1;
      while (
        internalOptions.length - skipStep >= 0 &&
        internalOptions[internalOptions.length - skipStep].disabled
      ) {
        skipStep++;
      }
      internalOptions.length - skipStep >= 0 &&
        setCursor(internalOptions.length - skipStep);
    }
  };

  const inputKeyDownHandler = (event: KeyboardEvent<HTMLInputElement>) => {
    event.stopPropagation();
    handleInputKeyChange(event);
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

  const renderDropDown = () => {
    return Array.isArray(internalOptions) && internalOptions?.length !== 0 ? (
      internalOptions.map((option, ind) => {
        const selectListClass = selectListRecipe({
          disabled: option.disabled,
          active:
            !isMulti &&
            !Array.isArray(selectValue) &&
            option.value === selectValue?.value,
        });
        return (
          <div
            key={ind}
            ref={option.ref}
            role="option"
            data-value={option.value}
            aria-selected={
              !Array.isArray(selectValue) && option.value === selectValue?.value
            }
            className={selectListClass}
            onClick={(event) =>
              !option.disabled && internalClickHandler(option, event)
            }
            onMouseEnter={(event) => {
              if (!option.disabled) {
                setCursor(ind);
                focusElement(ind);
              }
            }}
            onMouseLeave={(event) => {
              event.currentTarget.setAttribute("data-hover", "false");
            }}
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
    );
  };

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
      className={`${selectContainerStyles} ${className}`}
      style={{
        ...style,
        ...assignInlineVars({
          [selectVars.borderRadius]: borderRadius,
          [selectVars.color]: color,
          [selectVars.width]: width,
          [selectVars.minHeight]: minHeight,
          [selectVars.maxDropDownHeight]: maxDropDownHeight,
        }),
      }}
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
            (Array.isArray(selectValue)
              ? selectValue?.map((arr, ind) => {
                  return (
                    <Pill
                      key={ind}
                      value={arr.label}
                      clearValue={(event) => clearPill(arr.value, event)}
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
              onKeyDown={inputKeyDownHandler}
            />
          )}
          {!isMulti &&
            !isSearchable &&
            !Array.isArray(selectValue) &&
            (selectValue?.label || (
              <div className={selectPlaceholder}>
                {placeholder || "Pick one"}
              </div>
            ))}
        </Flex>
        {!isLoading ? (
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
        ) : (
          loadingOptions?.loader || <Loader color={color} />
        )}
      </Flex>

      {isDropped && (
        <Portal element="div" id="hover-select-portal">
          <Flex
            ref={optionsListRef}
            flexDirection="column"
            className={`${selectListContainerStyle}`}
            role={"listbox"}
            style={assignInlineVars({
              [selectVars.borderRadius]: borderRadius,
              [selectVars.color]: color,
              [selectVars.width]: width,
              [selectVars.minHeight]: minHeight,
              [selectVars.maxDropDownHeight]: maxDropDownHeight,
            })}
          >
            {!isLoading ? (
              renderDropDown()
            ) : (
              <div className={loadingContentContainer}>
                {loadingOptions?.loadingContent || "Loading..."}
              </div>
            )}
          </Flex>
        </Portal>
      )}

      {error && typeof error !== "boolean" && (
        <span className={selectErrorMsg}>{error}</span>
      )}
    </Flex>
  );
};

export const Select = forwardRef(SelectComponent);
