import { FC } from "react";
import { Icon } from "src/components/Icon";
import { IIconProps } from "src/components/Icon/icon.type";

export const ArrowDown: FC<IIconProps> = (props) => {
  return (
    <Icon {...props}>
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <line x1={12} y1={5} x2={12} y2={19}></line>
      <line x1={18} y1={13} x2={12} y2={19}></line>
      <line x1={6} y1={13} x2={12} y2={19}></line>
    </Icon>
  );
};
