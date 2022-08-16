import React, { ForwardRefRenderFunction } from "react";
import { IAvatarProps } from "./avatar.types";

const AvatarComponent: ForwardRefRenderFunction<
  HTMLSpanElement,
  IAvatarProps
> = () => {
  return (
    <span>
      <p>Avatar</p>
    </span>
  );
};

const AvatarWithRef = React.forwardRef(AvatarComponent);
export { AvatarWithRef as Avatar };
