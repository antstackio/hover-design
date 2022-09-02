import { Button, Radio, RadioGroup } from "@hover-design/react";
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

const App: React.FC = () => {
  const [radioVal, setRadioVal] = useState("radio1");
  return (
    <StyleWrapper>
      <Header />
      <PageMain>
        <Container>
          <RadioGroup>
            <label>
              <Radio
                name="radios"
                value="radio1"
                checked={radioVal == "radio1"}
                onChange={(e) => setRadioVal(e.target.value)}
              ></Radio>
              radio1
            </label>
            <label>
              <Radio
                name="radios"
                value="radio2"
                checked={radioVal == "radio2"}
                onChange={(e) => setRadioVal(e.target.value)}
              ></Radio>
              radio2
            </label>
            <label>
              <Radio
                name="radios"
                value="radio3"
                checked={radioVal == "radio3"}
                isDisabled
                onChange={(e) => setRadioVal(e.target.value)}
              ></Radio>
              radio3
            </label>
          </RadioGroup>
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
