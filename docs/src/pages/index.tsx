import React from "react";
import { HoverProvider } from "@hover-design/react";
import { theme } from "../styles/theme/theme";
import { primaryThemeClassName } from "../styles";
const HomePage = () => {
  return (
    <HoverProvider value={{ theme }}>
      <div className={primaryThemeClassName}>Hello World</div>
    </HoverProvider>
  );
};

export default HomePage;
