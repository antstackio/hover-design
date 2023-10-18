import { createTheme, style } from "@vanilla-extract/css";
import { TextAreaBorder } from "./textArea.styles.types";

export const [textAreaColorClass, textAreaColorVars]: TextAreaBorder =
  createTheme({
    textAreaBorderColor: {
      statusBorderColor: "#082D59"
    }
  });

export const textAreaStyle = style({
  border: `1px solid ${textAreaColorVars.textAreaBorderColor.statusBorderColor}`,
  borderRadius: "10px",
  padding: "20px"
});

export const textAreaResize = style({
  resize: "none"
});
