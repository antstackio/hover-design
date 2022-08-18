import React from "react";
import { containerStyles } from "./container.styles.css";

export const Container: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <div className={containerStyles}>{children}</div>;
};
