import { useLayoutEffect } from "react";

const useLockBodyScroll = (value: boolean): void => {
  useLayoutEffect((): (() => void) => {
    let bodyOverflowStyle = document.body.style.overflow;
    value ? (bodyOverflowStyle = "hidden") : (bodyOverflowStyle = "auto");
    return () => (document.body.style.overflow = "auto");
  }, []);
};

export { useLockBodyScroll };
