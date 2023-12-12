import { globalFontFace, globalStyle, style } from "@vanilla-extract/css";

globalFontFace('niveau-grotesk', {
  src: 'url("https://use.typekit.net/af/b28757/00000000000000007735b52b/30/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i4&v=3") format("woff2"), url("https://use.typekit.net/af/b28757/00000000000000007735b52b/30/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i4&v=3") format("woff"), url("https://use.typekit.net/af/b28757/00000000000000007735b52b/30/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i4&v=3") format("opentype")',
  fontDisplay: 'auto',
  fontStyle: 'italic',
  fontWeight: 400,
  fontStretch: 'normal',
});

globalStyle("html, body", {
  margin: 0,
  padding: 0,
  boxSizing: 'border-box',
  backgroundColor: "#0A0C12",
  overflowX: 'hidden',
});



export const landingPage = style({
  width: "100%",
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

export const navbar = style({
  width: "100%",
  height: "80px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "0 20px",
  background: "#0A0C12",
  color: "white",
});

export const navigationContainer = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
});

export const logo = style({
  width: "106px",
  height: "auto",
  paddingLeft: "80px",
});

export const navLinks = style({
  display: "flex",
  justifyContent: "center",
  gap: "50px",
  alignItems: "center",
  fontSize: "16px",
  fontFamily: "niveau-grotesk",
  paddingRight: '140px',
  marginLeft: "auto", 
  "@media": {
    "screen and (max-width: 768px)": {
      flexDirection: "column",
      gap: "10px",
      marginLeft: "0",
    },
  },
});

export const searchContainer = style({
  display: "flex",
  alignItems: "center",
  position: "relative",
  marginRight: '100px',
  "@media": {
    "screen and (max-width: 768px)": {
      marginTop: "10px",
    },
  },
});

export const searchInput = style({
  padding: "9px",
  background: "rgba(168, 168, 168, 0.20)",
  borderRadius: "8px",
  width: "220px",
  marginRight: "20px",
  boxSizing: "border-box",
  color: "rgba(255, 255, 255, 0.50)",
  fontSize: "14px",
  fontFamily: "niveau-grotesk",
  fontWeight: '400px',
  lineHeight: "20px",
  border: "none",
  outline: "none",
  "@media": {
    "screen and (max-width: 768px)": {
      width: "100%", 
      marginRight: '0',
    },
  },
});

export const contentContainer = style({
  color: "white",
  paddingTop: "35px",
});

export const contentH1 = style({
  fontSize: "2rem",
  fontFamily: "niveau-grotesk",
});

export const contentPara = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#A8A8A8",
  fontFamily: "niveau-grotesk",
  fontSize: "18px",
  fontWeight: "400px",
});

export const exploreButton = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export const exploreButtonInner = style({
  color: "#FFF",
  fontFamily: "niveau-grotesk",
  fontSize: "18px",
  fontStyle: "normal",
  fontWeight: "500",
  lineHeight: "normal",
  backgroundColor: "#308BDE",
  border: "none",
  width: "100px",
  height: "50px",
  borderRadius: "5px",
  marginTop: "35px",
});








