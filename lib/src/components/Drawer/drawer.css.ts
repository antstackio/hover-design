import { style } from "@vanilla-extract/css";

export const drawerContainer = style({});

export const drawer = style({
  background: "#fff",
  width: "30%",
  height: "100%",
  overflow: "auto",
  position: "fixed",
  boxShadow: `0 0 15px rgba(0, 0, 0, 0.5)`,
  transition: "transform 0.3s ease",
  zIndex: "1000",
});

export const backdrop = style({
  visibility: "hidden",
  opacity: 0,
  backgroundColor: `rgba(0, 0, 0, 0.5)`,
  transition: "opacity 0.3s ease, visibility 0.3s ease",
  width: "100%",
  height: "100%",
  top: "0",
  left: "0",
  position: "fixed",
  pointerEvents: "none",
  zIndex: "0",
});
