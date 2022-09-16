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
import { useTrapFocus } from "src/hooks/useTrapFocus";
import { useClickOutside } from "../../hooks/useClickOutside";
import {
  contentRecipe,
  popArrowOffset,
  popArrowSize,
  popOffset,
  popoverContainerStyles,
  popRadius,
  popWidth,
} from "./popover.styles.css";
import { PopoverType } from "./popover.types";

const PopoverComponent: ForwardRefRenderFunction<
  HTMLDivElement,
  PopoverType
> = (
  {
    children,
    position = "bottom",
    content,
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
    trapFocus = false,
  },
  ref
) => {
  const [isOpen, setIsOpen] = useState<boolean | null>(null);
  const [targetWidth, setTargetWidth] = useState("");
  const popRef = useRef() as MutableRefObject<HTMLDivElement>;
  const contentRef = useRef() as MutableRefObject<HTMLDivElement>;
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
    popRef,
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

  const internalContentKeyDownHandler = (
    event: KeyboardEvent<HTMLDivElement>
  ) => {
    trapFocus && useTrapFocus(event, contentRef);
  };

  const getTargetWidth = () => {
    return `${targetRef?.current?.offsetWidth}px`;
  };

  const contentContainerStyles = contentRecipe({
    position,
    withArrow: withArrow ? true : false,
  });

  return (
    <div
      className={popoverContainerStyles}
      ref={popRef}
      style={assignInlineVars({
        [popOffset]: withArrow
          ? `${Math.hypot(parseInt(arrowSize) + 4) / 2 + parseInt(offset)}px`
          : offset,
        [popRadius]: borderRadius,
        [popWidth]: targetWidth,
        [popArrowSize]: arrowSize,
        [popArrowOffset]: `-${Math.hypot(parseInt(arrowSize) + 2) / 2}px`,
      })}
    >
      <div
        ref={targetRef}
        className="hover-popover-target"
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
            contentRef.current = node as HTMLDivElement;
            if (typeof ref === "function") {
              ref(node);
            } else if (ref) {
              ref.current = node;
            }
          }}
          style={{
            ...assignInlineVars({
              zIndex,
            }),
            ...style,
          }}
          onKeyDown={internalContentKeyDownHandler}
          className={`${contentContainerStyles} ${className}`}
        >
          {content}
        </div>
      )}
    </div>
  );
};

export const Popover = forwardRef(PopoverComponent);
