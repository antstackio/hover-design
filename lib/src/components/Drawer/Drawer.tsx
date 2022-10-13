import { useRef, useEffect } from "react";
import { backdrop, drawer, drawerContainer } from "./drawer.css";
import { IDrawerProps } from "./drawer.types";
import "./drawer.global.styles.css";

const Drawer = ({
  isOpen,
  children,
  className,
  onClose,
  position = "right",
}: IDrawerProps): JSX.Element => {
  const bodyRef = useRef(document.querySelector("body"));
  // prevent body from scrolling when drawer is open
  useEffect(() => {
    const updatePageScroll = () => {
      if (isOpen) {
        if (bodyRef.current) bodyRef.current.style.overflow = "hidden";
      } else {
        if (bodyRef.current) bodyRef.current.style.overflow = "";
      }
    };
    updatePageScroll();
  }, [isOpen]);

  // close drawer on esc
  useEffect(() => {
    const onKeyPress = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener("keyup", onKeyPress);
    }

    return () => {
      window.removeEventListener("keyup", onKeyPress);
    };
  }, [isOpen, onClose]);

  return (
    <div className={`${drawerContainer} ${isOpen && "open"} ${className}`}>
      <div className={`${drawer} ${position}`} role="dialog">
        {children}
      </div>
      <div role="presentation" className={backdrop} onClick={onClose} />
    </div>
  );
};

export { Drawer };
