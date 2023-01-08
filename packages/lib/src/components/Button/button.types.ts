import { RecipeVariants } from "@vanilla-extract/recipes";
import { buttonStyles } from "./button.styles.css";

export type ButtonProps = RecipeVariants<typeof buttonStyles> &
  JSX.IntrinsicElements["button"];
