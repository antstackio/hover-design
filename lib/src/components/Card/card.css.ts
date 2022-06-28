import { recipe } from "@vanilla-extract/recipes";

export const cardStyles = recipe({
  base: {
    borderRadius: "4px",
  },

  variants: {
    variant: {
      plain: {},
      outline: {
        border: "1px solid grey",
        borderRadius: "8px",
      },
      shadow: {
        border: "1px solid #dddd",
        // filter: `drop-shadow(1px 2px 4px hsl(220deg 60% 50%))`,
        boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
      },
      solid: {
        color: "white",
        backgroundColor: " #1AB5EB",
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
  },
});
