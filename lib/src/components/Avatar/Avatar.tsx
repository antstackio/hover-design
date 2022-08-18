import React, { ForwardRefRenderFunction } from "react";
import { IAvatarProps } from "./avatar.types";
import {
  avatarImg,
  avatar,
  avatarThemeClass,
  avatarThemeVars,
  avatarWrapperFlex,
  avatarShapes,
  avatarSizes
} from "./avatar.css";
import { assignInlineVars } from "@vanilla-extract/dynamic";

const AvatarComponent: ForwardRefRenderFunction<
  HTMLDivElement,
  IAvatarProps
> = (
  {
    children,
    src,
    alt,
    borderRadius = "lg",
    size = "md",
    color = "black",
    textColor = "white",
    className,
    style,
    ...props
  },
  ref
) => {
  const avatarStyle = avatar({});

  const assignVariables = assignInlineVars({
    [avatarThemeVars.avatarStyleColor]: src ? "transparent" : color,
    [avatarThemeVars.avatarStyleTextColor]: textColor,
    [avatarThemeVars.avatarStyleBorderRadius]: avatarShapes[borderRadius]
      ? avatarShapes[borderRadius]
      : borderRadius,
    [avatarThemeVars.avatarStyleSize]: avatarSizes[size]
      ? avatarSizes[size]
      : size
  });

  return (
    <div
      className={`${avatarWrapperFlex} ${avatarStyle} ${avatarThemeClass} ${
        className || ""
      }`}
      style={{ ...assignVariables, ...(style || {}) }}
      ref={ref}
      {...props}
    >
      {src ? <img className={`${avatarImg}`} src={src} alt={alt} /> : children}
    </div>
  );
};

const AvatarWithRef = React.forwardRef(AvatarComponent);
export { AvatarWithRef as Avatar };
