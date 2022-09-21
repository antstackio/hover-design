import { assignInlineVars } from "@vanilla-extract/dynamic";
import { forwardRef, ForwardRefRenderFunction } from "react";
import { Flex } from "../Flex";
import { Button } from "../Button";
import { AlertProps } from "./alert.types";
import {
  alertCloseIconStyles,
  alertDangerTheme,
  alertIconContainerStyles,
  alertIconRecipe,
  alertInfoTheme,
  alertRecipe,
  alertSuccessTheme,
  alertTitleStyles,
  alertVars,
  alertWarningTheme,
} from "./alert.styles.css";
import { Clear } from "../_internal/Icons/Clear";
import InfoCircle from "../_internal/Icons/InfoCircle";
import CheckCircle from "../_internal/Icons/CheckCircle";
import AlertTriangle from "../_internal/Icons/AlertTriangle";
import CloseIcon from "../_internal/Icons/Close";

const AlertComponent: ForwardRefRenderFunction<HTMLDivElement, AlertProps> = (
  {
    color,
    backgroundColor,
    icon,
    title,
    variant = "light",
    borderRadius = "4px",
    closeButtonLabel,
    withCloseButton,
    type = "info",
    className,
    style,
    onClose = () => {},
    children,
    ...nativeProps
  },
  ref
) => {
  const getClassName = () => {
    switch (type) {
      case "info":
        return alertInfoTheme;
      case "success":
        return alertSuccessTheme;
      case "warning":
        return alertWarningTheme;
      case "danger":
        return alertDangerTheme;
    }
  };

  const getIcon = () => {
    switch (type) {
      case "info":
        return <InfoCircle />;
      case "success":
        return <CheckCircle />;
      case "warning":
        return <AlertTriangle />;
      case "danger":
        return <Clear />;
    }
  };

  const alertStyles = alertRecipe({
    variant,
  });
  const alertIconStyles = alertIconRecipe({
    isFilled: variant === "filled",
  });

  return (
    <div
      ref={ref}
      role="alert"
      className={`${alertStyles} ${getClassName()} ${className}`}
      style={{
        ...assignInlineVars({
          [alertVars.color]: color || "",
          [alertVars.backgroundColor]: backgroundColor || "",
          borderRadius,
        }),
        ...style,
      }}
      {...nativeProps}
    >
      <Flex className={`${alertIconContainerStyles}`}>
        <div className={`${alertIconStyles} hover-alert-icon`}>
          {icon || getIcon()}
        </div>
      </Flex>
      <Flex flexDirection="column">
        {title && (
          <div className={`${alertTitleStyles} hover-alert-title`}>{title}</div>
        )}
        <div className="hover-alert-description">{children}</div>
      </Flex>
      {withCloseButton && (
        <Button
          aria-label={closeButtonLabel}
          className={`${alertIconStyles} ${alertCloseIconStyles} hover-alert-closeButtonIcon`}
        >
          <CloseIcon onClick={onClose} height={18} width={18} />
        </Button>
      )}
    </div>
  );
};

export const Alert = forwardRef(AlertComponent);
