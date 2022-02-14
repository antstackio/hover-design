import React from "react";
import { colorsPreviewTile } from "./colorsPreview.styles.css";

interface Props {
  color: string;
}

const ColorPreviewTile: React.FC<Props> = ({ color }) => {
  return (
    <div className={colorsPreviewTile} style={{ backgroundColor: color }} />
  );
};

export default ColorPreviewTile;
