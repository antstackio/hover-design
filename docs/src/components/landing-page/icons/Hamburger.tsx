import { Icon } from "@hover-design/react";
import React from "react";
import { IIconProps } from "./icon.types";

const Hamburger = ({
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
      fill={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M4 8l16 0"></path>
      <path d="M4 16l16 0"></path>
    </Icon>
  );
};

export { Hamburger };
