import { assignInlineVars } from "@vanilla-extract/dynamic";
import React from "react";
import { eliminateUndefinedKeys } from "../../utils/object-utils";
import { useClickOutside } from "../../hooks/useClickOutside";
import { Portal } from "../Portal/Portal";
import CloseIcon from "../_internal/Icons/Close";
import {
  modalCloseStyleClass,
  modalHeaderStyleClass,
  modalStyleClass,
  modalThemeClass,
  modalThemeVars,
  modalTitleStyleClass,
  overlayStyleClass
} from "@hover-design/core";
import { IModalProps } from "./modal.types";

const Modal: React.FC<IModalProps> = ({
  children,
  isOpen,
  onClose,
  title,
  closeOnClickOutside = true,
  isCloseIconVisible = true,
  baseStyles,
  overlayStyles,
  showOverlay = true,
  style,
  className,
  ...nativeProps
}) => {
  const modalSurfaceRef = React.useRef<HTMLDivElement>(null);
  if (closeOnClickOutside) {
    useClickOutside(modalSurfaceRef, onClose);
  }

  const customStyles = assignInlineVars(
    eliminateUndefinedKeys({
      [modalThemeVars.base.backgroundColor]: baseStyles?.backgroundColor,
      [modalThemeVars.base.borderRadius]: baseStyles?.borderRadius,
      [modalThemeVars.base.width]: baseStyles?.width,
      [modalThemeVars.base.height]: baseStyles?.height,
      [modalThemeVars.base.top]: baseStyles?.top,
      [modalThemeVars.base.left]: baseStyles?.left,
      [modalThemeVars.base.right]: baseStyles?.right,
      [modalThemeVars.base.bottom]: baseStyles?.bottom,
      [modalThemeVars.base.transform]: baseStyles?.transform,
      [modalThemeVars.base.position]: baseStyles?.position,
      [modalThemeVars.base.padding]: baseStyles?.padding,
      [modalThemeVars.base.zIndex]: baseStyles?.zIndex,
      [modalThemeVars.base.boxShadow]: baseStyles?.boxShadow,
      [modalThemeVars.overlay.backgroundColor]: overlayStyles?.backgroundColor,
      [modalThemeVars.overlay.zIndex]: overlayStyles?.zIndex,
      [modalThemeVars.overlay.opacity]: overlayStyles?.opacity,
      [modalThemeVars.overlay.top]: overlayStyles?.top,
      [modalThemeVars.overlay.left]: overlayStyles?.left,
      [modalThemeVars.overlay.right]: overlayStyles?.right,
      [modalThemeVars.overlay.bottom]: overlayStyles?.bottom,
      [modalThemeVars.overlay.filter]: overlayStyles?.filter
    })
  );
  if (isOpen === false) {
    return null;
  }
  return (
    <Portal>
      <div style={customStyles} className={modalThemeClass}>
        {showOverlay && <div className={overlayStyleClass} />}
        <div
          ref={modalSurfaceRef}
          style={style}
          className={`${modalStyleClass} ${className}`}
          {...nativeProps}
        >
          <div className={modalHeaderStyleClass}>
            {!!title && <p className={modalTitleStyleClass}>{title}</p>}
            {isCloseIconVisible && (
              <button className={modalCloseStyleClass} onClick={onClose}>
                <CloseIcon height={"16"} width={"16"} />
              </button>
            )}
          </div>
          {children}
        </div>
      </div>
    </Portal>
  );
};

export { Modal };
