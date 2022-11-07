import { useEffect, useMemo } from "react";
import { createPortal } from "react-dom";
import { PortalType } from "./portal.types";

const Portal = ({ children }: PortalType): JSX.Element => {
  const portalRoot = document.body;
  const mountElement = useMemo(() => document.createElement("dialog"), []);
  mountElement.setAttribute("open", "true");
  mountElement.style.cssText = "padding:0;border:0";

  useEffect(() => {
    portalRoot.appendChild(mountElement);
    return () => {
      portalRoot.removeChild(mountElement);
    };
  }, [mountElement, portalRoot]);
  return createPortal(children, mountElement);
};

export { Portal };
