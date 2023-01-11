import React from "react";
import { themeVars } from "styles/themes.css";
import ColorPreviewTile from "./ColorPreviewTile";
import {
  colorsPreviewItem,
  colorsPreviewWrapper,
  colorName
} from "./colorsPreview.styles.css";

export const ColorsPreview: React.FC = () => {
  return (
    <div className={colorsPreviewWrapper}>
      <div className={colorsPreviewItem}>
        <h4 className={colorName}>brand-100</h4>{" "}
        <ColorPreviewTile color={themeVars.colors.brand[100]} />
      </div>
      <div className={colorsPreviewItem}>
        <h4 className={colorName}>brand-200</h4>{" "}
        <ColorPreviewTile color={themeVars.colors.brand[200]} />
      </div>
      <div className={colorsPreviewItem}>
        <h4 className={colorName}>brand-300</h4>{" "}
        <ColorPreviewTile color={themeVars.colors.brand[300]} />
      </div>
      <div className={colorsPreviewItem}>
        <h4 className={colorName}>typography-200</h4>{" "}
        <ColorPreviewTile color={themeVars.colors.typography[200]} />
      </div>
      <div className={colorsPreviewItem}>
        <h4 className={colorName}>typography-500</h4>{" "}
        <ColorPreviewTile color={themeVars.colors.typography[500]} />
      </div>
      <div className={colorsPreviewItem}>
        <h4 className={colorName}>typography-900</h4>{" "}
        <ColorPreviewTile color={themeVars.colors.typography[900]} />
      </div>
    </div>
  );
};
