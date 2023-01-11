import { assignInlineVars } from "@vanilla-extract/dynamic";
import {
  ChangeEvent,
  forwardRef,
  ForwardRefRenderFunction,
  KeyboardEvent,
  MouseEvent,
  MutableRefObject,
  useEffect,
  useLayoutEffect,
  useRef,
  useState
} from "react";
import { useClickOutside } from "../../hooks/useClickOutside";
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
  loadingContentContainer
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
    onChange,
    isSearchable = false,
    isClearable = false,
    isDisabled = false,
    isMulti = false,
    DropIcon,
    error = false,
    nothingFoundLabel,
    className,
    style,
    onDropDownClose,
    onDropDownOpen,
    isLoading = false,
    loadingOptions,
    useDropdownPortal = false,
    closeDropdownPortalOnScroll = false,
    zIndex = "300",
    useSerialSearch = false
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
    useDropdownPortal ? applyDropDownPortalPosition() : applyDropDownPosition();
  }, [inputRef, useDropdownPortal, optionsListRef, isDropped, selectValue]);

  useEffect(() => {
    if (!isDropped) {
      setCursor(-1);
    }
  }, [isDropped]);

  const applyDropDownPortalPosition = () => {
    if (inputRef.current && optionsListRef.current && useDropdownPortal) {
      const selectPortal = optionsListRef.current
        .parentElement as HTMLDivElement;
      const scrollLeft = window.scrollX || document.documentElement.scrollLeft;
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const inputWidth = `${inputRef.current.getBoundingClientRect().width}px`;
      const inputHeight = inputRef.current.getBoundingClientRect().height;
      const inputPosition = {
        top: `${
          scrollTop +
          inputHeight +
          inputRef.current.getBoundingClientRect().top -
          5
        }px`,
        left: `${scrollLeft + inputRef.current.getBoundingClientRect().left}px`
      };
      Object.assign(selectPortal.style, {
        width: inputWidth,
        top: inputPosition.top,
        left: inputPosition.left
      });
    }
  };

  const applyDropDownPosition = () => {
    if (optionsListRef.current && inputRef.current && !useDropdownPortal) {
      optionsListRef.current.style.top = `${
        inputRef.current.offsetHeight - 5
      }px`;
    }
  };

  const closeOnScroll = () => {
    if (closeDropdownPortalOnScroll) {
      setIsDropped(false);
      onDropDownClose && onDropDownClose();
    }
  };

  useLayoutEffect(() => {
    const ElementsWithScrolls = (function () {
      const getComputedStyle =
        //@ts-ignore
        document.body && document.body.currentStyle
          ? function (elem: any) {
              return elem.currentStyle;
            }
          : function (elem: any) {
              return document.defaultView?.getComputedStyle(elem, null);
            };

      function getActualCss(elem: HTMLElement, style: any) {
        return getComputedStyle(elem)[style];
      }

      function isXScrollable(elem: HTMLElement) {
        return (
          elem.offsetWidth < elem.scrollWidth &&
          autoOrScroll(getActualCss(elem, "overflow-x"))
        );
      }

      function isYScrollable(elem: HTMLElement) {
        return (
          elem.offsetHeight < elem.scrollHeight &&
          autoOrScroll(getActualCss(elem, "overflow-y"))
        );
      }

      function autoOrScroll(text: string) {
        return text == "scroll" || text == "auto";
      }

      function hasScroller(elem: HTMLElement) {
        return isYScrollable(elem) || isXScrollable(elem);
      }
      return function ElemenetsWithScrolls() {
        return [].filter.call(document.querySelectorAll("*"), hasScroller);
      };
    })();
    if (useDropdownPortal) {
      ElementsWithScrolls().forEach((arr: HTMLElement) =>
        arr?.addEventListener("scroll", () => {
          closeOnScroll();
          applyDropDownPortalPosition();
        })
      );

      window.addEventListener("resize", applyDropDownPortalPosition);
      return () => {
        ElementsWithScrolls().forEach((arr: HTMLElement) =>
          arr?.removeEventListener("scroll", () => {
            closeOnScroll();
            applyDropDownPortalPosition();
          })
        );
        window.removeEventListener("resize", applyDropDownPortalPosition);
      };
    }
  }, [inputRef.current]);

  useClickOutside(
    selectRef,
    () => {
      if (useDropdownPortal) {
        closeOnOutsideClick();
      } else {
        isDropped && setIsDropped(false);
        onDropDownClose && onDropDownClose();
      }
    },
    isDropped
  );

  const closeOnOutsideClick = () => {
    document.body.addEventListener("click", (event) => {
      if (isMulti) {
        if (
          !inputRef.current?.contains(event.target as Node) &&
          !optionsListRef.current?.contains(event.target as Node)
        ) {
          isDropped && setIsDropped(false);
          onDropDownClose && onDropDownClose();
        }
      } else {
        if (!inputRef.current?.contains(event.target as Node)) {
          isDropped && setIsDropped(false);
          onDropDownClose && onDropDownClose();
        }
      }
    });
  };

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
        ...optionsListRef.current.childNodes
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
      onChange && onChange(multiValue, event);
      setSelectValue(multiValue);
    } else {
      if (
        isClearable &&
        !Array.isArray(selectValue) &&
        option.value === selectValue?.value
      ) {
        setSelectValue(null);
        onChange && onChange(null, event);
      } else {
        setSelectValue(option);
        onChange && onChange(option, event);
      }
      setIsDropped(false);
      setInternalOptions(options);
      onDropDownClose && onDropDownClose();
    }
  };

  const searchOptions = (
    options: OptionsType[],
    value: string
  ): OptionsType[] => {
    return options?.filter((option) => {
      if (useSerialSearch) {
        return (
          option.label
            .trim()
            .toLowerCase()
            .indexOf(value.trim().toLowerCase()) === 0
        );
      }
      return option.label
        .trim()
        .toLowerCase()
        .includes(value.trim().toLowerCase());
    });
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
    const filteredOptions = searchOptions(mainOptions, text);
    text === ""
      ? setInternalOptions(mainOptions)
      : setInternalOptions(filteredOptions);
  };

  const handleIconClick = (event: MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    if (isClearable) {
      if (isMulti) {
        onChange && onChange([], event);
        setSelectValue([]);
      } else {
        onChange && onChange(null, event);
        setSelectValue(null);
      }
    } else {
      setIsDropped(!isDropped);
      isDropped
        ? onDropDownClose && onDropDownClose()
        : onDropDownOpen && onDropDownOpen();
    }
  };

  const changeDrop = () => {
    setIsDropped(!isDropped);
    isDropped
      ? onDropDownClose && onDropDownClose()
      : onDropDownOpen && onDropDownOpen();
  };

  const clearPill = (
    clearValue: string | number,
    event: MouseEvent<SVGSVGElement> | KeyboardEvent<HTMLDivElement>
  ) => {
    let tempArr = Array.isArray(selectValue) ? [...selectValue] : [];
    tempArr = tempArr.filter((arr) => arr.value !== clearValue);
    onChange && onChange(tempArr, event);
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
      const lastValue = selectValue[selectValue.length - 1];
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
    isDropped
  });

  const selectInputStyles = selectInputRecipe({
    error: error ? true : false,
    disabled: isDisabled
  });

  const selectPlaceholder = selectPlaceholderRecipe({
    error: error ? true : false
  });
  const inputStyles = inputRecipe({
    error: error ? true : false,
    isMulti
  });

  const renderDropDown = () => {
    return (
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
          [selectVars.zIndex]: zIndex,
          [selectVars.maxDropDownHeight]: maxDropDownHeight
        })}
      >
        {!isLoading ? (
          renderDropDownList()
        ) : (
          <div className={loadingContentContainer}>
            {loadingOptions?.loadingContent || "Loading..."}
          </div>
        )}
      </Flex>
    );
  };

  const renderDropDownList = () => {
    return Array.isArray(internalOptions) && internalOptions?.length !== 0 ? (
      internalOptions.map((option, ind) => {
        const selectListClass = selectListRecipe({
          disabled: option.disabled,
          active:
            !isMulti &&
            !Array.isArray(selectValue) &&
            option.value === selectValue?.value
        });
        return (
          <div
            key={`${option.value}`}
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
            onMouseEnter={() => {
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

  const renderDropDownContainer = () => {
    return useDropdownPortal ? (
      <Portal element="div" style={assignInlineVars({ zIndex })}>
        {renderDropDown()}
      </Portal>
    ) : (
      renderDropDown()
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
          [selectVars.zIndex]: zIndex,
          [selectVars.maxDropDownHeight]: maxDropDownHeight
        })
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
            (Array.isArray(selectValue) && selectValue.length
              ? selectValue?.map((arr) => {
                  return (
                    <Pill
                      key={`${arr.value}`}
                      value={arr.label}
                      clearValue={(event) => {
                        clearPill(arr.value, event);
                      }}
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

      {isDropped && renderDropDownContainer()}

      {error && typeof error !== "boolean" && (
        <span className={selectErrorMsg}>{error}</span>
      )}
    </Flex>
  );
};

export const Select = forwardRef(SelectComponent);
