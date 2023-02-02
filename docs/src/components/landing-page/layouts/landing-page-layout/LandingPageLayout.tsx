import { primaryThemeClassName } from "@site/src/styles";
import React from "react";
import { landingPageLayoutStyles } from "./landing-page-layout.styles.css";

const LandingPageLayout = ({ children }) => {
  return (
    <div className={primaryThemeClassName}>
      <div className={landingPageLayoutStyles}>{children}</div>
    </div>
  );
};

export { LandingPageLayout };
