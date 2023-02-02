import React from "react";
import { Icon } from "@hover-design/react";
import { IIconProps } from "./icon.types";

export const Close = ({
  height = 24,
  width = 24,
  color = "currentColor",
  ...props
}: IIconProps) => {
  return (
    <Icon
      xmlns="http://www.w3.org/2000/svg"
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
      <path d="M18 6l-12 12"></path>
      <path d="M6 6l12 12"></path>
    </Icon>
  );
};
