import { assignInlineVars } from "@vanilla-extract/dynamic";
import React, { useRef } from "react";
import { useClickOutside } from "../../hooks/useClickOutside";
import { eliminateUndefinedKeys } from "../../utils/object-utils";
import { Portal } from "../Portal/Portal";
import CloseIcon from "../_internal/Icons/Close";
import {
  dialogCloseStyleClass,
  dialogContentContainer,
  dialogStyleClass,
  dialogThemeClass,
  dialogThemeVars
} from "@hover-design/core";
import { IDialogProps } from "./dialog.types";

const Dialog: React.FC<IDialogProps> = ({
  children,
  styles,
  closeOnClickOutside = false,
  isCloseIconVisible = true,
  onClose,
  isOpen,
  className,
  style,
  ...nativeProps
}) => {
  const dialogSurfaceRef = useRef<HTMLDivElement>(null);

  const customStyles = assignInlineVars(
    eliminateUndefinedKeys({
      [dialogThemeVars.backgroundColor]: styles?.backgroundColor,
      [dialogThemeVars.borderRadius]: styles?.borderRadius,
      [dialogThemeVars.width]: styles?.width,
      [dialogThemeVars.height]: styles?.height,
      [dialogThemeVars.top]: styles?.top,
      [dialogThemeVars.left]: styles?.left,
      [dialogThemeVars.right]: styles?.right,
      [dialogThemeVars.bottom]: styles?.bottom,
      [dialogThemeVars.transform]: styles?.transform,
      [dialogThemeVars.position]: styles?.position,
      [dialogThemeVars.padding]: styles?.padding,
      [dialogThemeVars.zIndex]: styles?.zIndex,
      [dialogThemeVars.boxShadow]: styles?.boxShadow
    })
  );
  if (closeOnClickOutside) {
    useClickOutside(dialogSurfaceRef, onClose);
  }
  if (isOpen === false) {
    return null;
  }
  return (
    <Portal>
      <div
        ref={dialogSurfaceRef}
        style={{ ...customStyles, ...style }}
        className={`${dialogStyleClass} ${dialogThemeClass} ${className}`}
        {...nativeProps}
      >
        {isCloseIconVisible && (
          <button className={dialogCloseStyleClass} onClick={onClose}>
            <CloseIcon height={"16"} width={"16"} />
          </button>
        )}
        <div className={dialogContentContainer}>{children}</div>
      </div>
    </Portal>
  );
};

export { Dialog };
