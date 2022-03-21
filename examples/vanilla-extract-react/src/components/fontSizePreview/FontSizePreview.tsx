import React from "react";
import { fontSizes } from "styles/index.css";

const FontSizePreview = () => {
  return (
    <div style={{ padding: "12px", margin: "0 30px" }}>
      <h4 style={{ fontSize: fontSizes["0x"] }}>0x</h4>
      <h4 style={{ fontSize: fontSizes["1x"] }}>1x</h4>
      <h4 style={{ fontSize: fontSizes["2x"] }}>2x</h4>
      <h4 style={{ fontSize: fontSizes["3x"] }}>3x</h4>
      <h4 style={{ fontSize: fontSizes["4x"] }}>4x</h4>
      <h4 style={{ fontSize: fontSizes["5x"] }}>5x</h4>
    </div>
  );
};

export default FontSizePreview;
