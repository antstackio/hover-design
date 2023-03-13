import React from "react";
import { HoverProvider } from "@hover-design/react";
import { theme } from "../styles/theme/theme";
import { Card, Flex } from "@hover-design/react";

import { LandingPageLayout } from "../components/landing-page/layouts/landing-page-layout/LandingPageLayout";
import { Navbar } from "../components/landing-page/navbar/Navbar";
import { CardRow } from "../components/landing-page/cards/CardDetails";
const HomePage = () => {
  return (
    <HoverProvider value={{ theme }}>
      <LandingPageLayout>
        <Navbar />
      </LandingPageLayout>
      <CardRow />
    </HoverProvider>
  );
};

export default HomePage;
