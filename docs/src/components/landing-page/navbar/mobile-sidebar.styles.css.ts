import { themeVars } from "@site/src/styles";
import { breakpointMediaQueries } from "@site/src/styles/constants/breakpoints/breakpoints";
import { style } from "@vanilla-extract/css";

export const mobileSidebarStyles = style({
  display: "block",
  position: "fixed",
  top: 0,
  left: 0,
  width: "100vw",
  height: "100vh",
  backgroundColor: "rgba(29, 29, 29, 0.4)",
  backdropFilter: " blur(8.34545px)",

  "@media": {
    [breakpointMediaQueries.tablet]: {
      display: "none"
    }
  }
});

export const mobileSidebarIconStyles = style({
  display: "block",
  "@media": {
    [breakpointMediaQueries.tablet]: {
      display: "none"
    }
  }
});

export const mobileSideBarLinkStyles = style({
  textAlign: "center"
});
