import { Stepper, StepperStep } from "@hover-design/react";
import { StyleWrapper } from "components/appWraper/StyleWrapper";
import { BreakpointsExample } from "components/breakpointsExample/BreakpointsExample";
import { ColorsPreview } from "components/colorsPreview/colorsPreview";
import { Container } from "components/container/container";
import FontSizePreview from "components/fontSizePreview/FontSizePreview";
import { Footer } from "components/footer/footer";
import { Header } from "components/header/header";
import { PageMain } from "components/pageMain/PageMain";
import React, { useState } from "react";
import { fonts, fontSizes } from "styles/index.css";
import "styles/reset.css";
import { FaBtc, FaAngellist } from "react-icons/fa";
import { Divider } from "@hover-design/react";
import { Flex } from "@hover-design/react";

const App: React.FC = () => {
  return (
    <StyleWrapper>
      <Header />
      <PageMain>
        <Container>
          <Flex display="inline-flex" alignItems="center">
            <Divider color="red" />
          </Flex>
          <br />
          <br />
          <br />
          <div>
            <Stepper activeStep={0}>
              <StepperStep>
                <div>
                  <div>
                    <label>Label</label>
                  </div>
                  <div>
                    <label>desc</label>
                  </div>
                  <div>
                    <label>desc</label>
                  </div>
                  <div>
                    <label>desc</label>
                  </div>
                </div>
              </StepperStep>
              <div>First ele</div>
              <StepperStep></StepperStep>
              <StepperStep></StepperStep>
            </Stepper>
          </div>
          <br />
          <br />
          <br />
          <div>
            <Stepper activeStep={0} orientation="vertical">
              <StepperStep>
                <div>
                  <div>
                    <label>Label</label>
                  </div>
                  <div>
                    <label>desc</label>
                  </div>
                </div>
              </StepperStep>

              <StepperStep></StepperStep>
              <StepperStep></StepperStep>
            </Stepper>
          </div>

          <h1> 👋 &nbsp; Welcome to Hover Design System Example</h1>
          <h2>Colors</h2>
          <ColorsPreview />
          <h2>Font Sizes</h2>
          <FontSizePreview />
          <h2>Fonts</h2>
          <h3 style={{ fontFamily: fonts.primary, fontSize: fontSizes["4x"] }}>
            Poppins
          </h3>
          <h3
            style={{ fontFamily: fonts.secondary, fontSize: fontSizes["4x"] }}
          >
            Overpass
          </h3>
          <h2>Breakpoints</h2>
          <BreakpointsExample />
        </Container>
      </PageMain>
      <Footer />
    </StyleWrapper>
  );
};

export default App;
