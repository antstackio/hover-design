import React from "react";
import { mainStyles } from "./PageMain.styles.css";

export const PageMain: React.FC<{ children: React.ReactNode }> = ({
  children
}) => {
  return <main className={mainStyles}>{children}</main>;
};
