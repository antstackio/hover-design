import React, { ForwardRefRenderFunction } from "react";
import { IAvatarProps } from "./avatar.types";
import {
  avatarWrapper,
  avatar,
  avatarThemeClass,
  avatarThemeVars
} from "./avatar.css";
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
    borderRadius,
    size,
    color = "balck",
    textColor = "white",
    ...props
  },
  ref
) => {
  const avatarStyle = avatar({});
  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      className={`${avatarWrapper} ${avatarThemeClass}`}
      style={assignInlineVars({
        [avatarThemeVars.avatarStyleColor]: color,
        [avatarThemeVars.avatarStyleTextColor]: textColor
      })}
      ref={ref}
      {...props}
    >
      {children}
    </Flex>
    // <Flex
    //   alignItems="center"
    //   justifyContent="center"
    //   flexDirection="row"
    //   className={`${avatarWrapper} ${avatarThemeClass}`}
    //   style={assignInlineVars({
    //     [avatarThemeVars.avatarStyleColor]: color,
    //     [avatarThemeVars.avatarStyleTextColor]: textColor
    //   })}
    //   ref={ref}
    //   {...props}
    // >
    //   {src ? (
    //     <img className={`${avatarStyle}`} src={src} alt={alt} />
    //   ) : (
    //     children
    //   )}
    // </Flex>
  );
};

const AvatarWithRef = React.forwardRef(AvatarComponent);
export { AvatarWithRef as Avatar };

{
  /* <div class="App">
  <Avatar>RA</Avatar>
  <Avatar src="image" alt="image" />
  <Avatar>RS</Avatar>
  <Avatar>
    <Icon />
  </Avatar>
</div> */
}
{
  /* <AvatarGroup class="App">
  <Avatar src="image" alt="image" />
  <Avatar src="image" alt="image" />
  <Avatar>RS</Avatar>
  <Avatar>
    <Icon />
  </AvatarGroup>
</div> */
}
