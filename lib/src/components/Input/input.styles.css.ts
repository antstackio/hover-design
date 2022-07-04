import { recipe } from "@vanilla-extract/recipes";
import { lightColors } from "src/styles/tokens";

export const InputStyles = recipe({
  base: {
    borderRadius: "10px",
    padding: "1em 0 1em 2em",
    border: `1px solid ${lightColors.brand[400]}`,
  },
  variants: {
    status: {
      success: {
        border: `1px solid ${lightColors.success}`,
      },
      warning: {
        border: `1px solid ${lightColors.warning}`,
      },
      error: {
        border: `1px solid ${lightColors.error}`,
      },
    },
  },
});
