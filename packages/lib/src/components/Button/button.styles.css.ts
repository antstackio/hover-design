import { recipe } from "@vanilla-extract/recipes";

export const buttonStyles = recipe({
  base: {
    borderRadius: 4,
    color: "white",
    cursor: "pointer",
  },

  variants: {
    variant: {
      default: {
        background: "#1AB5EB",
        border: 0,
      },
      light: {
        background: "#F9F9F9",
        color: "#1AB5EB",
        border: "1px solid #DDD",
      },
      ghost: {
        background: "none",
        border: 0,
        color: "#1AB5EB",
      },
      hallow: {
        background: "none",
        border: "1px solid  #1AB5EB",
        color: "#1AB5EB",
      },
    },
    padding: {
      default: { padding: 0 },
      small: { padding: "8px 16px" },
      medium: { padding: "8px 16px" },
      large: { padding: 24 },
    },
    fontSize: {
      small: { fontSize: 14 },
      medium: { fontSize: 16 },
      large: { fontSize: 24 },
    },
    margin: {
      default: { margin: 0 },
      small: { margin: 12 },
      medium: { margin: 16 },
      large: { margin: 24 },
    },
    isBlock: {
      true: { width: "100%" },
      false: { width: "auto" },
    },
  },
});
