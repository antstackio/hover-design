import { RecipeVariants } from "@vanilla-extract/recipes";
import { cardStyles } from "@hover-design/core";

export type CardProps = RecipeVariants<typeof cardStyles> &
  JSX.IntrinsicElements["div"];
