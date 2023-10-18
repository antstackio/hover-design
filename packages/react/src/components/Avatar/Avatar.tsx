import React, { ForwardRefRenderFunction } from "react";
import { IAvatarProps } from "./avatar.types";
import {
  avatarImg,
  avatarThemeClass,
  avatarThemeVars,
  avatarShapes,
  avatarSizes,
  avatarWrapper
} from "@hover-design/core";
import { assignInlineVars } from "@vanilla-extract/dynamic";
import { Flex } from "../Flex";

const AvatarComponent: ForwardRefRenderFunction<
  HTMLDivElement,
  IAvatarProps
> = (
  {
    children,
    src,
    alt,
    borderRadius = "xl",
    size = "md",
    color = "#000",
    textColor = "#fff",
    className,
    style,
    ...nativeProps
  },
  ref
) => {
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
    <Flex
      display="inline-flex"
      justifyContent="center"
      alignItems="center"
      className={`${avatarWrapper} ${avatarThemeClass} ${className || ""}`}
      style={{ ...assignVariables, ...(style || {}) }}
      ref={ref}
      {...nativeProps}
    >
      {src ? <img className={`${avatarImg}`} src={src} alt={alt} /> : children}
    </Flex>
  );
};

const AvatarWithRef = React.forwardRef(AvatarComponent);
export { AvatarWithRef as Avatar };
