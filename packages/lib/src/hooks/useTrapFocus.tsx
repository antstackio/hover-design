import { KeyboardEvent, MutableRefObject } from "react";
import { focusableElements } from "src/components/_internal/Constants/constants";

export const useTrapFocus = (
  e: KeyboardEvent<HTMLDivElement>,
  ref: MutableRefObject<HTMLElement>
) => {
  const firstFocusableElement = ref.current.querySelectorAll(
    focusableElements
  )[0] as HTMLElement;
  const focusableContent = ref.current.querySelectorAll(focusableElements);
  const lastFocusableElement = focusableContent[
    focusableContent.length - 1
  ] as HTMLElement;
  let isTabPressed = e.key === "Tab";

  if (!isTabPressed) {
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
