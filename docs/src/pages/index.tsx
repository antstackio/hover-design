import React from "react";
import { HoverProvider } from "@hover-design/react";
import { theme } from "../styles/theme/theme";

import { LandingPageLayout } from "../components/landing-page/layouts/landing-page-layout/LandingPageLayout";
import { Navbar } from "../components/landing-page/navbar/Navbar";
const HomePage = () => {
  return (
    <HoverProvider value={{ theme }}>
      <LandingPageLayout>
        <Navbar />
      </LandingPageLayout>
    </HoverProvider>
  );
};

export default HomePage;
