import React from "react";
import { laptopText, tabletText } from "./breakpointsExample.style.css";

export const BreakpointsExample = () => {
  return (
    <div>
      <h3>Breakpoints are Mobile first:</h3>
      <p>I am visible on all screens</p>
      <p className={tabletText}>I am visible on tablets or larger</p>
      <p className={laptopText}>I am visible only on Laptops</p>
    </div>
  );
};
