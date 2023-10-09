import React from "react";
import { Icon } from "../../../components/Icon";
import { IIconProps } from "../../../components/Icon/icon.type";

const CloseIcon: React.FC<IIconProps> = (props) => {
  return (
    <Icon
      width="24"
      height="24"
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <line x1="18" y1="6" x2="6" y2="18"></line>
      <line x1="6" y1="6" x2="18" y2="18"></line>
    </Icon>
  );
};

export default CloseIcon;
