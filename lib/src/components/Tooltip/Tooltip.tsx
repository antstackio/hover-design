import { assignInlineVars } from "@vanilla-extract/dynamic";
import {
  forwardRef,
  ForwardRefRenderFunction,
  KeyboardEvent,
  MutableRefObject,
  useEffect,
  useRef,
  useState,
} from "react";
import { useClickOutside } from "../../hooks/useClickOutside";
import {
  labelRecipe,
  toolArrowOffset,
  toolArrowSize,
  toolOffset,
  tooltipContainerStyles,
  toolRadius,
  toolWidth,
} from "./tooltip.styles.css";
import { TooltipType } from "./tooltip.types";

const TooltipComponent: ForwardRefRenderFunction<
  HTMLDivElement,
  TooltipType
> = (
  {
    children,
    position = "bottom",
    label,
    offset = "4px",
    borderRadius = "4px",
    width = "fit-content",
    withArrow = false,
    arrowSize = "7px",
    isOpened,
    onChange = () => {},
    className,
    style,
    zIndex = "1",
    color = "#2C2E33",
    labelColor = "white",
    multiLine = false,
  },
  ref
) => {
  const [isOpen, setIsOpen] = useState<boolean | null>(null);
  const [targetWidth, setTargetWidth] = useState("");
  const toolRef = useRef() as MutableRefObject<HTMLDivElement>;
  const labelRef = useRef() as MutableRefObject<HTMLDivElement>;
  const targetRef = useRef() as MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    isOpened !== undefined && setIsOpen(isOpened);
  }, [isOpened]);

  useEffect(() => {
    isOpen !== null && onChange(isOpen!);
  }, [isOpen]);

  useEffect(() => {
    if (width === "target") {
      setTargetWidth(getTargetWidth());
    } else {
      setTargetWidth(width);
    }
  }, [width, targetRef.current]);

  useClickOutside(
    toolRef,
    () => {
      isOpened === undefined && setIsOpen(false);
    },
    isOpen!
  );

  const internalClickHandler = () => {
    isOpened === undefined && setIsOpen(!isOpen);
  };
  const internalKeyDownHandler = (event: KeyboardEvent<HTMLDivElement>) => {
    switch (event.code) {
      case "Space":
      case "Enter":
        event.preventDefault();
        internalClickHandler();
        break;
      case "Escape":
        event.preventDefault();
        isOpened === undefined && setIsOpen(false);
        break;
      default:
        break;
    }
  };

  const getTargetWidth = () => {
    return `${targetRef?.current?.offsetWidth}px`;
  };

  const labelContainerStyles = labelRecipe({
    position,
    withArrow: withArrow ? true : false,
  });

  return (
    <div
      className={`${tooltipContainerStyles}`}
      ref={toolRef}
      style={assignInlineVars({
        [toolOffset]: withArrow
          ? `${Math.hypot(parseInt(arrowSize) + 2) / 2 + parseInt(offset)}px`
          : offset,
        [toolRadius]: borderRadius,
        [toolWidth]: targetWidth,
        [toolArrowSize]: arrowSize,
        [toolArrowOffset]: `-${Math.hypot(parseInt(arrowSize)) / 2}px`,
      })}
    >
      <div
        ref={targetRef}
        onClick={internalClickHandler}
        onKeyDown={internalKeyDownHandler}
      >
        {children}
      </div>
      {isOpen && (
        <div
          aria-expanded={isOpen}
          role="dialog"
          ref={(node) => {
            labelRef.current = node as HTMLDivElement;
            if (typeof ref === "function") {
              ref(node);
            } else if (ref) {
              ref.current = node;
            }
          }}
          style={{
            ...assignInlineVars({
              zIndex,
              backgroundColor: color,
              color: labelColor,
              whiteSpace: multiLine ? "wrap" : "nowrap",
            }),
            ...style,
          }}
          className={`${labelContainerStyles} ${className}`}
        >
          {label}
        </div>
      )}
    </div>
  );
};

export const Tooltip = forwardRef(TooltipComponent);
