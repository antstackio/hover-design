import { useEffect, useMemo } from "react";
import { createPortal } from "react-dom";
import { portalStyles } from "./portal.style.css";
import { PortalType } from "./portal.types";

const Portal = ({
  element = "dialog",
  role = "dialog",
  children,
  className = "",
  style,
  id,
}: PortalType & JSX.IntrinsicElements["div"]): JSX.Element => {
  const portalRoot = document.body;
  const mountElement = useMemo(() => document.createElement(element), []);
  mountElement.setAttribute("open", "true");
  mountElement.setAttribute("id", id as string);
  mountElement.setAttribute("role", role as string);
  mountElement.setAttribute("class", `${portalStyles} ${className}`);
  Object.assign(mountElement.style, style);
  useEffect(() => {
    portalRoot.appendChild(mountElement);
    return () => {
      portalRoot.removeChild(mountElement);
    };
  }, [mountElement, portalRoot]);
  return createPortal(children, mountElement);
};

export { Portal };
