import { themeVars } from "@site/src/styles";
import { breakpointMediaQueries } from "@site/src/styles/constants/breakpoints/breakpoints";
import { style } from "@vanilla-extract/css";

export const navbarStyles = style({
  padding: "12px 20px 12px 20px",
  "@media": {
    [breakpointMediaQueries.desktop]: {
      padding: "20px 80px 20px 80px"
    }
  }
});

export const navbarLinkStyles = style({
  color: themeVars.colors.white,
  textDecoration: "none",
  fontWeight: 500,
  lineHeight: "19px",

  ":hover": {
    color: themeVars.colors.white
  },
  ":link": {
    color: themeVars.colors.white
  },
  ":visited": {
    color: themeVars.colors.white
  }
});

export const hideLinkOnMobileStyle = style({
  display: "none",
  "@media": {
    [breakpointMediaQueries.tablet]: {
      display: "inline"
    }
  }
});
export const unstyledLinkStyles = style({
  textDecoration: "none",
  color: "inherit",
  lineHeight: 0,
  ":hover": {
    color: "inherit"
  },
  ":link": {
    color: "inherit"
  },
  ":visited": {
    color: "inherit"
  }
});
