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
    height = "40px",
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
  const [selectValue, setSelectValue] = useState(value);
  const [isDropped, setIsDropped] = useState(false);
  const [internalOptions, setInternalOptions] = useState(options);
  const [searchText, setSearchText] = useState("");
  const selectRef = useRef() as MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    if (value !== undefined) {
      setSelectValue(value);
    }
  }, [value]);

  useEffect(() => {
    setSearchText(
      options.find((option) => option.value === selectValue)?.label || ""
    );
    setInternalOptions(options);
  }, [selectValue]);

  const internalClickHandler = (
    option: OptionsType,
    event: MouseEvent<HTMLSpanElement> | KeyboardEvent<HTMLSpanElement>
  ) => {
    if (value !== undefined) {
      isClearable && option.value === selectValue
        ? onChange("", event)
        : onChange(option.value, event);
    } else {
      isClearable && option.value === selectValue
        ? setSelectValue("")
        : setSelectValue(option.value);
    }
    setInternalOptions(options);
    setIsDropped(false);
    onDropDownClose();
  };

  const internalChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const text = event.target.value;
    setIsDropped(true);
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
        setSelectValue("");
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
        [selectVars.height]: height,
        [selectVars.width]: width,
        [selectVars.maxDropDownHeight]: maxDropDownHeight,
      })}
    >
      <Flex
        role="selectbox"
        aria-expanded={isDropped}
        tabIndex={0}
        alignItems="center"
        justifyContent={"space-between"}
        className={`${selectInputStyles}`}
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
              placeholder={placeholder || "Search here"}
              onChange={internalChangeHandler}
            />
          )}
          {!isMulti && !isSearchable && (
            <div>
              {options.find((option) => option.value === selectValue)
                ?.label || (
                <div className={selectPlaceholder}>
                  {placeholder || "Pick one"}
                </div>
              )}
            </div>
          )}
        </div>

        <Flex
          alignItems="center"
          className={selectIconClass}
          onClick={handleIconClick}
        >
          {DropIcon ? !isClearable && DropIcon : !isClearable && <ArrowDown />}
          {isClearable && <Clear />}
        </Flex>
      </Flex>

      {isDropped && (
        <Flex
          flexDirection="column"
          className={`${selectListContainerStyle}`}
          role={"listbox"}
          tabIndex={-1}
        >
          {internalOptions.length !== 0 ? (
            internalOptions.map((option, ind) => {
              const selectListClass = selectListRecipe({
                disabled: option.disabled,
                active: option.value === selectValue,
              });
              return (
                <span
                  key={ind}
                  ref={option.ref}
                  role="option"
                  tabIndex={option.disabled ? 1 : 0}
                  aria-selected={option.value === selectValue}
                  className={selectListClass}
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
            <div className={noDataFoundStyles}>
              {nothingFoundLabel || "Nothing Found!"}
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
