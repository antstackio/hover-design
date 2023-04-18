import { assignInlineVars } from "@vanilla-extract/dynamic";
import {
  forwardRef,
  ForwardRefRenderFunction,
  MutableRefObject,
  useEffect,
  useRef,
  useState
} from "react";
import { Flex } from "../Flex";
import { Button } from "../Button";
import { AlertProps } from "./alert.types";
import {
  alertCloseIconStyles,
  alertDangerTheme,
  alertDescriptionStyle,
  alertHeaderStyles,
  alertIconRecipe,
  alertIconTitleSpace,
  alertInfoTheme,
  alertRecipe,
  alertSuccessTheme,
  alertTitleRecipe,
  alertVars,
  alertWarningTheme
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
    showIcon = true,
    title,
    variant = "light",
    borderRadius = "4px",
    closeButtonLabel,
    withCloseButton,
    type = "info",
    className,
    style,
    onClose,
    children,
    ...nativeProps
  },
  ref
) => {
  const iconRef = useRef() as MutableRefObject<HTMLDivElement>;
  const titleRef = useRef() as MutableRefObject<HTMLDivElement>;
  const [iconTitleSpace, setIconTitleSpace] = useState("0px");

  useEffect(() => {
    if (showIcon && title) {
      const iconPosition = iconRef?.current.offsetLeft;
      const titlePosition = titleRef?.current.offsetLeft;

      iconRef.current &&
        titleRef.current &&
        setIconTitleSpace(`${titlePosition - iconPosition}px`);
    }
  }, [iconRef.current, titleRef.current]);

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
    variant
  });
  const alertIconStyles = alertIconRecipe({
    isFilled: variant === "filled"
  });
  const alertTitleStyles = alertTitleRecipe({
    isFilled: variant === "filled"
  });

  return (
    <Flex
      ref={ref}
      role="alert"
      className={`${alertStyles} ${getClassName()} ${className}`}
      flexDirection="column"
      style={{
        ...assignInlineVars({
          [alertVars.color]: color || "",
          [alertVars.backgroundColor]: backgroundColor || "",
          [alertIconTitleSpace]: iconTitleSpace,
          borderRadius
        }),
        ...style
      }}
      {...nativeProps}
    >
      <Flex alignItems="center" className={`${alertHeaderStyles}`}>
        {showIcon && (
          <div ref={iconRef} className={`${alertIconStyles} hover-alert-icon`}>
            {icon || getIcon()}
          </div>
        )}
        {title && (
          <div
            ref={titleRef}
            className={`${alertTitleStyles} hover-alert-title`}
          >
            {title}
          </div>
        )}
      </Flex>
      <Flex>
        {children && (
          <div className={`${alertDescriptionStyle} hover-alert-description`}>
            {children}
          </div>
        )}
      </Flex>
      {withCloseButton && (
        <Button
          aria-label={closeButtonLabel}
          className={`${alertIconStyles} ${alertCloseIconStyles} hover-alert-closeButtonIcon`}
        >
          <CloseIcon onClick={onClose} height={18} width={18} />
        </Button>
      )}
    </Flex>
  );
};

export const Alert = forwardRef(AlertComponent);
