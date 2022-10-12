import { forwardRef, ForwardRefRenderFunction } from "react";
import { BannerPropsType } from "./banner.types";
import { Alert } from "../Alert";
import {
  bannerContainerStyles,
  bannerCtaIconRecipe,
} from "./banner.styles.css";
import { ArrowDown } from "../_internal/Icons/ArrowDown";
import "./banner.global.styles.css";
import { Button } from "../Button";

const BannerComponent: ForwardRefRenderFunction<
  HTMLDivElement,
  BannerPropsType
> = (
  {
    showIcon = false,
    children,
    alignment = "left",
    showCtaButton = false,
    ctaIcon,
    ctaAction = () => {},
    className,
    style,
    ...props
  },
  ref
) => {
  const getAlignment = () => {
    switch (alignment) {
      case "left":
        return "flex-start";
      case "right":
        return "flex-end";
      case "center":
        return "center";
      default:
        break;
    }
  };

  const bannerCtaIconStyles = bannerCtaIconRecipe({
    alignment,
  });

  return (
    <div
      ref={ref}
      className={`${bannerContainerStyles} ${className}`}
      style={style}
    >
      <Alert
        showIcon={showIcon}
        className={`${
          alignment !== "left" && "hover-banner-not-left-aligned"
        } hover-banner-alert`}
        style={{ alignItems: getAlignment() }}
        {...props}
        withCloseButton={false}
      >
        {children}
      </Alert>
      {showCtaButton && (
        <Button
          onClick={ctaAction}
          className={`${bannerCtaIconStyles} hover-banner-cta-icon`}
        >
          {ctaIcon || <ArrowDown height={18} width={18} />}
        </Button>
      )}
    </div>
  );
};

export const Banner = forwardRef(BannerComponent);
