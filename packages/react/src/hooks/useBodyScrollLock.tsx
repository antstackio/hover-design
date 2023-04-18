import { useLayoutEffect } from "react";

const useLockBodyScroll = (value: boolean): void => {
  useLayoutEffect((): (() => void) => {
    document.body.style.overflow = value ? "hidden" : "auto";

    return () => (document.body.style.overflow = "auto");
  }, []);
};

export { useLockBodyScroll };
