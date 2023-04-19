import { RecipeVariants } from "@vanilla-extract/recipes";
import { cardStyles } from "./card.styles.css";

export type CardProps = RecipeVariants<typeof cardStyles> &
  JSX.IntrinsicElements["div"];
