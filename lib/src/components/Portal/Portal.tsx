import {
  createElement,
  forwardRef,
  ForwardRefRenderFunction,
  useCallback,
} from "react";
import { createPortal } from "react-dom";
import { portalStyles } from "./portal.style.css";
import { PortalType } from "./portal.types";

const PortalComponent: ForwardRefRenderFunction<HTMLDivElement, PortalType> = (
  { element = "dialog", children, className = "", ...props },
  ref
) => {
  const portalRoot = document.body;
  const MountPortalElement = useCallback(
    () =>
      createElement(element, {
        open: true,
        children,
        class: `${portalStyles} ${className}`,
        ref,
        ...props,
      }),
    []
  );

  return createPortal(
    //@ts-ignore  //TODO: figure out children types
    <MountPortalElement>{children}</MountPortalElement>,
    portalRoot
  );
};

export const Portal = forwardRef(PortalComponent);
