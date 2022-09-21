import React from "react";
import { Icon } from "../../../components/Icon";
import { IIconProps } from "../../../components/Icon/icon.type";

const CheckCircle: React.FC<IIconProps> = (props) => {
  return (
    <Icon {...props}>
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <circle cx="12" cy="12" r="9"></circle>
      <path d="M9 12l2 2l4 -4"></path>
    </Icon>
  );
};

export default CheckCircle;
