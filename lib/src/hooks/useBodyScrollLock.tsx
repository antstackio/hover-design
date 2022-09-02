import { useLayoutEffect } from "react";

const useLockBodyScroll = (value: boolean): void => {
  useLayoutEffect((): (() => void) => {
    value
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");

    return () => (document.body.style.overflow = "auto");
  }, []);
};

export { useLockBodyScroll };
