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
import { Flex } from "../Flex";
import {
  contentRecipe,
  popArrowOffset,
  popArrowSize,
  popOffset,
  popoverContainerStyles,
  popRadius,
  popWidth,
} from "./popover.css";
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

  const internalContentKeyDownHandler = (e: KeyboardEvent<HTMLDivElement>) => {
    const focusableElements =
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';

    const firstFocusableElement = contentRef.current.querySelectorAll(
      focusableElements
    )[0] as HTMLElement;
    const focusableContent =
      contentRef.current.querySelectorAll(focusableElements);
    const lastFocusableElement = focusableContent[
      focusableContent.length - 1
    ] as HTMLElement;
    let isTabPressed = e.key === "Tab";

    if (!isTabPressed || !trapFocus) {
      return;
    }

    if (e.shiftKey) {
      if (document.activeElement === firstFocusableElement) {
        lastFocusableElement.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastFocusableElement) {
        firstFocusableElement.focus();
        e.preventDefault();
      }
    }
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
      className={`${popoverContainerStyles} ${className}`}
      ref={(node) => {
        popRef.current = node as HTMLDivElement;
        if (typeof ref === "function") {
          ref(node);
        } else if (ref) {
          ref.current = node;
        }
      }}
      style={{
        ...assignInlineVars({
          [popOffset]: withArrow
            ? `${Math.hypot(parseInt(arrowSize) + 4) / 2 + parseInt(offset)}px`
            : offset,
          [popRadius]: borderRadius,
          [popWidth]: targetWidth,
          [popArrowSize]: arrowSize,
          [popArrowOffset]: `-${Math.hypot(parseInt(arrowSize) + 2) / 2}px`,
        }),
        ...style,
      }}
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
        <Flex
          ref={contentRef}
          justifyContent="center"
          alignItems="center"
          style={assignInlineVars({
            zIndex,
          })}
          onKeyDown={internalContentKeyDownHandler}
          className={`${contentContainerStyles} hover-popover-content`}
        >
          {content}
        </Flex>
      )}
    </div>
  );
};

export const Popover = forwardRef(PopoverComponent);
