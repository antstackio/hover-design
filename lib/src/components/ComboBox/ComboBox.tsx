import { assignInlineVars } from "@vanilla-extract/dynamic";
import {
  FC,
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
  comboInputRecipe,
  comboListContainerRecipe,
  comboListRecipe,
  comboVars,
} from "./comboBox.css";
import { ComboPropsType, OptionsType } from "./comboBox.types";

const outsideClickHandler = (
  ref: MutableRefObject<HTMLDivElement>,
  closeMenu: () => void
) => {
  //later to be convert into hook
  useEffect(() => {
    const handleClickOutside: EventListener = (event) => {
      if (
        ref.current &&
        !ref.current.contains(event.target as HTMLDivElement)
      ) {
        closeMenu();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
};

export const ComboBox: FC<ComboPropsType> = ({
  placeholder = "Pick one",
  options,
  value,
  roundness = "0",
  color = "#2F80ED",
  maxDropDownHeight = "auto",
  onChange = () => {},
  isSearchable = false,
  isMulti = false,
  error = false,
}) => {
  const [comboValue, setComboValue] = useState(value);
  const [isDropped, setIsDropped] = useState(false);
  const comboRef = useRef() as MutableRefObject<HTMLDivElement>;

  outsideClickHandler(comboRef, () => {
    setIsDropped(false);
  });

  useEffect(() => {
    value && setComboValue(value);
  }, [value]);

  const internalClickHandler = (
    option: OptionsType,
    event: MouseEvent<HTMLSpanElement>
  ) => {
    onChange(option.value, event);
    !value && setComboValue(option.value);
    setIsDropped(false);
  };

  const comboListContainerClass = comboListContainerRecipe({
    active: isDropped,
  });

  const comboInputStyles = comboInputRecipe({
    error: error ? true : false,
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
        alignItems="center"
        justifyContent={"space-between"}
        className={`${comboInputStyles}`}
        onClick={() => setIsDropped(!isDropped)}
      >
        {isSearchable ? (
          <div>
            {isMulti && <div></div>} {/*pill container */}
            <input /> {/*@raalz to make combobox */}
          </div>
        ) : (
          !isMulti && (
            <div>
              {options.find((option) => option.value === comboValue)?.label || (
                <div>{placeholder}</div>
              )}
            </div>
          )
        )}
        <Flex alignItems="center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={18}
            height={18}
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <line x1={12} y1={5} x2={12} y2={19}></line>
            <line x1={18} y1={13} x2={12} y2={19}></line>
            <line x1={6} y1={13} x2={12} y2={19}></line>
          </svg>
        </Flex>
      </Flex>
      <Flex flexDirection="column" className={`${comboListContainerClass}`}>
        {options.map((option) => {
          const comboListClass = comboListRecipe({
            disabled: option.disabled,
            active: option.value === comboValue,
          });
          return (
            <span
              role="listbox"
              tab-index="-1"
              className={comboListClass}
              onClick={(event) =>
                !option.disabled && internalClickHandler(option, event)
              }
            >
              {option.label}
            </span>
          );
        })}
      </Flex>
      {error && typeof error !== "boolean" && (
        <span className={comboErrorMsg}>{error}</span>
      )}
    </Flex>
  );
};
