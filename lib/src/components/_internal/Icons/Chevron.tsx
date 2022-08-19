import React from "react";
import { Icon } from "src/components/Icon/Icon";
import { IIconProps } from "src/components/Icon/icon.type";

const ChevronIcon: React.FC<IIconProps> = (props) => {
  return (
    <Icon {...props}>
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <polyline points="6 9 12 15 18 9"></polyline>
    </Icon>
  );
};

export default ChevronIcon;
