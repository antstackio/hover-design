import React, { useContext } from "react";
import {
  headerContentStyle,
  headerLegend,
  headerStyle,
  themeToggleButton
} from "./header.styles.css";
import { ThemeContext } from "components/appWraper/StyleWrapper";
import { lightTheme } from "styles/themes.css";
const Header = () => {
  const { toggleTheme, theme } = useContext(ThemeContext);
  return (
    <header className={headerStyle}>
      <div className={headerContentStyle}>
        <div className={headerLegend}>Vanilla</div>
        <button onClick={toggleTheme} className={themeToggleButton}>
          {theme === lightTheme ? "🌙" : "☀️"}
        </button>
      </div>
    </header>
  );
};

export { Header };
