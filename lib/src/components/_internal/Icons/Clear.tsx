import { FC } from "react";
import { Icon } from "src/components/Icon";
import { IIconProps } from "src/components/Icon/icon.type";

export const Clear: FC<IIconProps> = (props) => {
  return (
    <Icon {...props}>
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <circle cx={12} cy={12} r={9}></circle>
      <path d="M10 10l4 4m0 -4l-4 4"></path>
    </Icon>
  );
};
