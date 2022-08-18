import React, { ForwardRefRenderFunction } from "react";
import { Flex } from "src/components/Flex";
import { IAvatarGroupProps } from "../avatar.types";
import { assignInlineVars } from "@vanilla-extract/dynamic";
import {
  avatarChildClass,
  avatarGaps,
  avatarGroupThemeClass,
  avatarGroupThemeVars
} from "../avatar.styles.css";
import "../avatar.global.styles.css";

const AvatarGroup: ForwardRefRenderFunction<
  HTMLDivElement,
  IAvatarGroupProps
> = ({ children, gap = "sm", className, style, ...nativeProps }, ref) => {
  const assignVariables = assignInlineVars({
    [avatarGroupThemeVars.avatarStyleGap]: avatarGaps[gap]
  });

  return (
    <Flex
      alignItems="center"
      ref={ref}
      className={`${avatarChildClass} ${avatarGroupThemeClass} ${
        className || ""
      }`}
      style={{ ...assignVariables, ...(style || {}) }}
      {...nativeProps}
    >
      {children}
    </Flex>
  );
};

const AvatarGroupWithRef = React.forwardRef(AvatarGroup);
export { AvatarGroupWithRef as AvatarGroup };
