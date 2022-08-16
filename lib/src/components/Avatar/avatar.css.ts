import { recipe } from "@vanilla-extract/recipes";
import { style, createTheme } from "@vanilla-extract/css";
import { IAvatarProps } from "./avatar.types";

export const avatar = recipe({
  base: {
    backgroundColor: "white",
    color: "black",
    minWidth: "24px",
    height: " 24px",
    textAlign: "center",
    padding: "4px 8px",
    fontSize: "13px",
    fontWeight: "700"
  }
});
