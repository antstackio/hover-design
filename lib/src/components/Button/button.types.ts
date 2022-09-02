import { RecipeVariants } from "@vanilla-extract/recipes";
import { buttonStyles } from "./button.css";

export type ButtonProps = RecipeVariants<typeof buttonStyles> &
  JSX.IntrinsicElements["button"];
