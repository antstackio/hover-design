import React, { ForwardRefRenderFunction } from "react";
import { IAvatarProps } from "./avatar.types";
import {
  avatarImg,
  avatar,
  avatarThemeClass,
  avatarThemeVars,
  avatarShapes,
  avatarSizes
} from "./avatar.styles.css";
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
    borderRadius = "lg",
    size = "md",
    color = "#000",
    textColor = "#fff",
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
    <Flex
      display="inline-flex"
      justifyContent="center"
      alignItems="center"
      className={`${avatarStyle} ${avatarThemeClass} ${className || ""}`}
      style={{ ...assignVariables, ...(style || {}) }}
      ref={ref}
      {...props}
    >
      {src ? <img className={`${avatarImg}`} src={src} alt={alt} /> : children}
    </Flex>
  );
};

const AvatarWithRef = React.forwardRef(AvatarComponent);
export { AvatarWithRef as Avatar };
