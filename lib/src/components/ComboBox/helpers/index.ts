import { MutableRefObject, useEffect } from "react";

export const useOutsideClickHandler = (
  ref: MutableRefObject<HTMLDivElement>,
  toggleState: boolean,
  closeMenu: () => void
) => {
  useEffect(() => {
    const handleClickOutside: EventListener = (event) => {
      if (
        ref.current &&
        !ref.current.contains(event.target as HTMLDivElement)
      ) {
        toggleState && closeMenu();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, toggleState]);
};
