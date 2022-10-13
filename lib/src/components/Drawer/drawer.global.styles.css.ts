import { globalStyle } from "@vanilla-extract/css";
import { backdrop, drawer, drawerContainer } from "./drawer.css";

globalStyle(`${drawer}.left`, {
  top: 0,
  left: 0,
  transform: "translateX(-100%)",
});

globalStyle(`${drawer}.right`, {
  top: 0,
  right: 0,
  transform: "translateX(100%)",
});

globalStyle(`${drawer}.top`, {
  top: 0,
  left: 0,
  right: 0,
  width: "100%",
  transform: "translateY(-100%)",
  height: "40%",
});

globalStyle(`${drawer}.bottom`, {
  bottom: 0,
  left: 0,
  right: 0,
  width: "100%",
  transform: "translateY(100%)",
  height: "40%",
});

globalStyle(`${drawerContainer}.open .left`, {
  transform: "translateX(0)",
});

globalStyle(`${drawerContainer}.open .right`, {
  transform: "translateX(0)",
});

globalStyle(`${drawerContainer}.open .bottom`, {
  transform: "translateY(0)",
});

globalStyle(`${drawerContainer}.open .top`, {
  transform: "translateY(0)",
});

globalStyle(`${drawerContainer}.open ${drawer}`, {
  boxShadow: `0 0 15px rgba(0, 0, 0, 0.5)`,
});

globalStyle(`${drawerContainer}.open ${backdrop}`, {
  visibility: "visible",
  opacity: 1,
  pointerEvents: "auto",
  zIndex: "999",
});
